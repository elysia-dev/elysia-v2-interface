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
export const ELbridgeImage = styled.article`
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

export const SectionWrapper = styled.article`
  padding-bottom: 200px;
  color: #ffffff;
  font-family: ${$light};
`;

export const NFTDescription = styled.section<{ active?: boolean }>`
  ${glassBox}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  width: 100%;
  /* padding: 33px 71px 0px 90px; */
  margin-bottom: 20px;
  max-height: ${(props) => (props.active ? '75vh' : '100px')};
  transition: all 0.5s ease;
  overflow: hidden;
  @media (max-width: 640px) {
    max-height: ${(props) => (props.active ? '150vh' : '100px')};
  }
  > div:first-child {
    cursor: pointer;
    font-family: ${$bold};
    ${center}
    padding: 33px 0px 35.5px 0px;
    margin: 0 71px;
    border-bottom: 1.5px solid #cbcbcb;
    @media (max-width: 640px) {
      margin: 0 21px;
    }
    > span {
      font-size: 1.375rem;
      margin-right: 25px;
      width: 33px;
      height: 33px;
      background: #33a5ff;
      border: 1px solid #33a5ff;
      border-radius: 33px;
      ${center}
    }
    > p {
      font-size: 1.375rem;
    }
    > div {
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
  > section {
    padding: 44.5px 71px 51px 71px;
    @media (max-width: 640px) {
      padding: 33px 21px 35.5px 21px;
    }
    > p {
      font-size: 1.1875rem;
      line-height: 2rem;
    }
  }
`;

export const AssetNFTDescription = styled.article<{ active?: boolean }>`
  ${glassBox}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  width: 100%;
  /* padding: 33px 71px 0px 90px; */
  margin-bottom: 20px;
  max-height: ${(props) => (props.active ? '100vh' : '100px')};
  transition: all 1s ease;
  overflow: hidden;
  @media (max-width: 640px) {
    max-height: ${(props) => (props.active ? '150vh' : '100px')};
  }
  > div:first-child {
    cursor: pointer;
    font-family: ${$bold};
    ${center}
    padding: 33px 0px 35.5px 0px;
    margin: 0 71px;
    border-bottom: 1px solid #cbcbcb;
    @media (max-width: 640px) {
      margin: 0 21px;
    }
    > span {
      font-size: 1.375rem;
      margin-right: 25px;
      width: 33px;
      height: 33px;
      background: #33a5ff;
      border: 1px solid #33a5ff;
      border-radius: 33px;
      ${center}
    }
    > p {
      font-size: 1.375rem;
    }
    > div {
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
  > section {
    padding: 44.5px 71px 51px 71px;
    @media (max-width: 640px) {
      padding: 33px 21px 35.5px 21px;
    }
    > p {
      font-size: 1.1875rem;
      line-height: 2rem;
      &:not(:last-child) {
        margin-bottom: 18px;
      }
    }
  }
`;

export const CreateNFTWrapper = styled.article`
  max-width: 1333px;
  margin: 90px auto;
  > strong {
    font-size: 1.75rem;
    font-family: ${$bold};
    margin-bottom: 10px;
  }
  > h3 {
    font-size: 1.25rem;
    margin-bottom: 25px;
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

export const StepOne = styled.article<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  background-color: ${(props) => props.isFinished && '#343F57'};
  width: 100%;
  max-height: ${(props) => (props.selected ? '75vh' : '5rem')};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => !props.isFinished && 'rgba(255, 255, 255, 0.2)'};
  }
  @media (max-width: 640px) {
    max-height: ${(props) => (props.selected ? '150vh' : '5rem')};
  }
  margin-bottom: 25px;
  overflow: hidden;
  > section:first-child {
    padding: 1.625rem 51px 0px 51px;
    cursor: pointer;
    height: 5rem;
    @media (max-width: 640px) {
      padding: 1.625rem 20px 0px 20px;
    }
    > h2 {
      font-size: 1.375rem;
      font-family: ${$light};
    }
  }
  > section:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    @media screen and (min-width: 641px) and (max-width: 1440px) {
      padding: 1.625rem 51px 0px 51px;
    }
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > p {
      margin-bottom: 35px;
    }
    > section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 640px) {
        flex-direction: column;
      }
      > button {
        cursor: pointer;
        ${center}
        width: 48%;
        height: 80px;
        border: 1px solid #acacac;
        border-radius: 20px;
        text-align: center;
        transition: all 0.7s ease;
        @media (max-width: 640px) {
          width: 100%;
          margin-bottom: 15px;
          height: 50px;
        }
        &:first-child {
          margin-bottom: 15px;
        }
        &:hover {
          background: rgba(52, 63, 87, 0.4);
        }
      }
    }
    > span {
      margin-top: 15px;
      font-size: 1.0625rem;
      display: block;
    }
    > button {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
      width: 100%;
      @media (max-width: 640px) {
        margin-top: 50px;
        height: 40px;
        background: #000000;
        border-radius: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 40px;
        height: 35px;
      }
    }
  }
