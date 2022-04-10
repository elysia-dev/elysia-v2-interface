import { useWeb3React } from '@web3-react/core';
import { BigNumber, utils } from 'ethers';
import moment from 'moment';
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
  const { date, round, userInfo, isLoading } = props;

  return (
    <>
      <ItemWrapper>
        <RoundInfoWrapper>
          <div>
            {isLoading && account ? (
              <Skeleton height={141} width={208} />
            ) : (
              <>
                <div>{round ? round + '차' : '1차 ~ 7차'}</div>
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
                <div>스테이킹 수량</div>
                <div>
                  {formatComma(userInfo.userPrincipal)} <span>EL</span>
                </div>
                <div>언스테이킹</div>
              </StakingInfoByRound>
              <StakingInfoByRound>
                <div>보상 수량</div>
                <div>
                  {formatComma(userInfo.userReward)} <span>EL</span>
                </div>
                <div>수령하기</div>
              </StakingInfoByRound>
            </>
          ) : isLoading && account ? (
            <SkeletonWrapper>
              <Skeleton height={140} width={'100%'} />
            </SkeletonWrapper>
          ) : (
            <WalletText>
              {account
                ? '스테이킹한 EL 토큰 수량이 없습니다.'
                : '지갑 연결이 필요합니다.'}
            </WalletText>
          )}
        </StakingInfoWrapper>
      </ItemWrapper>
    </>
  );
};

export default StakingItem;
