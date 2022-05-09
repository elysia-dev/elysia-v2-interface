/* eslint-disable react-hooks/exhaustive-deps */
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { constants } from 'ethers';
import moment from 'moment';
import { useCallback, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { StakingInfoFetcher } from 'clients/StakingFetcher';
import useV2StakingPool from './useV2StakingPool';

const useV2StakedInfo = () => {
  const { contract } = useV2StakingPool();
  const { account } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const [userStakedInfo, setUserStakedInfo] = useState({
    userPrincipal: constants.Zero,
    userReward: constants.Zero,
    totalPrincipal: constants.Zero,
    loadedAt: moment(),
  });

  const { data: stakingInfo, mutate } = useSWR(
    [contract, account, 'v2ContractPool'],
    {
      fetcher: StakingInfoFetcher(),
    },
  );

  const getUserInfo = useCallback(() => {
    if (!account || !contract || !stakingInfo) return;

    setUserStakedInfo({
      totalPrincipal: stakingInfo.poolData.totalPrincipal,
      userPrincipal: stakingInfo.userData.userPrincipal,
      userReward: stakingInfo.userReward,
      loadedAt: moment(),
    });
  }, [stakingInfo, contract, account]);

  useEffect(() => {
    getUserInfo();
  }, [account, contract, stakingInfo]);

  useEffect(() => {
    if (contract && account && txStatus === TxStatus.CONFIRM) {
      mutate();
    }
  }, [account, contract, txStatus, stakingInfo]);

  return userStakedInfo;
};

export default useV2StakedInfo;
