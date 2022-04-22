import styled from 'styled-components';

const defaultBorder = '1px solid #333333';

export const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const CommunityWrapper = styled.div`
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
    padding: 45px;
    > div:first-child {
      border: ${defaultBorder};
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        /* justify-content: space-between; */
        > div {
          width: 250px;
          border: ${defaultBorder};
          ${center}
          padding: 5px;
          > div:nth-child(1) {
            margin-right: 10px;
          }
          > div:nth-child(3) {
            margin-left: auto;
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: auto;
        }
      }
    }
  }
  > div:nth-child(3) {
    border: ${defaultBorder};
    padding: 45px;
    > div:first-child {
      border: ${defaultBorder};
      display: inline-block;
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: flex-start;
        > div {
          width: 250px;
          border: ${defaultBorder};
          ${center}
          padding: 5px;
          > div:nth-child(1) {
            margin-right: 10px;
          }
          > div:nth-child(3) {
            margin-left: auto;
          }
        }
        > div:not(div:nth-child(3)) {
          margin-right: 32.328px;
        }
      }
    }
  }
  > div:nth-child(4) {
    border: ${defaultBorder};
    padding: 45px;
    > div:first-child {
      border: ${defaultBorder};
      display: inline-block;
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        justify-content: flex-start;
        > div {
          width: 250px;
          border: ${defaultBorder};
          ${center}
          padding: 5px;
          > div:nth-child(1) {
            margin-right: 10px;
          }
          > div:nth-child(3) {
            margin-left: auto;
          }
        }
        > div:not(div:nth-child(2)) {
          margin-right: 32.328px;
        }
      }
    }
  }
  > div:nth-child(5) {
    border: ${defaultBorder};
    padding: 45px;
    > div:first-child {
      border: ${defaultBorder};
      padding: 10px;
      > div:last-child {
        margin-top: 13px;
        display: flex;
        /* justify-content: space-between; */
        > div {
          width: 250px;
          border: ${defaultBorder};
          ${center}
          padding: 5px;
          > div:nth-child(1) {
            margin-right: 10px;
          }
          > div:nth-child(3) {
            margin-left: auto;
          }
        }
        > div:not(div:nth-child(4)) {
          margin-right: auto;
        }
      }
    }
  }
`;
