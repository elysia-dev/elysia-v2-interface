import { BigNumber, constants } from 'ethers';
import { useCallback, useContext, useState } from 'react';
import envs from 'core/envs';
import useERC20 from './useERC20';
import TxContext from 'contexts/TxContext';
import buildEventEmitter from 'utils/buildEventEmitter';
import TransactionType from 'enums/TransactionType';
import { useWeb3React } from '@web3-react/core';
import ModalViewType from 'enums/ModalViewType';
import RecentActivityType from 'enums/RecentActivityType';
import useERC20Info from './useERC20Info';
import useV2StakingPool from './useV2StakingPool';

const useV2Staking = () => {
  const { contract } = useV2StakingPool();
  const { chainId, account } = useWeb3React();
  const { setTransaction, failTransaction } = useContext(TxContext);
  const elTokenContract = useERC20(envs.token.elAddress);

  const approve = useCallback(() => {
    const emitter = buildEventEmitter(
      ModalViewType.StakingOrUnstakingModal,
      TransactionType.Approve,
      JSON.stringify({
        version: 'v1',
        chainId,
        address: account,
        stakingType: 'EL',
      }),
    );

    emitter.clicked();

    if (!contract) return;
    elTokenContract
      .approve(contract.address, constants.MaxUint256)
      .then((tx) => {
        setTransaction(
          tx,
          emitter,
          RecentActivityType.Approve,
          () => {},
          () => {},
        );
      })
      .catch((error) => {
        failTransaction(emitter, () => {}, error, TransactionType.Approve);
      });
  }, [account, chainId, contract, elTokenContract, setTransaction]);

  const staking = useCallback(
    (amount: BigNumber) => {
      const emitter = buildEventEmitter(
        ModalViewType.StakingOrUnstakingModal,
        TransactionType.Stake,
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
        .stake(amount)
        .then((tx) => {
          setTransaction(
            tx,
            emitter,
            RecentActivityType.ELStake,
            () => {},
            () => {},
          );
        })
        .catch((error) => {
          failTransaction(emitter, () => {}, error, TransactionType.Stake);
        });
    },
    [account, chainId, contract, setTransaction],
  );

  const withdraw = useCallback(
    (amount: BigNumber) => {
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

      if (!contract) return;
      contract
        .withdraw(amount)
        .then((tx) => {
          setTransaction(
            tx,
            emitter,
            RecentActivityType.ELStakingWithdraw,
            () => {},
            () => {},
          );
        })
        .catch((error) => {
          failTransaction(emitter, () => {}, error, TransactionType.Unstake);
        });
    },
    [account, chainId, contract, setTransaction],
  );

  const claim = useCallback(() => {
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
      .claim()
      .then((tx) => {
        setTransaction(
          tx,
          emitter,
          RecentActivityType.ELClaim,
          () => {},
          () => {},
        );
      })
      .catch((error) => {
        failTransaction(emitter, () => {}, error, TransactionType.Claim);
      });
  }, [account, chainId, contract, setTransaction]);

  return { approve, staking, withdraw, claim };
};

export default useV2Staking;