`;

export const StepTwo = styled.article<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  background-color: ${(props) => props.isFinished && '#343F57'};
  width: 100%;
  max-height: ${(props) => (props.selected ? '75vh' : '5rem')};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => !props.isFinished && 'rgba(255, 255, 255, 0.2)'};
  }
  @media (max-width: 640px) {
    max-height: ${(props) => (props.selected ? '150vh' : '5rem')};
  }
  margin-bottom: 25px;
  overflow: hidden;
  > section:first-child {
    padding: 1.625rem 51px 0px 51px;
    cursor: pointer;
    margin-bottom: 28px;
    height: 5rem;
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > h2 {
      font-size: 1.375rem;
      font-family: ${$light};
    }
  }
  > section:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    @media screen and (min-width: 641px) and (max-width: 1440px) {
      padding: 1.625rem 51px 0px 51px;
    }
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > p {
      margin-bottom: 35px;
    }
    > section {
      display: flex;
      justify-content: space-between;
      @media (max-width: 640px) {
        flex-direction: column;
      }
      > button {
        cursor: pointer;
        ${center}
        width: 32%;
        height: 80px;
        border: 1px solid #acacac;
        border-radius: 20px;
        text-align: center;
        transition: all 0.7s ease;
        @media (max-width: 640px) {
          width: 100%;
          margin-bottom: 15px;
          height: 50px;
        }
        &:hover {
          background: rgba(52, 63, 87, 0.3);
        }
        &:first-child {
          margin-bottom: 15px;
        }
      }
    }
    > span {
      margin-top: 15px;
      display: block;
      font-size: 1.0625rem;
    }
    > button {
      ${center}
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
      width: 100%;
      @media (max-width: 640px) {
        margin-top: 50px;
        height: 40px;
        background: #000000;
        border-radius: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 40px;
        height: 35px;
      }
    }
  }
`;
export const StepThree = styled.article<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  max-height: ${(props) => (props.selected ? '75vh' : '5rem')};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => !props.isFinished && 'rgba(255, 255, 255, 0.2)'};
  }
  @media (max-width: 640px) {
    max-height: ${(props) => (props.selected ? '150vh' : '5rem')};
  }
  margin-bottom: 25px;
  overflow: hidden;
  > section:first-child {
    padding: 1.625rem 51px 0px 51px;
    cursor: pointer;
    font-size: 1.375rem;
    margin-bottom: 28px;
    height: 5rem;
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }

    > h2 {
      font-size: 1.375rem;
      font-family: ${$light};
    }
  }
  > section:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    @media screen and (min-width: 641px) and (max-width: 1440px) {
      padding: 1.625rem 51px 0px 51px;
    }
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > p {
      margin-bottom: 35px;
    }
    > input {
      color: #ffffff;
      width: 100%;
      height: 80px;
      background: none;
      border: 1px solid #cbcbcb;
      border-radius: 20px;
      padding: 0px 40px;
      font-size: 1.75rem;
      &::placeholder {
        color: #bcbcbc;
        font-size: 1.25rem;
        @media (max-width: 640px) {
          font-size: 1.1rem;
        }
      }
      @media (max-width: 640px) {
        padding: 0px 20px;
        font-size: 1.2rem;
        height: 60px;
      }
      @media (max-width: 460px) {
        padding: 0px 10px;
        font-size: 1.2rem;
        height: 40px;
        border-radius: 10px;
      }
      &:focus {
        border: 1px solid #ffffff;
        outline: none;
      }
    }
    > button {
      ${center}
      width: 100%;
      margin-top: 60px;
      height: 60px;
      border-radius: 40px;
      cursor: pointer;
      @media (max-width: 640px) {
        margin-top: 50px;
        height: 40px;
        background: #000000;
        border-radius: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 40px;
        height: 35px;
      }
    }
  }
