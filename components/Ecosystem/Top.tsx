import { Trans, useTranslation } from 'react-i18next';
import { ProjectWrapper, TopWrapper, BorderedMargin } from './styles';
import Arrow from 'assets/images/developers/arrow.svg';
import useMediaQueryState from 'hooks/useMediaQueryState';
import Image from 'next/image';
import Google from 'assets/images/ecosystem/google.png';
import Appstore from 'assets/images/ecosystem/appstore.png';
import Link from 'next/link';
import PageHeader from 'components/Common/PageHeader';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import { ELYFI_LINK_EN, ELYFI_LINK_KO } from 'constant';

const Top = () => {
  const { t, i18n } = useTranslation();
  const mediaQueryState = useMediaQueryState();

  return (
    <>
      <TopWrapper>
        <PageHeader
          headers={[
            t('ecosystem.top.0'),
            t('main.section_ecosystem.1'),
            t('ecosystem.top.1'),
          ]}
        />
      </TopWrapper>
      <BorderedMargin />
      <ProjectWrapper>
        <h2>{t('ecosystem.project.0')}</h2>
        <p>
          <Trans>{t('ecosystem.project.1')}</Trans>
        </p>
        <article>
          <section
            onClick={() => {
              window.open(
                i18n.language === 'ko' ? ELYFI_LINK_KO : ELYFI_LINK_EN,
                '_blank',
              );
              gtag.event({
                action: GoogleAnalyticsAction.EcoElyfi,
                category: GoogleAnalyticsCategory.Ecosystem,
                label: '',
              });
            }}>
            <figure className="image-containers" />
            <section>
              <h2>ELYFI</h2>
              <div>
                {!(mediaQueryState.mobile || mediaQueryState.tablet) && (
                  <Arrow />
                )}
              </div>
            </section>
            <p>
              <Trans>{t('ecosystem.project.2')}</Trans>
            </p>
          </section>

          <section>
            <figure className="image-containers">
              <figcaption>{t('ecosystem.project.3')}</figcaption>
            </figure>
            <section>
              <h2>{t('ecosystem.project.4')}</h2>
              <div>
                <Link
                  href={
                    'https://play.google.com/store/apps/details?id=land.elysia'
                  }
                  passHref>
                  <a target="_blank" rel="noopener noreferer">
                    <Image src={Google} alt={'google'} width={38} height={38} />
                  </a>
                </Link>
              </div>
              <div>
                <Link
                  href={'https://apps.apple.com/kr/app/elysia/id1536733411'}
                  passHref>
                  <a target="_blank" rel="noopener noreferer">
                    <Image
                      src={Appstore}
                      alt={'Appstore'}
                      width={38}
                      height={38}
                    />
                  </a>
                </Link>
              </div>
            </section>
            <p>
              <Trans>{t('ecosystem.project.5')}</Trans>
            </p>
          </section>

          <section>
            <figure className="image-containers">
              <figcaption>Coming Soon!</figcaption>
            </figure>
            <section>
              <h2>{t('ecosystem.project.6')}</h2>
            </section>
            <p>
              <Trans>{t('ecosystem.project.7')}</Trans>
            </p>
          </section>
        </article>
      </ProjectWrapper>
    </>
  );
};

export default Top;
