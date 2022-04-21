import { BigNumber, constants, utils } from 'ethers';

/*
	return APR 10^25
*/
const calcAPR = (
  staked: BigNumber,
  stakedPrice: number,
  rewardPerSecond: BigNumber,
): BigNumber => {
  if (staked.isZero() || stakedPrice === 0) {
    // APR is infinite
    return constants.MaxUint256;
  }

  return rewardPerSecond
    .mul(365 * 24 * 3600 * 100)
    .mul(utils.parseEther(String(stakedPrice)))
    .mul(utils.parseUnits('1', 27))
    .div(staked.mul(utils.parseEther(String(stakedPrice))));
};

export default calcAPR;
