import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import { FooterWrapper } from './styles';
import Discord from 'assets/images/main/discord_white@2x.webp';
import Github from 'assets/images/main/github_white@2x.webp';
import Telegram from 'assets/images/main/telegram_white@2x.webp';
import Twitter from 'assets/images/main/twitter_white@2x.webp';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Footer = () => {
  const { i18n } = useTranslation();
  const whitepaperLink =
    i18n.language === 'ko'
      ? 'https://elysia.gitbook.io/elysia-whitepaper-v2.1/'
      : 'https://elysia.gitbook.io/elysia-whitepaper-v2.1/v/english-3/';
  return (
    <FooterWrapper>
      <div>
        <div>
          <Image src={ElysiaLogo} alt={'ElysiaLogo'} width={149} height={31} />
        </div>
        <div>ELYSIA DAO LLC.</div>
        <div>
          ELYSIA c 2018·2022. All rights reserved. Media inquires for ELYSIA DAO
          LLC. - Contact <span>cs@elysia.land</span>
        </div>
      </div>
      <div>
        <section>
          <Link href={whitepaperLink} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.FooterWhitePaper,
                  category: GoogleAnalyticsCategory.Footer,
                  label: '',
                });
              }}>
              <div>White Paper</div>
            </a>
          </Link>
          <Link href={`/${i18n.language}/Policy`} passHref>
            <a>
              <div>Privacy Policy</div>
            </a>
          </Link>
          <Link href={`/${i18n.language}/Disclaimer`} passHref>
            <a>
              <div>Disclaimer</div>
            </a>
          </Link>
        </section>
        <section>
          <div>
            <Link href="https://twitter.com/Elysia_HQ" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.FooterTwitter,
                    category: GoogleAnalyticsCategory.Footer,
                    label: '',
                  });
                }}>
                <Image
                  src={Twitter}
                  alt={'Twitter'}
                  width={35.21}
                  height={35.21}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://t.me/elysia_official" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.FooterTelegram,
                    category: GoogleAnalyticsCategory.Footer,
                    label: '',
                  });
                }}>
                <Image
                  src={Telegram}
                  alt={'Telegram'}
                  width={35.21}
                  height={35.21}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://discord.gg/d8zveNum7g" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.FooterDiscord,
                    category: GoogleAnalyticsCategory.Footer,
                    label: '',
                  });
                }}>
                <Image
                  src={Discord}
                  alt={'Discord'}
                  width={35.21}
                  height={35.21}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/elysia-dev" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.FooterGithub,
                    category: GoogleAnalyticsCategory.Footer,
                    label: '',
                  });
                }}>
                <Image
                  src={Github}
                  alt={'Github'}
                  width={35.21}
                  height={35.21}
                />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
