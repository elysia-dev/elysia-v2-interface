import styled from 'styled-components';
import mainImage from 'assets/images/main/main_image.webp';
import elbridge from 'assets/images/main/elbridge_image.webp';
import ecosystem from 'assets/images/main/ecosystem_image.webp';
import developers from 'assets/images/main/developers_image.webp';
import governance from 'assets/images/main/governance_image.webp';
import community from 'assets/images/main/community_image.webp';
import document from 'assets/images/main/document_image.webp';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

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
  background: 'rgba(255, 255, 255, 0.1)',
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
  max-width: 1639px;
  margin: auto;
  padding: 60vh 0px 0px;

  > div {
    > div:nth-child(1) {
      color: #ffffff;
      display: inline-block;
      > div:nth-child(1) {
        font-family: ${$bold};
        font-size: 3.75rem;
        letter-spacing: 0.3rem;
        user-select: none;
        @media (max-width: 640px) {
          font-size: 3rem;
        }
        @media (max-width: 460px) {
          font-size: 2.2rem;
        }
      }
      > div:nth-child(2) {
        font-family: ${$light};
        font-size: 1.875rem;
        color: #33a5ff;
        user-select: none;
        @media (max-width: 640px) {
          font-size: 1.5rem;
        }
        @media (max-width: 460px) {
          font-size: 1.2rem;
        }
      }
    }

    /* Link */
    > div:nth-child(2) {
      display: flex;
      margin-top: 30.79px;
      @media (max-width: 920px) {
        margin-top: 30px;
      }
      @media (max-width: 640px) {
        margin-top: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 15px;
      }
      > div:not(div:last-child) {
        margin-right: 24.79px;
        @media (max-width: 640px) {
          margin-right: 18px;
        }
        @media (max-width: 460px) {
          margin-right: 15px;
        }
      }
      > div {
        width: 35.21px;
        height: 35.21px;
        @media (max-width: 920px) {
          width: 30px;
          height: 30px;
        }
        @media (max-width: 460px) {
          width: 25px;
          height: 25px;
        }
        > a {
          width: 100%;
          height: 100%;
          ${center}
          transition: all 0.2s ease;
          top: 0;
          &:hover {
            filter: drop-shadow(0px 5px 6px #333333);
            transition: all 0.2s ease;
            position: relative;
            top: -3px;
          }
        }
      }
    }

    /* icon */
    > div:nth-child(3) {
      max-width: 100%;
      height: 230px;
      margin-top: 25vh;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 6px #00000029;
      border-radius: 20px;
      backdrop-filter: blur(18px);
      ${partnerBorder()}
      ${center}
      user-select: none;
      transition: all 1s ease;
      &:hover {
        transition: all 1s ease;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(3px);
      }
      @media (max-width: 960px) {
        flex-direction: column;
        justify-content: space-around;
      }
      > div {
        width: 33%;
        ${center}
        font-family: ${$light};
        color: #ffffff;
        text-align: center;
        font-size: 1.375rem;
        @media (max-width: 640px) {
          font-size: 1.2rem;
        }
        @media (max-width: 460px) {
          font-size: 1rem;
        }
        > div {
          > span {
            font-family: ${$bold};
            font-size: 3.125rem;
            @media (max-width: 640px) {
              font-size: 2.7rem;
            }
            @media (max-width: 460px) {
              font-size: 2.2rem;
            }
          }
        }
        @media (max-width: 960px) {
          width: 100%;
        }
      }
    }
  }
`;

export const MainPortFolioWrapper = styled.div`
  max-width: 1639px;
  padding: 170px 0px 100px 0px;
  margin: 0 auto;
  > div:nth-child(1) {
    > div:first-child {
      font-family: ${$bold};
      font-size: 2rem;
      color: #ffffff;
    }
    > div:last-child {
      font-family: ${$light};
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
    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
    }
    > div {
      > div:nth-child(1) {
        width: 100%;
        img {
          filter: grayscale(100%);
          transition: all 0.5s ease;
          &:hover {
            filter: grayscale(0%);
            transition: all 0.5s ease;
          }
        }
      }
    }
  }
  > div:nth-child(3) {
    font-family: ${$light};
    color: #ffffff;
    text-align: right;
    margin-top: 16px;
    font-size: 1.125rem;
    left: 0px;
    transition: all 0.3s ease;
    position: relative;
    > span {
      cursor: pointer;
    }
    &:hover {
      position: relative;
      left: -4px;
      transition: all 0.3s ease;
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
  padding: 25vh 0px;
  max-width: 1639px;
  margin: auto;
  font-family: ${$light};
  /* > div:nth-child(1) {
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
  } */
  > div:nth-child(1),
  div:nth-child(3),
  div:nth-child(5) {
    width: 100%;
    height: 280px;
    ${sectionBorder('64px 0px 49px 50px')}
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: 'blur(18px)';
      transition: all 1s ease;
      > div > div > span > span:last-child {
        animation: arrowRight 1.8s linear infinite alternate;
      }
      @keyframes arrowRight {
        from,
        to {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
          transform: translateX(15px);
        }
      }
    }
    > div:first-child {
      > div:first-child {
        > span:nth-child(1) {
          font-family: ${$bold};
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
        color: #b7b7b7;
        margin-top: 35px;
        font-size: 1.375rem;
      }
    }
    @media (max-width: 920px) {
      padding: 25px 35px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 460px) {
      padding: 15px 25px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
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
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: 'blur(18px)';
      transition: all 1s ease;
      > div > div > span > span:first-child {
        animation: arrowLeft 1.8s linear infinite alternate;
      }
      @keyframes arrowLeft {
        from,
        to {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
          transform: translateX(-15px);
        }
      }
    }
    > div:first-child {
      > div:first-child {
        > span:nth-child(1) {
          font-family: ${$bold};
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
        color: #b7b7b7;
        margin: 0;
        margin-top: 35px;
        font-size: 1.375rem;
      }
    }
    > div:last-child {
      text-align: right;
      margin-left: auto;
    }
    @media (max-width: 920px) {
      padding: 25px 35px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 460px) {
      padding: 15px 25px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  > div:nth-child(6) {
    margin-bottom: 0px;
  }
`;

export const PartnersWrapper = styled.div`
  * img {
    object-fit: contain;
  }
  max-width: 1639px;
  margin: auto;
  padding: 25vh 0px 0px;
  font-family: ${$light};
  font-size: 1.25rem;
  color: #ffffff;
  > div:nth-child(1) {
    color: #33a5ff;
    font-size: 1.375rem;
    > span:first-child {
      font-family: ${$bold};
      font-size: 2rem;
      color: #ffffff;
    }
    > span:last-child {
    }
  }

  > div:nth-child(2) {
    @media (max-width: 1190px) {
      display: flex;
      flex-direction: column;
      > div {
        margin-right: 0 !important;
        > div {
          &:nth-child(2) {
            width: 100% !important;
            height: auto !important;
            padding: 35px 15px !important;
            margin-bottom: 30px;
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-between;
            gap: 35px 15px;
            > div {
              margin: 0 auto !important;
            }
          }
        }
      }
    }
    @media (max-width: 640px) {
      > div > div {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
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
    @media (max-width: 1190px) {
      display: flex;
      flex-direction: column;
      > div {
        margin-right: 0 !important;
        > div {
          &:nth-child(2) {
            max-width: none !important;
            width: 100% !important;
            height: auto !important;
            padding: 35px 15px !important;
            margin-bottom: 30px;
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-between;
            gap: 35px 15px;
            > div {
              margin: 0 auto !important;
            }
          }
        }
      }
    }
    @media (max-width: 640px) {
      > div > div {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
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
      margin-top: 10px;
      > div {
        ${center};
        margin: 10px 40px;
      }
      @media (max-width: 1190px) {
        width: 100% !important;
        height: auto !important;
        padding: 35px 15px !important;
        margin-bottom: 30px;
        display: grid !important;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        gap: 35px 15px;
        > div {
          margin: 0 auto !important;
        }
      }
      @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr) !important;
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
      font-family: ${$light};
      color: #33a5ff;
      font-size: 1.375rem;
      > span:first-child {
        font-family: ${$bold};
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
      @media (max-width: 920px) {
        display: grid;
        margin-top: 35px;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        gap: 35px 15px;
        > div {
          margin: 0 auto;
        }
      }
      @media (max-width: 460px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px 15px;
        > div {
          margin: 0 auto;
        }
      }
    }
  }
  > div:last-child {
    margin-top: 67px;
    > div:first-child {
      font-family: ${$light};
      color: #33a5ff;
      font-size: 1.375rem;
      > span:first-child {
        font-family: ${$bold};
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
        transition: all 1s ease;
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        > div:first-child {
          display: flex;
          border-bottom: 1.5px solid #33333377;
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
            cursor: pointer;
            width: 100%;
            font-family: ${$bold};
            color: #ffffff;
            font-size: 1.125rem;
            text-align: center;
            /* margin-bottom: 20px; */
            line-height: 1.7rem;
            letter-spacing: 0.08rem;
            ${center}
          }
          > div:first-child:hover {
            text-shadow: 3px 2px 2px #000000;
          }
          > div:last-child {
            padding: 0px 15px;
            font-family: ${$light};
            color: #b7b7b7;
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
      @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-between;
        gap: 35px 15px;
        > div {
          width: 100%;
          text-align: left;
          height: initial !important;
          > div {
            &:first-child {
              padding: 20px;
            }
            &:last-child {
              text-align: left;
              margin: 0;
              padding: 30px;
              > div {
                padding: 0 !important;
              }
            }
          }
        }
      }
      @media (max-width: 460px) {
        > div {
          > div {
            &:first-child {
              padding: 15px 20px;
            }
            &:last-child {
              padding: 25px 20px 30px;
            }
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
