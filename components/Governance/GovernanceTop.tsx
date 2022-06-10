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
          t('main.section_governance.1'),
          t('governance.section_first.0'),
        ]}
      />
      <div className={styles.governance_top_content_wrapper}>
        <section className={styles.governance_top_content}>
          <strong>Mission</strong>
          <div>
            <p>{t('governance.section_first.1')}</p>
          </div>
        </section>
        <section className={styles.governance_top_content_right}>
          <strong>Reputation</strong>
          <div>
            <p>{t('governance.section_first.2')}</p>
            <p>{t('governance.section_first.3')}</p>
            <p>{t('governance.section_first.4')}</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default GovernanceTop;
