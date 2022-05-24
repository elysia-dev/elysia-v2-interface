import { Trans, useTranslation } from 'react-i18next';
import { ProjectWrapper, TopWrapper, BorderedMargin } from './styles';
import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Image from 'next/image';
import Google from 'assets/images/ecosystem/google.png';
import Appstore from 'assets/images/ecosystem/appstore.png';
import Link from 'next/link';

const Top = () => {
  const { t, i18n } = useTranslation();
  const { isTablet } = useIsMobile();

  return (
    <>
      <TopWrapper>
        <div>
          <div>{t('ecosystem.top.0')}</div>
          <div>
            <Trans>{t('ecosystem.top.1')}</Trans>
          </div>
        </div>
      </TopWrapper>
      <BorderedMargin />
      <ProjectWrapper>
        <div>
          <div>{t('ecosystem.project.0')}</div>
          <div>
            <Trans>{t('ecosystem.project.1')}</Trans>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              window.open(
                i18n.language === 'ko'
                  ? 'https://www.elyfi.world/ko'
                  : 'https://www.elyfi.world/en',
                '_blank',
              )
            }>
            <div />
            <div>
              <div>ELYFI</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <Trans>{t('ecosystem.project.2')}</Trans>
            </div>
          </div>
          <div>
            <div>
              <div>{t('ecosystem.project.3')}</div>
            </div>
            <div>
              <div>{t('ecosystem.project.4')}</div>
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
            </div>
            <div>
              <Trans>{t('ecosystem.project.5')}</Trans>
            </div>
          </div>
          <div>
            <div>
              <div>Coming Soon!</div>
            </div>
            <div>
              <div>{t('ecosystem.project.6')}</div>
            </div>
            <div>
              <Trans>{t('ecosystem.project.7')}</Trans>
            </div>
          </div>
        </div>
      </ProjectWrapper>
    </>
  );
};

export default Top;
