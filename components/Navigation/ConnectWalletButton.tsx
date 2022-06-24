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
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import styled, { css, keyframes } from 'styled-components';
import TxStatus from 'enums/TxStatus';

type Props = {
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
};

const ConnectWalletButton = (props: Props) => {
  const { account, chainId } = useWeb3React();
  const { txStatus } = useContext(TxContext);
  const { t } = useTranslation();
  const { ensName, ensLoading } = useENS(account || '');
  const shortAddress = `${account?.substring(0, 5)}....${account?.substring(
    account.length - 4,
    account.length,
  )}`;

  return (
    <>
      <div
        className={`wallet_wrapper ${
          account || props.isConnectWalletLoading ? '' : 'disconnect'
        } ${txStatus} ${chainId && [1, 1337].includes(chainId) ? '' : 'wrong'}`}
        onClick={() => {
          props.modalVisible();
          gtag.event({
            action: GoogleAnalyticsAction.NavConnectWallet,
            category: GoogleAnalyticsCategory.Nav,
            label: '',
          });
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
              <div>{ensLoading ? ensName || shortAddress : shortAddress}</div>
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
