import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import {
  isMetamask,
  isCoinbaseWallet,
  isWalletConnector,
  clearWallet,
  isOkx,
} from 'utils/connectWallet';
import { activateInjectedProvider } from 'core/connectors/injectedConnector';
import useMediaQueryState from 'hooks/useMediaQueryState';
import TxContext from 'contexts/TxContext';
import DisconnectModal from 'components/Modals/DisconnectModal';
import ModalLayout from 'components/Modals/ModalLayout';
import SelectWalletModal from 'components/Modals/SelectWalletModal';
import ErrorModal from 'components/Modals/ErrorModal';
import TxStatus from 'enums/TxStatus';
import { isChainId } from 'utils/isChainId';
import { NavigationWrapper, HamburgerButton } from './styles';
import MobileMenu from './MobileMenu';
import LanguageConverter from './LanguageConverter';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import * as gtag from 'lib/gtag';
import { t } from 'i18next';
import Wallet from 'enums/Wallet';
import okxConnector, { okxWallet } from 'core/connectors/okxConnector';
import { useWeb3React } from '@web3-react/core';
import { metaMask } from 'core/connectors/metaMask';
import { walletConnect } from 'core/connectors/walletConnectConnectorFactory';
import { coinbaseWallet } from 'core/connectors/coinbaseConnector';

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, connector, provider, chainId } = useWeb3React();
  const { txStatus, error } = useContext(TxContext);
  const [isConnectWalletLoading, setIsConnectWalletLoading] = useState(true);
  const mediaQueryState = useMediaQueryState();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  // 새로고침시 지갑연결 유지
  useEffect(() => {
    setTimeout(() => {
      if (isWalletConnector()) {
        walletConnect.activate().then(() => {
          setIsConnectWalletLoading(false);
        });
        return;
      }
      if (isMetamask()) {
        activateInjectedProvider(Wallet.Metamask);
        metaMask.activate().then(() => {
          setIsConnectWalletLoading(false);
        });
      } else if (isCoinbaseWallet()) {
        activateInjectedProvider(Wallet.CoinbaseWallet);
        coinbaseWallet.activate().then(() => {
          setIsConnectWalletLoading(false);
        });
      } else if (isOkx()) {
        okxWallet.activate().then(() => {
          setIsConnectWalletLoading(false);
        });
      } else {
        connector.resetState();
        clearWallet();
        setIsConnectWalletLoading(false);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (txStatus === TxStatus.FAIL) {
      setModalVisible(false);
    }
  }, [txStatus]);

  useEffect(() => {
    if (!provider || (chainId && isChainId(chainId))) return;
    provider.provider
      .request?.({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: '0x1',
          },
        ],
      })
      .then((v: any) => {})
      .catch((error: any) => {
        console.error(error);
      });
  }, [chainId, provider]);

  useEffect(() => {
    if (typeof window === undefined) return;
    document.addEventListener('scroll', (e: any) => {
      setIsScroll(5 < window.scrollY);
    });

    return () => {
      document.removeEventListener('scroll', (e: any) => {
        setIsScroll(5 < window.scrollX);
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY =
      mediaQueryState.mobile && isMobileMenu ? 'hidden' : 'initial';
  }, [mediaQueryState, isMobileMenu]);

  return (
    <>
      {modalVisible && (
        <ModalLayout>
          {account ? (
            <DisconnectModal onClose={() => setModalVisible(false)} />
          ) : (
            <SelectWalletModal onClose={() => setModalVisible(false)} />
          )}
        </ModalLayout>
      )}
      {txStatus === TxStatus.FAIL &&
        error &&
        error !==
          'MetaMask Tx Signature: User denied transaction signature.' && (
          <ErrorModal error={error} />
        )}
      <NavigationWrapper
        theme={mediaQueryState.mobile && isMobileMenu ? 'overflow' : isScroll}>
        <nav>
          <figure>
            <Link href={`/${router.query.lng}`}>
              <a
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.NavHome,
                    category: GoogleAnalyticsCategory.Nav,
                    label: '',
                  });
                }}>
                <Image
                  src={ElysiaLogo}
                  alt={'ElysiaLogo'}
                  width={mediaQueryState.mobile ? 100 : 139}
                  height={mediaQueryState.mobile ? 21 : 31}
                />
              </a>
            </Link>
          </figure>
          {mediaQueryState.mobile ? (
            <HamburgerButton
              isActive={isMobileMenu}
              onClick={() => {
                setMobileMenu(!isMobileMenu);
              }}>
              <i />
              <i />
              <i />
            </HamburgerButton>
          ) : (
            <>
              <section>
                <Link href={`/${router.query.lng}/Governance`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.NavGovernance,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('Governance')
                          ? '#ffffff'
                          : '',
                      }}>
                      {t('meta.governance')}
                    </span>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Ecosystem`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.NavEcosystem,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('Ecosystem')
                          ? '#ffffff'
                          : '',
                      }}>
                      {t('meta.ecosystem')}
                    </span>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Community`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.NavCommunity,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('Community')
                          ? '#ffffff'
                          : '',
                      }}>
                      {t('meta.community')}
                    </span>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Labs`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.NavDevelopers,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('Developers')
                          ? '#ffffff'
                          : '',
                      }}>
                      {t('meta.development')}
                    </span>
                  </div>
                </Link>

                <Link href={`/${router.query.lng}/Roadmap`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.Roadmap,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('Roadmap')
                          ? '#ffffff'
                          : '',
                      }}>
                      {t('meta.roadmap')}
                    </span>
                  </div>
                </Link>

                <Link href={`/${router.query.lng}/FAQ`} passHref>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: GoogleAnalyticsAction.NavFAQ,
                        category: GoogleAnalyticsCategory.Nav,
                        label: '',
                      });
                    }}>
                    <span
                      style={{
                        cursor: 'pointer',
                        color: router.pathname.includes('FAQ') ? '#ffffff' : '',
                      }}>
                      {t('meta.faq')}
                    </span>
                  </div>
                </Link>
              </section>
              <ConnectWalletButton
                modalVisible={() => setModalVisible(true)}
                isConnectWalletLoading={isConnectWalletLoading}
              />
              <LanguageConverter />
            </>
          )}
        </nav>
        {mediaQueryState.mobile && isMobileMenu && (
          <MobileMenu
            modalVisible={() => setModalVisible(true)}
            isConnectWalletLoading={isConnectWalletLoading}
            onButtonClick={() => setMobileMenu(false)}
          />
        )}
      </NavigationWrapper>
    </>
  );
};

export default Navigation;
