import PageHeader from 'components/Common/PageHeader';
import { Trans, useTranslation } from 'react-i18next';
import styles from './Governance.module.scss';

const GovernanceTop = () => {
  const { t, i18n } = useTranslation();
  return (
    <article className={styles.governance_top}>
      <PageHeader
        headers={[
          t('governance.title'),
          t('main.sectionGovernance.1'),
          t('governance.sectionFirst.0'),
        ]}
      />
      <div className={styles.governance_top_content_wrapper}>
        <section className={styles.governance_top_content}>
          <strong>Mission</strong>
          <div>
            <p>{t('governance.sectionFirst.1')}</p>
          </div>
        </section>
        <section className={styles.governance_top_content_right}>
          <strong>Reputation</strong>
          <div>
            <p>{t('governance.sectionFirst.2')}</p>
            <p>{t('governance.sectionFirst.3')}</p>
            <p>{t('governance.sectionFirst.4')}</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default GovernanceTop;
