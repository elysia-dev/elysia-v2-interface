import { Trans, useTranslation } from 'react-i18next';
import styles from './Governance.module.scss';

const GovernanceTop = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.governance_top}>
      <div className={styles.governance_top_sub}>{t('governance.title')}</div>
      <div>{t('main.section_governance.1')}</div>
      <div className={styles.governance_top_header}>
        <Trans>{t('governance.section_first.0')}</Trans>
      </div>
      <div className={styles.governance_top_content_wrapper}>
        <div className={styles.governance_top_content}>
          <h2>Mission</h2>
          <div>
            <p>{t('governance.section_first.1')}</p>
          </div>
        </div>
        <div className={styles.governance_top_content_right}>
          <h2>Reputation</h2>
          <div>
            <p>{t('governance.section_first.2')}</p>
            <p>{t('governance.section_first.3')}</p>
            <p>{t('governance.section_first.4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTop;
