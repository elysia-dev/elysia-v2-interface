import PageHeader from 'components/Common/PageHeader';
import { useTranslation } from 'react-i18next';
import { TopArticle, TopContent, TopRightWrapper, TopWrapper } from './style';

const GovernanceTop = () => {
  const { t } = useTranslation();
  return (
    <TopArticle>
      <PageHeader
        headers={[
          t('governance.title'),
          t('main.section_governance.1'),
          t('governance.section_first.0'),
        ]}
      />
      <TopWrapper>
        <TopContent>
          <strong>Mission</strong>
          <div>
            <p>{t('governance.section_first.1')}</p>
          </div>
        </TopContent>
        <TopRightWrapper>
          <strong>Reputation</strong>
          <div>
            <p>{t('governance.section_first.2')}</p>
            <p>{t('governance.section_first.3')}</p>
            <p>{t('governance.section_first.4')}</p>
          </div>
        </TopRightWrapper>
      </TopWrapper>
    </TopArticle>
  );
};

export default GovernanceTop;
