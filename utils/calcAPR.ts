import { BigNumber, constants, utils } from 'ethers';

/*
	return APR 10^25
*/
const calcAPR = (
  staked: BigNumber,
  stakedPrice: number,
  minedPerDay: BigNumber,
  minedPrice: number,
): BigNumber => {
  if (staked.isZero() || stakedPrice === 0) {
    // APR is infinite
    return constants.MaxUint256;
  }

  return minedPerDay
    .mul(365)
    .mul(utils.parseEther(minedPrice.toFixed(4)))
    .mul(utils.parseUnits('1', 27))
    .div(staked.mul(utils.parseEther(stakedPrice.toFixed(4))));
};

export default calcAPR;
