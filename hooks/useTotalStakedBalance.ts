import { ERC20__factory } from '@elysia-dev/contract-typechain';
import { useWeb3React } from '@web3-react/core';
import { pricesFetcher } from 'clients/Coingecko';
import envs from 'core/envs';
import { BigNumber, constants, providers, utils } from 'ethers';
import priceMiddleware from 'middleware/priceMiddleware';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import calcAPR from 'utils/calcAPR';
import { toPercent } from 'utils/formatters';
import useERC20 from './useERC20';
import useStakingPool from './useStakingPool';

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(constants.Zero);
  const [apr, setApr] = useState('-');
  const [isLoading, setIsLoading] = useState(true);
  const contract = useERC20(envs.token.elAddress);
  const { contract: v2Contract } = useStakingPool();
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

        setApr(
          toPercent(
            calcAPR(
              v2Balance.totalPrincipal,
              data?.elPrice,
              utils.parseEther('330731.57142857'),
              data?.elPrice,
            ),
          ),
        ),
          setTotalBalance(v2Balance.totalPrincipal.add(v1Balance));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [contract, account, v2Contract, data]);

  return { totalBalance, apr, isLoading };
};

export default useTotalStakedBalance;
