import { useWeb3React } from '@web3-react/core';
import usePrevStaking from 'hooks/usePrevStaking';
import stakingRoundDate from 'utils/stakingRoundDate';
import StakingItem from './StakingItem';
import { HeaderWrapper, PrevStakingWrapper, StakingSection } from './styles';

const PrevStaking = () => {
  const { userInfo, isLoading } = usePrevStaking();
  const { account } = useWeb3React();

  return (
    <PrevStakingWrapper>
      <HeaderWrapper>
        <div>이전 스테이킹 프로그램</div>
        <div>
          이전 EL 스테이킹 프로그램은 <span>2021.07.27 ~ 2022.04.17 KST</span>{' '}
          까지 7회차 동안 진행했습니다.
          <br /> 이 기간동안 스테이킹한 물량이 남아있는 사용자만 확인할 수
          있습니다.
          <br /> 언스테이킹 및 보상 수령을 원하는 사용자는 지갑 연결을 해주세요.
        </div>
      </HeaderWrapper>
      <div>
        <StakingSection>
          {userInfo.length > 1 ? (
            stakingRoundDate.map((date, idx) => {
              return (
                <StakingItem
                  key={`staking_item_${idx}`}
                  date={date}
                  round={idx + 1}
                  userInfo={userInfo[idx]}
                />
              );
            })
          ) : (
            <StakingItem isLoading={isLoading} />
          )}
        </StakingSection>
      </div>
    </PrevStakingWrapper>
  );
};

export default PrevStaking;
