import { BigNumber } from 'ethers';
import moment, { Moment } from 'moment';

const calcExpectedReward = (
  stakedInfo: {
    userPrincipal: BigNumber;
    userReward: BigNumber;
    totalPrincipal: BigNumber;
    loadedAt: Moment;
  },
  minedPerDay: BigNumber,
): BigNumber => {
  const current = moment();

  // if (
  //   round.totalPrincipal.isZero() ||
  //   round.accountPrincipal.isZero() ||
  //   current.diff(round.startedAt) < 0 ||
  //   current.diff(round.endedAt) > 0
  // ) {
  //   return round.accountReward;
  // }

  return stakedInfo.userReward.add(
    minedPerDay
      .div(24 * 3600)
      .mul(stakedInfo.userPrincipal)
      .div(stakedInfo.totalPrincipal)
      .mul(current.diff(stakedInfo.loadedAt, 'seconds')),
  );
};

export default calcExpectedReward;
