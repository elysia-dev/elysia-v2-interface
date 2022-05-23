import Link from 'next/link';
import { useRouter } from 'next/router';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';

const MobileMenu: React.FC<{
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
  onButtonClick: () => void;
}> = ({ modalVisible, isConnectWalletLoading, onButtonClick }) => {
  const router = useRouter();

  return (
    <article className={styles.navigation__hamburger__menu}>
      <section>
        <Link href={`/${router.query.lng}/ELBridge`} passHref>
          <a onClick={onButtonClick}>
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
        </Link>
        <Link href={`/${router.query.lng}/Governance`} passHref>
          <a onClick={onButtonClick}>
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
        </Link>
        <Link href={`/${router.query.lng}/Ecosystem`} passHref>
          <a onClick={onButtonClick}>
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
        </Link>
        <Link href={`/${router.query.lng}/Community`} passHref>
          <a onClick={onButtonClick}>
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
        </Link>
        <Link href={`/${router.query.lng}/Developers`} passHref>
          <a onClick={onButtonClick}>
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
          <a onClick={onButtonClick}>
            <span
              style={{
                cursor: 'pointer',
                fontFamily: router.pathname.includes('Documents')
                  ? 'Gilroy-ExtraBold'
                  : 'Gilroy-Light',
              }}>
              Documents
            </span>
          </a>
        </Link>
      </section>
      <ConnectWalletButton
        modalVisible={modalVisible}
        isConnectWalletLoading={isConnectWalletLoading}
      />
    </article>
  );
};

export default MobileMenu;
