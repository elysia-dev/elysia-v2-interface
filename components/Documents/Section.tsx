import { NoiseSvg } from 'components/Main/styles';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import Arrow from 'assets/images/developers/arrow.svg';
import Elyfi from 'assets/images/developers/elyfi.svg';
import Guide from 'assets/images/developers/guide.svg';
import useIsMobile from 'hooks/useIsMobile';

const Section = () => {
  const { t } = useTranslation();
  const { isTablet } = useIsMobile();

  return (
    <>
      <NoiseSvg>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="5.6" />
        </filter>
      </NoiseSvg>
      <SectionWrapper>
        <div>
          <div>
            <div>{t('documents.0')}</div>
            <div>{t('documents.1')}</div>
            <Trans>{t('documents.2')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <Elysia />
              </div>
              <div>{t('documents.3')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans> {t('documents.4')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Elyfi />
              </div>
              <div>{t('documents.5')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('documents.6')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Guide />
              </div>
              <div>{t('documents.7')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('documents.8')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Git />
              </div>
              <div>{t('documents.9')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('documents.10')}</Trans>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
