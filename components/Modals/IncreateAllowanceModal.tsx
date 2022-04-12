import { useWeb3React } from '@web3-react/core';
import useStaking from 'hooks/useStaking';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './Modal.module.scss';

export enum PermissionType {
  Deposit = 'Deposit',
  Staking = 'Staking',
}

const IncreateAllowanceModal: React.FunctionComponent<{
  setTransactionWait: Dispatch<SetStateAction<boolean>>;
  // type: PermissionType;
  // txWait?: boolean;
}> = (props) => {
  const { library } = useWeb3React();
  const connected = window.sessionStorage.getItem('@connect');
  const txHash = window.localStorage.getItem('@permissionTxHash');
  const { t } = useTranslation();
  const { approve } = useStaking();

  // useEffect(() => {
  //   if (library && connected !== 'false' && txHash) {
  //     setStatus(TxStatus.PENDING);
  //     library
  //       .waitForTransaction(txHash)
  //       .then((res: any) => {
  //         if (res && res.status === 1) {
  //           setStatus(TxStatus.CONFIRM);
  //           initTransaction(TxStatus.CONFIRM, false);
  //         } else if (res && res.status !== 1) {
  //           setStatus(TxStatus.FAIL);
  //         }
  //       })
  //       .catch((e: any) => {
  //         console.error(e);
  //         initTransaction(TxStatus.FAIL, false);
  //       })
  //       .finally(() => {
  //         window.localStorage.removeItem('@permissionTxHash');
  //         setTimeout(() => {
  //           setStatus(TxStatus.IDLE);
  //         }, 5000);
  //       });
  //   }
  // }, [library]);

  return (
    <>
      <div className={styles.approve_wrapper}>
        <div>{t('modal.approve.0')}</div>
        <div>{t('modal.approve.1')}</div>
      </div>
      <div className={styles.approve_fee}>
        <Trans>{t('modal.approve.2')}</Trans>
      </div>
      <div className="wallet_select_modal__content__line" />
      <div
        className={styles.modal_button}
        onClick={() => {
          props.setTransactionWait(true);
          approve();
        }}>
        <p>{t('modal.approve.3')}</p>
      </div>
    </>
  );
};

export default IncreateAllowanceModal;