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

export const QuestionBoxWrapper = styled.article<{ active?: boolean }>`
  ${glassBox}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  width: 100%;
  /* padding: 33px 71px 0px 90px; */
  margin-bottom: 20px;
  max-height: ${(props) => (props.active ? '60vh' : '100px')};
  transition: all 0.7s ease;
  overflow: hidden;
  @media (max-width: 640px) {
    max-height: ${(props) => (props.active ? '90vh' : '100px')};
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
      flex: 1;
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
