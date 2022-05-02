import styled from 'styled-components';
import MainTopImg from 'assets/images/main/mainTop@2x.png';

const defaultBorder = '1px solid #333333';

export const MainWrapper = styled.div`
  /* padding: 0px 45px 50px 45px; */
  /* background: #dfd9d9; */
`;

export const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const TopPortfolioWrapper = styled.div`
  background-image: url(${MainTopImg.src});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
`;

export const MainTopWrapper = styled.div`
  width: 100%;
  height: 95vh;
  padding: 0px 140px;

  > div {
    padding-top: 210px;
    /* margin: 0px 45px 0px 45px; */

    > div:nth-child(1) {
      color: #ffffff;
      display: inline-block;
      > div:nth-child(1) {
        font-family: Gilroy-ExtraBold;
        font-size: 3.75rem;
        letter-spacing: 0.3rem;
      }
      > div:nth-child(2) {
        font-family: Gilroy-Light;
        font-size: 1.875rem;
        color: #33a5ff;
      }
    }

    /* Link */
    > div:nth-child(2) {
      display: flex;
      margin-top: 30.79px;
      > div:not(div:last-child) {
        margin-right: 24.79px;
      }
      > div {
        width: 35.21px;
        height: 35.21px;
        > a {
          width: 100%;
          height: 100%;
          ${center}
        }
      }
    }

    /* icon */
    > div:nth-child(3) {
      width: 100%;
      height: 230px;
      margin-top: 252.79px;
      box-shadow: 0px 0px 6px #00000029;
      border-radius: 20px;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      ${center}
      > div {
        width: 25%;
        ${center}
        font-family: Gilroy-Light;
        color: #ffffff;
        text-align: center;
        font-size: 1.375rem;
        > div {
          width: 100%;
          > span {
            font-family: Gilroy-ExtraBold;
            font-size: 3.125rem;
          }
        }
      }
      > div:not(div:last-child) {
        margin-right: 100px;
      }
    }
  }
`;

export const MainPortFolioWrapper = styled.div`
  margin-top: 170px;
  padding: 0px 140px;
  padding-bottom: 100px;
  > div:nth-child(1) {
    > div:first-child {
      font-family: Gilroy-ExtraBold;
      font-size: 2rem;
      color: #ffffff;
    }
    > div:last-child {
      font-family: Gilroy-Light;
      color: #33a5ff;
      font-size: 1.375rem;
      margin-top: 5px;
    }
  }
  > div:nth-child(2) {
    margin-top: 34px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      > div:nth-child(1) {
        width: 100%;
        img {
          filter: grayscale(100%);
        }
      }
    }
  }
  > div:nth-child(3) {
    font-family: Gilroy-Light;
    color: #ffffff;
    text-align: right;
    margin-top: 16px;
    > span {
      cursor: pointer;
    }
  }
`;
export const RightArrowIcon = styled.i`
  border: solid #33a5ff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: 15px;
`;

