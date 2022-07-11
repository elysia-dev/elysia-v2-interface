import { useTranslation } from 'react-i18next';
import { DisabledSection, SectionWrapper } from './styles';
import Bug from 'assets/images/developers/bug.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import ContentItem from '../Common/ContentItem';
import PageHeader from 'components/Common/PageHeader';
import { useState } from 'react';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

const Section = () => {
  const { t } = useTranslation();
  const [isHover, setHover] = useState(false);

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
              googleGAEvent(
                GoogleGAAction.DevelopersWhatIsElysia,
                GoogleGACategory.Developers,
              );
            }}
          />
          <section>
            <ContentItem
              Icon={<Git />}
              contentName={t('developers.10')}
              link={'https://github.com/elysia-dev'}
              onClickEvent={() => {
                googleGAEvent(
                  GoogleGAAction.DevelopersGithub,
                  GoogleGACategory.Developers,
                );
              }}
            />
            <DisabledSection
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              <ContentItem
                Icon={<Bug />}
                contentName={isHover ? 'Coming Soon!' : t('developers.7')}
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
