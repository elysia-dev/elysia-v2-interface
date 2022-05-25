import styled, { css, keyframes } from 'styled-components';

const navigationAni = keyframes`
    0% {
        height: 0px;
        background: rgba(255, 255, 255, 0);
          box-shadow: 0px 0px 6px #00000029;
          backdrop-filter: blur(0px);
        
    }

   100% {
        background: rgba(255, 255, 255, 0.1);
          box-shadow: 0px 0px 6px #00000029;
          backdrop-filter: blur(18px);
    height: 107px;;
    }
`;

export const NavigationWrapper = styled.div`
  a,
  img {
    cursor: pointer;
  }
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  padding: 0px 3vw;

  animation: ${(props) =>
    !(typeof props.theme === 'object') &&
    css`
      ${navigationAni} 500ms linear alternate
    `};

  ${(props) =>
    !(typeof props.theme === 'object')
      ? {
          background: 'rgba(255, 255, 255, 0.1)',
          'box-shadow': '0px 0px 6px #00000029',
          'backdrop-filter': 'blur(18px)',
        }
      : ''}

  ${(props) =>
    props.theme === 'overflow' && {
      height: '100% !important',
      background: 'rgba(125,125,125,0.5)  !important',
      backdropFilter: 'blur(18px)  !important',
      animation: 'none !important',
    }}

  > div {
    height: 107px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > div:first-child {
      margin-right: auto;
      cursor: pointer;
    }
    > div:nth-child(2) {
      display: flex;
      text-align: center;
      > div {
        margin-right: 2rem;
        font-size: 1rem;
        width: 100px;
        @media (max-width: 1190px) {
          width: 90px;
        }
        @media (max-width: 1024px) {
          margin-right: 1rem;
          font-size: 1rem;
          width: 80px;
        }
        @media (max-width: 840px) {
          width: 25px;
        }
        > a > span {
          font-family: 'Gilroy-Light';
          color: #ffffff;
        }
        > a > span:hover {
          font-family: Gilroy-ExtraBold !important;
          font-size: 1rem;
          color: #ffffff;
        }
        > a {
          @media (max-width: 1189px) {
            width: 100%;
            > span {
              font-size: 1rem;
            }
          }
          @media (max-width: 1024px) {
            > span {
              font-size: 0.8rem;
            }
          }
        }
        > a:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
