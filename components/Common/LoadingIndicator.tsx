import styled, { keyframes } from 'styled-components';

const Spinner = keyframes`
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }

`;

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  height: 260px;
  align-items: center;
  @media (max-width: 514px) {
    padding: 15px;
  }
  > p {
    bottom: 15px;
    font-size: 1rem;
    margin-top: 50px;
    color: #fff;
    @media (max-width: 514px) {
      font-size: 0.9rem;
    }
  }
  > div {
    color: #3679b5;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0;
    > div {
      transform-origin: 40px 40px;
      animation: ${Spinner} 1.2s linear infinite;
      &:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: #3679b5;
      }
      &:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
      &:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
      }
      &:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
      }
      &:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
      }
      &:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
      }
      &:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
      }
      &:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
      }
      &:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
      }
      &:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
      }
      &:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
      }
      &:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
      }
      &:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
      }
    }
  }
`;

const LoadingIndicator: React.FC = () => {
  return (
    <Indicator>
      <div>
        {Array(12)
          .fill(0)
          .map((_x, index) => {
            return <div key={index} />;
          })}
      </div>
    </Indicator>
  );
};

export default LoadingIndicator;
