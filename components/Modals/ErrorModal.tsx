import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { FunctionComponent, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ethersJsErrors from 'utils/ethersJsErrors';
import ModalButton from './ModalButton';
import ModalLayout from './ModalLayout';

type Props = {
  error: string;
};

const Container = styled.section`
  margin: 0 5%;
`;
const ErrorInquiry = styled.section`
  text-align: center;
  padding: 40px 70px 30px 70px;
  > p {
    color: #fff;
  }
`;
const Description = styled.section`
  width: 100%;
  margin: auto;
  > p {
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }
  > div {
    > div {
      width: 100%;
      > textarea {
        resize: none;
        width: 100%;
        height: 88px;
        text-align: left;
        padding: 20px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
      }
    }
  }
`;

const ErrorModal: FunctionComponent<Props> = ({ error }) => {
  const { t } = useTranslation();
  const errorDescription = useRef<HTMLTextAreaElement>(null);
  //   const totalHeight = document.documentElement.scrollHeight;
  const { initTransaction } = useContext(TxContext);
  const errorCopy = () => {
    errorDescription.current?.select();
    document.execCommand('copy');
  };

  const onCloseHandler = () => {
    initTransaction(TxStatus.IDLE, false);
  };

  return (
    <ModalLayout title={t('modal.error.0')} onClose={() => onCloseHandler()}>
      <Container>
        <ErrorInquiry>
          <p>
            {ethersJsErrors.includes(error)
              ? t('modal.error.1')
              : t('modal.error.2')}
          </p>
        </ErrorInquiry>
        <Description>
          <p>{t('modal.error.3')}</p>
          <div></div>
        </Description>
        <ModalButton title={t('modal.error.4')} onClick={() => errorCopy()} />
      </Container>
    </ModalLayout>
  );
};

export default ErrorModal;
