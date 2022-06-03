import styled from 'styled-components';
import communityImage from 'assets/images/main/community_image.webp';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

export const center = {
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

const contentInBox = {
  'font-family': 'Gilroy-ExtraBold',
  'font-size': '1.375rem',
  height: '46px',
  'box-shadow': '0px 0px 6px #00000029',
  'background-color': '#000000',
  'border-radius': '23px',
  padding: '0px 25px 0px 29.5px',
};

export const CommunityImage = styled.article`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  /* background: url(${communityImage.src}); */
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: -120px;
`;

export const SectionWrapper = styled.article`
  padding: 0px 0px 100px 0px;
  color: #ffffff;
  font-family: ${$light};

  > article:not(:first-child) {
    ${glassBox}
    padding: 55px 51px;
    transition: all 1s ease;
    min-width: 280px;
    @media (max-width: 1024px) {
      padding: 22px 25px 15px;
    }
    @media (max-width: 640px) {
      padding: 22px 25px 15px;
    }
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    > h2 {
      font-size: 1.25rem;
      margin-bottom: 25px;
      font-family: ${$light};
    }
    > div {
      margin-top: 13px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: space-between;
      grid-gap: 15px;
      gap: 15px;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      > a {
        width: 100%;
        min-width: 110px;
        max-width: 320px;
        > section {
          ${contentInBox}
          ${center}
          @media (max-width: 1024px) {
            width: 100%;
            padding: 5px 10px;
            font-size: 1rem;
            height: 35px;
            border-radius: 15px;
            > figure > span {
              width: 20px !important;
            }
          }
          > figure {
            ${center}
            > figcaption {
              margin-left: 15px;
            }
          }
          > article {
            margin-left: auto;
            ${center}
            @media (max-width: 1140px) {
              display: none;
            }
            @media (max-width: 1024px) {
              display: block;
            }
            @media (max-width: 460px) {
              transform: scale(0.8);
            }
            @media (max-width: 380px) {
              display: none;
            }
          }
        }
      }
    }
  }
`;
