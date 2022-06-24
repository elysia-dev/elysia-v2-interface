import { Trans, useTranslation } from 'react-i18next';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
  setModalType: () => void;
};

const ConnectWalletGuide = (props: Props) => {
  const { onClose, setModalType } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.modal_connect}>
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <h2>{t('modal.connectWallet.0')}</h2>
          <CloseButton onClose={() => onClose()} />
        </div>
        <div className="wallet_select_modal__content__line" />
        <>
          <div className={styles.modal_content}>
            <p>
              <Trans>{t('modal.connectWallet.1')}</Trans>
            </p>
          </div>
          <div className="wallet_select_modal__content__line" />
          <div
            className={styles.modal_button}
            onClick={() => {
              setModalType();
            }}>
            <div>
              <p>{t('modal.connectWallet.2')}</p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ConnectWalletGuide;
