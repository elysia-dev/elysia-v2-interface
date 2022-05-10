import { NoiseSvg } from 'components/Main/styles';
import useIsMobile from 'hooks/useIsMobile';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Arrow from 'assets/images/community/arrow@2x.png';
import Smart from 'assets/images/developers/smart.svg';
import Bug from 'assets/images/developers/bug.svg';
import PaperFile from 'assets/images/developers/paperFile.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';

const Section = () => {
  const { t } = useTranslation();
  const { isDesktop, isTablet } = useIsMobile();
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
              <div>
                {' '}
                {!isTablet && (
                  <Image
                    src={Arrow}
                    alt={'Arrow'}
                    width={isDesktop ? 20 : 26}
                    height={isDesktop ? 20 : 26}
                  />
                )}
              </div>
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
              <div>
                {!isTablet && (
                  <Image
                    src={Arrow}
                    alt={'Arrow'}
                    width={isDesktop ? 20 : 26}
                    height={isDesktop ? 20 : 26}
                  />
                )}
              </div>
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
              <div>
                {!isTablet && (
                  <Image
                    src={Arrow}
                    alt={'Arrow'}
                    width={isDesktop ? 20 : 26}
                    height={isDesktop ? 20 : 26}
                  />
                )}
              </div>
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
              <div>
                {!isTablet && (
                  <Image
                    src={Arrow}
                    alt={'Arrow'}
                    width={isDesktop ? 20 : 26}
                    height={isDesktop ? 20 : 26}
                  />
                )}
              </div>
            </div>
            <div>
              <div>
                <Git />
              </div>
              <div>{t('developers.10')}</div>
              <div>
                {!isTablet && (
                  <Image
                    src={Arrow}
                    alt={'Arrow'}
                    width={isDesktop ? 20 : 26}
                    height={isDesktop ? 20 : 26}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
