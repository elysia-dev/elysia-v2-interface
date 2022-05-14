import { NoiseSvg } from 'components/Main/styles';
import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import Elyfi from 'assets/images/developers/elyfi.svg';
import Guide from 'assets/images/developers/guide.svg';
import { useEffect, useState } from 'react';
import ContentItem from 'components/Common/ContentItem';
import ContentDescription from 'components/Common/ContentDescription';
import PageHeader from 'components/Common/PageHeader';
import useResizeBrowser from 'hooks/useResizeBrowser';

const Section = () => {
  const { t } = useTranslation();
  const { browserHeight } = useResizeBrowser();

  return (
    <>
      <NoiseSvg>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="5.6" />
        </filter>
      </NoiseSvg>
      <SectionWrapper theme={browserHeight}>
        <PageHeader
          headers={[t('documents.0'), t('documents.1'), t('documents.2')]}
        />
        <div>
          <div>
            <ContentItem
              Icon={<Elysia />}
              contentName={t('documents.3')}
              link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            />
            <ContentDescription description={t('documents.4')} />
          </div>
          <div>
            <ContentItem
              Icon={<Elyfi />}
              contentName={t('documents.5')}
              link={'https://docs.elyfi.world/v/eng/'}
            />
            <ContentDescription description={t('documents.6')} />
          </div>
          <div>
            <ContentItem
              Icon={<Guide />}
              contentName={t('documents.7')}
              link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            />
            <ContentDescription description={t('documents.8')} />
          </div>
          <div>
            <ContentItem
              Icon={<Git />}
              contentName={t('documents.9')}
              link={'https://github.com/elysia-dev'}
            />
            <ContentDescription description={t('documents.10')} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
