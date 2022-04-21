import { ERC20, StakingPoolV2 } from '@elysia-dev/elyfi-v1-sdk';

export const StakingInfoFetcher =
  (): any =>
  (...args: [StakingPoolV2, string]) => {
    const [...params] = args;
    if (!params[0] || !params[1]) return undefined;

    return Promise.all([
      params[0].getPoolData(),
      params[0].getUserReward(params[1]),
      params[0].getUserData(params[1]),
    ]);
  };

export const tokenInfoFetcher =
  (): any =>
  (...args: [ERC20, string, string]) => {
    const [...params] = args;
    if (!params[0] || !params[1]) return undefined;

    return Promise.all([
      params[0].balanceOf(params[1]),
      params[0].allowance(params[1], params[2]),
    ]);
  };
