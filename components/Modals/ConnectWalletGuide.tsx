import { useTranslation } from 'react-i18next';
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
          <h2>{t('modal.connect_wallet.title')}</h2>
          <CloseButton onClose={() => onClose()} />
        </div>
        <div className="wallet_select_modal__content__line" />
        <>
          <div className={styles.modal_content}>
            <p>{t('modal.connect_wallet.content')}</p>
          </div>
          <div className="wallet_select_modal__content__line" />
          <div
            className={styles.modal_button}
            onClick={() => {
              setModalType();
              // onClose();
            }}>
            <p>{t('modal.connect_wallet.button')}</p>
          </div>
        </>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className={styles.modal_select_wallet}>
  //       <div>ConnectWalletGuide Modal</div>
  //       <CloseButton onClose={() => onClose()} />
  //     </div>
  //   </>
  // );
};

export default ConnectWalletGuide;
