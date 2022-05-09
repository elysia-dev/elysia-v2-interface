import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import useERC20 from 'hooks/useERC20';
import { ERC20Factory } from '@elysia-dev/elyfi-v1-sdk';
import { providers } from 'ethers';

describe('useERC20', () => {
  it('contract address test and check network', async () => {
    React.useMemo = jest.fn().mockImplementationOnce(() => {
      return ERC20Factory.connect(
        '0x4da34f8264cb33a5c9f17081b9ef5ff6091116f4',
        new providers.JsonRpcProvider(
          'https://eth-mainnet.alchemyapi.io/v2/aqm3Z2P6_2fctCSsHEBqo9Csz-ydQH_0',
        ) as any,
      );
    });

    const { result } = renderHook(() =>
      useERC20('0x4da34f8264cb33a5c9f17081b9ef5ff6091116f4'),
    );

    let chainId = 0;

    await act(async () => {
      const network = await result.current.provider.getNetwork();
      chainId = network.chainId;
    });

    expect(chainId).toEqual(1);
    expect(result.current.address).toEqual(
      '0x4da34f8264cb33a5c9f17081b9ef5ff6091116f4',
    );
  });
});
