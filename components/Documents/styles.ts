import styled from 'styled-components';
import documentImage from 'assets/images/main/document_image.webp';

const defaultBorder = '1px solid #333333';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

export const DocumentsImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  background: url(${documentImage.src});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SectionWrapper = styled.div`
  max-width: 1639px;
  margin: auto;
  padding: 0px 20px 200px 20px;
  color: #ffffff;
  font-family: Gilroy-Light;

  > div:nth-child(1) {
    padding-top: 60vh;
    margin-bottom: 30px;
    > div:first-child {
      color: #cbcbcb;
      font-size: 1.375rem;
      > div:first-child {
        color: #ffffff;
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
        margin-bottom: 5px;
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
    @media (max-width: 920px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      gap: 15px;
    }
    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
    }
    > div {
      width: 24.5%;
      ${glassBox}
      padding: 38.22px 25px 38px 25px;
      > a {
        @media (max-width: 920px) {
          width: 100%;
          padding: 20px 25px;
          margin-top: 25px;
        }
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
          > div:nth-child(2) {
            margin-right: auto;
          }
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
  }
`;