export const NoiseSvg = styled.svg`
  /* margin-top: 40px; */
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainSectionWrapper = styled.div`
  padding: 100px 140px;
  /* background: linear-gradient(to bottom, #000000 30%, transparent),
    linear-gradient(to right, #000000 20%, #1a1a42 40%, #47c2ff);
  backdrop-filter: url(#f); */
  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    mix-blend-mode: color-burn;
    content: '';
  }

  &::before {
    filter: url(#f);
  }

  &::after {
    background: linear-gradient(to bottom, #000000 30%, transparent),
      linear-gradient(to right, #000000 20%, #4785ff);
  }
  > div:nth-child(1),
  div:nth-child(3),
  div:nth-child(5) {
    width: 100%;
    height: 280px;
    box-shadow: 0px 0px 6px #00000029;
    /* background: #ffffff 0% 0% no-repeat padding-box; */
    backdrop-filter: blur(18px);
    /* backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px); */
    padding: 64px 0px 49px 50px;
    margin-bottom: 30px;
    > div:first-child {
      > div:first-child {
        > span:nth-child(1) {
          font-family: Gilroy-ExtraBold;
          font-size: 2rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          > span {
            margin-right: 10px;
            cursor: pointer;
          }
        }
        > p {
          font-family: Gilroy-Light;
          font-size: 1.375rem;
          color: #ffffff;
          margin-top: 10px;
        }
      }
      > p {
        font-family: Gilroy-Light;
        color: #838383;
        margin-top: 35px;
        font-size: 1.375rem;
      }
    }
  }

  > div:nth-child(2),
  > div:nth-child(4),
  > div:nth-child(6) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 280px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 6px #00000029;
    backdrop-filter: blur(18px);
    padding: 64px 50px 49px 0px;
    > div:first-child {
      > div:first-child {
        > span:nth-child(1) {
          font-family: Gilroy-ExtraBold;
          font-size: 2rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: end;
          > span {
            margin-left: 10px;
            cursor: pointer;
          }
        }
        > p {
          font-family: Gilroy-Light;
          font-size: 1.375rem;
          color: #ffffff;
          margin-top: 10px;
        }
      }
      > p {
        font-family: Gilroy-Light;
        color: #838383;
        margin-top: 35px;
        font-size: 1.375rem;
      }
    }
    > div:last-child {
      text-align: right;
      margin-left: auto;
    }
  }
  > div:nth-child(6) {
    margin-bottom: 0px;
  }
`;

export const PartnersWrapper = styled.div`
  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    mix-blend-mode: color-burn;
    content: '';
  }

  &::before {
    filter: url(#f);
  }

  &::after {
    background: linear-gradient(to top, #000000 30%, transparent),
      linear-gradient(to right, #000000 20%, #4785ff);
  }
  padding: 0rem 8.75rem;
  padding-top: 200px;
  font-family: Gilroy-Light;
  font-size: 1.25rem;
  color: #ffffff;
  > div:nth-child(1) {
    font-family: Gilroy-Light;
    color: #33a5ff;
    font-size: 1.375rem;
    > span:first-child {
      font-family: Gilroy-ExtraBold;
      font-size: 2rem;
      color: #ffffff;
    }
    > span:last-child {
    }
  }

  > div:nth-child(2) {
    > div:nth-child(1) {
      > div:last-child {
        > div:first-child {
          margin-right: 5.625rem;
        }
      }
    }
    > div:nth-child(2) {
      > div:last-child {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1160px;
        height: 94px;
        border-radius: 20px;
        box-shadow: 0px 0px 6px #00000029;
        backdrop-filter: blur(18px);
        padding: 0px 30px;
        > div:nth-child(1) {
          margin-right: 46px;
        }
        > div:nth-child(2) {
          margin-right: 51px;
        }
        > div:nth-child(3) {
          margin-right: 48px;
        }
        > div:nth-child(4) {
          margin-right: 39px;
        }
        > div:nth-child(5) {
          margin-right: 38px;
        }
      }
    }
  }
  > div:nth-child(3) {
    > div:nth-child(1) {
      > div:last-child {
        > div:first-child {
          margin-right: 4.6875rem;
        }
      }
    }
    > div:nth-child(2) {
      > div:last-child {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 627px;
        height: 94px;
        border-radius: 20px;
        box-shadow: 0px 0px 6px #00000029;
        backdrop-filter: blur(18px);
        padding: 0px 30px;
        > div:nth-child(1) {
          margin-right: 44px;
        }
        > div:nth-child(2) {
          margin-right: 72px;
        }
      }
    }
  }
  > div:nth-child(2),
  > div:nth-child(3) {
    margin-top: 30px;
    display: flex;
    > div:nth-child(1) {
      margin-right: 23px;
      > div:last-child {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25.25rem;
        height: 94px;
        border-radius: 20px;
        box-shadow: 0px 0px 6px #00000029;
        backdrop-filter: blur(18px);
        padding: 0px 30px;
      }
    }
  }
  > div:nth-child(4) {
    margin-top: 30px;
    > div:last-child {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      width: 100%;
      border-radius: 20px;
      box-shadow: 0px 0px 6px #00000029;
      backdrop-filter: blur(18px);
      padding: 35px 0px;
      > div {
        ${center};
        margin: 10px 40px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1100px) {
    > div:nth-child(2),
    > div:nth-child(3) {
      margin-top: 30px;
      display: block;
    }

    > div:nth-child(2) {
      > div:nth-child(2) {
        > div:last-child {
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          height: auto;
          > div {
            ${center};
            margin: 10px 10px 10px 10px !important;
          }
        }
      }
    }
    > div:nth-child(4) {
      > div:last-child {
        padding: 35px 20px;
      }
    }
  }
`;

export const MainTeamWrapper = styled.div`
  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    mix-blend-mode: color-burn;
    content: '';
  }

  &::before {
    filter: url(#f);
  }

  &::after {
    background: radial-gradient(circle at 5%, transparent, #000000 24%),
      radial-gradient(circle at 0%, #4785ff, #000000);
  }

  padding: 0px 140px;
  padding-top: 100px;
  > div:first-child {
    > div:first-child {
      font-family: Gilroy-Light;
      color: #33a5ff;
      font-size: 1.375rem;
      > span:first-child {
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
        color: #ffffff;
      }
    }
    > div:last-child {
      margin-top: 10px;
      display: flex;
      /* justify-content: space-between; */
      > div {
        margin-right: 20px;
      }
    }
  }
  > div:last-child {
    margin-top: 67px;
    > div:first-child {
      font-family: Gilroy-Light;
      color: #33a5ff;
      font-size: 1.375rem;
      > span:first-child {
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
        color: #ffffff;
      }
    }
    > div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 48px;
      width: 100%;
      > div {
        width: 33%;
        height: 389px;
        box-shadow: 0px 0px 6px #00000029;
        border-radius: 20px;
        backdrop-filter: blur(18px);
        /* padding: 20px; */
        > div:first-child {
          display: flex;
          border-bottom: 1.5px solid #333333;
          padding: 23px 25px;
          > div:first-child {
            margin-right: auto;
          }
        }
        > div:last-child {
          margin-top: 25px;
          padding: 0px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          > div:first-child {
            width: 100%;
            font-family: Gilroy-ExtraBold;
            color: #ffffff;
            font-size: 1.125rem;
            text-align: center;
            /* margin-bottom: 20px; */
            line-height: 1.7rem;
            letter-spacing: 0.08rem;
            ${center}
          }
          > div:last-child {
            padding: 0px 15px;
            font-family: Gilroy-Light;
            color: #838383;
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 20px;
          }
        }
      }
      > div:nth-child(3) {
        > div:last-child {
          > div:last-child {
            margin-top: 45px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1100px) {
    > div:last-child {
      > div:last-child {
        > div {
          height: 479px;
        }
      }
    }
  }
`;
