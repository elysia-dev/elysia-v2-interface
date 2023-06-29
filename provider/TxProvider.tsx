import { useContext, useEffect, useState } from 'react';
import { ContractTransaction } from 'ethers';
import TxStatus from 'enums/TxStatus';
import TxContext, { initialTxContext, ITxContext } from 'contexts/TxContext';
import RecentActivityType from 'enums/RecentActivityType';
import ethersJsErrors from 'utils/ethersJsErrors';
import buildEventEmitter from 'utils/buildEventEmitter';
import TransactionType from 'enums/TransactionType';
import Wallet from 'enums/Wallet';
import { setWalletConnect } from 'utils/connectWallet';
import { useWeb3React } from '@web3-react/core';
// import ElyfiVersions from 'src/enums/ElyfiVersions';

const clearLocalStorage = () => {
  window.localStorage.removeItem('@txHash');
  window.localStorage.removeItem('@txNonce');
  window.localStorage.removeItem('@txType');
  window.localStorage.removeItem('@txStatus');
};

const TxProvider: React.FunctionComponent = (props) => {
  const { provider, chainId, account } = useWeb3React();
  const [state, setState] = useState<ITxContext>(initialTxContext);

  const reset = () => {
    setState(initialTxContext);
    setWalletConnect(Wallet.None);
    clearLocalStorage();
  };

  const initTransaction = (txStatus: TxStatus, txWaiting: boolean) => {
    setState({ ...state, txStatus, txWaiting, error: '' });
  };

  const failTransaction = (
    emitter: any,
    onEvent: () => void,
    error: any,
    transaction: TransactionType,
  ) => {
    onEvent();
    emitter.canceled();

    const metamaskUserDeniedErrCode = 4001;

    const newEmitter = buildEventEmitter(
      'EncounteredAnError',
      transaction,
      JSON.stringify({
        version: 'v1',
        chainId,
        address: account,
        errorType: Number(error.code)
          ? error.message
          : ethersJsErrors.includes(error.code)
          ? error.code
          : JSON.parse(
              '{' +
                error.message.substring(
                  error.message.indexOf('"message"'),
                  error.message.lastIndexOf('}'),
                ),
            ).message,
      }),
    );
    if (error.code !== metamaskUserDeniedErrCode) {
      newEmitter.failed();
    }

    setState({
      ...state,
      txStatus: TxStatus.FAIL,
      txWaiting: false,
      error: Number(error.code)
        ? error.message
        : ethersJsErrors.includes(error.code)
        ? error.code
        : JSON.parse(
            '{' +
              error.message.substring(
                error.message.indexOf('"message"'),
                error.message.lastIndexOf('}'),
              ),
          ).message,
    });
    clearLocalStorage();
  };

  const setTransaction = (
    tx: ContractTransaction,
    emitter: any,
    type: RecentActivityType,
    pending: () => void,
    callback: () => void,
  ) => {
    emitter.created();
    window.localStorage.setItem('@txHash', tx.hash);
    window.localStorage.setItem('@txNonce', tx.nonce.toString());
    window.localStorage.setItem('@txType', type);
    window.localStorage.setItem('@txStatus', TxStatus.PENDING);

    setState({
      ...state,
      txStatus: TxStatus.PENDING,
      txWaiting: true,
      txType: type,
      txHash: tx.hash,
      txNonce: tx.nonce,
    });

    pending();

    tx.wait()
      .then(() => {
        setState({
          ...state,
          txStatus: TxStatus.CONFIRM,
          txWaiting: false,
          txType: RecentActivityType.Idle,
        });
        callback();
      })
      .catch((error) => {
        setState({
          ...state,
          txStatus: TxStatus.FAIL,
          txWaiting: false,
          txType: RecentActivityType.Idle,
          error,
        });
      })
      .finally(() => {
        clearLocalStorage();
        setTimeout(() => {
          setState({
            ...state,
            txStatus: TxStatus.IDLE,
            txHash: null,
            txWaiting: false,
            txType: RecentActivityType.Idle,
          });
        }, 5000);
      });
  };

  useEffect(() => {
    const connected = window.sessionStorage.getItem('@connect');
    const txHash = window.localStorage.getItem('@txHash');
    const txNonce = parseInt(
      window.localStorage.getItem('@txNonce') || '0',
      10,
    );
    const txType = window.localStorage.getItem('@txType') as RecentActivityType;

    if (provider && connected && txHash) {
      setState({
        ...state,
        txHash,
        txWaiting: true,
        txStatus: TxStatus.PENDING,
        txNonce,
        txType,
      });

      provider
        .waitForTransaction(txHash)
        .then((res: any) => {
          if (res && res.status === 1) {
            setState({
              ...state,
              txStatus: TxStatus.CONFIRM,
              txWaiting: false,
              txType,
            });
            initTransaction(TxStatus.CONFIRM, false);
          } else if (res && res.status !== 1) {
            setState({
              ...state,
              txStatus: TxStatus.FAIL,
              txWaiting: false,
              txType,
            });
          }
        })
        .catch((e: any) => {
          initTransaction(TxStatus.FAIL, false);
          console.error(`Transaction is falid`);
        })
        .finally(() => {
          clearLocalStorage();
          setTimeout(() => {
            setState({
              ...state,
              txStatus: TxStatus.IDLE,
              txHash: null,
              txWaiting: false,
            });
          }, 5000);
        });
    }
  }, [provider]);

  return (
    <TxContext.Provider
      value={{
        ...state,
        setTransaction,
        initTransaction,
        failTransaction,
        reset,
      }}>
      {props.children}
    </TxContext.Provider>
  );
};

export default TxProvider;
