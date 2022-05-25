import styled from 'styled-components';
import ElyfiProjectImg from 'assets/images/ecosystem/elyfiproject.png';
import Moblieapp from 'assets/images/ecosystem/moblieapp.webp';
import Dao from 'assets/images/ecosystem/dao.png';
import ecosystemImage from 'assets/images/main/ecosystem_image.webp';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding: '18px 20px 15px 20px',
};

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const EcosystemWrapper = styled.div`
  color: #ffffff;
  margin: 0 0px;
  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: ${(props) =>
      typeof props.theme === 'object' ? '100%' : props.theme + 'px'};
    z-index: -1;
    top: 0;
    left: 0;
    mix-blend-mode: hard-light;
    content: '';
  }

  &::before {
    filter: url(#noise);
  }

  &::after {
    background: linear-gradient(
        to right,
        rgba(0, 0, 2, 1) 2%,
        rgba(3, 41, 123, 0.5),
        rgba(54, 121, 181, 0.5)
      ),
      linear-gradient(to top, rgba(54, 121, 181, 0.4), transparent);
    background-repeat: no-repeat;
    background-position-x: right;
  }
`;

export const EcosystemImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  opacity: 0.5;
  /* background: url(${ecosystemImage.src}); */
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const TopWrapper = styled.div`
  padding-top: 60vh;
  max-width: 1639px;
  margin: auto;
  color: #ffffff;
  font-family: ${$light};
  > div:first-child {
    font-family: ${$bold};
    font-size: 2rem;
    margin-bottom: 5px;
    @media (max-width: 460px) {
      font-size: 1.5rem;
    }
    > div:first-child {
      margin-bottom: 20px;
    }
    > div:last-child {
      font-size: 1.375rem;
      @media (max-width: 460px) {
        font-size: 1rem;
      }
    }
  }
`;

export const BorderedMargin = styled.div`
  height: 170px;
  margin: 40px 0;
  border-left: 1px solid #33a5ff;
`;

export const ProjectWrapper = styled.div`
  color: #ffffff;
  padding-bottom: 50px;
  border-bottom: 1px solid #33a5ff;
  > div:first-child {
    margin-bottom: 88px;
    > div:first-child {
      font-family: ${$bold};
      font-size: 2rem;
      margin-bottom: 20px;
      @media (max-width: 460px) {
        font-size: 1.5rem;
      }
    }
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    @media (max-width: 920px) {
      flex-direction: column;
    }
    > div {
      width: 30%;
      ${glassBox}
      @media (max-width: 1190px) {
        width: 32%;
      }
      @media (max-width: 920px) {
        width: 100%;
        margin-bottom: 40px;
      }
      @media (max-width: 64px) {
        margin-bottom: 25px;
      }
    }
    > div:nth-child(1) {
      cursor: pointer;
      transition: all 1s ease;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      > div:first-child {
        background-image: url(${ElyfiProjectImg.src});
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        border-radius: 10px;
        width: 100%;
        height: 233.5px;
        margin-bottom: 20.5px;
      }
      > div:nth-child(2) {
        display: flex;
        margin-bottom: 20px;
        @media (max-width: 460px) {
          margin-bottom: 25px;
        }
        > div {
          ${center}
        }
        > div:first-child {
          font-family: ${$bold};
          margin-right: 10px;
          font-size: 1.5rem;
          @media (max-width: 460px) {
            font-size: 1.475rem;
          }
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
        @media (max-width: 920px) {
          font-size: 1rem;
          > br {
            display: none;
          }
          margin-bottom: 25px;
        }
      }
    }
    > div:nth-child(2) {
      > div:first-child {
        width: 100%;
        height: 233.5px;
        display: flex;
        flex-direction: column;
        background-image: url(${Moblieapp.src});
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        border-radius: 10px;
        margin-bottom: 20.5px;
        > div:first-child {
          background-color: #505050;
          width: 179px;
          height: 36px;
          border-radius: 23px;
          margin-left: auto;
          margin-top: 15px;
          margin-right: 12px;
          ${center}
        }
      }
      > div:nth-child(2) {
        height: 38px;
        font-family: ${$bold};
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        > div:first-child {
          margin-right: auto;
          font-size: 1.5rem;
          @media (max-width: 460px) {
            font-size: 1.475rem;
          }
        }
        > div:nth-child(2) {
          margin-right: 11px;
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
        @media (max-width: 920px) {
          font-size: 1rem;
          > br {
            display: none;
          }
          margin-bottom: 25px;
        }
      }
    }
    > div:nth-child(3) {
      > div:first-child {
        width: 100%;
        height: 233.5px;
        display: flex;
        flex-direction: column;
        background-image: url(${Dao.src});
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        border-radius: 10px;
        margin-bottom: 20.5px;
        > div:first-child {
          background-color: #505050;
          width: 179px;
          height: 36px;
          border-radius: 23px;
          margin-left: auto;
          margin-top: 15px;
          margin-right: 12px;
          ${center}
        }
      }
      > div:nth-child(2) {
        height: 38px;
        font-family: ${$bold};
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 1.5rem;
        @media (max-width: 460px) {
          font-size: 1.475rem;
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
        margin-bottom: 20px;
        @media (max-width: 920px) {
          font-size: 1rem;
          > br {
            display: none;
          }
          margin-bottom: 25px;
        }
      }
    }
  }
`;

