import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';
import Elysia from 'assets/images/developers/elysia.svg';
import Git from 'assets/images/developers/git.svg';
import Elyfi from 'assets/images/developers/elyfi.svg';
import Guide from 'assets/images/developers/guide.svg';
import ContentItem from 'components/Common/ContentItem';
import PageHeader from 'components/Common/PageHeader';
import useResizeBrowser from 'hooks/useResizeBrowser';

const Section = () => {
  const { t } = useTranslation();
  const { browserHeight } = useResizeBrowser();

  return (
    <>
      <SectionWrapper>
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
            <p>
              <Trans>{t('documents.4')}</Trans>
            </p>
          </div>
          <div>
            <ContentItem
              Icon={<Elyfi />}
              contentName={t('documents.5')}
              link={'https://docs.elyfi.world/v/eng/'}
            />
            <p>
              <Trans>{t('documents.6')}</Trans>
            </p>
          </div>
          <div>
            <ContentItem Icon={<Guide />} contentName={t('documents.7')} />
            <p>
              <Trans>{t('documents.8')}</Trans>
            </p>
          </div>
          <div>
            <ContentItem
              Icon={<Git />}
              contentName={t('documents.9')}
              link={'https://github.com/elysia-dev'}
            />
            <p>
              <Trans>{t('documents.10')}</Trans>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Section;
