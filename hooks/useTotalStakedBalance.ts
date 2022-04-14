import { ERC20__factory } from '@elysia-dev/contract-typechain';
import { useWeb3React } from '@web3-react/core';
import envs from 'core/envs';
import { constants, providers, utils } from 'ethers';
import { useEffect, useState } from 'react';
import calcAPR from 'utils/calcAPR';
import useERC20 from './useERC20';
import useStakingPool from './useStakingPool';

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(constants.Zero);
  const [isLoading, setIsLoading] = useState(true);
  const contract = useERC20(envs.token.elAddress);
  const { contract: v2Contract } = useStakingPool();

  useEffect(() => {
    if (!contract || !v2Contract) return;
    (async () => {
      try {
        const v1Balance = await contract.balanceOf(
          envs.staking.elStakingPoolAddress,
        );
        const v2Balance = await v2Contract.getPoolData();

        // calcAPR()

        setTotalBalance(v2Balance.totalPrincipal.add(v1Balance));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, [contract, account, v2Contract]);

  return { totalBalance, isLoading };
};

export default useTotalStakedBalance;
