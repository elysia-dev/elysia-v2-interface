import styled from 'styled-components';
import noise from 'assets/images/main/noise.png';

export const GradientCanvas = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: hsla(253, 100%, 7%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(222, 69%, 49%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(231, 56%, 27%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(229, 63%, 42%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 52%, hsla(215, 94%, 88%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(235, 88%, 7%, 1) 0px, transparent 50%),
    radial-gradient(at 85% 90%, hsla(225, 58%, 44%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(218, 85%, 67%, 1) 0px, transparent 50%);
`;

export const NoiseSvg = styled.svg`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LayoutNoise = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${noise.src});
  background-size: auto;
`;

export const LayoutDiv = styled.main`
  margin: auto;
  width: 90%;
  max-width: 1639px;
`;
