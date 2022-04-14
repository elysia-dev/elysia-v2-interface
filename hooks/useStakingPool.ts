import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import envs from 'core/envs';

import { StakingPoolV2, StakingPoolV2factory } from '@elysia-dev/elyfi-v1-sdk';

const useStakingPool = (): {
  contract: StakingPoolV2 | undefined;
} => {
  const { library } = useWeb3React();
  const contract = useMemo(() => {
    if (!library) return;
    return StakingPoolV2factory.connect(
      envs.staking.elStakingV2PoolAddress,
      library.getSigner(),
    );
  }, [library]);

  return { contract };
};

export default useStakingPool;
