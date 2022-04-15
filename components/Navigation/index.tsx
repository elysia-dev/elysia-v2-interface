import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';
import ElysiaLogo from 'assets/images/elysia_logo@2x.png';
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

const walletConnectProvider = walletConnectConnector();

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, activate, deactivate, library, chainId } = useWeb3React();
  const { txStatus, error } = useContext(TxContext);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isWalletConnector()) {
      activate(walletConnectProvider);
      return;
    }
    if (isMetamask()) {
      activate(injectedConnector).then(() => {
        activate(injectedConnector);
      });
    } else {
      deactivate();
      window.sessionStorage.removeItem('@network');
    }
  }, []);

  useEffect(() => {
    if (txStatus === TxStatus.FAIL) {
      setModalVisible(false);
    }
  }, [txStatus]);

  useEffect(() => {
    if (!library || chainId === 1 || !chainId) return;
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
            <Link href={`/${router.query.lng}/Governance`}>
              <>
                <Image
                  src={ElysiaLogo}
                  alt={'ElysiaLogo'}
                  width={isMobile ? 80 : 139}
                  height={isMobile ? 18 : 31}
                />
              </>
            </Link>
          </div>
          {!isMobile && (
            <div>
              <Link href={`/${router.query.lng}/Governance`}>
                <span
                  style={{
                    cursor: 'pointer',
                    fontWeight: router.pathname.includes('Governance')
                      ? 'bold'
                      : 'normal',
                  }}>
                  Governance
                </span>
              </Link>
            </div>
          )}
          <ConnectWalletButton modalVisible={() => setModalVisible(true)} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
