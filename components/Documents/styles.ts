import styled from 'styled-components';
import documentImage from 'assets/images/main/document_image.png';

const defaultBorder = '1px solid #333333';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

export const DocumentsWrapper = styled.div`
  /* padding: 0px 45px 50px 45px; */
  /* background: #dfd9d9; */
`;

export const SectionWrapper = styled.div`
  max-width: 1639px;
  margin: auto;
  padding: 0px 20px 200px 20px;
  color: #ffffff;
  font-family: Gilroy-Light;

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
    /* background: linear-gradient(to right, #000000, transparent),
      linear-gradient(to top, #000000, #4785ff 40%); */
    background: linear-gradient(
        to right,
        rgba(0, 0, 2, 0.7) 2%,
        rgba(3, 41, 123, 0.5),
        rgba(54, 121, 181, 0.5)
      ),
      linear-gradient(to top, rgba(54, 121, 181, 0.4), transparent),
      url(${documentImage.src});
    background-repeat: no-repeat;
  }

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
