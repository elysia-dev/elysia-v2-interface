import { BigNumber, constants } from 'ethers';
import { useCallback, useContext, useState } from 'react';
import envs from 'core/envs';
import useERC20 from './useERC20';
import useStakingPool from './useStakingPool';
import TxContext from 'contexts/TxContext';
import buildEventEmitter from 'utils/buildEventEmitter';
import TransactionType from 'enums/TransactionType';
import { useWeb3React } from '@web3-react/core';
import ModalViewType from 'enums/ModalViewType';
import RecentActivityType from 'enums/RecentActivityType';
import useERC20Info from './useERC20Info';

const usePrevStaking = () => {
  const { contract } = useStakingPool();
  const { chainId, account } = useWeb3React();
  const { refetch } = useERC20Info(
    envs.token.elAddress,
    envs.staking.elStakingPoolAddress,
  );
  const { setTransaction } = useContext(TxContext);

  const withdraw = useCallback(
    (amount: BigNumber, round?: number) => {
      const emitter = buildEventEmitter(
        ModalViewType.StakingOrUnstakingModal,
        TransactionType.Unstake,
        JSON.stringify({
          version: 'v1',
          chainId,
          address: account,
          stakingType: 'EL',
        }),
      );

      emitter.clicked();

      if (!contract || !round) return;
      contract
        .withdraw(amount, round)
        .then((tx) => {
          setTransaction(
            tx,
            emitter,
            RecentActivityType.ELStakingWithdraw,
            () => {},
            () => {
              refetch();
            },
          );
        })
        .catch(() => {
          console.log('error');
        });
    },
    [account, chainId, contract, refetch, setTransaction],
  );

  const claim = useCallback(
    (round: number) => {
      const emitter = buildEventEmitter(
        ModalViewType.StakingOrUnstakingModal,
        TransactionType.Claim,
        JSON.stringify({
          version: 'v1',
          chainId,
          address: account,
          stakingType: 'EL',
        }),
      );

      emitter.clicked();

      if (!contract) return;
      contract
        .claim(round)
        .then((tx) => {
          setTransaction(
            tx,
            emitter,
            RecentActivityType.ELClaim,
            () => {},
            () => {
              refetch();
            },
          );
        })
        .catch(() => {
          console.log('error');
        });
    },
    [account, chainId, contract, refetch, setTransaction],
  );

  return { withdraw, claim };
};

export default usePrevStaking;
