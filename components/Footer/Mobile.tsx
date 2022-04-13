import ElysiaLogoWhite from 'assets/images/Elysia_Logo_White.png';
import Blog from 'assets/images/blog.png';
import Fackbook from 'assets/images/facebook.png';
import Github from 'assets/images/github.png';
import Kakaotalk from 'assets/images/kakaotalk.png';
import Medium from 'assets/images/medium.png';
import Telegram from 'assets/images/telegram.png';
import Weibo from 'assets/images/weibo.png';
import Twitter from 'assets/images/twitter.png';
import { useTranslation } from 'react-i18next';
import Frame from 'react-frame-component';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Mobile = () => {
  const history = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-container">
        <div className="mobile-footer-wrapper">
          <div style={{ display: 'flex' }}>
            <div className="mobile-footer-container-contact">
              <p className="mobile-footer-header-text">{t('footer.contact')}</p>
              <p className="mobile-footer-text">{t('footer.email')}</p>
              <p
                className="mobile-footer-header-text"
                style={{ marginTop: 10 }}>
                {t('footer.contract')}
              </p>
              <a
                className="mobile-footer-text"
                target="_blank"
                rel="noreferrer"
                href="https://etherscan.io/token/0x2781246fe707bb15cee3e5ea354e2154a2877b16">
                {t('footer.el')}
              </a>
            </div>
            <div
              className="mobile-footer-container-contact"
              style={{ marginLeft: 100 }}>
              <p className="mobile-footer-header-text">
                {t('footer.language')}
              </p>
              <p
                className="mobile-footer-text"
                onClick={() => {
                  i18n.changeLanguage('en');
                }}>
                English
              </p>
              {/* <p className="footer__text" onClick={() => { i18n.changeLanguage("zhHans") }}>
                    中文
                  </p> */}
              <p
                className="mobile-footer-text"
                onClick={() => {
                  i18n.changeLanguage('ko');
                }}>
                한국어
              </p>
            </div>
          </div>
          <p className="mobile-footer-header-text">{t('footer.community')}</p>
          <div className="mobile-footer-container-icon">
            <div>
              <a
                className="mobile-footer-icon"
                href="https://twitter.com/Elysia_HQ">
                <Image
                  src={Twitter}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://open.kakao.com/o/gUpSOwkb">
                <Image
                  src={Kakaotalk}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://t.me/elysia_official">
                <Image
                  src={Telegram}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://github.com/elysia-dev">
                <Image
                  src={Github}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
            </div>
            <div>
              <a
                className="mobile-footer-icon"
                href="https://www.facebook.com/ElysiaHQ">
                <Image
                  src={Fackbook}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://www.weibo.com/u/7449962304">
                <Image
                  src={Weibo}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://medium.com/@ELYSIA_HQ">
                <Image
                  src={Medium}
                  className="mobile-footer-icon"
                  alt="Elysia"
                />
              </a>
              <a
                className="mobile-footer-icon"
                href="https://blog.naver.com/elysia_platform">
                <Image src={Blog} className="mobile-footer-icon" alt="Elysia" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-footer-lower">
        <div className="mobile-footer-container-logo">
          <Image
            src={ElysiaLogoWhite}
            className="mobile-elysia-logo-white"
            alt="Elysia"
            onClick={() => {
              history.push('/');
            }}
          />
          <p className="mobile-elysia-logo-text">
            {i18n.t('footer.logo_label')}
          </p>
        </div>
        <Frame
          style={{ border: 'none' }}
          initialContent='<!DOCTYPE html><html><head></head><body><script src="https://crypto.com/price/static/widget/index.js"></script>
               <div id="crypto-widget-CoinList" data-design="classic" data-coins="elysia"></div><div id="mountHere"></div></body></html>'></Frame>
        <div className="mobile-footer-link-wrapper">
          <p
            className="mobile-footer-privacy-policy mobile-footer-link"
            onClick={() => history.push('/privacyPolicy')}>
            Privacy Policy
          </p>
          <p
            className="mobile-footer-terms-fo-service mobile-footer-link"
            onClick={() => history.push('/disclaimer')}>
            Disclaimer
          </p>
          <p
            className="mobile-footer-terms-fo-service mobile-footer-link"
            onClick={() => {
              window.location.replace('https://elysia-docs.elysia.land/');
            }}>
            Whitepaper
          </p>
        </div>
        <p className="mobile-footer-copyright">{i18n.t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Mobile;
