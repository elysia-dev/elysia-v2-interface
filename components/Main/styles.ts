import styled from 'styled-components';
const defaultBorder = '1px solid #333333';

export const MainWrapper = styled.div`
  padding: 0px 45px 50px 45px;
  background: #dfd9d9;
`;

export const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const MainTopWrapper = styled.div`
  width: 100%;
  height: 95vh;
  /* background: #dfd9d9; */

  > div {
    padding-top: 400px;
    /* margin: 0px 45px 0px 45px; */

    > div:nth-child(1) {
      display: inline-block;
    }

    /* Link */
    > div:nth-child(2) {
      display: flex;
      margin-top: 10px;
      > div:not(div:last-child) {
        margin-right: 20px;
      }
      > div {
        width: 70px;
        height: 70px;
        border: ${defaultBorder};
        text-align: center;
        > a {
          width: 100%;
          height: 100%;
          ${center}
        }
      }
    }

    /* icon */
    > div:nth-child(3) {
      width: 100%;
      height: 120px;
      border: ${defaultBorder};
      margin-top: 50px;
      ${center}
      > div {
        width: 100px;
        height: 120px;
        border: ${defaultBorder};
        ${center}
        flex-direction: column;
        > div:first-child {
          cursor: pointer;
          width: 50px;
          height: 50px;
          border: ${defaultBorder};
        }
        > div:last-child {
          text-align: center;
        }
      }
      > div:not(div:last-child) {
        margin-right: 100px;
      }
    }
  }
`;

export const MainPortFolioWrapper = styled.div`
  margin-top: 100px;
  > div:nth-child(2) {
    margin-top: 25px;
    width: 100%;
    /* height: 400px; */
    /* border: ${defaultBorder}; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      /* width: 400px; */
      border: ${defaultBorder};
      /* height: 280px; */
      > div:nth-child(1) {
        width: 100%;
        /* height: 400px; */
        border: ${defaultBorder};
      }
      > div:nth-child(2) {
        display: flex;
        > div:nth-child(1) {
          margin-right: auto;
        }
      }
    }
  }
  > div:nth-child(3) {
    text-align: right;
    margin-top: 20px;
  }
`;

export const MainSectionWrapper = styled.div`
  margin-top: 100px;

  > div:nth-child(1),
  div:nth-child(3),
  div:nth-child(5) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    border: ${defaultBorder};
    padding: 20px;
    margin-bottom: 30px;
    > div:first-child {
      margin-right: auto;
    }
    > div:last-child {
      width: 300px;
      height: 300px;
      border: ${defaultBorder};
    }
  }

  > div:nth-child(2),
  > div:nth-child(4),
  > div:nth-child(6) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 350px;
    border: ${defaultBorder};
    padding: 20px;
    margin-bottom: 30px;
    > div:first-child {
      width: 300px;
      height: 300px;
      border: ${defaultBorder};
    }
    > div:last-child {
      text-align: right;
      margin-left: auto;
    }
  }
  > div:nth-child(6) {
    margin-bottom: 0px;
  }
`;

export const PartnersWrapper = styled.div`
  margin-top: 100px;

  > div:nth-child(2),
  > div:nth-child(3) {
    margin-top: 30px;
    display: flex;
    > div:nth-child(1) {
      margin-right: 100px;
      > div:last-child {
        display: flex;
        > div {
          width: 120px;
          height: 35px;
          border: ${defaultBorder};
        }
      }
    }
    > div:nth-child(2) {
      > div:last-child {
        display: flex;
        > div {
          width: 120px;
          height: 35px;
          border: ${defaultBorder};
        }
      }
    }
  }
  > div:nth-child(4) {
    margin-top: 30px;
    > div:last-child {
      display: flex;
      flex-wrap: wrap;
      > div {
        width: 120px;
        height: 35px;
        border: ${defaultBorder};
      }
    }
  }
`;

export const MainTeamWrapper = styled.div`
  margin-top: 100px;
  > div:first-child {
    > div:last-child {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      > div {
        width: 100px;
        height: 100px;
        border: ${defaultBorder};
      }
    }
  }
  > div:last-child {
    margin-top: 67px;
    > div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      width: 100%;
      border: ${defaultBorder};
      > div {
        width: 33%;
        border: ${defaultBorder};
        padding: 20px;
        > div:first-child {
          display: flex;
          > div:first-child {
            margin-right: auto;
          }
        }
        > div:last-child {
          margin-top: 10px;
          > div:first-child {
            text-align: center;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;
