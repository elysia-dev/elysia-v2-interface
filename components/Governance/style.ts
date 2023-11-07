import styled from 'styled-components';

const $elysiaColor = '#33a5ff';
const $firstCircleHeight = '60px';
const $circleDiameter = '33px';

// governance top start

export const TopArticle = styled.article`
  padding-bottom: 70px;
  border-bottom: 1px solid ${$elysiaColor};
  margin-bottom: 5px;
  @media (max-width: 920px) {
    border: none;
  }
`;

export const TopContent = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 920px) {
    > h2 {
      margin-bottom: 20px !important;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    > h2 {
      margin-bottom: 15px !important;
    }
  }
  > div {
    margin-left: 20px;
    padding-left: 45px;
    border-left: 1px solid #33a5ff;
    @media (max-width: 920px) {
      margin-left: 22px;
      padding-left: 40px;
    }
    @media (max-width: 640px) {
      margin-left: 0;
      padding-left: 0;
      border: 0;
    }
    > p {
      margin: 0;
      font-size: 1.2rem;
      line-height: 40px;
      letter-spacing: -0.3px;
      &::before {
        margin-right: 10px;
      }
      @media (max-width: 920px) {
        font-size: 1.2rem;
      }
      @media (max-width: 640px) {
        font-size: 1.2rem;
        line-height: 30px;
      }
      @media (max-width: 460px) {
        font-size: 1rem;
        line-height: 20px;
        &::before {
          content: '-';
          margin-right: 10px;
        }
      }
    }
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  @media (max-width: 920px) {
    flex-direction: column;
  }
  > section {
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 1s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    border-radius: 20px;
    box-shadow: 0px 0px 6px #00000029;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    padding: 30px;
    @media (max-width: 1190px) {
      padding: 15px 20px;
    }
    @media (max-width: 640px) {
      flex-direction: column;
    }
    &:not(:last-child) {
      margin-right: 20px;
      @media (max-width: 920px) {
        margin: 0;
        margin-bottom: 25px;
      }
    }
    > strong {
      color: #00bfff;
      margin: 0;
      font-size: 1.3rem;
      line-height: 30px;
      @media (max-width: 920px) {
        font-size: 1.2rem;
        line-height: 20px;
      }
      @media (max-width: 640px) {
        font-size: 1.15rem;
        line-height: 20px;
      }
    }
    > p {
      margin: 20px 0 0;
      font-size: 1.375rem;
      line-height: 30px;
      @media (max-width: 920px) {
        font-size: 1.2rem;
        line-height: 20px;
      }
      @media (max-width: 640px) {
        font-size: 1rem;
        line-height: 20px;
      }
    }
  }
`;

export const TopRightWrapper = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 920px) {
    > h2 {
      margin-bottom: 20px !important;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    > h2 {
      margin-bottom: 15px !important;
    }
  }
  > div {
    margin-left: 20px;
    padding-left: 45px;
    border-left: 1px solid #33a5ff;
    @media (max-width: 920px) {
      margin-left: 22px;
      padding-left: 40px;
    }
    @media (max-width: 640px) {
      margin-left: 0;
      padding-left: 0;
      border: 0;
    }
    > p {
      margin: 0;
      font-size: 1.2rem;
      line-height: 40px;
      letter-spacing: -0.3px;
      &::before {
        content: '-';
        margin-right: 10px;
      }
      @media (max-width: 920px) {
        font-size: 1.2rem;
      }
      @media (max-width: 640px) {
        font-size: 1.2rem;
        line-height: 30px;
      }
      @media (max-width: 460px) {
        font-size: 1rem;
        line-height: 20px;
        &::before {
          content: '-';
          margin-right: 10px;
        }
      }
    }
  }
`;

// governance top end
// index start

export const LeftLineContainer = styled.section`
  margin-top: calc(70px + (${$firstCircleHeight} / 2));
  border-left: 1px solid ${$elysiaColor};
  @media (max-width: 920px) {
    margin-top: 70px;
    border-left: none;
  }
`;

// index end
// governance center start

export const CenterHeaderCircle = styled.div`
  border-radius: 30px;
  width: 276px;
  height: 60px;
  border: 1px solid ${$elysiaColor};
  position: relative;
  bottom: calc(${$firstCircleHeight} / 2);
  left: -1px;
  @media (max-width: 920px) {
    width: 100%;
    position: initial;
    height: initial;
  }
  > b {
    font-size: 1.5rem;
    color: ${$elysiaColor};
    text-align: center;
    line-height: 60px;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    @media (max-width: 640px) {
      line-height: 50px;
    }
    display: block;
  }
`;

export const CenterGetELToken = styled.article``;

export const CenterGetELTokenHeader = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 920px) {
    position: relative;
    width: 100%;
    flex-direction: column;
    > section {
      position: absolute;
      z-index: 1;
      bottom: 10px;
      opacity: 0.6;
      transition: all 0.3 ease;
    }
  }
  > div {
    flex: 1;
    margin-left: 40px;
    @media (max-width: 920px) {
      margin: 0;
      position: relative;
      z-index: 2;
    }
    > h2 {
      font-weight: bold;
      font-size: 2.2rem;
      margin: 0 0 25px;
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
    }
    > p {
      font-size: 1.375rem;
      font-weight: normal;
      line-height: 30px;
      margin-bottom: 30px;
      @media (max-width: 640px) {
        font-size: 1rem;
        line-height: 20px;
      }
    }
    > div {
      display: flex;
      @media (max-width: 920px) {
        flex-direction: row;
        justify-content: space-between;
      }
      @media (max-width: 640px) {
        flex-direction: column;
      }
    }
  }
`;

export const CenterGetELTokenBody = styled.section`
  > div {
    height: 170px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 1s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    border-radius: 20px;
    box-shadow: 0px 0px 6px #00000029;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 56px;
    align-items: center;
    @media (max-width: 920px) {
      height: initial;
      padding: 20px 25px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: space-between;
      grid-gap: 25px;
      gap: 25px;
    }
    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &:not(:last-child) {
        border-right: 1px solid ${$elysiaColor};
        height: 100%;
        @media (max-width: 920px) {
          border: none;
        }
      }
      @media (max-width: 920px) {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        align-items:center;
      }
      > p {
        font-size: 1.275rem;
        margin: 0;
        font-weight: normal;
        @media (max-width: 460px) {
          font-size: 1rem;
        }
      }
      > h2 {
        font-size: 1.625rem;
        margin: 15px 0 0;
        font-weight: bold;
        @media (max-width: 920px) {
          margin: 0;
        }
        @media (max-width: 460px) {
          font-size: 1.4rem;
        }
      }
    }
  }
  > p {
    margin: 10px 30px 0;
    font-size: 1rem;
    font-weight: normal;
    @media (max-width: 460px) {
      font-size: 1rem;
      margin: 10px 10px 0;
    }
  }
