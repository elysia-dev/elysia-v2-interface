import { useCallback, useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import { BigNumber, constants } from 'ethers';
import stakingRoundDate from 'utils/stakingRoundDate';
import useV1StakingPool from './useV1StakingPool';
import { StakingPool } from '@elysia-dev/elyfi-v1-sdk/dist/types/StakingPool';

const useV1StakingInfo = () => {
  const { account } = useWeb3React();
  const { contract } = useV1StakingPool();
  const { txStatus } = useContext(TxContext);
  const [userInfo, setUserInfo] = useState<
    { userReward: BigNumber; userPrincipal: BigNumber }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDatas = useCallback(
    async (contract: StakingPool, account: string) => {
      try {
        const result = await Promise.all(
          stakingRoundDate.map(async (date, idx) => {
            const userReward = await contract?.getUserReward(account, idx + 1);
            const userData = await contract?.getUserData(idx + 1, account);

            return { userReward, userPrincipal: userData.userPrincipal };
          }),
        );
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    [contract, account, txStatus],
  );

  useEffect(() => {
    if (contract && account) {
      (async () => {
        try {
          const res = await getDatas(contract, account);
          const resFilter = res?.filter((value) => {
            return (
              value.userReward.gt(constants.Zero) ||
              value.userPrincipal.gt(constants.Zero)
            );
          });
          setUserInfo(resFilter?.length === 0 ? [] : res || []);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      })();
    }
  }, [contract, account, txStatus]);

  useEffect(() => {
    if (!account) {
      setUserInfo([]);
      setIsLoading(true);
    }
  }, [account]);

  return { userInfo, isLoading };
};

export default useV1StakingInfo;
