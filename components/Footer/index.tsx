import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import {
  AnchorLink,
  Container,
  IconLink,
  LeftWrapper,
  RightWrapper,
} from './styles';
import Discord from 'assets/images/main/discord_white@2x.webp';
import Github from 'assets/images/main/github_white@2x.webp';
import Telegram from 'assets/images/main/telegram_white@2x.webp';
import Twitter from 'assets/images/main/twitter_white@2x.webp';
import Link from 'next/link';
import GoogleGAAction from 'enums/GoogleGAAction';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGACategory from 'enums/GoogleGACategory';
import { Trans, useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <LeftWrapper>
        <figure>
          <Image src={ElysiaLogo} alt={'ElysiaLogo'} width={149} height={31} />
        </figure>
        <strong>{t('footer.logoLabel')}</strong>
        <p>
          <Trans>{t('footer.content')}</Trans>
        </p>
      </LeftWrapper>
      <RightWrapper>
        <AnchorLink>
          <Link
            href={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                googleGAEvent(
                  GoogleGAAction.FooterWhitePaper,
                  GoogleGACategory.Footer,
                );
              }}>
              <p>{t('footer.whitepaper')}</p>
            </a>
          </Link>
          <Link href={`/${i18n.language}/Policy`} passHref>
            <a>
              <p>{t('footer.privacyPolicy')}</p>
            </a>
          </Link>
          <Link href={`/${i18n.language}/Disclaimer`} passHref>
            <a>
              <p>{t('footer.disclaimer')}</p>
            </a>
          </Link>
        </AnchorLink>
        <IconLink>
          <div>
            <Link href="https://twitter.com/Elysia_HQ" passHref>
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.FooterTwitter,
                    GoogleGACategory.Footer,
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
                  googleGAEvent(
                    GoogleGAAction.FooterTelegram,
                    GoogleGACategory.Footer,
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
                  googleGAEvent(
                    GoogleGAAction.FooterDiscord,
                    GoogleGACategory.Footer,
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
                  googleGAEvent(
                    GoogleGAAction.FooterGithub,
                    GoogleGACategory.Footer,
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
        </IconLink>
      </RightWrapper>
    </Container>
  );
};

export default Footer;
