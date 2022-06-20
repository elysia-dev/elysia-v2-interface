import styled from 'styled-components';

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

export const DevelopersImage = styled.article`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
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
  font-weight: normal;
  /* height: 100vh; */
  > article:not(:first-child) {
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
              font-weight: bold;
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
      padding: 25px;
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
            font-weight: bold;
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
