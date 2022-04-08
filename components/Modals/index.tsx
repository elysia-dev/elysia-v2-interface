import { useWeb3React } from '@web3-react/core';
import ModalType from 'enums/ModalType';
import { BigNumber } from 'ethers';
import { useMemo } from 'react';
import ClaimModal from './ClaimModal';
import ConnectWalletGuide from './ConnectWalletGuide';
import DisconnectModal from './DisconnectModal';
import ModalLayout from './ModalLayout';
import SelectWalletModal from './SelectWalletModal';
import StakingModal from './StakingModal';
import TransactionConfirmModal from './TransactionConfirmModal';

type Props = {
  visible: boolean;
  onClose: () => void;
  modalType?: ModalType;
  reward?: {
    before: BigNumber;
    after: BigNumber;
  };
  setModalType: () => void;
};

const Modal = (props: Props) => {
  const { onClose, visible, modalType, reward, setModalType } = props;

  const modalComponent = useMemo(() => {
    switch (modalType) {
      case ModalType.Connect:
        return <SelectWalletModal onClose={onClose} />;
      case ModalType.Disconnect:
        return <DisconnectModal onClose={onClose} />;
      case ModalType.Staking:
        return <StakingModal onClose={onClose} />;
      case ModalType.Claim:
        return <ClaimModal onClose={onClose} reward={reward} />;
      case ModalType.NoAccount:
        return (
          <ConnectWalletGuide
            onClose={onClose}
            setModalType={() => setModalType()}
          />
        );
      case ModalType.ConfirmEnded:
        return <TransactionConfirmModal onClose={onClose} />;
      default:
        return <></>;
    }
  }, [modalType, onClose, reward, setModalType]);

  return <>{visible && <ModalLayout>{modalComponent}</ModalLayout>}</>;
};

export default Modal;
