import styled from 'styled-components';
import mainImage from 'assets/images/main/main_bg.webp';

const sectionBorder = (padding: string) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding,
  'margin-bottom': '30px',
});

const partnerBorder = (padding?: string) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  'box-shadow': '0px 0px 6px #00000029',
  'border-radius': '20px',
  'backdrop-filter': 'blur(18px)',
  padding,
});

export const MainImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 200vh;
  z-index: -1;
  opacity: 0.6;
  background-image: url(${mainImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const MainTopWrapper = styled.section`
  z-index: 1;
  padding: 60vh 0px 0px;
  > section {
    color: #ffffff;
    display: inline-block;
    > h1 {
      font-size: 3.75rem;
      letter-spacing: 0.3rem;
      @media (max-width: 640px) {
        font-size: 3rem;
      }
      @media (max-width: 460px) {
        font-size: 2.2rem;
      }
    }
    > h2 {
      font-weight: normal;
      font-size: 1.875rem;
      color: #33a5ff;
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
      @media (max-width: 460px) {
        font-size: 1.2rem;
      }
    }
  }
`;

export const MainTopLink = styled.article`
  display: flex;
  margin-top: 30.79px;
  @media (max-width: 920px) {
    margin-top: 30px;
  }
  @media (max-width: 640px) {
    margin-top: 20px;
  }
  @media (max-width: 460px) {
    margin-top: 15px;
  }
  > section {
    width: 35.21px;
    height: 35.21px;
    @media (max-width: 920px) {
      width: 30px;
      height: 30px;
    }
    @media (max-width: 460px) {
      width: 25px;
      height: 25px;
    }
    &:not(div:last-child) {
      margin-right: 24.79px;
      @media (max-width: 640px) {
        margin-right: 18px;
      }
      @media (max-width: 460px) {
        margin-right: 15px;
      }
    }
    > a {
      width: 100%;
      height: 100%;
      ${center}
      transition: all 0.2s ease;
      top: 0;
      &:hover {
        filter: drop-shadow(0px 5px 6px #333333);
        transition: all 0.2s ease;
        position: relative;
        top: -3px;
      }
    }
  }
`;

export const MainTopPublicRelation = styled.article`
  ${partnerBorder()}
  ${center}
  max-width: 100%;
  height: 230px;
  margin-top: 25vh;
  transition: all 1s ease;
  &:hover {
    transition: all 1s ease;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);
  }
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: space-around;
    height: initial;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  > section {
    ${center}
    flex: 1;
    > p {
      color: #ffffff;
      text-align: center;
      font-size: 1.375rem;
      @media (max-width: 640px) {
        font-size: 1.2rem;
      }
      @media (max-width: 460px) {
        font-size: 1rem;
      }
      > b {
        font-size: 3.125rem;
        letter-spacing: 3px;
        @media (max-width: 640px) {
          font-size: 2.7rem;
        }
        @media (max-width: 460px) {
          font-size: 2.2rem;
        }
      }
    }
    @media (max-width: 960px) {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const MainPortFolioWrapper = styled.article`
  padding: 170px 0px 100px 0px;
  > h2 {
    font-size: 2rem;
    color: #ffffff;
  }
  > h3 {
    font-weight: normal;
    color: #33a5ff;
    font-size: 1.375rem;
    margin-top: 5px;
  }
`;
export const MainPortfolioItems = styled.section`
  margin-top: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
  > figure {
    width: 100%;
    img {
      filter: grayscale(100%);
      transition: all 0.5s ease;
      &:hover {
        filter: grayscale(0%);
        transition: all 0.5s ease;
      }
    }
  }
`;
export const MainPortfolioLink = styled.section`
  margin-top: 16px;
  left: 0px;
  transition: all 0.3s ease;
  position: relative;
  text-align: right;
  > span {
    font-size: 1.125rem;
    color: #ffffff;
    cursor: pointer;
  }
  &:hover {
    position: relative;
    left: -4px;
    transition: all 0.3s ease;
  }
`;
export const RightArrowIcon = styled.i`
  border: solid #33a5ff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: 15px;
`;

export const MainSectionItems = styled.a<{ isLeftArrow?: boolean }>`
  > div {
    cursor: pointer;
    transition: all 1s ease;
    width: 100%;
    height: 280px;
    ${sectionBorder('54px 50px 49px 50px')}
    text-align: ${(props) => (props.isLeftArrow ? 'right' : 'left')};
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: 'blur(18px)';
      transition: all 1s ease;
      > div > span:last-child {
        animation: ${(props) =>
          props.isLeftArrow
            ? 'arrowLeft 1.5s linear infinite alternate'
            : 'arrowRight 1.5s linear infinite alternate'};
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 920px) {
      padding: 25px 35px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 460px) {
      padding: 15px 25px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    > figure {
      display: flex;
      flex-direction: ${(props) => (props.isLeftArrow ? 'row-reverse' : 'row')};
      > figcaption {
        margin: ${(props) => (props.isLeftArrow ? '0 0 0 10px' : '0 10px 0 0')};
        font-weight: bold;
        font-size: 2rem;
        color: #ffffff;
        display: flex;
        align-items: center;
      }
    }
    > h2 {
      font-weight: normal;
      font-size: 1.375rem;
      color: #ffffff;
      margin-top: 10px;
    }
    > p {
      color: #b7b7b7;
      margin-top: 35px;
      font-size: 1.375rem;
    }
  }

  @keyframes arrowLeft {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
      transform: translateX(-15px);
    }
  }
  @keyframes arrowRight {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
      transform: translateX(15px);
    }
  }
`;

export const MainSectionWrapper = styled.article`
  padding: 25vh 0px;
  max-width: 1639px;
  margin: auto;
  font-weight: normal;
  position: relative;
  overflow: hidden;
`;

export const PartnersWrapper = styled.article`
  position: relative;
  overflow: hidden;
  * img {
    object-fit: contain;
  }
  * p {
    font-size: 1.25rem;
    color: #ffffff;
  }
  padding: 25vh 0px;
  > h2 {
    font-size: 2rem;
    color: #ffffff;
  }
  > h3 {
    font-weight: normal;
    color: #33a5ff;
    font-size: 1.375rem;
    margin-top: 5px;
  }
  > section {
    margin-top: 30px;
    display: flex;
    @media (max-width: 1190px) {
      flex-direction: column;
    }
    > div {
      &#business_wrapper {
        width: 100%;
      }
      > section {
        @supports (gap: 30px) {
          gap: 30px;
        }
        @supports not (gap: 30px) {
          > div:not(:last-child) {
            margin-right: 30px;
          }
        }
        &#backed_by,
        &#audit {
          width: 25.25rem;
        }
        &#legal_review {
          width: 100%;
        }
        &#business {
          @supports (gap: 30px 15px) {
            gap: 30px 15px;
          }
          @supports not (gap: 30px 15px) {
            > div:not(:last-child) {
              margin-right: 30px;
              margin-bottom: 15px;
            }
          }
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          justify-content: space-between;
          align-items: center;
          align-content: flex-start;
          width: 100%;
          height: initial;
          text-align: center;
          @media (max-width: 1190px) {
            grid-template-columns: repeat(3, 1fr);
          }
          @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        margin-top: 8px;
        ${center}
        height: 94px;
        ${partnerBorder('35px 30px')}
        transition: all 1s ease;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 1190px) {
          width: 100% !important;
          height: auto !important;
          padding: 35px 15px !important;
          margin-bottom: 30px;
          display: grid !important;
          grid-template-columns: repeat(3, 1fr);
          justify-content: space-between;
          align-items: center;
          gap: 35px 15px;
          > div {
            margin: 0 auto !important;
          }
        }
        @media (max-width: 640px) {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      &:not(:last-child) {
        margin-right: 23px;
        @media (max-width: 1190px) {
          margin-right: 0 !important;
        }
      }
    }
  }
