import { useWeb3React } from '@web3-react/core';
import { pricesFetcher } from 'clients/Coingecko';
import { StakingInfoFetcher, tvlFetcher } from 'clients/StakingFetcher';
import TxContext from 'contexts/TxContext';
import envs from 'core/envs';
import { constants } from 'ethers';
import priceMiddleware from 'middleware/priceMiddleware';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import calcAPR from 'utils/calcAPR';
import { toPercent } from 'utils/formatters';
import useV2StakingPool from './useV2StakingPool';

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(0);
  const [apr, setApr] = useState('-');
  const { txStatus } = useContext(TxContext);
  const [isLoading, setIsLoading] = useState(true);
  const { contract: v2Contract } = useV2StakingPool();
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );

  const { data: v2PoolData } = useSWR([v2Contract, account, 'v2ContractPool'], {
    fetcher: StakingInfoFetcher(),
  });

  const { data: tvl } = useSWR(process.env.NEXT_PUBLIC_TVL_URL, tvlFetcher);

  useEffect(() => {
    if (!data || !v2PoolData || !tvl) return;
    (async () => {
      try {
        const calculatorAPR = calcAPR(
          v2PoolData.poolData.totalPrincipal,
          data?.elPrice,
          v2PoolData.poolData.rewardPerSecond,
        );
        setApr(
          calculatorAPR.eq(constants.MaxUint256)
            ? '-'
            : toPercent(calculatorAPR),
        ),
          setTotalBalance(tvl.elTvl);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [account, data, txStatus, v2PoolData, tvl]);

  return { totalBalance, apr, isLoading };
};

export default useTotalStakedBalance;
