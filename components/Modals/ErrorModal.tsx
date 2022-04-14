import TxContext from 'contexts/TxContext';
import TxStatus from 'enums/TxStatus';
import { FunctionComponent, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ethersJsErrors from 'utils/ethersJsErrors';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';
import ModalLayout from './ModalLayout';

type Props = {
  error: string;
};

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
    <>
      <ModalLayout>
        <div className={styles.modal_error}>
          <div className={styles.modal_container}>
            <div className={styles.modal_header}>
              <div className={styles.modal_header_img}>
                <h2>{t('modal.error.0')}</h2>
              </div>
              <CloseButton onClose={() => onCloseHandler()} />
            </div>
            <div className="wallet_select_modal__content__line" />
            <div className={styles.error_inquiry}>
              {ethersJsErrors.includes(error)
                ? t('modal.error.1')
                : t('modal.error.2')}
            </div>
            <div className={styles.error_description}>
              <div className="bold">{t('modal.error.3')}</div>
              <div>
                <div>
                  <textarea
                    ref={errorDescription}
                    readOnly
                    value={error}></textarea>
                </div>
              </div>
            </div>
            <div className={styles.modal_button} onClick={() => errorCopy()}>
              <div>
                <p>{t('modal.error.4')}</p>
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default ErrorModal;
