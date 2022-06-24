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
          t('main.sectionGovernance.1'),
          t('governance.sectionFirst.0'),
        ]}
      />
      <TopWrapper>
        <TopContent>
          <strong>Mission</strong>
          <div>
            <p>{t('governance.sectionFirst.1')}</p>
          </div>
        </TopContent>
        <TopRightWrapper>
          <strong>Reputation</strong>
          <div>
            <p>{t('governance.sectionFirst.2')}</p>
            <p>{t('governance.sectionFirst.3')}</p>
            <p>{t('governance.sectionFirst.4')}</p>
          </div>
        </TopRightWrapper>
      </TopWrapper>
    </TopArticle>
  );
};

export default GovernanceTop;
