import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding: 0px 50px;
  > div {
    font-family: Gilroy-Light;
    font-size: 1rem;
    color: #cbcbcb;
    height: 100px;
  }
  > div:first-child {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > div:not(div:last-child) {
      margin-bottom: 8px;
    }
    span {
      color: #ffffff;
      font-family: Gilroy-ExtraBold;
    }
  }
  > div:last-child {
    display: flex;
    align-items: flex-end;
    /* > div:not(div:last-child) {
      margin-right: 40px;
    } */
    > section {
      display: flex;
      align-items: flex-end;
      > div:nth-child(1),
      div:nth-child(2) {
        margin-right: 20px;
      }
      > div:nth-child(3) {
        margin-right: 40px;
      }
      > div:nth-child(4),
      div:nth-child(5),
      div:nth-child(6),
      div:nth-child(7) {
        margin-right: 25px;
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
        width: 100%;
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
