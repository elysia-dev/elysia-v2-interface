import { NoiseSvg } from 'components/Main/styles';
import useIsMobile from 'hooks/useIsMobile';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Smart from 'assets/images/developers/smart.svg';
import Bug from 'assets/images/developers/bug.svg';
import PaperFile from 'assets/images/developers/paperFile.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import Arrow from 'assets/images/developers/arrow.svg';
import { useEffect, useState } from 'react';

const Section = () => {
  const { t } = useTranslation();
  const { isTablet } = useIsMobile();
  const [browserHeight, setBrowserHeight] = useState(0);

  useEffect(() => {
    if (typeof document === undefined || typeof window === undefined) return;
    if (window.innerHeight > document.body.clientHeight) {
      const sub = window.innerHeight - document.body.clientHeight;
      setBrowserHeight(document.body.clientHeight + sub);
      return;
    }
    setBrowserHeight(document.body.clientHeight);
  }, []);

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
            <div>{t('developers.0')}</div>
            <div>{t('developers.1')}</div>
            <Trans>{t('developers.2')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <Elysia />
              </div>
              <div>{t('developers.3')}</div>
              <div> {!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('developers.4')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Smart />
              </div>
              <div>{t('developers.5')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('developers.6')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Bug />
              </div>
              <div>{t('developers.7')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Trans>{t('developers.8')}</Trans>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <PaperFile />
              </div>
              <div>{t('developers.9')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
            <div>
              <div>
                <Git />
              </div>
              <div>{t('developers.10')}</div>
              <div>{!isTablet && <Arrow />}</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
