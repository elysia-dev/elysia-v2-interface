import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
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

const walletConnectProvider = walletConnectConnector();

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, activate, deactivate, library, chainId } = useWeb3React();
  const { txStatus, error } = useContext(TxContext);
  const [isConnectWalletLoading, setIsConnectWalletLoading] = useState(true);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (isWalletConnector()) {
      const walletConnect = async () => {
        await activate(walletConnectProvider);
        setIsConnectWalletLoading(false);
      };
      walletConnect();
      return;
    }
    if (isMetamask()) {
      activate(injectedConnector).then(() => {
        activate(injectedConnector).then(() => {
          setIsConnectWalletLoading(false);
        });
      });
    } else {
      deactivate();
      window.sessionStorage.removeItem('@network');
      setIsConnectWalletLoading(false);
    }
  }, [activate, deactivate]);

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
      <div className={styles.navigation}>
        <div className={styles.navigation_wrapper}>
          <div className={styles.navigation_logo}>
            <Link href={`/${router.query.lng}`} passHref>
              <a>
                <Image
                  src={ElysiaLogo}
                  alt={'ElysiaLogo'}
                  width={isMobile ? 100 : 139}
                  height={isMobile ? 21 : 31}
                />
              </a>
            </Link>
          </div>
          {!isMobile && (
            <div>
              <Link href={`/${router.query.lng}`} passHref>
                <a>
                  <span
                    style={{
                      cursor: 'pointer',
                      fontWeight:
                        router.pathname.length <= 6 ? 'bold' : 'normal',
                    }}>
                    EL Bridge
                  </span>
                </a>
              </Link>
              <Link href={`/${router.query.lng}/Governance`} passHref>
                <a>
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
              </Link>
              <Link href={`/${router.query.lng}/Ecosystem`} passHref>
                <a>
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
              </Link>
              <Link href={`/${router.query.lng}/Community`} passHref>
                <a>
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
              </Link>
              <Link href={`/${router.query.lng}/Developers`} passHref>
                <a>
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
              </Link>
              <Link href={`/${router.query.lng}/Documents`} passHref>
                <a>
                  <span
                    style={{
                      cursor: 'pointer',
                      fontWeight: router.pathname.includes('Documents')
                        ? 'bold'
                        : 'normal',
                    }}>
                    Documents
                  </span>
                </a>
              </Link>
            </div>
          )}
          <ConnectWalletButton
            modalVisible={() => setModalVisible(true)}
            isConnectWalletLoading={isConnectWalletLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
