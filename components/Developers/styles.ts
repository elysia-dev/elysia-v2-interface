import styled from 'styled-components';
import developersImage from 'assets/images/main/developers_image.webp';

const defaultBorder = '1px solid #333333';

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

export const DevelopersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5vw;
`;

export const DevelopersImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  background: url(${developersImage.src});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SectionWrapper = styled.div`
  width: 1639px;
  padding-bottom: 200px;
  color: #ffffff;
  font-family: Gilroy-Light;

  > div:nth-child(1) {
    padding-top: 60vh;
    margin-bottom: 30px;
    > div:first-child {
      color: #cbcbcb;
      font-size: 1.375rem;
      @media (max-width: 460px) {
        font-size: 1rem;
      }
      > div:first-child {
        color: #ffffff;
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
        margin-bottom: 5px;
        @media (max-width: 460px) {
          font-size: 1.5rem;
        }
      }
      > div:nth-child(2) {
        color: #33a5ff;
        margin-bottom: 14px;
      }
    }
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 920px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      gap: 15px;
    }
    @media (max-width: 460px) {
      display: flex;
      flex-direction: column;
    }
    > div:not(div:last-child) {
      padding: 38.22px 25px 38px 25px;
      ${glassBox}
      @media (max-width: 460px) {
        padding: 20px 25px;
      }
    }
    > div {
      width: 24.5%;
      @media (max-width: 920px) {
        width: 100%;
        margin-top: 25px;
      }
    }
    > div:not(div:last-child) {
      > a {
        > div:first-child {
          display: flex;
          align-items: center;
          font-family: Gilroy-ExtraBold;
          font-size: 1.25rem;
          > div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          > div:first-child {
            margin-right: 10px;
          }
          > div:last-child {
            margin-left: auto;
          }
          margin-bottom: 20px;
        }
      }
      > div:last-child {
        font-size: 1rem;
        color: #cbcbcb;
        margin-top: 10px;
        display: flex;
        > div:first-child {
          margin-right: auto;
        }
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div:first-child {
        margin-bottom: 11px;
        @media (max-width: 460px) {
          margin-bottom: 25px;
        }
      }
      > a {
        > div {
          font-family: Gilroy-ExtraBold;
          font-size: 1.25rem;
          ${glassBox}
          padding: 29px 25px 24px 27px;
          width: 100%;
          ${center}
          @media (max-width: 460px) {
            padding: 20px 25px;
          }
          > div {
            ${center}
          }
          > div:first-child {
            margin-right: 10px;
          }
          > div:nth-child(2) {
            margin-right: auto;
          }
        }
      }
    }
  }
`;
