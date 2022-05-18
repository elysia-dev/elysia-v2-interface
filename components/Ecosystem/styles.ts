import styled from 'styled-components';
import ElyfiProjectImg from 'assets/images/ecosystem/elyfiproject.png';
import Moblieapp from 'assets/images/ecosystem/moblieapp.png';
import Dao from 'assets/images/ecosystem/dao.png';
import ecosystemImage from 'assets/images/main/ecosystem_image.webp';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding: '18px 20px 0px 20px',
};

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const EcosystemImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  opacity: 0.5;
  background: url(${ecosystemImage.src});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const TopWrapper = styled.div`
  padding-top: 634px;
  color: #ffffff;
  font-family: Gilroy-Light;
  > div:first-child {
    font-family: Gilroy-ExtraBold;
    font-size: 2rem;
    margin-bottom: 5px;
    > div:first-child {
      margin-bottom: 20px;
    }
    > div:last-child {
      font-size: 1.375rem;
    }
  }
`;

export const ProjectWrapper = styled.div`
  margin-top: 100px;
  color: #ffffff;
  > div:first-child {
    margin-bottom: 88px;
    > div:first-child {
      font-family: Gilroy-ExtraBold;
      font-size: 2rem;
      margin-bottom: 20px;
    }
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    > div {
      width: 30%;
      ${glassBox}
    }
    > div:nth-child(1) {
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
        > div {
          ${center}
        }
        > div:first-child {
          font-family: Gilroy-ExtraBold;
          margin-right: 10px;
          height: 38px;
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
      }
    }
    > div:nth-child(2) {
      > div:first-child {
        width: 100%;
        height: 233.5px;
        background-color: #ffffff;
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
          margin-top: 6px;
          margin-right: 12px;
          ${center}
        }
      }
      > div:nth-child(2) {
        height: 38px;
        font-family: Gilroy-ExtraBold;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        > div:first-child {
          margin-right: auto;
        }
        > div:nth-child(2) {
          margin-right: 11px;
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
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
          margin-top: 6px;
          margin-right: 12px;
          ${center}
        }
      }
      > div:nth-child(2) {
        height: 38px;
        font-family: Gilroy-ExtraBold;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
        margin-bottom: 20px;
      }
    }
  }
`;

export const PortFolioWrapper = styled.div`
  padding-top: 100px;
  font-family: Gilroy-Light;
  color: #ffffff;
  > div:first-child {
    margin-bottom: 65px;
    > div:first-child {
      font-family: Gilroy-ExtraBold;
      font-size: 2rem;
      margin-bottom: 10px;
    }
    > div:last-child {
      font-size: 1.25rem;
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
      > div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 52px;
      }
      > div:nth-child(1) {
        > div:last-child {
          border-right: 1px solid #33a5ff;
          padding-right: 70.5px;
        }
      }
      > div:nth-child(2) {
        > div:first-child {
          padding-left: 70.5px;
        }
      }
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        width: 33%;
        ${glassBox}
        padding: 18px 20px 0px 20px;
        margin: 10px 0px;
        > div:first-child {
          width: 100%;
          height: 300px;
          margin-bottom: 23.5px;
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
            font-family: Gilroy-ExtraBold;
            font-size: 1.25rem;
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
`;
