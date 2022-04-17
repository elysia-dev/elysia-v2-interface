import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.scss';
import Skeleton from 'react-loading-skeleton';
import useIsMobile from 'hooks/useIsMobile';

type Props = {
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
};

const ConnectWalletButton = (props: Props) => {
  const { account } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`wallet_wrapper ${
          account || props.isConnectWalletLoading ? '' : 'disconnect'
        } ${txStatus}`}
        onClick={() => props.modalVisible()}>
        {props.isConnectWalletLoading ? (
          <Skeleton width={170} height={48} />
        ) : account ? (
          <div className={styles.wallet_connect}>
            <Davatar
              size={25}
              address={account}
              generatedAvatarType="jazzicon"
            />
            <div>
              {account?.substring(0, 5)}....
              {account?.substring(account.length - 4, account.length)}
            </div>
          </div>
        ) : (
          <div>{t('navigation.wallet')}</div>
        )}
      </div>
    </>
  );
};

export default ConnectWalletButton;
