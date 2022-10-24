import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { pricesFetcher } from 'clients/Coingecko';
import TxContext from 'contexts/TxContext';
import envs from 'core/envs';
import { constants, utils } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import priceMiddleware from 'middleware/priceMiddleware';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import calcAPR from 'utils/calcAPR';
import { toPercent } from 'utils/formatters';
import useERC20 from './useERC20';
import useV2StakingPool from './useV2StakingPool';

export const tvlFetcher = (
  url: string,
): Promise<{
  tvlExceptElTvl: number;
  elTvl: number;
}> => axios.get(url).then((res) => res.data);

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(constants.Zero);
  const [tvl, setTvl] = useState(0);
  const [apr, setApr] = useState('-');
  const { txStatus } = useContext(TxContext);
  const [isLoading, setIsLoading] = useState(true);
  const contract = useERC20(envs.token.elAddress);
  const { contract: v2Contract } = useV2StakingPool();
  const { data: tvlData } = useSWR(process.env.NEXT_PUBLIC_TVL_URL, tvlFetcher);
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );
  const ELYSIA_MOBILE_USD_VALUE = 5509914;

  useEffect(() => {
    if (!contract || !v2Contract || !data || !tvlData) return;
    (async () => {
      try {
        const v1Balance = await contract.balanceOf(
          envs.staking.elStakingPoolAddress,
        );
        const v2Balance = await v2Contract.getPoolData();

        const calculatorAPR = calcAPR(
          v2Balance.totalPrincipal,
          data?.elPrice,
          utils.parseEther('330731.57142857'),
        );
        setApr(
          calculatorAPR.eq(constants.MaxUint256)
            ? '-'
            : toPercent(calculatorAPR),
        );
        setTvl(
          tvlData.elTvl + tvlData.tvlExceptElTvl + ELYSIA_MOBILE_USD_VALUE,
        );
        setTotalBalance(v2Balance.totalPrincipal.add(v1Balance));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [contract, account, v2Contract, data, txStatus]);

  return { totalBalance, apr, isLoading, tvl };
};

export default useTotalStakedBalance;
