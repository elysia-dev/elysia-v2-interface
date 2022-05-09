import { act, renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import useERC20Info from 'hooks/useERC20Info';

jest.mock('hooks/useERC20', () => {
  const { ERC20Factory } = require('@elysia-dev/elyfi-v1-sdk');
  const { providers } = require('ethers');
  const React = require('react');
  return () =>
    ERC20Factory.connect(
      '0x2781246fe707bb15cee3e5ea354e2154a2877b16',
      new providers.JsonRpcProvider(
        'https://eth-mainnet.alchemyapi.io/v2/aqm3Z2P6_2fctCSsHEBqo9Csz-ydQH_0',
      ) as any,
    );
});

describe('useERC20Info', () => {
  it('check balanceOf and network', async () => {
    let chainId = 0;
    let balalnce;

    const { result } = renderHook(() =>
      useERC20Info(
        '0x2781246fe707bb15cee3e5ea354e2154a2877b16',
        '0x3f0c3e32bb166901acd0abc9452a3f0c5b8b2c9d',
        false,
      ),
    );

    await act(async () => {
      const network = await result.current.contract.provider.getNetwork();
      chainId = network.chainId;
      balalnce = (
        await result.current.contract.balanceOf(
          '0x3f0c3e32bb166901acd0abc9452a3f0c5b8b2c9d',
        )
      )._isBigNumber;
      result.current.refetch();
    });

    expect(result.current.contract.address).toEqual(
      '0x2781246fe707bb15cee3e5ea354e2154a2877b16',
    );
    expect(chainId).toEqual(1);
    expect(balalnce).toEqual(true);
  });
});
