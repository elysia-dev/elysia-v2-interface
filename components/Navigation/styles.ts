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

const inM = keyframes`
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;
const outM = keyframes`
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
  }
`;

const inT = keyframes`
0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(2px) rotate(0deg);
  }
  100% {
    transform: translateY(2px) rotate(135deg);
  }
`;

const outT = keyframes`
0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(7px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(7px) rotate(135deg);
  }
`;
const inBtm = keyframes`
0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-2px) rotate(0deg);
  }
  100% {
    transform: translateY(-2px) rotate(135deg);
  }
`;

const outBtm = keyframes`
0% {
    -webkit-transform: translateY(0px) rotate(0deg);
  }
  50% {
    -webkit-transform: translateY(-7px) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-7px) rotate(135deg);
  }
`;

export const NavigationWrapper = styled.header`
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

  > nav {
    height: 107px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > figure {
      margin-right: auto;
      cursor: pointer;
    }
    > section {
      display: flex;
      text-align: center;
      > div {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        font-size: 1rem;
        /* width: 100px; */
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
        > span {
          color: #dedede;
          font-weight: 600;
          &:hover {
            color: #ffffff;
          }
          @media (max-width: 1189px) {
            font-size: 1rem;
          }
          @media (max-width: 1024px) {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 1189px) {
          width: 100%;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const HamburgerButton = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  i {
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
  }

  ${(props) =>
    props.isActive
      ? css`
          i:nth-child(1) {
            animation: ${inT} 0.8s forwards;
          }
          i:nth-child(2) {
            animation: ${inM} 0.8s forwards;
          }
          i:nth-child(3) {
            animation: ${inBtm} 0.8s forwards;
          }
        `
      : css`
          i:nth-child(1) {
            animation: ${outT} 0.8s backwards;
            animation-direction: reverse;
          }
          i:nth-child(2) {
            margin: 5px 0;
            animation: ${outM} 0.8s backwards;
            animation-direction: reverse;
          }
          i:nth-child(3) {
            animation: ${outBtm} 0.8s backwards;
            animation-direction: reverse;
          }
        `}
`;
