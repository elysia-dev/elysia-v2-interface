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
  padding: '45px 41px',
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

export const CommunityImage = styled.div`
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

export const SectionWrapper = styled.div`
  padding: 0px 0px 100px 0px;
  color: #ffffff;
  font-family: ${$light};

  > div:nth-child(1) {
    padding-top: 60vh;
    margin-bottom: 30px;
    > div:first-child {
      color: #cbcbcb;
      font-size: 1.375rem;
      @media (max-width: 640px) {
        font-size: 1rem;
      }
      > div:first-child {
        color: #ffffff;
        font-family: ${$bold};
        font-size: 2rem;
        margin-bottom: 5px;
        @media (max-width: 640px) {
          font-size: 1.5rem;
        }
      }
      > div:nth-child(2) {
        color: #33a5ff;
        margin-bottom: 14px;
      }
    }
  }
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(4) {
    margin-bottom: 25px;
  }
  > div:nth-child(2) {
    ${glassBox}
    @media (max-width: 1024px) {
      padding: 22px 25px 15px;
    }
    > div:first-child {
      padding: 10px;
      @media (max-width: 640px) {
        padding: 0;
      }
      > div:first-child {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        grid-gap: 15px;
        gap: 15px;
        @media (max-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-between;
          grid-gap: 15px;
          gap: 15px;
        }
        > a {
          width: 310px;
          @media (max-width: 1024px) {
            width: 100%;
          }
          > div {
            ${contentInBox}
            ${center}
            @media (max-width: 1024px) {
              width: 100%;
              padding: 5px 10px;
              font-size: 1rem;
              height: 35px;
              border-radius: 15px;
              > div > span {
                width: 20px !important;
              }
            }
            > div:nth-child(1) {
              margin-right: 15px;
              ${center}
            }
            > div:nth-child(3) {
              margin-left: auto;
              ${center}
            }
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
          @media (max-width: 1024px) {
            margin: 0;
          }
        }
        > div:nth-child(4) {
          width: 310px;
          padding: 0px 25px 0px 29.5px;
          @media (max-width: 1024px) {
            display: none;
          }
        }
      }
    }
  }
  > div:nth-child(3) {
    ${glassBox}
    @media (max-width: 1024px) {
      padding: 22px 25px 15px;
    }
    > div:first-child {
      padding: 10px;
      @media (max-width: 640px) {
        padding: 0;
      }
      > div:first-child {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        grid-gap: 15px;
        gap: 15px;
        @media (max-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-between;
          grid-gap: 15px;
          gap: 15px;
        }
        > a {
          width: 310px;
          @media (max-width: 1024px) {
            width: 100%;
          }
          > div {
            ${contentInBox}
            ${center}
            @media (max-width: 1024px) {
              width: 100%;
              padding: 5px 10px;
              font-size: 1rem;
              height: 35px;
              border-radius: 15px;
              > div > span {
                width: 20px !important;
              }
            }
            > div:nth-child(1) {
              margin-right: 15px;
              ${center}
            }
            > div:nth-child(3) {
              margin-left: auto;
              ${center}
            }
          }
        }
        > div:nth-child(3),
        > div:nth-child(4) {
          width: 310px;
          padding: 0px 25px 0px 29.5px;
          @media (max-width: 1024px) {
            display: none;
          }
        }
        > div:not(div:nth-child(4)) {
          /* margin-right: 104px; */
          @media (max-width: 1024px) {
            margin: 0;
          }
        }
      }
    }
  }
  > div:nth-child(4) {
    ${glassBox}
    @media (max-width: 1024px) {
      padding: 22px 25px 15px;
    }
    > div:first-child {
      padding: 10px;
      @media (max-width: 640px) {
        padding: 0;
      }
      > div:first-child {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        grid-gap: 15px;
        gap: 15px;
        @media (max-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-between;
          grid-gap: 15px;
          gap: 15px;
        }
        > a {
          width: 310px;
          @media (max-width: 1024px) {
            width: 100%;
          }
          > div {
            ${contentInBox}
            ${center}
            @media (max-width: 1024px) {
              width: 100%;
              padding: 5px 10px;
              font-size: 1rem;
              height: 35px;
              border-radius: 15px;
              > div > span {
                width: 20px !important;
              }
            }
            > div:nth-child(1) {
              margin-right: 15px;
              ${center}
            }
            > div:nth-child(3) {
              margin-left: auto;
              ${center}
            }
          }
        }
        > div:nth-child(3),
        > div:nth-child(4) {
          width: 310px;
          padding: 0px 25px 0px 29.5px;
          @media (max-width: 1024px) {
            display: none;
          }
        }
        > div:not(div:nth-child(4)) {
          /* margin-right: 104px; */
          @media (max-width: 1024px) {
            margin: 0;
          }
        }
      }
    }
  }
  > div:nth-child(5) {
    ${glassBox}
    @media (max-width: 1024px) {
      padding: 22px 25px 15px;
    }
    > div:first-child {
      padding: 10px;
      @media (max-width: 640px) {
        padding: 0;
      }
      > div:first-child {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        grid-gap: 15px;
        gap: 15px;
        @media (max-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-between;
          grid-gap: 15px;
          gap: 15px;
        }
        > a {
          width: 310px;
          @media (max-width: 1024px) {
            width: 100%;
          }
          > div {
            ${contentInBox}
            ${center}
            @media (max-width: 1024px) {
              width: 100%;
              padding: 5px 10px;
              font-size: 1rem;
              height: 35px;
              border-radius: 15px;
              > div > span {
                width: 20px !important;
              }
            }
            > div:nth-child(1) {
              margin-right: 15px;
              ${center}
            }
            > div:nth-child(3) {
              margin-left: auto;
              ${center}
            }
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
          @media (max-width: 1024px) {
            margin: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1299px) {
    > div:nth-child(2) {
      > div:first-child {
        > div:last-child {
          > a {
            > div {
              padding: 0px 14px 0px 14.5px;
              > div:nth-child(1) {
                margin-right: 12px;
              }
            }
          }
          > a:not(a:last-child) {
            margin-right: 30px;
          }
        }
      }
    }
    > div:nth-child(3) {
      > div:first-child {
        > div:last-child {
          > a {
            > div {
              padding: 0px 14px 0px 14.5px;
              > div:nth-child(1) {
                margin-right: 12px;
              }
            }
          }
          > a:not(a:last-child) {
            margin-right: 30px;
          }
          > div:last-child {
            padding: 0px;
          }
        }
      }
    }
    > div:nth-child(4) {
      > div:first-child {
        > div:last-child {
          > a {
            margin-right: 30px;
            > div {
              padding: 0px 14px 0px 14.5px;
              > div:nth-child(1) {
                margin-right: 12px;
              }
            }
          }
          > div:nth-child(3),
          > div:nth-child(4) {
            padding: 0px;
          }
          > div:nth-child(3) {
            margin-right: 30px;
          }
        }
      }
    }
    > div:nth-child(5) {
      > div:first-child {
        > div:last-child {
          > a {
            > div {
              padding: 0px 14px 0px 14.5px;
              > div:nth-child(1) {
                margin-right: 12px;
              }
            }
          }
          > a:not(a:last-child) {
            margin-right: 30px;
          }
        }
      }
    }
  }
`;
