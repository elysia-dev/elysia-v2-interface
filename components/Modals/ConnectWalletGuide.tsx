import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ModalButton from './ModalButton';
import ModalLayout from './ModalLayout';

type Props = {
  onClose: () => void;
  setModalType: () => void;
};

const Container = styled.section`
  padding: 20px 30px 0px;
`;
const Content = styled.section`
  width: 100%;
  padding: 31px 0px 31px 0px;
  text-align: center;
  margin: auto;
  > p {
    color: #fff;
  }
`;

const ConnectWalletGuide = (props: Props) => {
  const { onClose, setModalType } = props;
  const { t } = useTranslation();

  return (
    <ModalLayout title={t('modal.connectWallet.0')} onClose={() => onClose()}>
      <Container>
        <Content>
          <p>
            <Trans>{t('modal.connectWallet.1')}</Trans>
          </p>
        </Content>
        <ModalButton
          onClick={() => {
            setModalType();
          }}
          title={t('modal.connectWallet.2')}
        />
      </Container>
    </ModalLayout>
  );
};

export default ConnectWalletGuide;
