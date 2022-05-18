import OnBoardingStep from 'enums/OnBoardingStep';
import styled, { css, keyframes } from 'styled-components';
import elbridge from 'assets/images/main/elbridge_image.webp';

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

const glassBox = {
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
};

const boxActive = keyframes`
  0% {
    height: 100px;
  }
  100% {
    height: 400px;
  }
`;
const boxDeactive = keyframes`
  0% {
    height: 400px;
  }
  100% {
    height: 100px;
  }
`;

const setp1Active = keyframes`
  0% {
    height: 5rem;
  }
  100% {
    height: auto;
  }
`;
const step1Deactive = keyframes`
  0% {
    height: 510px;
  }
  100% {
    height: 5rem;
  }
`;

export const ELbridgeImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  opacity: 0.5;
  background-image: url(${elbridge.src});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SectionWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  width: 90%;
  max-width: 1639px;
  padding-bottom: 200px;
  color: #ffffff;
  font-family: Gilroy-Light;

  > div:nth-child(1) {
    padding-top: 634px;
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
`;

export const NFTDescription = styled.div<{ active?: boolean }>`
  ${glassBox}
  width: 100%;
  padding: 33px 71px 0px 90px;
  margin-bottom: 20px;
  height: ${(props) => (props.active ? '400px' : '100px')};
  animation: ${(props) => {
    if (typeof props.active === 'undefined') return;
    return props.active
      ? css`
          ${boxActive} 500ms ease-in
        `
      : css`
          ${boxDeactive} 500ms ease-in
        `;
  }};
  > div:first-child {
    font-family: Gilroy-ExtraBold;
    ${center}
    > div:first-child {
      font-size: 1.375rem;
      margin-right: 25px;
      width: 33px;
      height: 33px;
      background: #33a5ff;
      border: 1px solid #33a5ff;
      border-radius: 33px;
      ${center}
    }
    > div:nth-child(2) {
      font-size: 1.375rem;
    }
    > div:last-child {
      cursor: pointer;
      margin-left: auto;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
      border-top: 12px solid #33a5ff;
    }
  }
`;

export const AssetNFTDescription = styled.div<{ active?: boolean }>`
  ${glassBox}
  width: 100%;
  padding: 33px 71px 0px 90px;
  margin-bottom: 20px;
  height: ${(props) => (props.active ? '400px' : '100px')};
  animation: ${(props) => {
    if (typeof props.active === 'undefined') return;
    return props.active
      ? css`
          ${boxActive} 500ms ease-in
        `
      : css`
          ${boxDeactive} 500ms ease-in
        `;
  }};
  > div:first-child {
    font-family: Gilroy-ExtraBold;
    ${center}
    > div:first-child {
      font-size: 1.375rem;
      margin-right: 25px;
      width: 33px;
      height: 33px;
      background: #33a5ff;
      border: 1px solid #33a5ff;
      border-radius: 33px;
      ${center}
    }
    > div:nth-child(2) {
      font-size: 1.375rem;
    }
    > div:last-child {
      cursor: pointer;
      margin-left: auto;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
      border-top: 12px solid #33a5ff;
    }
  }
`;

export const LegalIssuesDescription = styled.div<{ active?: boolean }>`
  ${glassBox}
  width: 100%;
  padding: 33px 71px 0px 90px;
  height: ${(props) => (props.active ? '400px' : '100px')};
  animation: ${(props) => {
    if (typeof props.active === 'undefined') return;
    return props.active
      ? css`
          ${boxActive} 500ms ease-in
        `
      : css`
          ${boxDeactive} 500ms ease-in
        `;
  }};
  > div:first-child {
    font-family: Gilroy-ExtraBold;
    ${center}
    > div:first-child {
      font-size: 1.375rem;
      margin-right: 25px;
      width: 33px;
      height: 33px;
      background: #33a5ff;
      border: 1px solid #33a5ff;
      border-radius: 33px;
      ${center}
    }
    > div:nth-child(2) {
      font-size: 1.375rem;
    }
    > div:last-child {
      cursor: pointer;
      margin-left: auto;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
      border-top: 12px solid #33a5ff;
    }
  }
`;

export const CreateNFTWrapper = styled.div`
  max-width: 1333px;
  margin: 90px auto;
  font-size: 1.75rem;
`;

export const CreatedNFTCount = styled.div`
  width: 100%;
  height: 70px;
  font-family: Gilroy-ExtraBold;
  line-height: 2.5rem;
  margin-bottom: 35px;
  > span {
    color: #33a5ff;
  }
`;

export const StepOne = styled.div<{ active: string }>`
  ${glassBox}
  width: 100%;
  height: ${(props) =>
    props.active === OnBoardingStep.RealEstateType ? 'auto' : '5rem'};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.active === OnBoardingStep.RealEstateType
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    font-size: 1.375rem;
    margin-bottom: 28px;
  }
  > div:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    > div:first-child {
      margin-bottom: 35px;
    }
    > div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        cursor: pointer;
        ${center}
        width: 48%;
        height: 80px;
        border: 1px solid #838383;
        border-radius: 20px;
        text-align: center;
      }
      > div:first-child {
        margin-bottom: 15px;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

export const StepTwo = styled.div<{ active: string }>`
  ${glassBox}
  width: 100%;
  height: ${(props) =>
    props.active === OnBoardingStep.NFTApplication ? 'auto' : '5rem'};
  padding: 1.625rem 0px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.active === OnBoardingStep.NFTApplication
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    font-size: 1.375rem;
    margin-bottom: 28px;
  }
  > div:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    > div:first-child {
      margin-bottom: 35px;
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      > div {
        cursor: pointer;
        ${center}
        width: 32%;
        height: 80px;
        border: 1px solid #838383;
        border-radius: 20px;
        text-align: center;
      }
      > div:first-child {
        margin-bottom: 15px;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;
export const StepThree = styled.div<{ active: string }>`
  ${glassBox}
  width: 100%;
  height: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress ? 'auto' : '5rem'};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    font-size: 1.375rem;
    margin-bottom: 28px;
  }
  > div:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    > div:first-child {
      margin-bottom: 35px;
    }
    > div:nth-child(2) {
      > input {
        width: 100%;
        height: 50px;
        background: none;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

export const StepFour = styled.div<{ active: string }>`
  ${glassBox}
  width: 100%;
  height: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress ? 'auto' : '5rem'};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    font-size: 1.375rem;
    margin-bottom: 28px;
  }
  > div:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    > div:first-child {
      margin-bottom: 35px;
    }
    > div:nth-child(2) {
      > input {
        width: 100%;
        height: 50px;
        background: none;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

export const StepFive = styled.div<{ active: string }>`
  ${glassBox}
  width: 100%;
  height: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress ? 'auto' : '5rem'};
  padding: 1.625rem 51px 0px 51px;
  overflow: hidden;
  animation: ${(props) =>
    props.active === OnBoardingStep.RealEstateAddress
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    font-size: 1.375rem;
    margin-bottom: 28px;
  }
  > div:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    > div:first-child {
      margin-bottom: 35px;
    }
    > div:nth-child(2) {
      > input:nth-child(1) {
        width: 100%;
        height: 50px;
        background: none;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

export const ElysiaWhitePaper = styled.div`
  ${glassBox}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 49px 67px 49px 90px;
  margin-bottom: 80px;
  > div:first-child {
    font-size: 1.25rem;
    line-height: 30px;
  }
  > div:last-child {
    font-family: Gilroy-ExtraBold;
    font-size: 1.375rem;
    background-color: #000000;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 23px;
    width: 310px;
    height: 46px;
    ${center}
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #33a5ff;
`;

export const QuestionWrapper = styled.div`
  margin-top: 41px;
  margin-bottom: 50px;
  > div:first-child {
    font-family: Gilroy-ExtraBold;
    font-size: 1.75rem;
    margin-bottom: 27px;
  }
`;
