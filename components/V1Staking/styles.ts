import { constants } from 'ethers';
import styled, { css } from 'styled-components';

export const PrevStakingWrapper = styled.article`
  margin-top: calc(50vh - 100px);
  padding: 0px 10px;
  padding-bottom: 100px;
`;

export const HeaderWrapper = styled.section`
  width: 100%;
  margin-bottom: 67px;

  h1 {
    font-family: Gilroy-ExtraBold;
    font-size: 1.875rem;
    margin-bottom: 20px;
    color: #fff;
  }
  p {
    font-family: Gilroy-Light;
    font-size: 1.25rem;
    line-height: 1.8rem;
    color: #fff;
  }
`;

export const StakingSection = styled.section`
  width: 100%;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0px 0px 6px #00000029;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 22px;
  margin-bottom: 15px;
  /* 
  > div:not(:last-of-type) {
    border-bottom: 1px solid #e6e6e6;
  } */
`;

export const ItemWrapper = styled.article`
  display: flex;
  flex-direction: row;
  height: 189px;
  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: space-around;
  }
  @media (max-width: 640px) {
    height: initial;
    > section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 15px;
    }
  }
`;

export const RoundInfoWrapper = styled.section`
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 840px) {
    border: 0;
  }
  > div {
    width: 216px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0px 0px 6px #00000029;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    margin-right: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      width: 150px;
    }
    @media (max-width: 840px) {
      width: 100%;
      margin: 0;
      flex-direction: row;
      height: 45px;
      border-radius: 10px;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    > h2 {
      font-family: Gilroy-ExtraBold;
      font-size: 1.0625rem;
      margin-bottom: 23px;
      color: #fff;
      @media (max-width: 840px) {
        margin: 0;
        font-size: 1.7rem;
      }
    }

    > p {
      font-family: Gilroy-Light;
      text-align: center;
      font-size: 0.8125rem;
      color: #fff;
      @media (max-width: 840px) {
        margin: 0;
        font-size: 1.2rem;
        > br {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    > div {
      border: none;
    }
  }
`;

export const StakingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
  width: 100%;
`;

const hoverBoxShadow = css`
  cursor: pointer;
  box-shadow: 0px 1px 6px #00000029;
  transition: all 0.2s ease;
  > p {
    border-bottom: 0px;
    background: linear-gradient(to right, #3679b5, #3679b5 50%, #333333 50%);
    background-clip: text;
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none;
    transition: all 0.4s ease;
  }
  &:hover {
    box-shadow: 0px 0px 15px #3679b5;
    transition: all 0.2s ease;
    > p {
      transition: all 0.4s ease;
      background-position: 0 100%;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0px 0px 5px #3679b5;
  }
`;

export const StakingInfoByRound = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 30px;
  flex: 1;
  @media (max-width: 1024px) {
    margin: 0px 15px;
  }
  @media (max-width: 840px) {
    margin: 15px 0;
    border-bottom: 0 !important;
  }
  &:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  > h2 {
    font-family: Gilroy-ExtraBold;
    font-size: 1.4rem;
    margin: 0;
    color: #fff;
  }
  > section {
    margin-left: auto;
    display: flex;
    align-items: center;
    > h2 {
      font-family: Gilroy-ExtraBold;
      font-size: 1.8rem;
      margin: 0;
      color: #fff;
    }
    > span {
      font-family: Gilroy-ExtraBold;
      font-size: 1.7rem;
      margin: 0;
      color: #838383;
      width: 50px;
      text-align: right;
      @media (max-width: 640px) {
        width: 40px;
      }
    }
  }

  > div {
    width: 249px;
    height: 46px;
    border-radius: 23px;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    ${(props: any) => (props.theme.lte(constants.Zero) ? null : hoverBoxShadow)}
    @media (max-width: 1024px) {
      width: 200px;
      height: 40px;
    }
    @media (max-width: 640px) {
      width: 100%;
      height: 40px;
      margin: 0;
    }
    > p {
      font-size: 1.2rem;
      ${(props: any) =>
        props.theme.lte(constants.Zero)
          ? null
          : css`
              cursor: pointer;
            `}
      margin: 0;
      font-family: Gilroy-Light;
    }
  }
`;

export const WalletText = styled.div`
  font-size: 1.25rem;
  text-align: center;
  font-family: Gilroy-ExtraBold;
  color: #fff;
  letter-spacing: 1.4px;
`;

export const SkeletonWrapper = styled.div`
  padding: 0;
`;
