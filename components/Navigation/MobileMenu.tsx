import LanguageContext from 'contexts/LanguageContext';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import LanguageType from 'enums/LanguageType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import * as gtag from 'lib/gtag';
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
        <Link href={`/${router.query.lng}/Governance`} passHref>
          <a
            onClick={() => {
              onButtonClick();
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
              Governance
            </span>
          </a>
        </Link>
        <Link href={`/${router.query.lng}/Ecosystem`} passHref>
          <a
            onClick={() => {
              onButtonClick();
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
              Ecosystem
            </span>
          </a>
        </Link>
        <Link href={`/${router.query.lng}/Community`} passHref>
          <a
            onClick={() => {
              onButtonClick();
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
              Community
            </span>
          </a>
        </Link>
        <Link href={`/${router.query.lng}/Developers`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              gtag.event({
                action: GoogleAnalyticsAction.NavDevelopers,
                category: GoogleAnalyticsCategory.Nav,
                label: '',
              });
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
        <Link href={`/${router.query.lng}/FAQ`} passHref>
          <a
            onClick={() => {
              onButtonClick();
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
              FAQ
            </span>
          </a>
        </Link>
      </section>
      <article className={styles.navigation__hamburger__language}>
        <p
          onClick={() => {
            gtag.event({
              action: GoogleAnalyticsAction.NavLanguage,
              category: GoogleAnalyticsCategory.Nav,
              label: '',
            });
            setLanguage(LanguageType.KO);
          }}
          style={{
            fontWeight: lng === LanguageType.KO ? 'bolder' : 400,
          }}>
          KOR
        </p>
        <p
          onClick={() => {
            gtag.event({
              action: GoogleAnalyticsAction.NavLanguage,
              category: GoogleAnalyticsCategory.Nav,
              label: '',
            });
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