`;

// governance center end
// staking start

export const StakingArticle = styled.article``;

export const StakingHeader = styled.section`
  display: flex;
  height: 100%;
  @media (max-width: 920px) {
    flex-direction: column;
  }
  > div {
    &:not(:first-child) {
      flex: 1;
      margin-left: 54px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 920px) {
        margin-top: 30px;
        margin-left: 0;
        width: 100%;
      }
      > h2 {
        font-weight: bold;
        font-size: 2.2rem;
        margin: 0 0 25px;
        @media (max-width: 460px) {
          font-size: 1.5rem;
        }
      }
      > p {
        font-size: 1.375rem;
        font-weight: normal;
        line-height: 30px;
        margin-bottom: 30px;
        @media (max-width: 460px) {
          font-size: 1rem;
          line-height: 20px;
        }
      }
    }
  }
`;

export const StakingImageContainer = styled.section`
  height: 364px;
  position: relative;
  @media (max-width: 920px) {
    margin: 0 auto;
  }
  @media (max-width: 640px) {
    width: 300px;
  }
  .amount {
    position: absolute;
    width: 273px;
    height: 273px;
    top: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > p {
      font-size: 1.2rem;
      margin: 0;
      font-weight: normal;
    }
    > b {
      font-size: 1.3rem;
      margin: 10px 0 0;
      font-weight: bold;
    }
  }
  > span {
    position: absolute;
    width: 427px;
    height: 364px;
  }
`;
export const StakingBody = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const StakingInterface = styled.section`
  width: 100%;
  height: 170px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 1s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  border-radius: 20px;
  box-shadow: 0px 0px 6px #00000029;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 15px 25px;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 18px;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    height: initial;
  }
`;
export const StakingSelectMainnet = styled.section`
  display: flex;
  width: 135px;
  height: 100%;
  border-radius: 20px;
  background-color: #232431;
  position: relative;
  @media (max-width: 920px) {
    height: 140px;
  }
  > div {
    z-index: 2;
    flex: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > p {
      margin: 14px 0 0;
    }
  }
`;

export const StakingSelectMainnetCurrent = styled.section`
  width: 63px;
  height: 132px;
  border-radius: 20px;
  top: 4px;
  background-color: #343545;
  position: absolute;
  transition: all 0.3s ease;
  z-index: 1;
`;

export const StakingContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 140px;
  @media (max-width: 920px) {
    height: initial;
    width: 100%;
  }
`;
export const StakingContentBox = styled.section`
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  flex: 1;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #505050;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    margin: 0;
    padding: 20px 0;
    width: 100%;
  }
`;
export const StakingContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-right: 62px;
  @media (max-width: 920px) {
    margin: 0;
    width: 100%;
    margin: 15px 0;
  }
  > p {
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
    @media (max-width: 460px) {
      font-size: 1.2rem;
    }
  }
  > div {
    display: flex;
    align-items: center;
    > b {
      font-weight: bold;
      font-size: 1.8rem;
      margin: 0;
      @media (max-width: 460px) {
        font-size: 1.4rem;
      }
    }
    > span {
      color: #838383;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 5px 0;
      @media (max-width: 460px) {
        font-size: 1.4rem;
      }
    }
  }
