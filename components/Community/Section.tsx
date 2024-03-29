import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Image from 'next/image';
import Discord from 'assets/images/community/discord_white@2x.webp';
import Git from 'assets/images/community/git@2x.webp';
import Facebook from 'assets/images/community/facebook@2x.webp';
import Kakao from 'assets/images/community/kakao_white@2x.webp';
import Medium from 'assets/images/community/medium@2x.webp';
import Telegram from 'assets/images/community/telegram_white@2x.webp';
import Twitter from 'assets/images/community/twitter@2x.webp';
import Weibo from 'assets/images/community/weibo@2x.webp';
import useMediaQueryState from 'hooks/useMediaQueryState';
import ContentItem from 'components/Common/ContentItem';
import useResizeBrowser from 'hooks/useResizeBrowser';
import PageHeader from 'components/Common/PageHeader';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';

const Section = () => {
  const { t } = useTranslation();
  const mediaQueryState = useMediaQueryState();
  const { browserHeight } = useResizeBrowser();

  return (
    <>
      <SectionWrapper theme={browserHeight}>
        <PageHeader
          headers={[t('community.0'), t('community.1'), t('community.2')]}
        />
        <article>
          <h2>{t('community.3')}</h2>
          <div>
            <ContentItem
              Icon={
                <Image
                  src={Discord}
                  alt={'Discord'}
                  width={mediaQueryState.desktop ? 20 : 30}
                  height={mediaQueryState.desktop ? 20 : 30}
                />
              }
              contentName={'Discord'}
              link={'https://discord.gg/d8zveNum7g'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityDiscord,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Telegram}
                  alt={'Telegram'}
                  width={mediaQueryState.desktop ? 21 : 31}
                  height={mediaQueryState.desktop ? 21 : 31}
                />
              }
              contentName={'Telegram'}
              link={'https://t.me/elysia_official'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityTelegram,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Kakao}
                  alt={'Kakao'}
                  width={mediaQueryState.desktop ? 19 : 29}
                  height={mediaQueryState.desktop ? 19 : 29}
                />
              }
              contentName={'Kakaotalk'}
              link={'https://open.kakao.com/o/gUpSOwkb'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityKakaotalk,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <div></div>
          </div>
        </article>
        <article>
          <h2>{t('community.5')}</h2>
          <div>
            <ContentItem
              Icon={
                <Image
                  src={Git}
                  alt={'Git'}
                  width={mediaQueryState.desktop ? 24.42 : 34.42}
                  height={mediaQueryState.desktop ? 24.42 : 34.42}
                />
              }
              contentName={'Github'}
              link={'https://github.com/elysia-dev'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityGithub,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Medium}
                  alt={'Tech Blog'}
                  width={mediaQueryState.desktop ? 28 : 38}
                  height={mediaQueryState.desktop ? 11 : 21}
                />
              }
              contentName={'Tech Blog'}
              link={'https://tech.elysia.land/'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityTechBlog,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <div></div>
            <div></div>
          </div>
        </article>
        <article>
          <h2>{t('community.6')}</h2>
          <div>
            <ContentItem
              Icon={
                <Image
                  src={Twitter}
                  alt={'Twitter'}
                  width={mediaQueryState.desktop ? 21 : 31}
                  height={mediaQueryState.desktop ? 21 : 31}
                />
              }
              contentName={'Twitter'}
              link={'https://twitter.com/Elysia_HQ'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityTwitter,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Facebook}
                  alt={'Facebook'}
                  width={mediaQueryState.desktop ? 23.52 : 33.52}
                  height={mediaQueryState.desktop ? 23.52 : 33.52}
                />
              }
              contentName={'Facebook'}
              link={'https://www.facebook.com/ElysiaHQ'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityFacebook,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Medium}
                  alt={'Medium'}
                  width={mediaQueryState.desktop ? 28 : 38}
                  height={mediaQueryState.desktop ? 11 : 21}
                />
              }
              contentName={'Medium'}
              link={'https://medium.com/elysia-magazine'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityMedium,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Weibo}
                  alt={'Weibo'}
                  width={mediaQueryState.desktop ? 22 : 32}
                  height={mediaQueryState.desktop ? 16 : 26}
                />
              }
              contentName={'Weibo'}
              link={'https://weibo.com/u/7449962304'}
              onClickEvent={() =>
                gtag.event({
                  action: GoogleAnalyticsAction.CommunityWeibo,
                  category: GoogleAnalyticsCategory.Community,
                  label: '',
                })
              }
            />
          </div>
        </article>
      </SectionWrapper>
    </>
  );
};

export default Section;
