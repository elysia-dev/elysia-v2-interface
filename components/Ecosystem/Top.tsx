import { Trans, useTranslation } from 'react-i18next';
import { ProjectWrapper, TopWrapper, BorderedMargin } from './styles';
import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Image from 'next/image';
import Google from 'assets/images/ecosystem/google.png';
import Appstore from 'assets/images/ecosystem/appstore.png';
import Link from 'next/link';
import PageHeader from 'components/Common/PageHeader';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

const Top = () => {
  const { t, i18n } = useTranslation();
  const { isTablet } = useIsMobile();

  return (
    <>
      <TopWrapper>
        <PageHeader
          headers={[
            t('ecosystem.top.0'),
            t('main.sectionEcosystem.1'),
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
                i18n.language === 'ko'
                  ? 'https://www.elyfi.world/ko'
                  : 'https://www.elyfi.world/en',
                '_blank',
              );
              googleGAEvent(
                GoogleGAAction.EcoElyfi,
                GoogleGACategory.Ecosystem,
              );
            }}>
            <figure className="image-containers" />
            <section>
              <h2>ELYFI</h2>
              <div>{!isTablet && <Arrow />}</div>
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
