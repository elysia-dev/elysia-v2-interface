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
        <div>
          해당 머니풀에 예치하기 위해서는 연결된 지갑에 해당 앱이 접근할 수
          있도록 접근 권한을 승인해야 합니다.
        </div>
        <div>
          최초 예치 시에만 승인이 필요하며, 승인이 성공적으로 완료될 경우,
          이후에는 권한 승인 없이 예치할 수 있습니다.
        </div>
      </div>
      <div className={styles.approve_fee}>
        * 접근 권한 승인 또한 네트워크를 이용한 트랜잭션이기 때문에 가스비가
        발생합니다.
      </div>
      <div className="wallet_select_modal__content__line" />
      <div
        className={styles.modal_button}
        onClick={() => {
          props.setTransactionWait(true);
          approve();
        }}>
        <p>승인하기</p>
      </div>
    </>
  );
};

export default IncreateAllowanceModal;
