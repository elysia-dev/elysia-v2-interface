import styled from 'styled-components';

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
  width: '310px',
  height: '46px',
  'box-shadow': '0px 0px 6px #00000029',
  'background-color': '#000000',
  'border-radius': '23px',
  padding: '0px 25px 0px 29.5px',
};

export const CommunityWrapper = styled.div`
  position: relative;
  overflow: 'hidden';
`;

export const SectionWrapper = styled.div`
  max-width: 1639px;
  margin: auto;
  padding: 0px 20px 100px 20px;
  color: #ffffff;
  font-family: Gilroy-Light;
  &::before,
  &::after {
    position: absolute;
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
    background: linear-gradient(to right, #000000, transparent),
      linear-gradient(to top, #000000, #4785ff 40%);
  }

  > div:nth-child(1) {
    padding-top: 634px;

    margin-bottom: 30px;
    /* padding: 400px 45px 50px 45px; */
    > div:first-child {
      /* width: 50%; */
      color: #cbcbcb;
      font-size: 1.375rem;
      > div:first-child {
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
      }
      > div:nth-child(2) {
        color: #33a5ff;
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
    > div:first-child {
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        > div {
          ${contentInBox}
          ${center}
          > div:nth-child(1) {
            margin-right: 15px;
            ${center}
          }
          > div:nth-child(3) {
            margin-left: auto;
            ${center}
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
        }
      }
    }
  }
  > div:nth-child(3) {
    ${glassBox}
    > div:first-child {
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        > div:not(div:last-child) {
          ${contentInBox}
          ${center}
          > div:nth-child(1) {
            margin-right: 15px;
            ${center}
          }
          > div:nth-child(3) {
            margin-left: auto;
            ${center}
          }
        }
        > div:last-child {
          width: 310px;
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
        }
      }
    }
  }
  > div:nth-child(4) {
    ${glassBox}
    > div:first-child {
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        > div:not(div:nth-child(3), div:nth-child(4)) {
          ${contentInBox}
          ${center}
          > div:nth-child(1) {
            margin-right: 15px;
            ${center}
          }
          > div:nth-child(3) {
            margin-left: auto;
            ${center}
          }
        }
        > div:nth-child(3),
        > div:nth-child(4) {
          width: 310px;
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
        }
      }
    }
  }
  > div:nth-child(5) {
    ${glassBox}
    > div:first-child {
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        > div {
          ${contentInBox}
          ${center}
          > div:nth-child(1) {
            margin-right: 15px;
            ${center}
          }
          > div:nth-child(3) {
            margin-left: auto;
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: 104px;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1299px) {
    > div:nth-child(2) {
      > div:first-child {
        > div:last-child {
          > div {
            padding: 0px 14px 0px 14.5px;
            > div:nth-child(1) {
              margin-right: 12px;
            }
          }
          > div:not(div:nth-child(4)) {
            margin-right: 30px;
          }
        }
      }
    }
    > div:nth-child(3) {
      > div:first-child {
        > div:last-child {
          > div {
            padding: 0px 14px 0px 14.5px;
          }
          > div:not(div:last-child) {
            > div:nth-child(1) {
              margin-right: 12px;
            }
          }
          > div:not(div:nth-child(4)) {
            margin-right: 30px;
          }
        }
      }
    }
    > div:nth-child(4) {
      > div:first-child {
        > div:last-child {
          > div {
            padding: 0px 14px 0px 14.5px;
          }
          > div:not(div:nth-child(3), div:nth-child(4)) {
            > div:nth-child(1) {
              margin-right: 12px;
            }
          }
          > div:not(div:nth-child(4)) {
            margin-right: 30px;
          }
        }
      }
    }
    > div:nth-child(5) {
      > div:first-child {
        > div:last-child {
          > div {
            padding: 0px 14px 0px 14.5px;
            > div:nth-child(1) {
              margin-right: 12px;
            }
          }
          > div:not(div:nth-child(4)) {
            margin-right: 30px;
          }
        }
      }
    }
  }
`;