import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import envs from 'core/envs';
import {
  StakingPool,
  StakingPool__factory,
} from '@elysia-dev/contract-typechain';

const useStakingPool = (): {
  contract: StakingPool | undefined;
} => {
  const { library } = useWeb3React();
  const contract = useMemo(() => {
    if (!library) return;
    return StakingPool__factory.connect(
      envs.staking.elStakingPoolAddress,
      library.getSigner(),
    );
  }, [library]);

  return { contract };
};

export default useStakingPool;
