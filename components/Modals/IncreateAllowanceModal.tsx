import { useWeb3React } from '@web3-react/core';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import useV2Staking from 'hooks/useV2Staking';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';
import { googleGAEvent } from 'utils/gaEvent';
import ModalButton from './ModalButton';

export enum PermissionType {
  Deposit = 'Deposit',
  Staking = 'Staking',
}

const Container = styled.section`
  margin: 25px 25px 10px 25px;
`;
const ApproveContent = styled.div`
  border: 1px solid #505050;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  > p {
    color: #ffffff;
    font-size: 1.2rem;
    text-align: center;
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;
const ApproveFee = styled.p`
  width: 465px;
  @media (max-width: 500px) {
    width: 90%;
  }
  margin: auto;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 25px;
`;

const IncreateAllowanceModal: React.FunctionComponent<{
  setTransactionWait: Dispatch<SetStateAction<boolean>>;
  // type: PermissionType;
  // txWait?: boolean;
}> = (props) => {
  const { account } = useWeb3React();
  const connected = window.sessionStorage.getItem('@connect');
  const txHash = window.localStorage.getItem('@permissionTxHash');
  const { t } = useTranslation();
  const { approve } = useV2Staking();

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
    <Container>
      <ApproveContent>
        <p>{t('modal.approve.0')}</p>
        <p>{t('modal.approve.1')}</p>
      </ApproveContent>
      <ApproveFee>
        <Trans>{t('modal.approve.2')}</Trans>
      </ApproveFee>
      <ModalButton
        title={t('modal.approve.3')}
        onClick={() => {
          props.setTransactionWait(true);
          googleGAEvent(
            GoogleGAAction.GovApprove,
            GoogleGACategory.Governance,
            account || '',
          );
          approve();
        }}
      />
    </Container>
  );
};

export default IncreateAllowanceModal;
