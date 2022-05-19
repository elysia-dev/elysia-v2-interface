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
import styles from './Governance.module.scss';
import GovernanceBottom from './GovernanceBottom';
import GovernanceCenter from './GovernanceCenter';
import GovernanceTop from './GovernanceTop';
import Staking from './Staking';
import { NoiseSvg } from 'components/Layout/styles';
import styled from 'styled-components';
import documentImage from 'assets/images/main/document_image.webp';

export const DocumentsImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  /* background: url(${documentImage.src}); */
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Governance = () => {
  const [modal, setModalType] = useState<ModalType>();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChain, setCurrentChain] = useState(ChainType.Ethereum);
  const { txType, txStatus } = useContext(TxContext);
  const reward = useReward();

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
      <div>
        {modalVisible && <ModalLayout>{modalComponent()}</ModalLayout>}
        <DocumentsImage />
        <div>
          <GovernanceTop />
          <section className={styles.governance_left_line_container}>
            <GovernanceCenter />
            <Staking
              setModalType={setModalType}
              setModalVisible={() => setModalVisible(true)}
              reward={reward}
              currentChain={currentChain}
              setCurrentChain={setCurrentChain}
            />
          </section>
          <GovernanceBottom />
        </div>
      </div>
    </>
  );
};

export default Governance;
