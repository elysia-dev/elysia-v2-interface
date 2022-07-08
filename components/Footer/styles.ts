import styled from 'styled-components';

const $bold = 'Gilroy-ExtraBold, SpoqaHanSansNeo-Bold';
const $light = 'Gilroy-Light, SpoqaHanSansNeo';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding: 0px 50px;
  @media (max-width: 1190px) {
    flex-direction: column;
    padding: 0 5vw;
  }
`;

export const LeftWrapper = styled.section`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: -0.3px;
  color: #cbcbcb;
  height: 100px;
  @media (max-width: 840px) {
    > section {
      width: 100%;
    }
  }
  > strong {
    font-weight: normal;
  }
  > p {
    > strong {
      font-weight: bold;
      color: #ffffff;
    }
  }
`;

export const RightWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  color: #cbcbcb;
  height: 100px;
  letter-spacing: -0.4px;
  @media (max-width: 1190px) {
    flex-direction: row;
    margin-top: 35px;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    height: initial;
  }
`;

export const AnchorLink = styled.section`
  display: flex;
  align-items: flex-end;
  @media (max-width: 1190px) {
    flex-direction: row;
    display: flex;
    align-items: flex-start;
  }
  > a {
    margin-right: 0.8rem;
    cursor: pointer;
    color: #cbcbcb;
  }
  @media (max-width: 1190px) {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.275rem;
    > section {
      margin-right: 0 !important;
    }
  }
  @media (max-width: 840px) {
    flex-direction: column;
    > a {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;

export const IconLink = styled.section`
  display: flex;
  align-items: flex-end;
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
  @media (max-width: 1190px) {
    margin-top: 0px;
    > div {
      width: 30px;
      margin-left: 20px;
    }
  }
`;
