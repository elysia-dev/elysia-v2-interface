import styles from './Governance.module.scss';
import Arrow from './Arrow';

const GovernanceBottom = () => {
  return (
    <div className={styles.governance_bottom}>
      <div className={styles.governance_bottom_container}>
        <div>
          <div className={styles.governance_bottom_first}>03</div>
          <div className={styles.governance_bottom_second}>
            Develop ELYSIA together by sharing, discussing, <br /> and proposing
            your opinions!
          </div>
          <div className={styles.governance_bottom_third}>
            엘리시아 프로토콜에 공감하거나 엘리시아의 발전에 참여하고 싶은
            분들은 누구나 거버넌스에 참여할 수 있습니다. <br /> 참여자들은
            ELYSIA Forum에서 자유롭게 개선안을 제안하고, Snapshot에서 의사결정
            과정에 투표할 수 있습니다.
          </div>
          <div className={styles.governance_bottom_button_wrapper}>
            <div className={styles.governance_bottom_button}>
              거버넌스 FAQ <Arrow />
            </div>
            <div className={styles.governance_bottom_button}>
              Forum 가이드 <Arrow />
            </div>
            <div className={styles.governance_bottom_button}>
              Snapshot 가이드
              <Arrow />
            </div>
          </div>
        </div>
        <div className={styles.governance_bottom_content}>
          <div className={styles.governance_bottom_content_header}>
            거버넌스 참여공간
          </div>
          <div className={styles.governance_bottom_content_box}>
            <div className={styles.governance_bottom_content_list}>
              <div>image</div>
              <div>ELYSIA Forum</div>
              <div>
                The ELYSIA forum is a vital part of the ELYSIA governance system
                and is intended to nurture its ecosystem. As part of the
                ‘Off-chain cycle’, the forum is a place where participants are
                free to propose and discuss initiatives, and resources and
                information are shared.
              </div>
            </div>
            <div className={styles.governance_bottom_content_list}>
              <div>image</div>
              <div>Snapshot</div>
              <div>
                스냅샷은 오프체인 거버넌스를 완료하고 최종 의사결정이 필요한
                안건에 대해 통과 여부를 결정하는 공간입니다. EL을
                스테이킹함으로써 얻은 sEL 토큰이 투표권 역할을 하며, 보유하고
                있는 sEL만큼 권리를 행사할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceBottom;
