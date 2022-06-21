import { ERC20Factory } from '@elysia-dev/elyfi-v1-sdk';
import { renderHook } from '@testing-library/react-hooks';
import { providers } from 'ethers';
import useV2StakingPool from 'hooks/useV2StakingPool';
import envs from 'envs';
import React from 'react';

describe('useV2StakingPool', () => {
  test('check contract', async () => {
    React.useMemo = jest.fn().mockImplementationOnce(() => {
      return ERC20Factory.connect(
        envs.staking.elStakingV2PoolAddress,
        new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC) as any,
      );
    });

    const { result } = renderHook(() => useV2StakingPool());

    expect(result.current.contract?.address).toEqual(
      '0x2776a888F6eC5513d84cb0e1aA3396B8750170A8',
    );
  });
});
