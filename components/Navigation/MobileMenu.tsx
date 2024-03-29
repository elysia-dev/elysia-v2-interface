import LanguageType from 'enums/LanguageType';
import { t } from 'i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import ConnectWalletButton from './ConnectWalletButton';
import LanguageContext from 'contexts/LanguageContext';
import { useContext } from 'react';

const MobileMenu: React.FC<{
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
  onButtonClick: () => void;
}> = ({ modalVisible, isConnectWalletLoading, onButtonClick }) => {
  const { setLanguage } = useContext(LanguageContext);
  const router = useRouter();

  const lng = router.asPath.substring(1, 3);

  const Container = styled.article`
    display: flex;
    flex-direction: column;
    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 5vh;
      border-top: 1px solid #ffffff66;
      margin-bottom: 4vh;
      > a {
        height: 5.5vh;
        line-height: 5.5vh;
        font-size: 1.5rem;
        margin: 10px 0;
        color: #fff;
      }
    }
    > button {
      width: 100%;
      height: 50px;
      justify-content: space-around;
      @media (max-width: 460px) {
        height: 35px;
        margin: 0;
      }
      > div {
        font-size: 20px;
        letter-spacing: 0.8px;
        color: #fff;
      }
    }
  `;
  const LanguageContainer = styled.article`
    display: flex;
    flex-direction: row;
    margin-bottom: 4vh;
    cursor: pointer;
    > * + * {
      border-left: 1px solid #fff;
    }
    > p {
      color: #fff;
      font-size: 1.5rem;
      margin: 0;
      padding: 0 20px;
      &:first-child {
        padding-left: 0;
      }
    }
  `;

  return (
    <Container>
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
                fontWeight: router.pathname.includes('Governance')
                  ? 'bold'
                  : 'normal',
              }}>
              {t('meta.governance')}
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
                fontWeight: router.pathname.includes('Ecosystem')
                  ? 'bold'
                  : 'normal',
              }}>
              {t('meta.ecosystem')}
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
                fontWeight: router.pathname.includes('Community')
                  ? 'bold'
                  : 'normal',
              }}>
              {t('meta.community')}
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
              {t('meta.development')}
            </span>
          </a>
        </Link>
        <Link href={`/${router.query.lng}/Roadmap`} passHref>
          <a
            onClick={() => {
              onButtonClick();
              gtag.event({
                action: GoogleAnalyticsAction.Roadmap,
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
              {t('meta.roadmap')}
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
              {t('meta.faq')}
            </span>
          </a>
        </Link>
      </section>
      <LanguageContainer>
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
            fontWeight: lng === LanguageType.KO ? 'bold' : 'normal',
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
            fontWeight: lng === LanguageType.EN ? 'bold' : 'normal',
          }}>
          ENG
        </p>
        <p
          onClick={() => {
            gtag.event({
              action: GoogleAnalyticsAction.NavLanguage,
              category: GoogleAnalyticsCategory.Nav,
              label: '',
            });
            setLanguage(LanguageType.ZHHANS);
          }}
          style={{
            fontWeight: lng === LanguageType.ZHHANS ? 'bold' : 'normal',
          }}>
          CHN
        </p>
      </LanguageContainer>
      <ConnectWalletButton
        modalVisible={modalVisible}
        isConnectWalletLoading={isConnectWalletLoading}
      />
    </Container>
  );
};

export default MobileMenu;
