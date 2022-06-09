import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import useERC20 from 'hooks/useERC20';
import { ERC20Factory } from '@elysia-dev/elyfi-v1-sdk';
import { providers } from 'ethers';
import envs from 'core/envs';

describe('useERC20', () => {
  it('contract address test and check network', async () => {
    React.useMemo = jest.fn().mockImplementationOnce(() => {
      return ERC20Factory.connect(
        envs.token.elAddress,
        new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC) as any,
      );
    });

    const { result } = renderHook(() => useERC20(envs.token.elAddress));

    let chainId = 0;

    await act(async () => {
      const network = await result.current.provider.getNetwork();
      chainId = network.chainId;
    });

    expect(chainId).toEqual(1337);
    expect(result.current.address).toEqual(envs.token.elAddress);
  });
});
