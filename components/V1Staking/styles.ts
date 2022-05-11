import { constants } from 'ethers';
import styled, { css } from 'styled-components';

export const PrevStakingWrapper = styled.div`
  margin-top: calc(50vh - 100px);
  padding: 0px 10px;
  padding-bottom: 100px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 67px;

  h2 {
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

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 189px;
`;

export const RoundInfoWrapper = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
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

    > h2 {
      font-family: Gilroy-ExtraBold;
      font-size: 1.0625rem;
      margin-bottom: 23px;
      color: #fff;
    }

    > p {
      font-family: Gilroy-Light;
      text-align: center;
      font-size: 0.8125rem;
      color: #fff;
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
  margin: 0px 60px;
  flex: 1;
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
      margin: 0 5px 0 5px;
      color: #838383;
      width: 50px;
      text-align: right;
    }
  }

  > div:nth-child(3) {
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

  @media screen and (max-width: 768px) {
    padding: 0px 10px;
    flex-wrap: wrap;
    justify-content: center;

    :first-child {
      margin-bottom: 20px;
    }

    > div:first-child,
    div:nth-child(2) {
      width: 50%;
    }
    > div:nth-child(2) {
      text-align: right;
      margin-bottom: 6px;
    }

    > div:nth-child(3) {
      margin-top: 5px;
      margin-left: auto;
      width: 120px;
      height: 25px;
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