`;

export const StepFour = styled.article<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  max-height: ${(props) => (props.selected ? '75vh' : '5rem')};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => !props.isFinished && 'rgba(255, 255, 255, 0.2)'};
  }
  @media (max-width: 640px) {
    max-height: ${(props) => (props.selected ? '150vh' : '5rem')};
  }
  margin-bottom: 25px;
  overflow: hidden;
  > section:first-child {
    padding: 1.625rem 51px 0px 51px;
    cursor: pointer;
    font-size: 1.375rem;
    margin-bottom: 28px;
    height: 5rem;
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > h2 {
      font-size: 1.375rem;
      font-family: ${$light};
    }
  }
  > section:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    @media screen and (min-width: 641px) and (max-width: 1440px) {
      padding: 1.625rem 51px 0px 51px;
    }
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > p {
      margin-bottom: 35px;
    }
    > input {
      color: #ffffff;
      width: 100%;
      height: 80px;
      background: none;
      border: 1px solid #cbcbcb;
      border-radius: 20px;
      padding: 0px 40px;
      font-size: 1.75rem;
      &::placeholder {
        color: #bcbcbc;
        font-size: 1.25rem;
        @media (max-width: 640px) {
          font-size: 1.1rem;
        }
      }
      @media (max-width: 640px) {
        padding: 0px 20px;
        font-size: 1.2rem;
        height: 60px;
      }
      @media (max-width: 460px) {
        padding: 0px 10px;
        font-size: 1.2rem;
        height: 40px;
        border-radius: 10px;
      }
      &:focus {
        border: 1px solid #ffffff;
        outline: none;
      }
    }
    > button {
      ${center}
      width: 100%;
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
      @media (max-width: 640px) {
        margin-top: 50px;
        height: 40px;
        background: #000000;
        border-radius: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 40px;
        height: 35px;
      }
    }
  }
`;

export const StepFive = styled.article<{
  active: string;
  isFinished: boolean;
  selected: boolean;
}>`
  ${glassBox}
  width: 100%;
  background-color: ${(props) => props.isFinished && '#343F57'};
  max-height: ${(props) => (props.selected ? '150vh' : '5rem')};
  transition: all 0.5s ease;
  &:hover {
    background: ${(props) => !props.isFinished && 'rgba(255, 255, 255, 0.2)'};
  }
  @media (max-width: 640px) {
    max-height: ${(props) => (props.selected ? '200vh' : '5rem')};
  }
  overflow: hidden;
  > section:first-child {
    padding: 1.625rem 51px 0px 51px;
    cursor: pointer;
    font-size: 1.375rem;
    margin-bottom: 28px;
    height: 5rem;
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > h2 {
      font-size: 1.375rem;
      font-family: ${$light};
    }
  }
  > section:last-child {
    font-size: 1.25rem;
    max-width: 1187px;
    margin: 0px auto 57px auto;
    @media screen and (min-width: 641px) and (max-width: 1440px) {
      padding: 1.625rem 51px 0px 51px;
    }
    @media screen and (max-width: 640px) {
      padding: 1.625rem 21px 0px 21px;
    }
    > p {
      margin-bottom: 35px;
    }
    > section {
      > textarea {
        color: #ffffff;
        width: 100%;
        height: 500px;
        background: none;
        border: 1px solid #cbcbcb;
        border-radius: 20px;
        padding: 20px 40px;
        font-size: 1.5rem;
        resize: none;
        font-family: ${$light};
        &::placeholder {
          color: #bcbcbc;
          font-size: 1.25rem;
          @media (max-width: 640px) {
            font-size: 1.1rem;
          }
        }
        &::-webkit-scrollbar {
          background: transparent;
          height: 100%;
          margin-left: -10px;
        }
        &::-webkit-scrollbar-thumb {
          background: #3679b5;
          border-radius: 100px;
          border: 6px solid transparent;
          border-radius: 15px;
          background-clip: content-box;
        }
        &::-webkit-scrollbar-track {
          background: transparent;
          height: 30%;
        }
        @media (max-width: 640px) {
          padding: 20px 20px;
          font-size: 1.2rem;
          height: 300px;
        }
        @media (max-width: 460px) {
          padding: 10px 10px;
          font-size: 1.2rem;
          height: 300px;
          border-radius: 10px;
        }
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
    > button {
      ${center}
      width: 100%;
      margin-top: 60px;
      height: 60px;
      background: #000000;
      border-radius: 40px;
      cursor: pointer;
      @media (max-width: 640px) {
        margin-top: 50px;
        height: 40px;
        background: #000000;
        border-radius: 20px;
      }
      @media (max-width: 460px) {
        margin-top: 40px;
        height: 35px;
      }
    }
  }
`;

export const ElysiaWhitePaper = styled.article`
  ${glassBox}
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 0.2);
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 60px 45px 50px;
  margin-bottom: 80px;
  > p {
    font-size: 1.25rem;
    line-height: 30px;
  }
  > a {
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
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
    > a {
      width: 100% !important;
    }
    > div {
      &:first-child {
        margin-bottom: 30px;
      }
      &:last-child {
        width: 100%;
      }
    }
  }
  @media (max-width: 460px) {
    padding: 25px 30px;
  }
`;

export const Line = styled.section`
  width: 100%;
  height: 1px;
  border-top: 1px solid #33a5ff;
`;

export const QuestionWrapper = styled.article`
  margin-top: 41px;
  margin-bottom: 50px;
  > h2 {
    font-family: ${$bold};
    font-size: 1.75rem;
    margin-bottom: 27px;
  }
`;
