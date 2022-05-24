import { useTranslation } from 'react-i18next';
import { DisabledSection, SectionWrapper } from './styles';
import Smart from 'assets/images/developers/smart.svg';
import Bug from 'assets/images/developers/bug.svg';
import PaperFile from 'assets/images/developers/paperFile.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import ContentItem from '../Common/ContentItem';
import ContentDescription from 'components/Common/ContentDescription';
import PageHeader from 'components/Common/PageHeader';
import { useState } from 'react';

const Section = () => {
  const { t } = useTranslation();
  const [ishover, setHover] = useState(false);

  return (
    <>
      <SectionWrapper>
        <PageHeader
          headers={[t('developers.0'), t('developers.1'), t('developers.2')]}
        />
        <div>
          <div>
            <ContentItem
              Icon={<Elysia />}
              contentName={t('developers.3')}
              link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            />
            <ContentDescription description={t('developers.4')} />
          </div>
          <section>
            <div>
              <ContentItem
                Icon={<Git />}
                contentName={t('developers.10')}
                link={'https://github.com/elysia-dev'}
              />
              {/* <ContentDescription description={t('developers.6')} /> */}
            </div>
            <DisabledSection
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              <ContentItem
                Icon={<Bug />}
                contentName={ishover ? 'Coming Soon!' : t('developers.7')}
                isComingSoon={true}
              />
            </DisabledSection>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
