import { renderHook } from '@testing-library/react-hooks';
import { BigNumber, constants } from 'ethers';
import useReward from 'hooks/useReward';
import React from 'react';

jest.mock('hooks/useV2StakedInfo', () => {
  const { constants } = require('ethers');
  const moment = require('moment');

  return () => ({
    userStakedInfo: {
      userPrincipal: constants.One,
      userReward: constants.One,
      totalPrincipal: constants.One,
      loadedAt: moment(),
    },
  });
});

describe('useReward', () => {
  test('setReward', async () => {
    const setStateMock = jest.fn();
    const useRewardMock: any = (state: {
      before: BigNumber;
      after: BigNumber;
    }) => [state, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useRewardMock);

    const { result } = renderHook(() => useReward());

    expect(result.current.after).toEqual(constants.Zero);
    expect(result.current.before).toEqual(constants.Zero);
  });
});
