import { useWeb3React } from '@web3-react/core';
import { pricesFetcher } from 'clients/Coingecko';
import TxContext from 'contexts/TxContext';
import envs from 'core/envs';
import { constants, utils } from 'ethers';
import priceMiddleware from 'middleware/priceMiddleware';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import calcAPR from 'utils/calcAPR';
import { toPercent } from 'utils/formatters';
import useERC20 from './useERC20';
import useV2StakingPool from './useV2StakingPool';

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(constants.Zero);
  const [apr, setApr] = useState('-');
  const { txStatus } = useContext(TxContext);
  const [isLoading, setIsLoading] = useState(true);
  const contract = useERC20(envs.token.elAddress);
  const { contract: v2Contract } = useV2StakingPool();
  const { data } = useSWR(
    envs.externalApiEndpoint.coingackoURL,
    pricesFetcher,
    {
      use: [priceMiddleware],
    },
  );

  useEffect(() => {
    if (!contract || !v2Contract || !data) return;
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
          data?.elPrice,
        );
        setApr(
          calculatorAPR.eq(constants.MaxUint256)
            ? '-'
            : toPercent(calculatorAPR),
        ),
          setTotalBalance(v2Balance.totalPrincipal.add(v1Balance));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [contract, account, v2Contract, data, txStatus]);

  return { totalBalance, apr, isLoading };
};

export default useTotalStakedBalance;
