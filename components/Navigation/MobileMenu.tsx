import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import LanguageType from 'enums/LanguageType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { googleGAEvent } from 'utils/gaEvent';
import ConnectWalletButton from './ConnectWalletButton';
import setLanguage from 'utils/setLanguage';

const MobileMenu: React.FC<{
  modalVisible: () => void;
  isConnectWalletLoading: boolean;
  onButtonClick: () => void;
}> = ({ modalVisible, isConnectWalletLoading, onButtonClick }) => {
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
    > p {
      color: #fff;
      font-size: 1.5rem;
      margin: 0;
      padding: 0 20px;
      &:first-child {
        padding-left: 0;
        border-right: 1px solid #fff;
      }
    }
  `;

  return (
    <Container>
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
                fontWeight: router.pathname.includes('ELBridge')
                  ? 'bold'
                  : 'normal',
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
                fontWeight: router.pathname.includes('Governance')
                  ? 'bold'
                  : 'normal',
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
                fontWeight: router.pathname.includes('Ecosystem')
                  ? 'bold'
                  : 'normal',
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
                fontWeight: router.pathname.includes('Community')
                  ? 'bold'
                  : 'normal',
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
      <LanguageContainer>
        <p
          onClick={() => {
            googleGAEvent(GoogleGAAction.NavLanguage, GoogleGACategory.Nav);
            setLanguage(LanguageType.KO);
          }}
          style={{
            fontWeight: lng === LanguageType.KO ? 'bold' : 'normal',
          }}>
          KOR
        </p>
        <p
          onClick={() => {
            googleGAEvent(GoogleGAAction.NavLanguage, GoogleGACategory.Nav);
            setLanguage(LanguageType.EN);
          }}
          style={{
            fontWeight: lng === LanguageType.EN ? 'bold' : 'normal',
          }}>
          ENG
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
