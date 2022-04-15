import ElysiaLogoWhite from 'assets/images/Elysia_Logo_White.png';
import Blog from 'assets/images/blog.png';
import Fackbook from 'assets/images/facebook.png';
import Github from 'assets/images/github.png';
import Kakaotalk from 'assets/images/kakaotalk.png';
import Medium from 'assets/images/medium.png';
import Telegram from 'assets/images/telegram.png';
import Weibo from 'assets/images/weibo.png';
import Twitter from 'assets/images/twitter.png';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Frame from 'react-frame-component';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Desktop: FunctionComponent = () => {
  const history = useRouter();
  const { i18n, t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__wrapper">
            <div className="footer__container--left">
              <div className="footer__logo__wrapper">
                <Image
                  src={ElysiaLogoWhite}
                  style={{ cursor: 'pointer' }}
                  className="elysia-white-logo"
                  alt="Elysia"
                  onClick={() => {
                    history.push('/');
                  }}
                />
                <p className="footer__logo-text">{t('footer.logo_label')}</p>
                <Frame
                  style={{ border: 'none', width: 220 }}
                  initialContent='<!DOCTYPE html><html><head></head><body><script src="https://crypto.com/price/static/widget/index.js"></script>
                  <div id="crypto-widget-CoinList" data-design="classic" data-coins="elysia"></div><div id="mountHere"></div></body></html>'></Frame>
              </div>
              <div
                className="footer__contact-container"
                style={{ marginLeft: 'auto' }}>
                <p className="footer__header-text">{t('footer.contact')}</p>
                <p className="footer__text">{t('footer.email')}</p>
                <p className="footer__header-text" style={{ marginTop: 10 }}>
                  {t('footer.contract')}
                </p>
                <a
                  className="footer__text"
                  target="_blank"
                  rel="noreferrer"
                  href="https://etherscan.io/token/0x2781246fe707bb15cee3e5ea354e2154a2877b16">
                  {t('footer.el')}
                </a>
                <a
                  className="footer__text"
                  target="_blank"
                  rel="noreferrer"
                  href="https://etherscan.io/token/0x4dA34f8264CB33A5c9F17081B9EF5Ff6091116f4">
                  {t('footer.elfi')}
                </a>
              </div>
              <div
                className="footer__contact-container"
                style={{ marginLeft: 100 }}>
                <p className="footer__header-text">{t('footer.language')}</p>
                <p
                  className="footer__text"
                  onClick={() => {
                    i18n.changeLanguage('en');
                    history.push(`/en/Governance`);
                  }}>
                  English
                </p>
                {/* <p className="footer__text" onClick={() => { i18n.changeLanguage("zhHans") }}>
                  中文
                </p> */}
                <p
                  className="footer__text"
                  onClick={() => {
                    i18n.changeLanguage('ko');
                    history.push(`/ko/Governance`);
                  }}>
                  한국어
                </p>
              </div>
            </div>
            <div className="footer__container--right">
              <p className="footer__header-text">{t('footer.community')}</p>
              <div>
                <div>
                  <Link href="https://twitter.com/Elysia_HQ">
                    <Image
                      src={Twitter}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://open.kakao.com/o/gUpSOwkb">
                    <Image
                      src={Kakaotalk}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://t.me/elysia_official">
                    <Image
                      src={Telegram}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://github.com/elysia-dev">
                    <Image
                      src={Github}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <br />
                <div>
                  <Link href="https://www.facebook.com/ElysiaHQ">
                    <Image
                      src={Fackbook}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://www.weibo.com/u/7449962304">
                    <Image
                      src={Weibo}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://medium.com/@ELYSIA_HQ">
                    <Image
                      src={Medium}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://blog.naver.com/elysia_platform">
                    <Image
                      src={Blog}
                      className="footer__icon"
                      alt="Elysia"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__lower">
          <p className="footer__text--copyright">{t('footer.copyright')}</p>
          <p
            className="footer__text--whitepaper"
            onClick={() => {
              window.location.replace('https://elysia-docs.elysia.land/');
            }}>
            Whitepaper
          </p>
        </div>
      </footer>
    </>
  );
};

export default Desktop;
