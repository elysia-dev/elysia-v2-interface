import TxContext from 'contexts/TxContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Modal.module.scss';

const LoadingIndicator: React.FunctionComponent<{
  button?: string;
  isTxActive?: boolean;
  isApproveLoading?: boolean;
}> = ({ button, isTxActive, isApproveLoading }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="indicator">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {isTxActive && (
          <p>
            {isApproveLoading
              ? t('modal.indicator.loading_approve')
              : t('modal.indicator.loading_metamask')}
          </p>
        )}
      </div>
      <div
        className={styles.modal_button}
        style={{
          background: '#f0f0f1',
          cursor: 'auto',
        }}>
        <p
          style={{
            color: '#888888',
            cursor: 'auto',
          }}>
          {button}
        </p>
      </div>
    </>
  );
};

export default LoadingIndicator;
