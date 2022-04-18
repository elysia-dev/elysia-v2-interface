import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import envs from 'core/envs';
import { StakingPoolFactory } from '@elysia-dev/elyfi-v1-sdk';
import { StakingPool } from '@elysia-dev/elyfi-v1-sdk/dist/types/StakingPool';

const useV1StakingPool = (): {
  contract: StakingPool | undefined;
} => {
  const { library } = useWeb3React();
  const contract = useMemo(() => {
    if (!library) return;
    return StakingPoolFactory.connect(
      envs.staking.elStakingPoolAddress,
      library.getSigner(),
    );
  }, [library]);

  return { contract };
};

export default useV1StakingPool;
