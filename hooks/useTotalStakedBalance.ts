import { ERC20__factory } from '@elysia-dev/contract-typechain';
import { useWeb3React } from '@web3-react/core';
import envs from 'core/envs';
import { constants, providers } from 'ethers';
import { useEffect, useState } from 'react';
import useERC20 from './useERC20';

const useTotalStakedBalance = () => {
  const { account } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState(constants.Zero);
  const [isLoading, setIsLoading] = useState(true);
  const contract = useERC20(envs.token.elAddress);

  useEffect(() => {
    if (!contract) return;
    (async () => {
      try {
        const v1Balance = await contract.balanceOf(
          envs.staking.elStakingPoolAddress,
        );
        const v2Balance = await contract.balanceOf(
          envs.staking.elfyV2StakingPoolAddress,
        );
        setTotalBalance(v2Balance.add(v1Balance));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, [contract, account]);

  return { totalBalance, isLoading };
};

export default useTotalStakedBalance;
