import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import { useTranslation } from 'react-i18next';
import envs from 'core/envs';
import CloseButton from './CloseButton';
import styles from './Modal.module.scss';

type Props = {
  onClose: () => void;
};

const DisconnectModal = (props: Props) => {
  const { onClose } = props;
  const { deactivate, account } = useWeb3React();
  const { t } = useTranslation();

  const AddressCopy = (data: string) => {
    if (!document.queryCommandSupported('copy')) {
      return alert('This browser does not support the copy function.');
    }
    const area = document.createElement('textarea');
    area.value = data;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    alert('Copied!!');
  };

  return (
    <div className={styles.modal_disconnect}>
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <h2>{t('modal.userInfo.0')}</h2>
          <CloseButton onClose={() => onClose()} />
        </div>
        <div className="wallet_select_modal__content__line" />
        <>
          <div className={styles.modal_content}>
            <div className={styles.modal_user_info}>
              <div className={styles.modal_address}>
                <div>Ethereum</div>
                <div className={styles.modal_davatar}>
                  {account && (
                    <Davatar
                      size={20}
                      address={account}
                      generatedAvatarType="jazzicon"
                    />
                  )}
                  <div>
                    {account?.substring(0, 8)}....
                    {account?.substring(account.length - 6, account.length)}
                  </div>
                </div>
              </div>
              <div
                className={styles.modal_disconnect_button}
                onClick={() => {
                  deactivate();
                  window.sessionStorage.removeItem('@connect');
                  onClose();
                }}>
                {t('modal.userInfo.1')}
              </div>
            </div>
            <div className={styles.modal_function_wrapper}>
              <div onClick={() => AddressCopy(account || '')}>
                <svg
                  id="그룹_6680"
                  data-name="그룹 6680"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18">
                  <path
                    id="패스_2090"
                    data-name="패스 2090"
                    d="M0,0H18V18H0Z"
                    fill="none"
                  />
                  <rect
                    id="사각형_6793"
                    data-name="사각형 6793"
                    width="9"
                    height="9"
                    rx="2"
                    transform="translate(6 6)"
                    fill="none"
                    stroke="#fff"
                  />
                  <path
                    id="패스_2091"
                    data-name="패스 2091"
                    d="M13,7V5.5A1.5,1.5,0,0,0,11.5,4h-6A1.5,1.5,0,0,0,4,5.5v6A1.5,1.5,0,0,0,5.5,13H7"
                    transform="translate(-1 -1)"
                    fill="none"
                    stroke="#fff"
                  />
                </svg>
                {t('modal.userInfo.2')}
              </div>
              <div>
                <svg
                  id="그룹_2391"
                  data-name="그룹 2391"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.235"
                  height="18.235"
                  viewBox="0 0 18.235 18.235">
                  <path
                    id="패스_2086"
                    data-name="패스 2086"
                    d="M0,0H18.235V18.235H0Z"
                    fill="none"
                  />
                  <circle
                    id="타원_499"
                    data-name="타원 499"
                    cx="7.048"
                    cy="7.048"
                    r="7.048"
                    transform="translate(2.014 2.126)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <path
                    id="패스_2088"
                    data-name="패스 2088"
                    d="M4.033,0-.841,5.127"
                    transform="translate(7.36 6.717)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <path
                    id="패스_2087"
                    data-name="패스 2087"
                    d="M13.559,13.559V9H9"
                    transform="translate(-1.844 -2.605)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
                <a
                  href={`${envs.externalApiEndpoint.etherscanURI}/address/${account}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  {t('modal.user_info.3')}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.recent_tx_wrapper}>
            <div className={styles.recent_header}>{t('modal.userInfo.4')}</div>
            <div className={styles.recent_box}>
              <div>{t('modal.userInfo.5')}</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default DisconnectModal;
