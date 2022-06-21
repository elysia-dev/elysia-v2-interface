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
import { GoogleAnalyticsEvent } from 'utils/gaEvent';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Footer = () => {
  const { i18n } = useTranslation();

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
          <Link
            href={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                GoogleAnalyticsEvent(
                  GoogleAnalyticsAction.FooterWhitePaper,
                  GoogleAnalyticsCategory.Footer,
                );
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
                  GoogleAnalyticsEvent(
                    GoogleAnalyticsAction.FooterTwitter,
                    GoogleAnalyticsCategory.Footer,
                  );
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
                  GoogleAnalyticsEvent(
                    GoogleAnalyticsAction.FooterTelegram,
                    GoogleAnalyticsCategory.Footer,
                  );
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
                  GoogleAnalyticsEvent(
                    GoogleAnalyticsAction.FooterDiscord,
                    GoogleAnalyticsCategory.Footer,
                  );
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
                  GoogleAnalyticsEvent(
                    GoogleAnalyticsAction.FooterGithub,
                    GoogleAnalyticsCategory.Footer,
                  );
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
