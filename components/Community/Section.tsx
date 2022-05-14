import { NoiseSvg } from 'components/Main/styles';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Image from 'next/image';
import Discord from 'assets/images/community/discord_white@2x.webp';
import Git from 'assets/images/community/git@2x.webp';
import Facebook from 'assets/images/community/facebook@2x.webp';
import Kakao from 'assets/images/community/kakao_white@2x.webp';
import Medium from 'assets/images/community/medium@2x.webp';
import Elysia from 'assets/images/community/elysia_icon@2x.webp';
import Snapshot from 'assets/images/community/snapshot@2x.webp';
import Tally from 'assets/images/community/tally@2x.webp';
import Telegram from 'assets/images/community/telegram_white@2x.webp';
import Twitter from 'assets/images/community/twitter@2x.webp';
import We_chat from 'assets/images/community/wechat_@2x.webp';
import Wechat from 'assets/images/community/wechat@2x.webp';
import useIsMobile from 'hooks/useIsMobile';
import { useEffect, useState } from 'react';
import ContentItem from 'components/Common/ContentItem';
import useResizeBrowser from 'hooks/useResizeBrowser';

const Section = () => {
  const { t } = useTranslation();
  const { isDesktop } = useIsMobile();
  const { browserHeight } = useResizeBrowser();

  return (
    <>
      <NoiseSvg>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="5.6" />
        </filter>
      </NoiseSvg>
      <SectionWrapper theme={browserHeight}>
        <div>
          <div>
            <div>{t('community.0')}</div>
            <div>{t('community.1')}</div>
            <Trans>{t('community.2')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.3')}</div>
            <div>
              <ContentItem
                Icon={
                  <Image
                    src={Discord}
                    alt={'Discord'}
                    width={isDesktop ? 20 : 30}
                    height={isDesktop ? 20 : 30}
                  />
                }
                contentName={'Discord'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Telegram}
                    alt={'Telegram'}
                    width={isDesktop ? 21 : 31}
                    height={isDesktop ? 21 : 31}
                  />
                }
                contentName={'Telegram'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Kakao}
                    alt={'Kakao'}
                    width={isDesktop ? 19 : 29}
                    height={isDesktop ? 19 : 29}
                  />
                }
                contentName={'Kakaotalk'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={We_chat}
                    alt={'Wechat'}
                    width={isDesktop ? 20 : 30}
                    height={isDesktop ? 20 : 30}
                  />
                }
                contentName={'Wechat'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.4')}</div>
            <div>
              <ContentItem
                Icon={
                  <Image
                    src={Elysia}
                    alt={'Elysia'}
                    width={isDesktop ? 17 : 27}
                    height={isDesktop ? 19.72 : 29.72}
                  />
                }
                contentName={'Elysia'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Tally}
                    alt={'Tally'}
                    width={isDesktop ? 10 : 20}
                    height={isDesktop ? 18 : 28}
                  />
                }
                contentName={'Tally'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Snapshot}
                    alt={'Snapshot'}
                    width={isDesktop ? 13 : 23}
                    height={isDesktop ? 17 : 27}
                  />
                }
                contentName={'Snapshot'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.5')}</div>
            <div>
              <ContentItem
                Icon={
                  <Image
                    src={Git}
                    alt={'Git'}
                    width={isDesktop ? 24.42 : 34.42}
                    height={isDesktop ? 24.42 : 34.42}
                  />
                }
                contentName={'Github'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Medium}
                    alt={'Medium'}
                    width={isDesktop ? 28 : 38}
                    height={isDesktop ? 11 : 21}
                  />
                }
                contentName={'Medium'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('community.6')}</div>
            <div>
              <ContentItem
                Icon={
                  <Image
                    src={Twitter}
                    alt={'Twitter'}
                    width={isDesktop ? 21 : 31}
                    height={isDesktop ? 21 : 31}
                  />
                }
                contentName={'Twitter'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Facebook}
                    alt={'Facebook'}
                    width={isDesktop ? 23.52 : 33.52}
                    height={isDesktop ? 23.52 : 33.52}
                  />
                }
                contentName={'Facebook'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Medium}
                    alt={'Medium'}
                    width={isDesktop ? 28 : 38}
                    height={isDesktop ? 11 : 21}
                  />
                }
                contentName={'Medium'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
              <ContentItem
                Icon={
                  <Image
                    src={Wechat}
                    alt={'Wechat'}
                    width={isDesktop ? 22 : 32}
                    height={isDesktop ? 16 : 26}
                  />
                }
                contentName={'Wechat'}
                link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
