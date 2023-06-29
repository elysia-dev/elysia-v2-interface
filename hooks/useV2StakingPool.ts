import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import envs from 'core/envs';

import { StakingPoolV2, StakingPoolV2factory } from '@elysia-dev/elyfi-v1-sdk';
import { providers } from 'ethers';

const useV2StakingPool = (): {
  contract: StakingPoolV2 | undefined;
} => {
  const { provider } = useWeb3React();
  const contract = useMemo(() => {
    if (!provider) {
      return StakingPoolV2factory.connect(
        envs.staking.elStakingV2PoolAddress,
        new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC),
      );
    }
    return StakingPoolV2factory.connect(
      envs.staking.elStakingV2PoolAddress,
      provider.getSigner(),
    );
  }, [provider]);

  return { contract };
};

export default useV2StakingPool;
