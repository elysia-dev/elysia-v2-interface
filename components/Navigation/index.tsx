import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';
import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import { setWalletConnect } from 'utils/connectWallet';
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
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import { googleGAEvent } from 'utils/gaEvent';
import Wallet from 'enums/Wallet';
import {
  walletConnect,
  hooks as walletConnectHooks,
} from 'connector/walletConnect';
import { metaMask, hooks as metaMaskHooks } from 'connector/metaMask';

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { txStatus, error } = useContext(TxContext);
  const [isConnectWalletLoading, setIsConnectWalletLoading] = useState(false);
  const { isMobile, isLoading } = useIsMobile();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const {
    useAccount: useMetamaskAccount,
    useChainId: useMetamaskChainId,
    useENSName: useMetamaskENSName,
    useIsActive: useMeatamaskIsActive,
  } = metaMaskHooks;
  const {
    useAccount: useWalletConnectAccount,
    useChainId: useWalletConnectChainId,
    useENSName: useWalletConnectENSName,
    useIsActive: useWalletConnectIsActive,
  } = walletConnectHooks;

  const metamaskAccount = useMetamaskAccount();
  const metamaskChainId = useMetamaskChainId();
  const metamaskENSName = useMetamaskENSName();
  const metamaskIsAcive = useMeatamaskIsActive();

  const walletConnectAccount = useWalletConnectAccount();
  const walletConnectChainId = useWalletConnectChainId();
  const walletConnectENSName = useWalletConnectENSName();
  const walletConnectIsAcive = useWalletConnectIsActive();

  const connectWallet = useCallback((walletName: Wallet) => {
    if (walletName === Wallet.Metamask || walletName === Wallet.BrowserWallet) {
      metaMask
        .activate()
        .then(() => {
          setWalletConnect(Wallet.Metamask);
        })
        .catch((e: Error) => {
          console.error(e);
        });
      return;
    }
    if (walletName === Wallet.WalletConnect) {
      walletConnect
        .activate()
        .then(() => {
          setWalletConnect(Wallet.WalletConnect);
        })
        .catch((e: Error) => {
          console.error(e);
        });
      return;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('@connect') === 'Metamask') {
      connectWallet(Wallet.Metamask);
    }
    if (sessionStorage.getItem('@connect') === 'WalletConnect') {
      connectWallet(Wallet.WalletConnect);
    }
  }, [connectWallet]);

  useEffect(() => {
    if (txStatus === TxStatus.FAIL) {
      setModalVisible(false);
    }
  }, [txStatus]);

  useEffect(() => {
    if (typeof window === undefined) return;
    document.addEventListener('scroll', (_e: any) => {
      setIsScroll(5 < window.scrollY);
    });

    return () => {
      document.removeEventListener('scroll', (_e: any) => {
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
          {metamaskAccount || walletConnectAccount ? (
            <DisconnectModal
              onClose={() => setModalVisible(false)}
              account={metamaskAccount || walletConnectAccount}
              disconnectWallet={() => {
                if (metamaskIsAcive) {
                  metaMask.resetState();
                }
                if (walletConnectIsAcive) {
                  walletConnect.deactivate();
                }
              }}
            />
          ) : (
            <SelectWalletModal
              onClose={() => setModalVisible(false)}
              connectWallet={(wallet: Wallet) => connectWallet(wallet)}
            />
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
                  googleGAEvent(GoogleGAAction.NavHome, GoogleGACategory.Nav);
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
                <Link href={`/${router.query.lng}/ELBridge`} passHref>
                  <div>
                    <a
                      onClick={() => {
                        googleGAEvent(
                          GoogleGAAction.NavElBridge,
                          GoogleGACategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontFamily: router.pathname.includes('ELBridge')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
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
                        googleGAEvent(
                          GoogleGAAction.NavGovernance,
                          GoogleGACategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontFamily: router.pathname.includes('Governance')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
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
                        googleGAEvent(
                          GoogleGAAction.NavEcosystem,
                          GoogleGACategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontFamily: router.pathname.includes('Ecosystem')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
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
                        googleGAEvent(
                          GoogleGAAction.NavCommunity,
                          GoogleGACategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontFamily: router.pathname.includes('Community')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
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
                        googleGAEvent(
                          GoogleGAAction.NavDevelopers,
                          GoogleGACategory.Nav,
                        );
                      }}>
                      <span
                        style={{
                          cursor: 'pointer',
                          fontFamily: router.pathname.includes('Developers')
                            ? 'Gilroy-ExtraBold'
                            : 'Gilroy-Light',
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
                account={metamaskAccount || walletConnectAccount}
                chainId={metamaskChainId || walletConnectChainId}
                ensName={metamaskENSName || walletConnectENSName}
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
