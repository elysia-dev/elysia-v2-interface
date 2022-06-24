import { useTranslation } from 'react-i18next';
import { DisabledSection, SectionWrapper } from './styles';
import Smart from 'assets/images/developers/smart.svg';
import Bug from 'assets/images/developers/bug.svg';
import PaperFile from 'assets/images/developers/paperFile.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import ContentItem from '../Common/ContentItem';
import PageHeader from 'components/Common/PageHeader';
import { useState } from 'react';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Section = () => {
  const { t } = useTranslation();
  const [ishover, setHover] = useState(false);

  return (
    <>
      <SectionWrapper>
        <PageHeader
          headers={[t('developers.0'), t('developers.1'), t('developers.2')]}
        />
        <article>
          <ContentItem
            Icon={<Elysia />}
            contentName={t('developers.3')}
            link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            description={t('developers.4')}
            onClickEvent={() => {
              gtag.event({
                action: GoogleAnalyticsAction.DevelopersWhatIsElysia,
                category: GoogleAnalyticsCategory.Developers,
                label: '',
              });
            }}
          />
          <section>
            <ContentItem
              Icon={<Git />}
              contentName={t('developers.10')}
              link={'https://github.com/elysia-dev'}
              onClickEvent={() => {
                gtag.event({
                  action: GoogleAnalyticsAction.DevelopersGithub,
                  category: GoogleAnalyticsCategory.Developers,
                  label: '',
                });
              }}
            />
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
        </article>
      </SectionWrapper>
    </>
  );
};

export default Section;
