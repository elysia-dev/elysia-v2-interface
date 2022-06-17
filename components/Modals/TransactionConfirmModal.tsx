import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import TransactinConfirm from 'assets/images/transaction_confirm@2x.png';
import ElysiaToken from 'assets/images/elysia_token.png';
import ModalLayout from './ModalLayout';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  margin: 30px auto 0;
  @media (max-width: 500px) {
    width: 90%;
    margin: 20px auto 0;
  }
  > div {
    margin: 30px 20px 0;
    b {
      color: #fff;
      font-size: 1.0625rem;
    }
    p {
      color: #fff;
      margin: 70px 0px 25px 0px;
    }
  }
`;

const TransactionConfirmModal: React.FunctionComponent<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { t } = useTranslation();

  const [Time, setTime] = useState(3000);

  useEffect(() => {
    setTime(3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, Time);
  }, []);

  return (
    <ModalLayout title="EL" image={ElysiaToken} onClose={() => onClose()}>
      <Container>
        <Image
          src={TransactinConfirm}
          width={140}
          height={140}
          alt={'TransactinConfirm'}
        />
        <div>
          <b>{t('modal.transaction.0')}</b>
          <p>{t('modal.transaction.1')}</p>
        </div>
      </Container>
    </ModalLayout>
  );
};

export default TransactionConfirmModal;
