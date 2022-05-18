import styled from 'styled-components';
import mainImage from 'assets/images/main/main_image.webp';
import elbridge from 'assets/images/main/elbridge_image.webp';
import ecosystem from 'assets/images/main/ecosystem_image.webp';
import developers from 'assets/images/main/developers_image.webp';
import governance from 'assets/images/main/governance_image.webp';
import community from 'assets/images/main/community_image.webp';
import document from 'assets/images/main/document_image.webp';

const setRightBackground = (image: string) => {
  return {
    background: `url(${image}), rgba(255, 255, 255, 0.1)`,
    'background-repeat': 'no-repeat',
    'background-position-x': 'right',
    'background-position-y': '-50px',
    'background-size': '800px',
  };
};
const setLeftBackground = (image: string) => {
  return {
    background: `url(${image}), rgba(255, 255, 255, 0.1)`,
    'background-repeat': 'no-repeat',
    'background-position-x': 'left',
    'background-position-y': '-50px',
    'background-size': '800px',
  };
};

const sectionBorder = (padding: string) => ({
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding,
  'margin-bottom': '30px',
});

const partnerBorder = (padding?: string) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding,
});

export const MainImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  opacity: 0.5;
  background-image: url(${mainImage.src});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const MainTopWrapper = styled.div`
  z-index: 1;
  padding-top: 742px;

  > div {
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
      max-width: 100%;
      height: 230px;
      margin-top: 252.79px;
      ${partnerBorder()}
      ${center}
      > div {
        width: 25%;
        ${center}
        font-family: Gilroy-Light;
        color: #ffffff;
        text-align: center;
        font-size: 1.375rem;
        > div {
          > span {
            font-family: Gilroy-ExtraBold;
            font-size: 3.125rem;
          }
        }
      }
    }
  }
`;

export const MainPortFolioWrapper = styled.div`
  padding: 170px 0px 100px 0px;
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

export const MainSectionWrapper = styled.div`
  padding: 100px 0px 100px 0px;
  font-family: Gilroy-Light;
  > div:nth-child(1) {
    ${setRightBackground(elbridge.src)}
  }
  > div:nth-child(3) {
    ${setRightBackground(ecosystem.src)}
  }
  > div:nth-child(5) {
    ${setRightBackground(developers.src)}
  }

  > div:nth-child(2) {
    ${setLeftBackground(governance.src)}
  }
  > div:nth-child(4) {
    ${setLeftBackground(community.src)}
  }
  > div:nth-child(6) {
    ${setLeftBackground(document.src)}
  }
  > div:nth-child(1),
  div:nth-child(3),
  div:nth-child(5) {
    width: 100%;
    height: 280px;
    ${sectionBorder('64px 0px 49px 50px')}
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
          font-size: 1.375rem;
          color: #ffffff;
          margin-top: 10px;
        }
      }
      > p {
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
    ${sectionBorder('64px 50px 49px 0px')}
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
          font-size: 1.375rem;
          color: #ffffff;
          margin-top: 10px;
        }
      }
      > p {
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
  padding: 200px 0px 0px 0px;
  font-family: Gilroy-Light;
  font-size: 1.25rem;
  color: #ffffff;
  > div:nth-child(1) {
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
        ${center}
        max-width: 1160px;
        height: 94px;
        ${partnerBorder('0px 30px')}
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
        ${center}
        max-width: 627px;
        height: 94px;
        ${partnerBorder('0px 30px')}
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
        ${center}
        width: 25.25rem;
        height: 94px;
        ${partnerBorder('0px 30px')}
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
      ${partnerBorder('35px 0px')}
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
        background: rgba(255, 255, 255, 0.1);
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
