import { useWeb3React } from '@web3-react/core';
import LanguageType from 'enums/LanguageType';
import ModalType from 'enums/ModalType';
import { BigNumber, constants, utils } from 'ethers';
import usePrevStaking from 'hooks/usePrevStaing';
import moment from 'moment';
import { Dispatch, SetStateAction } from 'react';
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

  return (
    <>
      <ItemWrapper>
        <RoundInfoWrapper>
          <div>
            {isLoading && account ? (
              <Skeleton height={141} width={208} />
            ) : (
              <>
                <div>
                  {round
                    ? i18n.language === LanguageType.EN
                      ? t(`governance.prev_staking.5.${round}`)
                      : t('governance.prev_staking.5', { round })
                    : t('governance.prev_staking.2')}
                </div>
                <div>
                  {moment(date?.startedAt || '2021.07.27').format('YYYY.MM.DD')}{' '}
                  ~ <br />
                  {moment(date?.endedAt || '2022.04.17').format(
                    'YYYY.MM.DD',
                  )}{' '}
                  (KST)
                </div>
              </>
            )}
          </div>
        </RoundInfoWrapper>
        <StakingInfoWrapper>
          {userInfo ? (
            <>
              <StakingInfoByRound>
                <div>{t('governance.prev_staking.6')}</div>
                <div>
                  {formatComma(userInfo.userPrincipal)} <span>EL</span>
                </div>
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
                      ? '#f0f0f1'
                      : '#ffffff',
                    boxShadow: '0px 1px 6px rgb(0 0 0 / 16%)',
                  }}>
                  {t('governance.prev_staking.8')}
                </div>
              </StakingInfoByRound>
              <StakingInfoByRound>
                <div>{t('governance.prev_staking.7')}</div>
                <div>
                  {formatComma(userInfo.userReward)} <span>EL</span>
                </div>
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
                      ? '#f0f0f1'
                      : '#ffffff',
                    boxShadow: '0px 1px 6px rgb(0 0 0 / 16%)',
                  }}>
                  {t('governance.prev_staking.9')}
                </div>
              </StakingInfoByRound>
            </>
          ) : isLoading && account ? (
            <SkeletonWrapper>
              <Skeleton height={140} width={'100%'} />
            </SkeletonWrapper>
          ) : (
            <WalletText>
              {account
                ? t('governance.prev_staking.4')
                : t('governance.prev_staking.3')}
            </WalletText>
          )}
        </StakingInfoWrapper>
      </ItemWrapper>
    </>
  );
};

export default StakingItem;
