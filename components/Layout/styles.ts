import styled from 'styled-components';
import noise from 'assets/images/main/noise.png';

export const GradientCanvas = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const NoiseSvg = styled.svg`
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
