import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import TransactinConfirm from 'assets/images/transaction_confirm@2x.png';
import ElysiaToken from 'assets/images/elysia_token.png';
import styles from './Modal.module.scss';
import CloseButton from './CloseButton';

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
    <div className={styles.modal_tx_ended}>
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <div className={styles.modal_header_img}>
            <Image
              src={ElysiaToken}
              alt={'ElysiaToken'}
              width={36}
              height={36}
            />
            <h2>EL</h2>
          </div>
          <CloseButton onClose={() => onClose()} />
        </div>
        <div className={styles.modal_confirm}>
          <Image
            src={TransactinConfirm}
            width={140}
            height={140}
            alt={'TransactinConfirm'}
          />
          <div className={styles.modal_text}>
            <h2>{t('transaction.confirm')}</h2>
            <p>
              {t('transaction.nth_close', { nth: Math.floor(Time / 1000) })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmModal;
