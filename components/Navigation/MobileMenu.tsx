import LanguageContext from 'contexts/LanguageContext';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import LanguageType from 'enums/LanguageType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { googleGAEvent } from 'utils/gaEvent';
import ConnectWalletButton from './ConnectWalletButton';
import styles from './Navigation.module.scss';

const MobileMenu: React.FC<{
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
  onButtonClick: () => void;
}> = ({ modalVisible, isConnectWalletLoading, onButtonClick }) => {
  const router = useRouter();

  const { setLanguage } = useContext(LanguageContext);
  const lng = router.asPath.substring(1, 3);

  return (
    <article className={styles.navigation__hamburger__menu}>
      <section>
        <Link href={`/${router.query.lng}/ELBridge`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              googleGAEvent(GoogleGAAction.NavElBridge, GoogleGACategory.Nav);
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
        </Link>
        <Link href={`/${router.query.lng}/Governance`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              googleGAEvent(GoogleGAAction.NavGovernance, GoogleGACategory.Nav);
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
        </Link>
        <Link href={`/${router.query.lng}/Ecosystem`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              googleGAEvent(GoogleGAAction.NavEcosystem, GoogleGACategory.Nav);
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
        </Link>
        <Link href={`/${router.query.lng}/Community`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              googleGAEvent(GoogleGAAction.NavCommunity, GoogleGACategory.Nav);
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
        </Link>
        <Link href={`/${router.query.lng}/Developers`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              googleGAEvent(GoogleGAAction.NavDevelopers, GoogleGACategory.Nav);
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
        </Link>
      </section>
      <article className={styles.navigation__hamburger__language}>
        <p
          onClick={() => {
            googleGAEvent(GoogleGAAction.NavLanguage, GoogleGACategory.Nav);
            setLanguage(LanguageType.KO);
          }}
          style={{
            fontWeight: lng === LanguageType.KO ? 'bolder' : 400,
          }}>
          KOR
        </p>
        <p
          onClick={() => {
            googleGAEvent(GoogleGAAction.NavLanguage, GoogleGACategory.Nav);
            setLanguage(LanguageType.EN);
          }}
          style={{
            fontWeight: lng === LanguageType.EN ? 'bolder' : 400,
          }}>
          ENG
        </p>
      </article>
      <ConnectWalletButton
        modalVisible={modalVisible}
        isConnectWalletLoading={isConnectWalletLoading}
      />
    </article>
  );
};

export default MobileMenu;
