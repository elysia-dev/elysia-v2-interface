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
import useIsMobile from 'hooks/useIsMobile';
import ContentItem from 'components/Common/ContentItem';
import useResizeBrowser from 'hooks/useResizeBrowser';
import PageHeader from 'components/Common/PageHeader';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGACategory from 'enums/GoogleGACategory';
import GoogleGAAction from 'enums/GoogleGAAction';

const Section = () => {
  const { t } = useTranslation();
  const { isDesktop } = useIsMobile();
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
                  width={isDesktop ? 20 : 30}
                  height={isDesktop ? 20 : 30}
                />
              }
              contentName={'Discord'}
              link={'https://discord.gg/d8zveNum7g'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityDiscord,
                  GoogleGACategory.Community,
                )
              }
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
              link={'https://t.me/elysia_official'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityTelegram,
                  GoogleGACategory.Community,
                )
              }
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
              link={'https://open.kakao.com/o/gUpSOwkb'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityKakaotalk,
                  GoogleGACategory.Community,
                )
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
                  width={isDesktop ? 24.42 : 34.42}
                  height={isDesktop ? 24.42 : 34.42}
                />
              }
              contentName={'Github'}
              link={'https://github.com/elysia-dev'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityGithub,
                  GoogleGACategory.Community,
                )
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Medium}
                  alt={'Tech Blog'}
                  width={isDesktop ? 28 : 38}
                  height={isDesktop ? 11 : 21}
                />
              }
              contentName={'Tech Blog'}
              link={'https://tech.elysia.land/'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityTechBlog,
                  GoogleGACategory.Community,
                )
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
                  width={isDesktop ? 21 : 31}
                  height={isDesktop ? 21 : 31}
                />
              }
              contentName={'Twitter'}
              link={'https://twitter.com/Elysia_HQ'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityTwitter,
                  GoogleGACategory.Community,
                )
              }
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
              link={'https://www.facebook.com/ElysiaHQ'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityFacebook,
                  GoogleGACategory.Community,
                )
              }
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
              link={'https://medium.com/elysia-magazine'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityMedium,
                  GoogleGACategory.Community,
                )
              }
            />
            <ContentItem
              Icon={
                <Image
                  src={Weibo}
                  alt={'Weibo'}
                  width={isDesktop ? 22 : 32}
                  height={isDesktop ? 16 : 26}
                />
              }
              contentName={'Weibo'}
              link={'https://weibo.com/u/7449962304'}
              onClickEvent={() =>
                googleGAEvent(
                  GoogleGAAction.CommunityWeibo,
                  GoogleGACategory.Community,
                )
              }
            />
          </div>
        </article>
      </SectionWrapper>
    </>
  );
};

export default Section;
