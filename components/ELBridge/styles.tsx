import styled, { css, keyframes } from 'styled-components';
import elbridge from 'assets/images/main/elbridge_image.webp';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

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
    height: 286px;
  }
`;
const boxDeactive = keyframes`
  0% {
    height: 286px;
  }
  100% {
    height: 100px;
  }
`;
const boxActiveMoblie = keyframes`
  0% {
    height: 100px;
  }
  100% {
    height: 339px;
  }
`;
const boxDeactiveMolie = keyframes`
  0% {
    height: 339px;
  }
  100% {
    height: 100px;
  }
`;
const boxActive2 = keyframes`
  0% {
    height: 100px;
  }
  100% {
    height: 586px
  }
`;
const boxDeactive2 = keyframes`
  0% {
    height: 586px
  }
  100% {
    height: 100px;
  }
`;
const boxActive2Moblie = keyframes`
  0% {
    height: 100px;
  }
  100% {
    height: 807px
  }
`;
const boxDeactive2Moblie = keyframes`
  0% {
    height: 807px
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
    height: 527.5px;
  }
`;
const step1Deactive = keyframes`
  0% {
    height: 527.5px;
  }
  100% {
    height: 5rem;
  }
`;

const setp2Active = keyframes`
  0% {
    height: 5rem;
  }
  100% {
    height: 447.5px;
  }
`;
const step2Deactive = keyframes`
  0% {
    height: 447.5px;
  }
  100% {
    height: 5rem;
  }
`;
const setp3Active = keyframes`
  0% {
    height: 5rem;
  }
  100% {
    height: 397px;
  }
`;
const step3Deactive = keyframes`
  0% {
    height: 397px;
  }
  100% {
    height: 5rem;
  }
`;
const setp4Active = keyframes`
  0% {
    height: 5rem;
  }
  100% {
    height: 397px;
  }
`;
const step4Deactive = keyframes`
  0% {
    height: 397px;
  }
  100% {
    height: 5rem;
  }
`;
const setp5Active = keyframes`
  0% {
    height: 5rem;
  }
  100% {
    height: 541px;
  }
`;
const step5Deactive = keyframes`
  0% {
    height: 541px;
  }
  100% {
    height: 5rem;
  }
`;

const arrowUpAni = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(180deg);
  }
`;

