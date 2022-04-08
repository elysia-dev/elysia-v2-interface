import styles from './Governance.module.scss';

const GovernanceTop = () => {
  return (
    <div className={styles.governance_top}>
      <div className={styles.governance_top_sub}>ELYSIA Governance</div>
      <div className={styles.governance_top_header}>
        엘리시아는 EL token 스테이커들에 의해 <strong>소유</strong>되고{' '}
        <strong>운영</strong>되는 <br />
        <strong>DAO 법인</strong>입니다
      </div>
      <div className={styles.governance_top_content}>
        <div className={styles.governance_top_content_header}>
          엘리시아 DAO는 현실에 존재하는 실물자산이 디파이나 NFT 마켓플레이스 등
          디지털자산 시장 에서 활용될 수 있도록 토큰화 프로토콜을 개발합니다
        </div>
        <div className={styles.governance_top_content_wrapper}>
          <div className={styles.governance_top_content_circle}>
            아시아 최초 <br /> DAO 법인
          </div>
          <div className={styles.governance_top_content_circle}>
            미국정부가 인정한 <br /> 세계 두 번째 DAO 법인
          </div>
          <div className={styles.governance_top_content_circle}>
            상장회사 중 <br /> 최초로 설립된 DAO 법인
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceTop;