`;
export const StakingButton = styled.div<{ active?: boolean }>`
  cursor: pointer;
  width: 249px;
  height: 46px;
  background: #000000;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 23px;
  background-color: ${(props) =>
    props.active ? '#000000' : 'rgb(240, 240, 241)'};
  @media (max-width: 920px) {
    width: 100%;
    height: 40px;
  }
  > p {
    margin: 0;
    font-size: 1.2rem;
    line-height: 46px;
    font-weight: bold;
    color: ${(props) => (props.active ? '#FFF' : '#888888')};
    @media (max-width: 920px) {
      font-size: 1.2rem;
      line-height: 40px;
    }
  }
`;

export const StakingDisableContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 46px;
  font-weight: bold;
  @media (max-width: 460px) {
    margin: 40px 0 20px;
  }
`;

// governance bottom start
export const BottomArticle = styled.article`
  color: #fff;
  margin-bottom: 60px;
`;
export const BottomHeader = styled.section`
  padding-top: 220px;
  display: flex;
  border-left: 1px solid ${$elysiaColor};
  @media (max-width: 920px) {
    border: none;
    margin-bottom: 0;
  }
  > h2 {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: -0.3px;
    position: absolute;
    margin: 16px 0px 0 80px;
    @media (max-width: 920px) {
      margin: 16px 0;
      white-space: initial;
      position: initial;
      white-space: initial;
    }
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
  }
  margin-bottom: 50px;
`;
export const BottomContainer = styled.article`
  margin-left: 80px;
  @media (max-width: 920px) {
    margin: 0;
  }
  > h2 {
    margin-bottom: 25px;
  }
  > p {
    margin: 60px 0 25px;
    font-size: 1.4rem;
    @media (max-width: 460px) {
      font-size: 1rem;
    }
  }
  > div {
    display: flex;
    margin-bottom: 66px;
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
`;

export const BottomContentBoxContainer = styled.section`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const BottomContentBox = styled.section`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 1s ease;
  border-radius: 20px;
  box-shadow: 0px 0px 6px #00000029;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  padding: 30px;
  @media (max-width: 640px) {
    padding: 15px 20px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:not(:last-child) {
    margin-right: 30px;
    @media (max-width: 640px) {
      margin: 0;
      margin-bottom: 16px;
    }
  }
`;
export const ContentBoxFigure = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > button {
    width: 249px;
    height: 46px;
    background: #505050;
    border-radius: 23px;
    color: #ffffff;
    font-size: 1.25rem;
    margin: 0;
    text-align: center;
    line-height: 46px;
    font-weight: normal;
    @media (max-width: 920px) {
      width: 160px;
      height: 40px;
      font-size: 1.1rem;
      line-height: 40px;
    }
    @media (max-width: 640px) {
      width: 200px;
      height: 40px;
    }
    @media (max-width: 460px) {
      font-size: 1rem;
      line-height: 40px;
    }
  }
`;
export const ContentBoxTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 25px;
  > b {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
    margin-right: 8px;
    @media (max-width: 460px) {
      font-size: 1.3rem;
    }
  }
`;
export const ContentBoxParagraph = styled.p`
  font-size: 1rem;
`;

// governance link counter start
export const LeftLineCounterContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 220px;
  @media (max-width: 460px) {
    padding-top: 25vh;
  }
`;

export const LeftLineCounter = styled.div`
  width: ${$circleDiameter};
  height: ${$circleDiameter};
  border-bottom: 1px solid ${$elysiaColor};
  position: relative;
  @media (max-width: 920px) {
    display: none;
  }
  > p {
    color: #fff;
    background-color: ${$elysiaColor};
    width: ${$circleDiameter};
    height: ${$circleDiameter};
    text-align: center;
    line-height: ${$circleDiameter};
    border-radius: 100%;
    position: absolute;
    top: calc(${$circleDiameter} / 2);
    left: ${$circleDiameter};
    font-weight: bold;
    font-size: 1.5rem;
    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const LeftLineContent = styled.div`
  margin-left: calc(${$circleDiameter} + 30px);
  color: #fff;
  flex: 1;
  @media (max-width: 920px) {
    margin: 0;
    margin-top: 60px;
  }
`;

// etc

export const PrevLinkButton = styled.a`
  font-weight: normal;
  font-size: 1.375rem;
  color: ${$elysiaColor};
  cursor: pointer;
  display: inline-flex;
`;

export const AnchorButton = styled.a`
  width: 250px;
  height: 46px;
  background-color: #000000;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 23px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-size: 1.175rem;
  letter-spacing: -0.1px;
  font-weight: normal;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 35px;
  }
  @media (max-width: 920px) {
    width: 100%;
    font-size: 1.1rem;
    justify-content: space-between;
    padding: 5px 30px;
    &:not(:last-child) {
      margin-right: none;
      margin-bottom: 15px;
    }
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 46px;
  background-color: #000000;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 23px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-size: 1.175rem;
  letter-spacing: -0.1px;
  font-weight: normal;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 35px;
  }
  @media (max-width: 920px) {
    width: 100%;
    font-size: 1.1rem;
    justify-content: space-between;
    padding: 5px 30px;
    &:not(:last-child) {
      margin-right: none;
      margin-bottom: 15px;
    }
  }
`;
