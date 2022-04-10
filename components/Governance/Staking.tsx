import ModalType from 'enums/ModalType';
import { Dispatch, SetStateAction, useMemo } from 'react';
import styles from './Governance.module.scss';
import { formatComma, formatSixFracionDigit } from 'utils/formatters';
import useStakedInfo from 'hooks/useStakedInfo';
import { formatEther } from 'ethers/lib/utils';
import CountUp from 'react-countup';
import { BigNumber } from 'ethers';
import Arrow from './Arrow';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';

type Props = {
  setModalType: Dispatch<SetStateAction<ModalType | undefined>>;
  setModalVisible: () => void;
  reward: {
    before: BigNumber;
    after: BigNumber;
  };
};

const Staking = (props: Props) => {
  const { setModalType, setModalVisible, reward } = props;
  const { account } = useWeb3React();
  const router = useRouter();
  const userStakedInfo = useStakedInfo();

  const stakingInfo = useMemo(() => {
    return [
      {
        name: '스테이킹 수량',
        value: `${account ? formatComma(userStakedInfo.userPrincipal) : 0}`,
        btnType: '스테이킹 / 언스테이킹',
        onClick: () => {
          setModalType(account ? ModalType.Staking : ModalType.NoAccount);
          setModalVisible();
        },
      },
      {
        name: '보상 수량',
        value: (
          <>
            <CountUp
              className="bold amounts"
              start={account ? parseFloat(formatEther(reward.before)) : 0}
              end={account ? parseFloat(formatEther(reward.after)) : 0}
              formattingFn={(number: any) => {
                return formatSixFracionDigit(number);
              }}
              decimals={6}
              duration={1}
            />
          </>
        ),
        btnType: 'Claim',
        onClick: () => {
          setModalType(account ? ModalType.Claim : ModalType.NoAccount);
          setModalVisible();
        },
      },
    ];
  }, [
    userStakedInfo.userPrincipal,
    reward.before,
    reward.after,
    setModalType,
    account,
    setModalVisible,
  ]);
  return (
    <div className={styles.governance_staking}>
      <div className={styles.governance_staking_wrapper}>
        <div className={styles.governance_staking_wrapper_content}>
          <div className={styles.governance_staking_content_description_first}>
            02
          </div>
          <p className={styles.governance_staking_content_description_second}>
            Get sEL tokens by staking EL tokens
          </p>
          {/* <div
            className={
              styles.governance_staking_content_description_wrapper_third
            }> */}
          <p className={styles.governance_staking_content_description_third}>
            의사결정과정에참여하기위해서는투표권(staked EL, sEL)이있어야합니다.{' '}
            <br /> EL 스테이킹앱에EL 토큰을스테이킹함으로써투표권을얻을수있으며,
            <br />
            보유한수량만큼투표권을행사할수있습니다
          </p>
          <p className={styles.governance_staking_content_description_third}>
            스테이킹기간은 <strong>ELYSIA 2.0</strong> 오픈전까지이며,
            언제든지언스테이킹이가능 합니다.
          </p>
          {/* </div> */}
          <div className={styles.governance_staking_content_button}>
            스테이킹 가이드
            <Arrow />
          </div>
        </div>
        <div className={styles.governance_staking_info}>
          <div className={styles.governance_staking_total}>
            <div>xx.xx M</div>
            <div className={styles.governance_staking_total_name}>
              총 스테이킹량
            </div>
          </div>
          <div className={styles.governance_staking_apr}>
            <div>xx.xx %</div>
            <div className={styles.governance_staking_total_name}>APR</div>
          </div>
        </div>
      </div>
      <div className={styles.staking_wrapper}>
        <div className={styles.staking_container}>
          <div className={styles.staking_container_header}>EL Staking APP</div>
          <div className={styles.staking_header}>
            <div className={styles.staking_select_mainnet}>
              <div>Ethereum</div>
              <div>BSC</div>
            </div>
            <div
              className={styles.staking_prev}
              onClick={() => router.push(`/ko/Governance/prevstaking`)}>
              이전 스테이킹 프로그램 &gt;
            </div>
          </div>
          <div className={styles.staking_content}>
            {stakingInfo.map((info, idx) => (
              <div key={`info_${idx}`} className={styles.staking_content_box}>
                <div className={styles.staking_content_header}>
                  <div>{info.name}</div>
                  <div
                    onClick={() => {
                      info.onClick();
                    }}>
                    {' '}
                    {info.btnType}
                  </div>
                </div>
                <div>
                  <div className={styles.staking_content_box_amount}>
                    <span>{info.value}</span>
                    <span>EL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
