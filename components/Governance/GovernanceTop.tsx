import { Trans, useTranslation } from 'react-i18next';
import styles from './Governance.module.scss';

const GovernanceTop = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.governance_top}>
      <div className={styles.governance_top_sub}>ELYSIA Governance</div>
      <div className={styles.governance_top_header}>
        <Trans>{t('governance.section_first.0')}</Trans>
      </div>
      <div className={styles.governance_top_content}>
        <div className={styles.governance_top_content_header}>
          <Trans> {t('governance.section_first.1')}</Trans>
        </div>
        <div className={styles.governance_top_content_wrapper}>
          <div>
            <Trans>{t('governance.section_first.2')}</Trans>
          </div>
          <div>
            <Trans> {t('governance.section_first.3')}</Trans>
          </div>
          <div>
            <Trans>{t('governance.section_first.4')}</Trans>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTop;
