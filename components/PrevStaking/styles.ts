import styled from 'styled-components';

export const PrevStakingWrapper = styled.div`
  margin-top: 127px;
  /* height: 80vh; */
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 61.13px;

  div:first-child {
    font-family: 'Montserrat-bold';
    font-size: 1.875rem;
    margin-bottom: 23.13px;
  }
  div:last-child {
    font-family: 'Montserrat';
    font-size: 1.25rem;
    line-height: 2.1rem;

    span {
      font-family: 'Montserrat-bold';
    }
  }
`;

export const StakingSection = styled.section`
  width: 1193px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 127px;

  > div:not(:last-of-type) {
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  height: 174px;
  /* padding: 20px 0px 20px 0px; */
`;

export const RoundInfoWrapper = styled.div`
  border-right: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21%;

  > div {
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    width: 208px;
    height: 141px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div:first-child {
      font-family: 'SpoqaHanSansNeo-Bold';
      font-size: 1.0625rem;
      margin-bottom: 23px;
    }

    > div:last-child {
      font-family: 'SpoqaHanSansNeo';
      text-align: center;
      color: #333333;
      font-size: 0.8125rem;
    }
  }
`;

export const StakingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* font-family: 'SpoqaHanSansNeo-Bold'; */
  font-size: 1.25rem;
  width: 79%;
`;

export const StakingInfoByRound = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 40px;

  :first-child {
    margin-bottom: 40px;
  }
  > div:first-child {
    color: #333333;
    font-family: 'Inter', 'SpoqaHanSansNeo';
    font-size: 0.9375rem;
  }

  > div:nth-child(2) {
    font-family: 'Inter-Bold', 'SpoqaHanSansNeo-Bold', 'Montserrat-bold',
      'Inter-Bold';
    margin-left: auto;
    font-size: 1.25rem;
    > span {
      font-family: 'Inter-Bold', 'SpoqaHanSansNeo-Bold', 'Montserrat-bold',
        'Inter-Bold';
      color: #646464;
    }
  }
  > div:nth-child(3) {
    cursor: pointer;
    width: 210px;
    height: 30px;
    border-radius: 15px;
    background-color: #f0f0f1;
    color: #888888;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    font-size: 0.84375rem;
  }
`;

export const WalletText = styled.div`
  text-align: center;
  font-family: 'Inter-Bold', 'SpoqaHanSansNeo-Bold';
`;

export const SkeletonWrapper = styled.div`
  padding: 0 40px;
`;