`;

export const MainTeamWrapper = styled.article`
  position: relative;
  overflow: hidden;
  padding: 25vh 0px;
  > h2 {
    font-size: 2rem;
    color: #ffffff;
  }
  > h3 {
    font-weight: normal;
    color: #33a5ff;
    font-size: 1.375rem;
    margin-top: 5px;
  }
  > section {
    margin-top: 10px;
    display: flex;
    @media (max-width: 920px) {
      display: grid;
      margin-top: 35px;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      gap: 35px 15px;
    }
    @media (max-width: 460px) {
      grid-template-columns: repeat(2, 1fr);
    }
    > figure {
      margin-right: 20px;
      @media (max-width: 920px) {
        margin: 0 auto;
      }
    }
  }
`;

export const MainPressWrapper = styled.article`
  position: relative;
  overflow: hidden;
  padding: 25vh 0px;
  > h2 {
    font-size: 2rem;
    color: #ffffff;
  }
  > h3 {
    font-weight: normal;
    color: #33a5ff;
    font-size: 1.375rem;
    margin-top: 5px;
  }
  > section {
    margin-top: 67px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @supports (gap: 30px) {
      gap: 30px;
    }
    @supports not (gap: 30px) {
      > div:not(:last-child) {
        margin-right: 30px;
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: space-between;
      gap: 35px 15px;
    }
    > a {
      flex: 1;
      height: 430px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 6px #00000029;
      border-radius: 20px;
      backdrop-filter: blur(18px);
      transition: all 1s ease;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
      @media (max-width: 1024px) {
        width: 100%;
        text-align: left;
        height: initial !important;
      }
      > section {
        &:first-child {
          display: flex;
          border-bottom: 1.5px solid #33333377;
          padding: 23px 25px;
          > div:first-child {
            margin-right: auto;
          }
          @media (max-width: 1024px) {
            padding: 20px;
          }
          @media (max-width: 460px) {
            padding: 15px 20px;
          }
        }
        &:last-child {
          margin-top: 25px;
          padding: 0px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          @media (max-width: 1024px) {
            text-align: left;
            margin: 0;
            padding: 30px;
          }
          @media (max-width: 460px) {
            padding: 25px 20px 30px;
          }
          > b {
            cursor: pointer;
            width: 100%;
            color: #ffffff;
            font-size: 1.125rem;
            text-align: center;
            line-height: 1.7rem;
            letter-spacing: 0.08rem;
            ${center}
            &:hover {
              text-shadow: 3px 2px 2px #000000;
            }
            @media (max-width: 1024px) {
              padding: 0;
            }
          }
          > p {
            padding: 0px 15px;
            color: #b7b7b7;
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: 20px;
            @media (max-width: 1024px) {
              padding: 0;
            }
          }
        }
      }
    }
  }
`;
