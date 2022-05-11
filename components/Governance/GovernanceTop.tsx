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
      <div className={styles.governance_top_content_wrapper}>
        <div className={styles.governance_top_content}>
          <h2>Mission</h2>
          <p>
            엘리시아 DAO는 현실에 존재하는 실물자산이 디파이나 NFT 마켓플레이스
            등 디지털 자산 시점에서 활용될 수 있도록 토큰화 프로토콜을
            개발합니다.
          </p>
        </div>
        <div className={styles.governance_top_content_right}>
          <h2>Reputation</h2>
          <div>
            <p>아시아 최초 DAO 법인</p>
            <p>미국정부가 인정한 세계 두 번째 DAO 법인</p>
            <p>상장 회사 중 최초로 설립된 DAO 법인</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTop;
