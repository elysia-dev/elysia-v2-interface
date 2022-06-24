import ClaimModal from 'components/Modals/ClaimModal';
import ConnectWalletGuide from 'components/Modals/ConnectWalletGuide';
import ModalLayout from 'components/Modals/ModalLayout';
import SelectWalletModal from 'components/Modals/SelectWalletModal';
import StakingModal from 'components/Modals/StakingModal';
import TransactionConfirmModal from 'components/Modals/TransactionConfirmModal';
import TxContext from 'contexts/TxContext';
import ChainType from 'enums/ChainType';
import ModalType from 'enums/ModalType';
import RecentActivityType from 'enums/RecentActivityType';
import TxStatus from 'enums/TxStatus';
import useReward from 'hooks/useReward';
import { useCallback, useContext, useEffect, useState } from 'react';
import GovernanceBottom from './GovernanceBottom';
import GovernanceCenter from './GovernanceCenter';
import GovernanceTop from './GovernanceTop';
import Staking from './Staking';
import styled from 'styled-components';
import { LeftLineContainer } from './style';
import moment from 'moment';

export const DocumentsImage = styled.article`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Governance = () => {
  const [modal, setModalType] = useState<ModalType>();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChain, setCurrentChain] = useState(ChainType.Ethereum);
  const { txType, txStatus } = useContext(TxContext);
  const reward = useReward();

  const startDate = moment(
    '2022.04.18 19:00:00 +9:00',
    'YYYY.MM.DD hh:mm:ss Z',
  ).tz('Asia/Seoul', true);

  useEffect(() => {
    if (
      txType === RecentActivityType.ELStake ||
      txType === RecentActivityType.ELStakingWithdraw ||
      txType === RecentActivityType.ELClaim
    ) {
      setModalType(ModalType.ConfirmEnded);
    }
  }, [txType]);

  useEffect(() => {
    if (txStatus === TxStatus.FAIL) {
      setModalVisible(false);
    }
  }, [txStatus]);

  const modalComponent = useCallback(() => {
    switch (modal) {
      case ModalType.Staking:
        return <StakingModal onClose={() => setModalVisible(false)} />;
      case ModalType.Claim:
        return (
          <ClaimModal onClose={() => setModalVisible(false)} reward={reward} />
        );
      case ModalType.NoAccount:
        return (
          <ConnectWalletGuide
            onClose={() => setModalVisible(false)}
            setModalType={() => setModalType(ModalType.Connect)}
          />
        );
      case ModalType.Connect:
        return <SelectWalletModal onClose={() => setModalVisible(false)} />;
      case ModalType.ConfirmEnded:
        return (
          <TransactionConfirmModal onClose={() => setModalVisible(false)} />
        );
      default:
        return <></>;
    }
  }, [modal, reward, setModalType]);

  return (
    <>
      {modalVisible && <ModalLayout>{modalComponent()}</ModalLayout>}
      <DocumentsImage />
      <GovernanceTop />
      <LeftLineContainer>
        <GovernanceCenter />
        <Staking
          setModalType={setModalType}
          setModalVisible={() => setModalVisible(true)}
          reward={reward}
          currentChain={currentChain}
          setCurrentChain={setCurrentChain}
          startDate={startDate}
        />
      </LeftLineContainer>
      <GovernanceBottom />
    </>
  );
};

export default Governance;