const arrowDownAni = keyframes`
  0%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(0deg);
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
  /* background-image: url(${elbridge.src}); */
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SectionWrapper = styled.div`
  padding-bottom: 200px;
  color: #ffffff;
  font-family: ${$light};

  > div:nth-child(1) {
    padding-top: 634px;
    margin-bottom: 30px;
    > div:first-child {
      color: #cbcbcb;
      font-size: 1.375rem;
      > div:first-child {
        color: #ffffff;
        font-family: ${$bold};
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
  /* padding: 33px 71px 0px 90px; */
  margin-bottom: 20px;
  height: ${(props) => (props.active ? '286px' : '100px')};
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
  overflow: hidden;
  @media (max-width: 460px) {
    height: ${(props) => (props.active ? '339px' : '100px')};
    animation: ${(props) => {
      if (typeof props.active === 'undefined') return;
      return props.active
        ? css`
            ${boxActiveMoblie} 500ms ease-in
          `
        : css`
            ${boxDeactiveMolie} 500ms ease-in
          `;
    }};
  }
  > div:first-child {
    cursor: pointer;
    font-family: ${$bold};
    ${center}
    padding: 33px 71px 35.5px 71px;
    border-bottom: 1px solid #acdaff;
    @media (max-width: 460px) {
      padding: 33px 21px 35.5px 21px;
    }
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
      margin-left: auto;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
      border-top: 12px solid #33a5ff;
      transform: ${(props) =>
        props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
      animation: ${(props) => {
        if (typeof props.active === 'undefined') return;
        return props.active
          ? css`
              ${arrowUpAni} 500ms ease-in
            `
          : css`
              ${arrowDownAni} 500ms ease-in
            `;
      }};
    }
  }
  > div:last-child {
    padding: 44.5px 0px 51px 71px;
    @media (max-width: 460px) {
      padding: 33px 21px 35.5px 21px;
    }
    font-size: 1.1875rem;
    line-height: 2rem;
  }
`;

export const AssetNFTDescription = styled.div<{ active?: boolean }>`
  ${glassBox}
  width: 100%;
  /* padding: 33px 71px 0px 90px; */
  margin-bottom: 20px;
  height: ${(props) => (props.active ? '586px' : '100px')};
  animation: ${(props) => {
    if (typeof props.active === 'undefined') return;
    return props.active
      ? css`
          ${boxActive2} 500ms ease-in
        `
      : css`
          ${boxDeactive2} 500ms ease-in
        `;
  }};
  overflow: hidden;
  @media (max-width: 460px) {
    height: ${(props) => (props.active ? '807px' : '100px')};
    animation: ${(props) => {
      if (typeof props.active === 'undefined') return;
      return props.active
        ? css`
            ${boxActive2Moblie} 500ms ease-in
          `
        : css`
            ${boxDeactive2Moblie} 500ms ease-in
          `;
    }};
  }
  > div:first-child {
    cursor: pointer;
    font-family: ${$bold};
    ${center}
    padding: 33px 71px 35.5px 71px;
    border-bottom: 1px solid #acdaff;
    @media (max-width: 460px) {
      padding: 33px 21px 35.5px 21px;
    }
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
      margin-left: auto;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
      border-top: 12px solid #33a5ff;
      transform: ${(props) =>
        props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
      animation: ${(props) => {
        if (typeof props.active === 'undefined') return;
        return props.active
          ? css`
              ${arrowUpAni} 500ms ease-in
            `
          : css`
              ${arrowDownAni} 500ms ease-in
            `;
      }};
    }
  }
  > div:last-child {
    padding: 44.5px 71px 51px 71px;
    font-size: 1.1875rem;
    @media (max-width: 460px) {
      padding: 33px 21px 35.5px 21px;
    }
    > div {
      line-height: 2rem;
    }
    > div:not(div:last-child) {
      margin-bottom: 18px;
    }
  }
`;

export const CreateNFTWrapper = styled.div`
  max-width: 1333px;
  margin: 90px auto;
  font-size: 1.75rem;
  > div:first-child {
    font-family: ${$bold};
    margin-bottom: 10px;
  }
  > div:nth-child(2) {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
`;

export const CreatedNFTCount = styled.div`
  width: 100%;
  height: 70px;
  font-family: ${$bold};
  line-height: 2.5rem;
  margin-bottom: 35px;
  > span {
    color: #33a5ff;
  }
`;

export const StepOne = styled.div<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  background-color: ${(props) => props.isFinished && '#343F57'};
  width: 100%;
  height: ${(props) => (props.selected ? '527.5px' : '5rem')};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.selected
      ? css`
          ${setp1Active} 200ms ease-in
        `
      : css`
          ${step1Deactive} 200ms ease-in
        `};
  > div:first-child {
    cursor: pointer;
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
      > div:hover {
        background: rgb(52, 63, 87);
      }
      > div:first-child {
        margin-bottom: 15px;
      }
    }
    > div:nth-child(3) {
      margin-top: 15px;
      font-size: 1.0625rem;
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

export const StepTwo = styled.div<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  background-color: ${(props) => props.isFinished && '#343F57'};
  width: 100%;
  height: ${(props) => (props.selected ? '447.5px' : '5rem')};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.selected
      ? css`
          ${setp2Active} 200ms ease-in
        `
      : css`
          ${step2Deactive} 200ms ease-in
        `};
  > div:first-child {
    cursor: pointer;
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
      > div:hover {
        background: rgb(52, 63, 87);
      }
      > div:first-child {
        margin-bottom: 15px;
      }
    }
    > div:nth-child(3) {
      margin-top: 15px;
      font-size: 1.0625rem;
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
export const StepThree = styled.div<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  height: ${(props) => (props.selected ? '397px' : '5rem')};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.selected
      ? css`
          ${setp3Active} 200ms ease-in
        `
      : css`
          ${step3Deactive} 200ms ease-in
        `};
  > div:first-child {
    cursor: pointer;
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
        color: #ffffff;
        width: 100%;
        height: 80px;
        background: none;
        border: 1px solid #cbcbcb;
        border-radius: 20px;
        padding: 0px 40px;
        font-size: 1.75rem;
      }
      > input:focus {
        border: 1px solid #ffffff;
        outline: none;
      }
    }
    > div:last-child {
      ${center}
      margin-top: 60px;
      height: 60px;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

export const StepFour = styled.div<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  height: ${(props) => (props.selected ? '397px' : '5rem')};
  padding: 1.625rem 51px 0px 51px;
  margin-bottom: 25px;
  overflow: hidden;
  animation: ${(props) =>
    props.selected
      ? css`
          ${setp4Active} 200ms ease-in
        `
      : css`
          ${step4Deactive} 200ms ease-in
        `};
  > div:first-child {
    cursor: pointer;
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
        color: #ffffff;
        width: 100%;
        height: 80px;
        background: none;
        border: 1px solid #cbcbcb;
        border-radius: 20px;
        padding: 0px 40px;
        font-size: 1.75rem;
      }
      > input:focus {
        border: 1px solid #ffffff;
        outline: none;
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

export const StepFive = styled.div<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  height: ${(props) => (props.selected ? '541px' : '5rem')};
  padding: 1.625rem 51px 0px 51px;
  overflow: hidden;
  animation: ${(props) =>
    props.selected
      ? css`
          ${setp5Active} 200ms ease-in
        `
      : css`
          ${step5Deactive} 200ms ease-in
        `};
  > div:first-child {
    cursor: pointer;
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
        color: #ffffff;
        width: 100%;
        height: 80px;
        background: none;
        border: 1px solid #cbcbcb;
        border-radius: 20px;
        padding: 0px 40px;
        font-size: 1.75rem;
      }
      > input:focus {
        border: 1px solid #ffffff;
        outline: none;
      }
      input[type='checkbox'] {
        display: none;
      }
      input[type='checkbox'] + label {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #ffffff;
        position: relative;
        margin-right: 10px;
      }
      input[type='checkbox']:checked + label::after {
        content: '✔';
        font-size: 15px;
        width: 20px;
        height: 20px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
      }
      > div:nth-child(2) {
        display: flex;
        margin-top: 15px;
        > div:last-child {
          font-size: 0.9375rem;
        }
      }
      > div:nth-child(3) {
        margin-top: 15px;
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
  > a:last-child {
    cursor: pointer;
    font-family: ${$bold};
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
    font-family: ${$bold};
    font-size: 1.75rem;
    margin-bottom: 27px;
  }
`;
