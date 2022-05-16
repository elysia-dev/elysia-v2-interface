import styled from 'styled-components';

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

export const SectionWrapper = styled.div`
  width: 1639px;
  padding-bottom: 200px;
  color: #ffffff;
  font-family: Gilroy-Light;

  > div:nth-child(1) {
    padding-top: 634px;
    margin-bottom: 30px;
    > div:first-child {
      color: #cbcbcb;
      font-size: 1.375rem;
      > div:first-child {
        color: #ffffff;
        font-family: Gilroy-ExtraBold;
        font-size: 2rem;
        margin-bottom: 5px;
      }
      > div:nth-child(2) {
        color: #33a5ff;
        margin-bottom: 14px;
      }
    }
  }
`;

export const NFTDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-child {
    > div:last-child {
      display: flex;
    }
  }
  > div:last-child {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
`;

export const AssetNFTDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-child {
    > div:not(div:first-child) {
      display: flex;
    }
  }
  > div:last-child {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
`;

export const LegalIssuesDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-child {
    > div:last-child {
      display: flex;
    }
  }
  > div:last-child {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
`;

export const CreatedNFTCount = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 70px;
`;

export const CreateNFTWrapper = styled.div``;

export const ElysiaWhitePaper = styled.div``;