export const PortFolioWrapper = styled.div`
  padding-top: 50px;
  font-family: ${$light};
  color: #ffffff;
  > div:first-child {
    margin-bottom: 65px;
    > div:first-child {
      font-family: ${$bold};
      font-size: 2rem;
      margin-bottom: 10px;
      @media (max-width: 460px) {
        font-size: 1.5rem;
      }
    }
    > div:last-child {
      font-size: 1.375rem;
      @media (max-width: 460px) {
        font-size: 1rem;
      }
    }
  }
  > div:nth-child(2) {
    > div:nth-child(1) {
      display: flex;
      align-items: center;
      ${glassBox}
      height: 83px;
      padding: 0px 70px;
      margin-bottom: 37px;
      transition: all 1s ease;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      @media (max-width: 920px) {
        padding: 0px 25px;
      }
      @media (max-width: 640px) {
        height: initial;
        flex-direction: column;
        padding: 10px 25px;
        width: 100%;
      }
      > div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 52px;
        font-size: 1.2rem;
        @media (max-width: 640px) {
          width: 100%;
          height: 50px;
          &:not(:last-child) {
            border-bottom: 1px solid #33a5ff;
          }
        }
      }
      > div:nth-child(1) {
        > div:last-child {
          font-size: 1.375rem;
          font-family: ${$bold};
          border-right: 1px solid #33a5ff;
          padding-right: 70.5px;
          @media (max-width: 920px) {
            padding-right: 30px;
          }
          @media (max-width: 640px) {
            border: none;
            padding: 0;
          }
        }
      }
      > div:nth-child(2) {
        > div:first-child {
          padding-left: 70.5px;
          @media (max-width: 920px) {
            padding-left: 30px;
          }
          @media (max-width: 640px) {
            padding: 0;
          }
        }

        > div:last-child {
          font-size: 1.375rem;
          font-family: ${$bold};
        }
      }
    }
    > div:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      grid-gap: 25px;
      gap: 25px;
      @media (max-width: 840px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        grid-gap: 25px;
        gap: 25px;
      }
      @media (max-width: 460px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        grid-gap: 25px;
        gap: 25px;
      }
      > div {
        cursor: pointer;
        width: 100%;
        ${glassBox}
        padding: 18px 20px 18px 20px;
        margin: 10px 0px;
        transition: all 1s ease;
        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 840px) {
          width: 100%;
          margin: 0;
          padding: 10px 15px;
          border-radius: 5px;
        }
        > div:first-child {
          width: 100%;
          height: inherit;
          padding-bottom: 100%;
          margin-bottom: 23.5px;
          > span > img {
            border-radius: 5px;
          }
        }
        > div:last-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          > div:first-child {
            color: #cbcbcb;
            font-size: 1.25rem;
          }
          > div:last-child {
            font-size: 1.25rem;
            @media (max-width: 460px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

export const ViewMoreButton = styled.div`
  cursor: pointer;
  background: #000000;
  width: 100%;
  height: 83px;
  border-radius: 42px;
  text-align: center;
  margin-top: 15px;
  ${center}
  @media (max-width: 640px) {
    height: 50px;
    margin: 30px 0;
  }
`;
