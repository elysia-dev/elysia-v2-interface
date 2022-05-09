import { StakingPoolV2factory } from '@elysia-dev/elyfi-v1-sdk';
import { act, renderHook } from '@testing-library/react-hooks';
import { constants, providers } from 'ethers';
import useV2StakedInfo from 'hooks/useV2StakedInfo';
import React from 'react';

jest.mock('hooks/useV2StakingPool', () => {
  const { StakingPoolV2factory } = require('@elysia-dev/elyfi-v1-sdk');
  const { providers } = require('ethers');
  return () =>
    StakingPoolV2factory.connect(
      '0x3f0c3e32bb166901acd0abc9452a3f0c5b8b2c9d',
      new providers.JsonRpcProvider(
        'https://eth-mainnet.alchemyapi.io/v2/aqm3Z2P6_2fctCSsHEBqo9Csz-ydQH_0',
      ) as any,
    );
});

jest.mock('@web3-react/core', () => {
  return {
    ...jest.requireActual('@web3-react/core'),
    useWeb3React: () => {
      return {
        account: '0x189027e3C77b3a92fd01bF7CC4E6a86E77F5034E',
      };
    },
  };
});

describe('useV2StakedInfo', () => {
  test('get user data', async () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    const { result } = renderHook(() => useV2StakedInfo());

    await act(async () => {
      const contract = StakingPoolV2factory.connect(
        '0x3f0c3e32bb166901acd0abc9452a3f0c5b8b2c9d',
        new providers.JsonRpcProvider(
          'https://eth-mainnet.alchemyapi.io/v2/aqm3Z2P6_2fctCSsHEBqo9Csz-ydQH_0',
        ) as any,
      );
      await result.current.getUserInfo(
        contract,
        '0x189027e3C77b3a92fd01bF7CC4E6a86E77F5034E',
      );
    });

    expect(result.current.userStakedInfo.userPrincipal).toEqual(constants.Zero);
    expect(result.current.userStakedInfo.userReward).toEqual(constants.Zero);
  });
});
