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
    <div className={styles.governance_bottom}>
      <div className={styles.governance_bottom_header}>
        <div className={styles.governance_left_line_counter_wrapper}>
          <div className={styles.governance_left_line_counter}>3</div>
        </div>
        <h2>
          Develop ELYSIA together by sharing, discussing, and proposing your
          opinions!
        </h2>
      </div>
      <div className={styles.governance_bottom_container}>
        <p>
          엘리시아 프로토콜에 공감하거나 엘리시아의 발전에 참여하고 싶은 분들은
          누구나 거버넌스에 참여할 수 있습니다. 참여자들은 ELYSIA Forum에서
          자유롭게 개선안을 제안하고, Snapshot에서 의사결정 과정에 투표할 수
          있습니다.
        </p>
        <div>
          <div className={styles.governance_button}>
            거버넌스 FAQ
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div>
          <div className={styles.governance_button}>
            Forum 가이드
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div>
          <div className={styles.governance_button}>
            Snapshot 가이드
            <Image
              src={ButtonArrow}
              alt={'Button Arrow'}
              width={18}
              height={12}
            />
          </div>
        </div>
      </div>
      <div className={styles.governance_bottom_container}>
        <h2>거버넌스 참여공간</h2>
        <div className={styles.governance_bottom_content_box_wrapper}>
          <div className={styles.governance_bottom_content_box}>
            <div className={styles.governance_bottom_content_box_header}>
              <Image src={forum} alt={'forum'} height={65} width={65} />
              <div>
                <p>Coming Soon</p>
              </div>
            </div>
            <div className={styles.governance_bottom_content_box_title}>
              <h2>{t('governance.section_fourth.6')}</h2>
              {/* <Image src={ArrowImage} /> */}
              <ArrowImage />
            </div>
            <p>{t('governance.section_fourth.7')}</p>
          </div>
          <div className={styles.governance_bottom_content_box}>
            <div className={styles.governance_bottom_content_box_header}>
              <Image src={snapshot} alt={'snapshot'} height={65} width={65} />
              <div>
                <p>Coming Soon</p>
              </div>
            </div>
            <div className={styles.governance_bottom_content_box_title}>
              <h2>{t('governance.section_fourth.8')}</h2>
              {/* <Image src={ArrowImage} /> */}
              <ArrowImage />
            </div>
            <p>{t('governance.section_fourth.9')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceBottom;
