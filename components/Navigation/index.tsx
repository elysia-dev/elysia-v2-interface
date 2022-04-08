import { useWeb3React } from '@web3-react/core';
import Modal from 'components/Modals';
import DisconnectModal from 'components/Modals/DisconnectModal';
import SelectWalletModal from 'components/Modals/SelectWalletModal';
import ModalType from 'enums/ModalType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';
import ElysiaLogo from 'assets/images/elysia_logo@2x.png';
import Image from 'next/image';

const Navigation = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { account } = useWeb3React();

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
            <Link href={`/${router.query.lng}`} passHref>
              <Image
                src={ElysiaLogo}
                alt={'ElysiaLogo'}
                width={139}
                height={31}
              />
            </Link>
          </div>
          <div>
            <Link href={`/${router.query.lng}/Governance`}>Governance</Link>
          </div>
          <ConnectWalletButton modalVisible={() => setModalVisible(true)} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
