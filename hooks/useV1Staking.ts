import { BigNumber } from 'ethers';
import { useCallback, useContext } from 'react';
import envs from 'core/envs';
import TxContext from 'contexts/TxContext';
import buildEventEmitter from 'utils/buildEventEmitter';
import TransactionType from 'enums/TransactionType';
import { useWeb3React } from '@web3-react/core';
import ModalViewType from 'enums/ModalViewType';
import RecentActivityType from 'enums/RecentActivityType';
import useV1StakingPool from './useV1StakingPool';

const useV1Staking = () => {
  const { contract } = useV1StakingPool();
  const { chainId, account } = useWeb3React();
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
            () => {},
          );
        })
        .catch(() => {
          console.log('error');
        });
    },
    [account, chainId, contract, setTransaction],
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
            () => {},
          );
        })
        .catch(() => {
          console.log('error');
        });
    },
    [account, chainId, contract, setTransaction],
  );

  return { withdraw, claim };
};

export default useV1Staking;
