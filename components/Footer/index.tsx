import ElysiaLogo from 'assets/images/Elysia_Logo_White@2x.png';
import Image from 'next/image';
import { FooterWrapper } from './styles';
import Discord from 'assets/images/main/discord_white@2x.png';
import Github from 'assets/images/main/github_white@2x.png';
import Telegram from 'assets/images/main/telegram_white@2x.png';
import Twitter from 'assets/images/main/twitter_white@2x.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <div>
          <Image src={ElysiaLogo} alt={'ElysiaLogo'} width={149} height={31} />
        </div>
        <div>ELYSIA PLATFORM PTE. LTD</div>
        <div>
          ELYSIA c 2018·2022. All rights reserved. Media inquires for ELYSIA DAO
          LLC. - Contact <span>cs@elysia.land</span>
        </div>
      </div>
      <div>
        <section>
          <div>Wrapper</div>
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </section>
        <section>
          <div>
            <Link href="https://twitter.com/Elysia_HQ" passHref>
              <a rel="noopener noreferrer" target="_blank">
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
              <a rel="noopener noreferrer" target="_blank">
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
            <Link href="https://discord.com/invite/JjjYrE5Ww8" passHref>
              <a rel="noopener noreferrer" target="_blank">
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
              <a rel="noopener noreferrer" target="_blank">
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
