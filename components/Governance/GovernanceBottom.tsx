import forum from 'assets/images/elysia-forum@2x.png';
import snapshot from 'assets/images/Snapshot_logo@2x.png';
import styles from './Governance.module.scss';
import Arrow from './Arrow';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

const GovernanceBottom = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.governance_bottom}>
      <div className={styles.governance_bottom_container}>
        <div>
          <div className={styles.governance_bottom_first}>03</div>
          <div className={styles.governance_bottom_second}>
            <Trans>{t('governance.section_fourth.0')}</Trans>
          </div>
          <div className={styles.governance_bottom_third}>
            <Trans>{t('governance.section_fourth.1')}</Trans>
          </div>
          {/* <div className={styles.governance_bottom_button_wrapper}>
            <div>
              {t('governance.section_fourth.2')} <Arrow />
            </div>
            <div>
              {t('governance.section_fourth.3')} <Arrow />
            </div>
            <div>
              {t('governance.section_fourth.4')}
              <Arrow />
            </div>
          </div> */}
        </div>
        <div className={styles.governance_bottom_content}>
          <div className={styles.governance_bottom_content_header}>
            {t('governance.section_fourth.5')}
          </div>
          <div className={styles.governance_bottom_content_box}>
            <div className={styles.governance_bottom_content_list}>
              <div>
                <Image src={forum} alt={'forum'} height={65} width={65} />
                <div>Comming Soon</div>
              </div>
              <div>{t('governance.section_fourth.6')}</div>
              <div>
                <Trans>{t('governance.section_fourth.7')}</Trans>
              </div>
            </div>
            <div className={styles.governance_bottom_content_list}>
              <div>
                <Image src={snapshot} alt={'snapshot'} height={65} width={65} />
                <div>Comming Soon</div>
              </div>
              <div>{t('governance.section_fourth.8')}</div>
              <div>{t('governance.section_fourth.9')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceBottom;
