import { useWeb3React } from '@web3-react/core';
import { StakingInfoFetcher } from 'clients/StakingFetcher';
import { constants } from 'ethers';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import calcExpectedReward from 'utils/calcExpectedReward';
import useV2StakedInfo from './useV2StakedInfo';
import useV2StakingPool from './useV2StakingPool';

const useReward = () => {
  const userStakedInfo = useV2StakedInfo();
  const { account } = useWeb3React();
  const { contract: v2Contract } = useV2StakingPool();
  const [reward, setReward] = useState({
    before: constants.Zero,
    after: constants.Zero,
  });

  const { data } = useSWR([v2Contract, account, 'v2ContractPool'], {
    fetcher: StakingInfoFetcher(),
  });

  useEffect(() => {
    if (userStakedInfo.userPrincipal.eq(constants.Zero) || !data) return;

    const interval = setInterval(() => {
      setReward({
        before: reward.after,
        after: calcExpectedReward(
          userStakedInfo,
          data.poolData.rewardPerSecond,
        ),
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [reward.after, userStakedInfo, data]);

  useEffect(() => {
    setReward({
      before: userStakedInfo.userReward,
      after: userStakedInfo.userReward,
    });
  }, [userStakedInfo]);

  return reward;
};

export default useReward;
