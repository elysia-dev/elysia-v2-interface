import styled from 'styled-components';

export const GradientCanvas = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #000000;
`;

export const NoiseSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

export const LayoutNoise = styled.div`
  &::before,
  &::after {
    position: fixed;
    width: 100%;
    height: 100%;
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
    background: linear-gradient(
      to bottom,
      rgba(3, 41, 123, 0.3),
      rgba(54, 121, 181, 0.5),
      transparent
    );
  }
`;