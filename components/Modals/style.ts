import styled from 'styled-components';

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid #505050;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  > b {
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1.1px;
    margin-left: 6px;
  }
`;

export const Background = styled.aside`
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

export const Layout = styled.aside`
  background-color: #3e3e3e;
  border-radius: 10px;
  border: 1px solid #707070;
  max-width: 514px;
  width: 100%;
  margin: 0 0px;
  @media (max-width: 514px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 47px;
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 6px #00000029;
  background-color: #000;
  border-radius: 47px;
  > p {
    color: #ffffff;
    cursor: pointer;
  }
`;
