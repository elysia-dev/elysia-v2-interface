import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import { isMetamask, isWalletConnector } from 'utils/connectWallet';
import walletConnectConnector from 'utils/walletConnectProvider';
import injectedConnector from 'connectors/injectedConnector';
import useIsMobile, { MediaQueryState } from 'hooks/useIsMobile';
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
import { GoogleAnalyticsEvent } from 'utils/gaEvent';

const walletConnectProvider = walletConnectConnector();

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, activate, deactivate, library, chainId } = useWeb3React();
  const { txStatus, error } = useContext(TxContext);
  const [isConnectWalletLoading, setIsConnectWalletLoading] = useState(true);
  const { mediaQueryState, isLoading } = useIsMobile();
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
      mediaQueryState === MediaQueryState.Mobile && isMobileMenu
        ? 'hidden'
        : 'initial';
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
        theme={
          mediaQueryState === MediaQueryState.Mobile && isMobileMenu
            ? 'overflow'
            : isScroll
        }>
        <nav>
          <figure>
            <Link href={`/${router.query.lng}`} passHref>
              <a
                onClick={() => {
                  GoogleAnalyticsEvent(
                    GoogleAnalyticsAction.NavHome,
                    GoogleAnalyticsCategory.Nav,
                  );
                }}>
                <Image
                  src={ElysiaLogo}
                  alt={'ElysiaLogo'}
                  width={mediaQueryState === MediaQueryState.Mobile ? 100 : 139}
                  height={mediaQueryState === MediaQueryState.Mobile ? 21 : 31}
                />
              </a>
            </Link>
          </figure>
          {isLoading ? (
            <></>
          ) : mediaQueryState === MediaQueryState.Mobile ? (
            <section>
              <HamburgerButton
                isActive={isMobileMenu}
                onClick={() => {
                  setMobileMenu(!isMobileMenu);
                }}>
                <i />
                <i />
                <i />
              </HamburgerButton>
            </section>
          ) : (
            <>
              <section>
                <Link href={`/${router.query.lng}/ELBridge`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        GoogleAnalyticsEvent(
                          GoogleAnalyticsAction.NavElBridge,
                          GoogleAnalyticsCategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontWeight: router.pathname.includes('ELBridge')
                            ? 'bold'
                            : 'normal',
                        }}>
                        EL Bridge
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Governance`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        GoogleAnalyticsEvent(
                          GoogleAnalyticsAction.NavGovernance,
                          GoogleAnalyticsCategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontWeight: router.pathname.includes('Governance')
                            ? 'bold'
                            : 'normal',
                        }}>
                        Governance
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Ecosystem`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        GoogleAnalyticsEvent(
                          GoogleAnalyticsAction.NavEcosystem,
                          GoogleAnalyticsCategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontWeight: router.pathname.includes('Ecosystem')
                            ? 'bold'
                            : 'normal',
                        }}>
                        Ecosystem
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Community`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        GoogleAnalyticsEvent(
                          GoogleAnalyticsAction.NavCommunity,
                          GoogleAnalyticsCategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontWeight: router.pathname.includes('Community')
                            ? 'bold'
                            : 'normal',
                        }}>
                        Community
                      </span>
                    </a>
                  </div>
                </Link>
                <Link href={`/${router.query.lng}/Developers`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        GoogleAnalyticsEvent(
                          GoogleAnalyticsAction.NavDevelopers,
                          GoogleAnalyticsCategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontWeight: router.pathname.includes('Developers')
                            ? 'bold'
                            : 'normal',
                        }}>
                        Developers
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
          mediaQueryState === MediaQueryState.Mobile &&
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
