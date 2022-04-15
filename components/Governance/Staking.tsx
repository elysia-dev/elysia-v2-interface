import ModalType from 'enums/ModalType';
import { Dispatch, SetStateAction, useMemo } from 'react';
import styles from './Governance.module.scss';
import {
  formatComma,
  formatSixFracionDigit,
  toCompactForBignumber,
} from 'utils/formatters';
import { formatEther } from 'ethers/lib/utils';
import CountUp from 'react-countup';
import { BigNumber, constants } from 'ethers';
import Arrow from './Arrow';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import useTotalStakedBalance from 'hooks/useTotalStakedBalance';
import Skeleton from 'react-loading-skeleton';
import ChainType from 'enums/ChainType';
import { Trans, useTranslation } from 'react-i18next';
import LanguageType from 'enums/LanguageType';
import useV2StakedInfo from 'hooks/useV2StakedInfo';

type Props = {
  setModalType: Dispatch<SetStateAction<ModalType | undefined>>;
  setModalVisible: () => void;
  reward: {
    before: BigNumber;
    after: BigNumber;
  };
  currentChain: ChainType;
  setCurrentChain: Dispatch<SetStateAction<ChainType>>;
};

const Staking = (props: Props) => {
  const {
    setModalType,
    setModalVisible,
    reward,
    currentChain,
    setCurrentChain,
  } = props;
  const { account } = useWeb3React();
  const router = useRouter();
  const userStakedInfo = useV2StakedInfo();
  const { totalBalance, isLoading, apr } = useTotalStakedBalance();
  const { t, i18n } = useTranslation();

  const stakingInfo = useMemo(() => {
    return [
      {
        name: t('governance.section_third.7'),
        value: `${account ? formatComma(userStakedInfo.userPrincipal) : 0}`,
        btnType: t('governance.section_third.9'),
        onClick: () => {
          setModalType(account ? ModalType.Staking : ModalType.NoAccount);
          setModalVisible();
        },
      },
      {
        name: t('governance.section_third.8'),
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
        btnType: t('governance.section_third.10'),
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
            {t('governance.section_third.0')}
          </p>
          <p className={styles.governance_staking_content_description_third}>
            <Trans>{t('governance.section_third.1')}</Trans>
          </p>
          <p className={styles.governance_staking_content_description_third}>
            <Trans> {t('governance.section_third.2')}</Trans>
          </p>
          <div
            className={styles.governance_staking_content_button}
            style={{
              fontSize:
                i18n.language === LanguageType.EN ? '0.9rem' : undefined,
            }}>
            {t('governance.section_third.3')}
            <Arrow />
          </div>
        </div>
        <div className={styles.governance_staking_info}>
          <div className={styles.governance_staking_total}>
            <div>
              {currentChain === ChainType.Ethereum ? (
                isLoading ? (
                  <Skeleton width={130} height={35} />
                ) : (
                  toCompactForBignumber(totalBalance)
                )
              ) : (
                '-'
              )}
            </div>
            <div className={styles.governance_staking_total_name}>
              {t('governance.section_third.4')}
            </div>
          </div>
          <div className={styles.governance_staking_apr}>
            <div>
              {' '}
              {currentChain === ChainType.Ethereum ? (
                isLoading ? (
                  <Skeleton width={130} height={35} />
                ) : (
                  apr
                )
              ) : (
                '-'
              )}
            </div>
            <div className={styles.governance_staking_total_name}>APR</div>
          </div>
        </div>
      </div>
      <div className={styles.staking_wrapper}>
        <div className={styles.staking_container}>
          <div className={styles.staking_container_header}>
            {t('governance.section_third.5')}
          </div>
          <div className={styles.staking_header}>
            <div className={styles.staking_select_mainnet}>
              <div
                onClick={() => setCurrentChain(ChainType.Ethereum)}
                style={{
                  color:
                    currentChain === ChainType.Ethereum ? '#333333' : '#888888',
                }}>
                Ethereum
              </div>
              <div
                onClick={() => setCurrentChain(ChainType.BSC)}
                style={{
                  color: currentChain === ChainType.BSC ? '#333333' : '#888888',
                }}>
                BSC
              </div>
            </div>
            <div
              className={styles.staking_prev}
              onClick={() => router.push(`/ko/Governance/V1Staking`)}>
              {t('governance.section_third.6')} &gt;
            </div>
          </div>
          <div className={styles.staking_content}>
            {currentChain === ChainType.Ethereum ? (
              stakingInfo.map((info, idx) => (
                <div key={`info_${idx}`} className={styles.staking_content_box}>
                  <div className={styles.staking_content_header}>
                    <div>{info.name}</div>
                    <div
                      onClick={() => {
                        info.onClick();
                      }}>
                      <p>{info.btnType}</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.staking_content_box_amount}>
                      <span>{info.value}</span>
                      <span>EL</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.staking_comming_soon}>Comming soon!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
