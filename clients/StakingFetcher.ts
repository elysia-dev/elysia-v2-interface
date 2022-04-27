import { ERC20, StakingPoolV2 } from '@elysia-dev/elyfi-v1-sdk';

export const StakingInfoFetcher =
  (): any =>
  async (...args: [StakingPoolV2, string]) => {
    const [...params] = args;
    if (!params[0] || !params[1]) return undefined;

    return {
      poolData: await params[0].getPoolData(),
      userReward: await params[0].getUserReward(params[1]),
      userData: await params[0].getUserData(params[1]),
    };
  };

export const tokenInfoFetcher =
  (): any =>
  async (...args: [ERC20, string, string]) => {
    const [...params] = args;
    if (!params[0] || !params[1]) return undefined;

    return {
      balance: await params[0].balanceOf(params[1]),
      allowance: await params[0].allowance(params[1], params[2]),
    };
  };
