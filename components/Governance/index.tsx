import Modal from 'components/Modals';
import TxContext from 'contexts/TxContext';
import ChainType from 'enums/ChainType';
import ModalType from 'enums/ModalType';
import RecentActivityType from 'enums/RecentActivityType';
import { constants } from 'ethers';
import useReward from 'hooks/useReward';
import { useContext, useEffect, useState } from 'react';
import GovernanceBottom from './GovernanceBottom';
import GovernanceCenter from './GovernanceCenter';
import GovernanceTop from './GovernanceTop';
import Staking from './Staking';

const Governance = () => {
  const [modal, setModalType] = useState<ModalType>();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChain, setCurrentChain] = useState(ChainType.Ethereum);
  const { txType } = useContext(TxContext);
  // const reward = useReward();

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
        reward={{
          before: constants.Zero,
          after: constants.Zero,
        }}
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
          reward={{
            before: constants.Zero,
            after: constants.Zero,
          }}
          currentChain={currentChain}
          setCurrentChain={setCurrentChain}
        />
        <GovernanceBottom />
      </div>
    </>
  );
};

export default Governance;
