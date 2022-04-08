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
          <h2>{t('transaction.account')}</h2>
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
                Disconnect
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
                    stroke="#6e6e6e"
                  />
                  <path
                    id="패스_2091"
                    data-name="패스 2091"
                    d="M13,7V5.5A1.5,1.5,0,0,0,11.5,4h-6A1.5,1.5,0,0,0,4,5.5v6A1.5,1.5,0,0,0,5.5,13H7"
                    transform="translate(-1 -1)"
                    fill="none"
                    stroke="#6e6e6e"
                  />
                </svg>
                Copy Address
              </div>
              <div>
                <a
                  href={`${envs.externalApiEndpoint.etherscanURI}/address/${account}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  View on Eth scan
                </a>
              </div>
            </div>
          </div>
          <div className={styles.recent_tx_wrapper}>
            <div className={styles.recent_header}>Recently Activity</div>
            <div className={styles.recent_box}>
              <div>Recently Activity is displayed here</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default DisconnectModal;
