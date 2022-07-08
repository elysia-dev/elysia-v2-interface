import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';
import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import { isMetamask, isWalletConnector } from 'utils/connectWallet';
import walletConnectConnector from 'utils/walletConnectProvider';
import injectedConnector from 'core/connectors/injectedConnector';
import useIsMobile from 'hooks/useIsMobile';
import TxContext from 'contexts/TxContext';
import DisconnectModal from 'components/Modals/DisconnectModal';
import ModalLayout from 'components/Modals/ModalLayout';
import SelectWalletModal from 'components/Modals/SelectWalletModal';
import ErrorModal from 'components/Modals/ErrorModal';
import TxStatus from 'enums/TxStatus';
import { isChainId } from 'utils/isChainId';
import { NavigationWrapper } from './styles';
import MobileMenu from './MobileMenu';
import LanguageConverter from './LanguageConverter';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import * as gtag from 'lib/gtag';
import { t } from 'i18next';

const walletConnectProvider = walletConnectConnector();

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, activate, deactivate, library, chainId } = useWeb3React();
  const { txStatus, error } = useContext(TxContext);
  const [isConnectWalletLoading, setIsConnectWalletLoading] = useState(true);
  const { isMobile, isLoading } = useIsMobile();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isWalletConnector()) {
        activate(walletConnectProvider).then(() => {
          setIsConnectWalletLoading(false);
        });
        return;
      }
      if (isMetamask()) {
        activate(injectedConnector).then(() => {
          setIsConnectWalletLoading(false);
        });
      } else {
        deactivate();
        window.sessionStorage.removeItem('@network');
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
    if (!library || (chainId && isChainId(chainId))) return;
    library.provider
      .request({
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
  }, [chainId, library]);

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
      isMobile && isMobileMenu ? 'hidden' : 'initial';
  }, [isMobile, isMobileMenu]);

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
        theme={isMobile && isMobileMenu ? 'overflow' : isScroll}>
        <nav>
          <figure>
            <Link href={`/${router.query.lng}`} passHref>
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
                  width={isMobile ? 100 : 139}
                  height={isMobile ? 21 : 31}
                />
              </a>
            </Link>
          </figure>
          {isLoading ? (
            <></>
          ) : isMobile ? (
            <section>
              <div
                className={`${styles.navigation__hamburger__button} ${
                  isMobileMenu && styles.active
                }`}
                onClick={() => {
                  setMobileMenu(!isMobileMenu);
                }}>
                <i />
                <i />
                <i />
              </div>
            </section>
          ) : (
            <>
              <section>
                <Link href={`/${router.query.lng}/Governance`} passHref>
                  <div>
                    <a
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
                          fontFamily: router.pathname.includes('Governance')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
                        }}>
                        {t('meta.governance')}
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Ecosystem`} passHref>
                  <div>
                    <a
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
                          fontFamily: router.pathname.includes('Ecosystem')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
                        }}>
                        {t('meta.ecosystem')}
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Community`} passHref>
                  <div>
                    <a
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
                          fontFamily: router.pathname.includes('Community')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
                        }}>
                        {t('meta.community')}
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Developers`} passHref>
                  <div>
                    <a
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
                          fontFamily: router.pathname.includes('Developers')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
                        }}>
                        {t('meta.development')}
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/FAQ`} passHref>
                  <div>
                    <a
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
                          fontFamily: router.pathname.includes('FAQ')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
                        }}>
                        {t('meta.faq')}
                      </span>
                    </a>
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
        {isLoading ? (
          <></>
        ) : (
          isMobile &&
          isMobileMenu && (
            <MobileMenu
              modalVisible={() => setModalVisible(true)}
              isConnectWalletLoading={isConnectWalletLoading}
              onButtonClick={() => setMobileMenu(false)}
            />
          )
        )}
      </NavigationWrapper>
    </>
  );
};

export default Navigation;
