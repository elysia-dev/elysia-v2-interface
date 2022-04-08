import styles from './Governance.module.scss';
import TokenImg from 'assets/images/ELYSIA_DAO_TOKEN3@2x.png';
import Image from 'next/image';
import Arrow from './Arrow';
// import Arrow from 'assets/images/arrow.svg';

const GovernanceCenter = () => {
  return (
    <div className={styles.governance_center}>
      <div className={styles.governance_center_header}>How to Join</div>
      <div className={styles.governance_center_content_wrapper}>
        <div className={styles.governance_center_content_description}>
          <div className={styles.governance_center_content_description_first}>
            01
          </div>
          <div className={styles.governance_center_content_description_second}>
            Get the EL Token
          </div>
          <div className={styles.governance_center_content_description_third}>
            ELYSIA 토큰은 엘리시아 DAO 법인의 ownership을 나타내며, 엘리시아에
            관심있는 <br /> 누구나 거버넌스에 참여할 수 있도록 EL 토큰이 많은
            DEX와 CEX 에 상장되어 있습니다.
          </div>
          <div className={styles.governance_center_content_wrapper_button}>
            <div className={styles.governance_center_content_button}>
              거래소 보기
              <Arrow />
            </div>
            <div className={styles.governance_center_content_button}>
              토큰 이코노미
              <Arrow />
            </div>
          </div>
        </div>
        <div>
          <Image src={TokenImg} alt={'TokenImg'} width={358} height={358} />
        </div>
      </div>
      <div className={styles.governance_center_info_wrapper}>
        <div className={styles.governance_center_info_header}>EL 토큰정보</div>
        <div className={styles.governance_center_info_box}>
          <div className={styles.governance_center_info_content}>
            <div>실시간 가격</div>
            <div>$ 7.22</div>
          </div>
          <div className={styles.governance_center_info_content}>
            <div>총 발행량</div>
            <div>7,000,000,000 EL</div>
          </div>
          <div className={styles.governance_center_info_content}>
            <div>총 공급량</div>
            <div>6,570,000,000 EL</div>
          </div>
          <div className={styles.governance_center_info_content}>
            <div>유통 공급량</div>
            <div>6,570,000,000 EL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceCenter;
