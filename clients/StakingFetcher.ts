import { ERC20, StakingPoolV2 } from '@elysia-dev/elyfi-v1-sdk';
import axios from 'axios';

export const tvlFetcher = (
  url: string,
): Promise<{
  tvlExceptElTvl: number;
  elTvl: number;
}> => axios.get(url).then((res) => res.data);

export const StakingInfoFetcher =
  (): any =>
  async (...args: [StakingPoolV2, string]) => {
    const [...params] = args;
    if (!params[0]) return undefined;

    return {
      poolData: await params[0].getPoolData(),
      userReward: !params[1]
        ? undefined
        : await params[0].getUserReward(params[1]),
      userData: !params[1] ? undefined : await params[0].getUserData(params[1]),
    };
  };

export const tokenInfoFetcher =
  (): any =>
  async (args: {
    contract: ERC20;
    account: string;
    targetAddress: string;
    key: string;
  }) => {
    if (!args.contract || !args.account) return undefined;

    return {
      balance: await args.contract.balanceOf(args.account),
      allowance: await args.contract.allowance(
        args.account,
        args.targetAddress,
      ),
    };
  };
