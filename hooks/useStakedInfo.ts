import { StakingPool } from '@elysia-dev/contract-typechain';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { constants } from 'ethers';
import moment from 'moment';
import { useCallback, useContext, useEffect, useState } from 'react';
import useStakingPool from './useStakingPool';

const useStakedInfo = () => {
  const { contract } = useStakingPool();
  const { account } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const [userStakedInfo, setUserStakedInfo] = useState({
    userPrincipal: constants.Zero,
    userReward: constants.Zero,
    totalPrincipal: constants.Zero,
    loadedAt: moment(),
  });

  const getUserInfo = useCallback(
    async (contract: StakingPool, account: string) => {
      const data = await contract.getPoolData(7);
      const userData = await contract.getUserData(7, account);
      const userReward = await contract.getUserReward(account, 7);
      setUserStakedInfo({
        totalPrincipal: data.totalPrincipal,
        userPrincipal: userData.userPrincipal,
        userReward: userReward,
        loadedAt: moment(),
      });
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

export default useStakedInfo;
