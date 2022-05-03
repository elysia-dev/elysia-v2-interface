import styled from 'styled-components';

const defaultBorder = '1px solid #333333';

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const DevelopersWrapper = styled.div`
  /* padding: 0px 45px 50px 45px; */
  background: #dfd9d9;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  /* height: 95vh; */

  > div:nth-child(1) {
    /* padding-top: 400px; */
    background-color: #fff2ff;
    padding: 400px 45px 50px 45px;
    > div:first-child {
      border: ${defaultBorder};
      width: 50%;
    }
  }
  > div:nth-child(2) {
    border: ${defaultBorder};
    padding: 0px 45px;
    display: flex;
    justify-content: space-between;
    > div {
      width: 255px;
      border: ${defaultBorder};
    }
    > div:not(div:last-child) {
      > div:first-child {
        display: flex;
        > div:first-child {
          margin-right: auto;
        }
      }
      > div:last-child {
        margin-top: 10px;
        display: flex;
        > div:first-child {
          margin-right: auto;
        }
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > div {
        height: 40%;
        ${center}
        border: ${defaultBorder};
        > div:first-child {
          margin-right: auto;
        }
      }
    }
  }
`;
