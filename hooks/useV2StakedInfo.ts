import { StakingPoolV2 } from '@elysia-dev/elyfi-v1-sdk';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { constants } from 'ethers';
import moment from 'moment';
import { useCallback, useContext, useEffect, useState } from 'react';
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

  const getUserInfo = useCallback(
    async (contract: StakingPoolV2, account: string) => {
      try {
        const data = await contract.getPoolData();
        const userReward = await contract.getUserReward(account);
        const userData = await contract.getUserData(account);

        setUserStakedInfo({
          totalPrincipal: data.totalPrincipal,
          userPrincipal: userData.userPrincipal,
          userReward: userReward,
          loadedAt: moment(),
        });
      } catch (error) {
        setUserStakedInfo({
          userPrincipal: constants.Zero,
          userReward: constants.Zero,
          totalPrincipal: constants.Zero,
          loadedAt: moment(),
        });
        // console.error(error);
      }
    },
    [],
  );
  useEffect(() => {
    if (contract && account) {
      getUserInfo(contract, account);
    }
  }, [account, contract]);

  useEffect(() => {
    if (contract && account && txStatus === TxStatus.CONFIRM) {
      getUserInfo(contract, account);
    }
  }, [account, contract, txStatus]);

  return userStakedInfo;
};

export default useV2StakedInfo;
