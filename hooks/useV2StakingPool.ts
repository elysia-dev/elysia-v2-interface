import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import envs from 'core/envs';

import { StakingPoolV2, StakingPoolV2factory } from '@elysia-dev/elyfi-v1-sdk';
import { providers } from 'ethers';

const useV2StakingPool = (): {
  contract: StakingPoolV2 | undefined;
} => {
  const { library } = useWeb3React();
  const contract = useMemo(() => {
    return StakingPoolV2factory.connect(
      envs.staking.elStakingV2PoolAddress,
      library
        ? library.getSigner()
        : new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC),
    );
  }, [library]);

  return { contract };
};

export default useV2StakingPool;
