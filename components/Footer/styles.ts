import styled from 'styled-components';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding: 0px 50px;
  > div {
    font-family: ${$light};
    font-size: 1rem;
    color: #cbcbcb;
    height: 100px;
  }
  > div:first-child {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    letter-spacing: -0.3px;
    > div:not(div:last-child) {
      margin-bottom: 8px;
    }
    span {
      color: #ffffff;
      font-family: ${$bold};
    }
  }
  > div:last-child {
    display: flex;
    align-items: flex-end;
    /* > div:not(div:last-child) {
      margin-right: 40px;
    } */
    letter-spacing: -0.4px;
    > section {
      display: flex;
      align-items: flex-end;
      > a:nth-child(1),
      a:nth-child(2) {
        margin-right: 0.8rem;
        cursor: pointer;
      }
      > a:nth-child(3) {
        margin-right: 1.2rem;
        cursor: pointer;
      }
      > div:nth-child(4),
      div:nth-child(5),
      div:nth-child(6),
      div:nth-child(7) {
        margin-right: 25px;
      }
      &:last-child {
        > div {
          margin: 0;
          margin-left: 1.3rem;
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
    }
  }
  @media (max-width: 1190px) {
    flex-direction: column;
    padding: 0 5vw;
    > div:last-child {
      flex-direction: row;
      margin-top: 35px;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      height: initial;
      > section {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.275rem;
        > div {
          margin-right: 0 !important;
        }
        &:first-child {
          flex-direction: row;
          display: flex;
          align-items: flex-start;
          > div {
            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }
        }
        &:last-child {
          margin-top: 0px;
          > div {
            width: 30px;
            margin-left: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 840px) {
    > div:last-child {
      > section {
        width: 100%;
        &:first-child {
          flex-direction: column;
          > div {
            &:not(:last-child) {
              margin-bottom: 10px;
            }
          }
        }
        &:last-child {
          margin-top: 0px;
          max-width: 300px;
          margin-left: 25px;
          > div {
            width: 30px;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;
