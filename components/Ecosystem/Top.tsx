import { NoiseSvg } from 'components/Main/styles';
import { Trans, useTranslation } from 'react-i18next';
import { ProjectWrapper, TopWrapper } from './styles';
import Arrow from 'assets/images/developers/arrow.svg';
import useIsMobile from 'hooks/useIsMobile';
import Image from 'next/image';
import Google from 'assets/images/ecosystem/google.png';
import Appstore from 'assets/images/ecosystem/appstore.png';

const Top = () => {
  const { t } = useTranslation();
  const { isTablet } = useIsMobile();

  return (
    <>
      <NoiseSvg>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="5.6" />
        </filter>
      </NoiseSvg>
      <TopWrapper>
        <div>
          <div>{t('ecosystem.top.0')}</div>
          <div>
            <Trans>{t('ecosystem.top.1')}</Trans>
          </div>
        </div>
      </TopWrapper>
      <ProjectWrapper>
        <div>
          <div>{t('ecosystem.project.0')}</div>
          <div>
            <Trans>{t('ecosystem.project.1')}</Trans>
          </div>
        </div>
        <div>
          <div>
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
                <Image src={Google} alt={'google'} width={38} height={38} />
              </div>
              <div>
                <Image src={Appstore} alt={'Appstore'} width={38} height={38} />
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
