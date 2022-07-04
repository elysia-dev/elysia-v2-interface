import Davatar from '@davatar/react';
import { useWeb3React } from '@web3-react/core';
import TxContext from 'contexts/TxContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NetworkError from 'assets/images/network_error.png';
import Image from 'next/image';
import { isChainId } from 'utils/isChainId';
import { useENS } from 'hooks/useENS';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

type Props = {
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
  account?: string;
  chainId?: number;
  ensName?: string | null;
};

const ConnectWalletButton = (props: Props) => {
  const { chainId, ensName, account, isConnectWalletLoading } = props;
  const { txStatus } = useContext(TxContext);
  const { t } = useTranslation();
  const shortAddress = `${account?.substring(0, 5)}....${account?.substring(
    account.length - 4,
    account.length,
  )}`;

  return (
    <>
      <div
        className={`wallet_wrapper ${
          account || isConnectWalletLoading ? '' : 'disconnect'
        } ${txStatus} ${chainId && [1, 1337].includes(chainId) ? '' : 'wrong'}`}
        onClick={() => {
          props.modalVisible();
          googleGAEvent(GoogleGAAction.NavConnectWallet, GoogleGACategory.Nav);
        }}>
        {props.isConnectWalletLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={190} height={48} borderRadius={20} />
          </SkeletonTheme>
        ) : account ? (
          chainId && isChainId(chainId) ? (
            <div className={styles.wallet_connect}>
              <Davatar
                size={25}
                address={account}
                generatedAvatarType="jazzicon"
              />
              <div>{ensName ? ensName || shortAddress : shortAddress}</div>
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
