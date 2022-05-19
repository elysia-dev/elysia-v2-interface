import { useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Smart from 'assets/images/developers/smart.svg';
import Bug from 'assets/images/developers/bug.svg';
import PaperFile from 'assets/images/developers/paperFile.svg';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import ContentItem from '../Common/ContentItem';
import ContentDescription from 'components/Common/ContentDescription';
import PageHeader from 'components/Common/PageHeader';

const Section = () => {
  const { t } = useTranslation();

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
          <div>
            <ContentItem
              Icon={<Smart />}
              contentName={t('developers.5')}
              link={'https://docs.elyfi.world/v/eng/services/service-overview'}
            />
            <ContentDescription description={t('developers.6')} />
          </div>
          <div>
            <ContentItem
              Icon={<Bug />}
              contentName={t('developers.7')}
              link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            />
            <ContentDescription description={t('developers.8')} />
          </div>
          <div>
            <ContentItem
              Icon={<PaperFile />}
              contentName={t('developers.9')}
              link={'https://elysia.gitbook.io/elysia-whitepaper-v2-0/'}
            />
            <ContentItem
              Icon={<Git />}
              contentName={t('developers.10')}
              link={'https://github.com/elysia-dev'}
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;