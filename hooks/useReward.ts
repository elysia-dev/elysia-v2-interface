import { constants, utils } from 'ethers';
import { useEffect, useState } from 'react';
import calcExpectedReward from 'utils/calcExpectedReward';
import useStakedInfo from './useStakedInfo';

const useReward = () => {
  const userStakedInfo = useStakedInfo();
  const [reward, setReward] = useState({
    before: constants.Zero,
    after: constants.Zero,
  });

  useEffect(() => {
    if (userStakedInfo.userPrincipal.eq(constants.Zero)) return;
    const interval = setInterval(() => {
      setReward({
        before: reward.after,
        after: calcExpectedReward(userStakedInfo, utils.parseEther('25000')),
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
