import { elRewardPerDay } from 'core/data/StakingReward';
import { constants, utils } from 'ethers';
import { useEffect, useState } from 'react';
import calcExpectedReward from 'utils/calcExpectedReward';
import useV2StakedInfo from './useV2StakedInfo';

const useReward = () => {
  const userStakedInfo = useV2StakedInfo();
  const [reward, setReward] = useState({
    before: constants.Zero,
    after: constants.Zero,
  });

  useEffect(() => {
    if (userStakedInfo.userPrincipal.eq(constants.Zero)) return;
    const interval = setInterval(() => {
      setReward({
        before: reward.after,
        after: calcExpectedReward(
          userStakedInfo,
          utils.parseEther(elRewardPerDay),
        ),
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [reward.after, userStakedInfo]);

  useEffect(() => {
    setReward({
      before: userStakedInfo.userReward,
      after: userStakedInfo.userReward,
    });
  }, [userStakedInfo]);

  return reward;
};

export default useReward;
