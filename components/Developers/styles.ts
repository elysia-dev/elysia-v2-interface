import styled from 'styled-components';
import developersImage from 'assets/images/main/developers_image.webp';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

export const DevelopersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0px;
`;

export const DevelopersImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  /* background: url(${developersImage.src}); */
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DisabledSection = styled.div`
  &:hover {
    cursor: not-allowed;
    background: rgba(255, 50, 50, 0.3) !important;
  }
`;

export const SectionWrapper = styled.article`
  padding-bottom: 150px;
  color: #ffffff !important;
  font-family: ${$light};
  /* height: 100vh; */
  > section:first-child {
    padding-top: 60vh;
    margin-bottom: 30px;
    > h1 {
      color: #ffffff;
      font-family: ${$bold};
      font-size: 2rem;
      margin: 0;
      margin-bottom: 5px;
      @media (max-width: 460px) {
        font-size: 1.5rem;
      }
    }
    > h2 {
      color: #33a5ff;
      margin: 0;
      margin-bottom: 14px;
      font-family: ${$light};
    }
    > p {
      color: #cbcbcb;
      margin: 0;
      font-size: 1.375rem;
      @media (max-width: 460px) {
        font-size: 1rem;
      }
    }
  }
  > section:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
    }
    > section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25%;
      @media (max-width: 920px) {
        width: 40%;
      }
      @media (max-width: 640px) {
        width: 100%;
      }
      gap: 10px;
      > a,
      div {
        padding: 25px;
        ${glassBox}
        transition: all 1s ease;
        margin-left: 25px;
        @media (max-width: 920px) {
          padding: 20px 25px;
        }
        @media (max-width: 640px) {
          margin-left: 0px;
          margin-top: 25px;
          padding: 20px 25px;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.3);
          transition: all 1s ease;
        }
        section {
          display: flex;
          flex-direction: row;
          > figure {
            display: flex;
            flex-direction: row;
            > svg {
              margin-right: 10px;
            }
            > figcaption {
              display: flex;
              align-items: center;
              font-family: ${$bold};
              font-size: 1.25rem;
            }
          }
          > article {
            margin-left: auto;
          }
        }
        > p {
          color: #cbcbcb;
        }
      }
    }
    > a {
      cursor: pointer;
      ${glassBox}
      transition: all 1s ease;
      padding: 38.22px 25px 38px 25px;
      &:first-child {
        width: 75%;
        @media (max-width: 920px) {
          width: 60%;
        }
        @media (max-width: 640px) {
          width: 100%;
        }
      }
      @media (max-width: 920px) {
        width: 100%;
        padding: 20px 25px;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transition: all 1s ease;
      }
      > section {
        display: flex;
        flex-direction: row;
        > figure {
          display: flex;
          flex-direction: row;
          > svg {
            margin-right: 10px;
          }
          > figcaption {
            display: flex;
            align-items: center;
            font-family: ${$bold};
            font-size: 1.25rem;
          }
        }
        > article {
          margin-left: auto;
        }
        margin-bottom: 20px;
      }
      > p {
        color: #cbcbcb;
      }
    }
  }
`;
