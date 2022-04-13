import { useWeb3React } from '@web3-react/core';
import Modal from 'components/Modals';
import DisconnectModal from 'components/Modals/DisconnectModal';
import SelectWalletModal from 'components/Modals/SelectWalletModal';
import ModalType from 'enums/ModalType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';
import ElysiaLogo from 'assets/images/elysia_logo@2x.png';
import Image from 'next/image';
import { isMetamask, isWalletConnector } from 'utils/connectWallet';
import walletConnectConnector from 'utils/walletConnectProvider';
import injectedConnector from 'core/connectors/injectedConnector';
import { useMediaQuery } from 'react-responsive';

const walletConnectProvider = walletConnectConnector();

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account, activate, deactivate } = useWeb3React();
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:768px)',
  });

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

  return (
    <>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        modalType={account ? ModalType.Disconnect : ModalType.Connect}
        setModalType={() => {}}
      />
      <div className={styles.navigation}>
        <div className={styles.navigation_wrapper}>
          <div className={styles.navigation_logo}>
            <Link href={`/${router.query.lng}/Governance`} passHref>
              <Image
                src={ElysiaLogo}
                alt={'ElysiaLogo'}
                width={isMobile ? 80 : 139}
                height={isMobile ? 18 : 31}
              />
            </Link>
          </div>
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
          <ConnectWalletButton modalVisible={() => setModalVisible(true)} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
