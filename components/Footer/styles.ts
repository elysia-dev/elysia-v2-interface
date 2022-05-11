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
      margin-right: 30px;
    }
  }
`;
