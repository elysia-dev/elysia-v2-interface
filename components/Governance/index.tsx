import { useWeb3React } from '@web3-react/core';
import Modal from 'components/Modals';
import StakingModal from 'components/Modals/StakingModal';
import TxContext from 'contexts/TxContext';
import ModalType from 'enums/ModalType';
import RecentActivityType from 'enums/RecentActivityType';
import useReward from 'hooks/useReward';
import { useContext, useEffect, useState } from 'react';
import GovernanceBottom from './GovernanceBottom';
import GovernanceCenter from './GovernanceCenter';
import GovernanceTop from './GovernanceTop';
import Staking from './Staking';

const Governance = () => {
  const [modal, setModalType] = useState<ModalType>();
  const [modalVisible, setModalVisible] = useState(false);
  const { txType } = useContext(TxContext);
  const { account } = useWeb3React();
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

  return (
    <>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        modalType={modal}
        reward={reward}
        setModalType={() => setModalType(ModalType.Connect)}
      />
      <div
        style={{
          marginTop: 100,
        }}>
        <GovernanceTop />
        <GovernanceCenter />
        <Staking
          setModalType={setModalType}
          setModalVisible={() => setModalVisible(true)}
          reward={reward}
        />
        <GovernanceBottom />
      </div>
    </>
  );
};

export default Governance;
