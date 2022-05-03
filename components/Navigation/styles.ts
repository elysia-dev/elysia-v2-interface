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
  z-index: 2;
  padding: 0px 40px;

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

  > div {
    height: 107px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > div:nth-child(2) {
      > a > span {
        font-family: 'Gilroy-Light';
        font-size: 1rem;
        color: #ffffff;
      }
      > a {
        margin-right: 57px;
      }
      > a:last-child {
        margin-right: 48px;
      }
    }
    > div:first-child {
      margin-right: auto;
      cursor: pointer;
    }
  }
`;
