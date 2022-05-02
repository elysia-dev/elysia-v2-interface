import { t } from 'i18next';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import RightArrow from 'assets/images/main/rightarrow@2x.png';
import LeftArrow from 'assets/images/main/leftarrow@2x.png';
import { MainSectionWrapper, NoiseSvg } from './styles';
import Image from 'next/image';

const Section = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}>
        <NoiseSvg>
          <filter id="f">
            <feTurbulence type="fractalNoise" baseFrequency="5.6" />
          </filter>
        </NoiseSvg>
        <MainSectionWrapper>
          <div>
            <div>
              <div>
                <span>
                  <span> {t('main.section_el_bridge.0')}</span>
                  <Image
                    src={RightArrow}
                    alt={'RightArrow'}
                    width={35.08}
                    height={35.08}
                  />
                </span>
                <p>{t('main.section_el_bridge.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_el_bridge.3')}</Trans>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Link href={`${i18n.language}/Governance`} passHref>
                  <span>
                    <Image
                      src={LeftArrow}
                      alt={'LeftArrow'}
                      width={35.08}
                      height={35.08}
                    />
                    <span> {t('main.section_governance.0')}</span>
                  </span>
                </Link>
                <p>{t('main.section_governance.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_governance.2')}</Trans>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Link href={`${i18n.language}/Ecosystem`} passHref>
                  <span>
                    <span> {t('main.section_ecosystem.0')}</span>
                    <Image
                      src={RightArrow}
                      alt={'RightArrow'}
                      width={35.08}
                      height={35.08}
                    />
                  </span>
                </Link>
                <p>{t('main.section_ecosystem.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_ecosystem.3')}</Trans>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Link href={`${i18n.language}/Community`} passHref>
                  <span>
                    <Image
                      src={LeftArrow}
                      alt={'LeftArrow'}
                      width={35.08}
                      height={35.08}
                    />
                    <span> {t('main.section_community.0')}</span>
                  </span>
                </Link>
                <p>{t('main.section_community.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_community.3')}</Trans>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Link href={`${i18n.language}/Developers`} passHref>
                  <span>
                    <span> {t('main.section_developers.0')}</span>
                    <Image
                      src={RightArrow}
                      alt={'RightArrow'}
                      width={35.08}
                      height={35.08}
                    />
                  </span>
                </Link>
                <p>{t('main.section_developers.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_developers.3')}</Trans>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Link href={`${i18n.language}/Documents`} passHref>
                  <span>
                    <Image
                      src={LeftArrow}
                      alt={'LeftArrow'}
                      width={35.08}
                      height={35.08}
                    />
                    <span> {t('main.section_documents.0')}</span>
                  </span>
                </Link>
                <p>{t('main.section_documents.1')}</p>
              </div>
              <p>
                <Trans>{t('main.section_documents.3')}</Trans>
              </p>
            </div>
          </div>
        </MainSectionWrapper>
      </div>
    </>
  );
};

export default Section;
