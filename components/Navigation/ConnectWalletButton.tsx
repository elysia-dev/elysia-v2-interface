import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.scss';
import Skeleton from 'react-loading-skeleton';
import NetworkError from 'assets/images/network_error.png';
import Image from 'next/image';

type Props = {
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
};

const ConnectWalletButton = (props: Props) => {
  const { account, chainId } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`wallet_wrapper ${
          account || props.isConnectWalletLoading ? '' : 'disconnect'
        } ${txStatus} ${chainId && [1, 1337].includes(chainId) ? '' : 'wrong'}`}
        onClick={() => props.modalVisible()}>
        {props.isConnectWalletLoading ? (
          <Skeleton width={170} height={48} />
        ) : account ? (
          chainId && [1, 1337].includes(chainId) ? (
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
            <div className={styles.wrong_network}>
              <Image
                src={NetworkError}
                alt={'NetworkError'}
                width={20}
                height={20}
              />
              <div>Wrong Network</div>
            </div>
          )
        ) : (
          <div>{t('navigation.wallet')}</div>
        )}
      </div>
    </>
  );
};

export default ConnectWalletButton;
