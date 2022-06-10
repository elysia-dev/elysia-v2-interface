import forum from 'assets/images/elysia-forum@2x.png';
import snapshot from 'assets/images/Snapshot_logo@2x.png';
import styles from './Governance.module.scss';
import Arrow from './Arrow';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import ButtonArrow from 'assets/images/governance/button-arrow.png';
import ArrowImage from 'assets/images/community/arrow.svg';

const GovernanceBottom = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.governance_bottom}>
      <section className={styles.governance_bottom_header}>
        <div className={styles.governance_left_line_counter_wrapper}>
          <div className={styles.governance_left_line_counter}>3</div>
        </div>
        <h2>{t('governance.section_fourth.0')}</h2>
      </section>
      <section className={styles.governance_bottom_container}>
        <p>{t('governance.section_fourth.1')}</p>
        <div>
          {/* <div className={styles.governance_button}>
            {t('governance.section_fourth.2')}
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div>
          <div className={styles.governance_button}>
            {t('governance.section_fourth.3')}
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div>
          <div className={styles.governance_button}>
            {t('governance.section_fourth.4')}
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div> */}
        </div>
      </section>
      <article className={styles.governance_bottom_container}>
        <h2>{t('governance.section_fourth.5')}</h2>
        <article className={styles.governance_bottom_content_box_wrapper}>
          <section className={styles.governance_bottom_content_box}>
            <figure className={styles.governance_bottom_content_box_header}>
              <Image src={forum} alt={'forum'} height={65} width={65} />
              <button>Coming Soon</button>
            </figure>
            <section className={styles.governance_bottom_content_box_title}>
              <b>{t('governance.section_fourth.6')}</b>
              {/* <Image src={ArrowImage} /> */}
              <ArrowImage />
            </section>
            <p>{t('governance.section_fourth.7')}</p>
          </section>
          <section className={styles.governance_bottom_content_box}>
            <figure className={styles.governance_bottom_content_box_header}>
              <Image src={snapshot} alt={'snapshot'} height={65} width={65} />
              <button>Coming Soon</button>
            </figure>
            <section className={styles.governance_bottom_content_box_title}>
              <b>{t('governance.section_fourth.8')}</b>
              {/* <Image src={ArrowImage} /> */}
              <ArrowImage />
            </section>
            <p>{t('governance.section_fourth.9')}</p>
          </section>
        </article>
      </article>
    </article>
  );
};

export default GovernanceBottom;
