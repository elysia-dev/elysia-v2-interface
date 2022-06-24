import { useWeb3React } from '@web3-react/core';
import LanguageType from 'enums/LanguageType';
import ModalType from 'enums/ModalType';
import { BigNumber, constants } from 'ethers';
import moment from 'moment';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { formatComma } from 'utils/formatters';
import { IStakingPoolRound } from 'utils/stakingRoundDate';
import {
  ItemWrapper,
  RoundInfoWrapper,
  SkeletonWrapper,
  StakingInfoByRound,
  StakingInfoWrapper,
  WalletText,
} from './styles';
import { useMediaQuery } from 'react-responsive';

type Props = {
  setModalType?: Dispatch<SetStateAction<ModalType | undefined>>;
  setModalVisible?: () => void;
  setAmount?: Dispatch<SetStateAction<BigNumber>>;
  setRound?: () => void;
  date?: IStakingPoolRound;
  round?: number;
  userInfo?: {
    userReward: BigNumber;
    userPrincipal: BigNumber;
  };
  isLoading?: boolean;
};

const StakingItem = (props: Props) => {
  const { account } = useWeb3React();
  const { t, i18n } = useTranslation();
  const {
    date,
    round,
    userInfo,
    isLoading,
    setModalType,
    setModalVisible,
    setAmount,
    setRound,
  } = props;
  const [isMobile, setMobile] = useState(false);
  const mobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  useEffect(() => {
    if (mobile) setMobile(mobile);
  }, [mobile]);

  return userInfo ? (
    <ItemWrapper>
      <RoundInfoWrapper>
        <div className="round-box">
          {isLoading && account ? (
            <Skeleton height={141} width={208} />
          ) : (
            <>
              <h2>
                {round
                  ? i18n.language === LanguageType.EN
                    ? t(`governance.prevStaking.5.${round}`)
                    : t('governance.prevStaking.5', { round })
                  : t('governance.prevStaking.2')}
              </h2>
              <p>
                {moment(date?.startedAt || '2021.07.27').format('YYYY.MM.DD')} ~{' '}
                <br />
                {moment(date?.endedAt || '2022.04.17').format(
                  'YYYY.MM.DD',
                )}{' '}
                (KST)
              </p>
            </>
          )}
        </div>
      </RoundInfoWrapper>
      <StakingInfoWrapper>
        <StakingInfoByRound theme={userInfo.userPrincipal}>
          <h2>{t('governance.prevStaking.6')}</h2>
          <section>
            <h2>{formatComma(userInfo.userPrincipal)}</h2>&nbsp;<span>EL</span>
          </section>
          {!isMobile ? (
            <div
              onClick={() => {
                if (userInfo.userPrincipal.lte(constants.Zero)) {
                  return;
                }
                setModalVisible?.();
                setModalType?.(ModalType.PrevUnstake);
                setRound?.();
                setAmount?.(userInfo.userPrincipal);
              }}
              style={{
                backgroundColor: userInfo.userPrincipal.lte(constants.Zero)
                  ? '#838383'
                  : '#000000',
              }}>
              <p>{t('governance.prevStaking.8')}</p>
            </div>
          ) : (
            <></>
          )}
        </StakingInfoByRound>
        <StakingInfoByRound theme={userInfo.userReward}>
          <h2>{t('governance.prevStaking.7')}</h2>
          <section>
            <h2>{formatComma(userInfo.userReward)}</h2>&nbsp;<span>ELFI</span>
          </section>
          {!isMobile ? (
            <div
              onClick={() => {
                if (userInfo.userReward.lte(constants.Zero)) {
                  return;
                }
                setModalVisible?.();
                setRound?.();
                setAmount?.(userInfo.userReward);
                setModalType?.(ModalType.PrevReward);
              }}
              style={{
                backgroundColor: userInfo.userReward.lte(constants.Zero)
                  ? '#838383'
                  : '#000000',
              }}>
              <p>{t('governance.prevStaking.9')}</p>
            </div>
          ) : (
            <></>
          )}
        </StakingInfoByRound>
      </StakingInfoWrapper>
      {isMobile ? (
        <section>
          <StakingInfoByRound theme={userInfo.userPrincipal}>
            <div
              onClick={() => {
                if (userInfo.userPrincipal.lte(constants.Zero)) {
                  return;
                }
                setModalVisible?.();
                setModalType?.(ModalType.PrevUnstake);
                setRound?.();
                setAmount?.(userInfo.userPrincipal);
              }}
              style={{
                backgroundColor: userInfo.userPrincipal.lte(constants.Zero)
                  ? '#838383'
                  : '#000000',
              }}>
              <p>{t('governance.prevStaking.8')}</p>
            </div>
          </StakingInfoByRound>
          <StakingInfoByRound theme={userInfo.userReward}>
            <div
              onClick={() => {
                if (userInfo.userReward.lte(constants.Zero)) {
                  return;
                }
                setModalVisible?.();
                setRound?.();
                setAmount?.(userInfo.userReward);
                setModalType?.(ModalType.PrevReward);
              }}
              style={{
                backgroundColor: userInfo.userReward.lte(constants.Zero)
                  ? '#838383'
                  : '#000000',
              }}>
              <p>{t('governance.prevStaking.9')}</p>
            </div>
          </StakingInfoByRound>
        </section>
      ) : (
        <></>
      )}
    </ItemWrapper>
  ) : isLoading && account ? (
    <SkeletonWrapper>
      <Skeleton height={140} width={'100%'} />
    </SkeletonWrapper>
  ) : (
    <ItemWrapper>
      <StakingInfoWrapper>
        <WalletText>
          {account
            ? t('governance.prevStaking.4')
            : t('governance.prevStaking.3')}
        </WalletText>
      </StakingInfoWrapper>
    </ItemWrapper>
  );
};

export default StakingItem;
