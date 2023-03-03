import { useTranslation } from 'react-i18next';
import ModalLayout from '../ModalLayout';
import styled from 'styled-components';
import WalletConnectButton from './WalletConnectButton';
import InjectedWalletButton from './InjectedWalletButton';
import OkxButton from './OkxButton';

type Props = {
  onClose: () => void;
};

export const SelectWalletModalContent = styled.section`
  padding: 25px;
  display: flex;
  flex-direction: column;
  @supports (gap: 25px) {
    gap: 25px;
  }
  @supports not (gap: 25px) {
    > button:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

export const SelectWalletModalContentButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 55px;
  border-radius: 55px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #000;
  @media (max-width: 460px) {
    height: 45px;
  }
  > b {
    padding-left: 10px;
    color: #fff;
    font-weight: bold;
    line-height: 55px;
    font-size: 1.2rem;
    @media (max-width: 460px) {
      line-height: 45px;
    }
    letter-spacing: 1px;
  }
`;

const SelectWalletModal = (props: Props) => {
  const { onClose } = props;
  const { t } = useTranslation();

  return (
    <>
      <ModalLayout title={t('modal.select_wallet')} onClose={() => onClose()}>
        <SelectWalletModalContent>
          <InjectedWalletButton closeModal={onClose} />
          <OkxButton closeModal={onClose} />
          <WalletConnectButton closeModal={onClose} />
        </SelectWalletModalContent>
      </ModalLayout>
    </>
  );
};

export default SelectWalletModal;
