import styled from 'styled-components';

const defaultBorder = '1px solid #333333';

const center = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

export const EcosystemWrapper = styled.div`
  background: #dfd9d9;
`;

export const TopWrapper = styled.div`
  width: 100%;
  padding: 100px 45px 0px 45px;
  display: flex;
  > div:first-child {
    font-size: 30px;
    margin-right: auto;
    > div:first-child {
      margin-bottom: 20px;
    }
  }
  > div:last-child {
    border: ${defaultBorder};
    width: 300px;
    height: 250px;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  padding: 0px 45px 0px 45px;
  margin-top: 100px;
  > div:first-child {
    > div:first-child {
      margin-bottom: 20px;
    }
  }
  > div:last-child {
    border: ${defaultBorder};
    display: flex;
    justify-content: space-between;
    > div {
      width: 30%;
      border: ${defaultBorder};
    }
    > div:nth-child(1) {
      > div:first-child {
        border: ${defaultBorder};
        width: 100%;
        height: 200px;
      }
      > div:nth-child(2) {
        display: flex;
        margin-bottom: 10px;
      }
    }
    > div:nth-child(2) {
      > div:first-child {
        border: ${defaultBorder};
        width: 100%;
        height: 200px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        > div:first-child {
          border: ${defaultBorder};
          margin-left: auto;
        }
        > div:last-child {
          margin-top: auto;
          display: flex;
          > div {
            border: ${defaultBorder};
            width: 100px;
            height: 100px;
          }
        }
      }
      > div:nth-child(2) {
        display: flex;
        margin-bottom: 10px;
      }
    }
    > div:nth-child(3) {
      > div:first-child {
        border: ${defaultBorder};
        width: 100%;
        height: 200px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        > div:first-child {
          border: ${defaultBorder};
          margin-left: auto;
        }
      }
      > div:nth-child(2) {
        display: flex;
        margin-bottom: 10px;
      }
    }
  }
`;

export const PortFolioWrapper = styled.div`
  margin-top: 100px;
  padding: 0px 45px 80px 45px;
  > div:first-child {
    margin-bottom: 30px;
    > div:first-child {
      margin-bottom: 10px;
    }
  }
  > div:nth-child(2) {
    > div:nth-child(1) {
      display: flex;
      > div {
        width: 50%;
        ${center};
        > div:first-child {
          margin-right: 50px;
        }
      }
    }
    > div:nth-child(2) {
      border: ${defaultBorder};
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        width: 33%;
        /* height: 200px; */
        border: ${defaultBorder};
        margin: 10px 0px;
        > div:first-child {
          border: ${defaultBorder};
          width: 100%;
          height: 300px;
        }
      }
    }
    > div:last-child {
      width: 100%;
      height: 50px;
      border: ${defaultBorder};
      text-align: center;
      margin-top: 15px;
      ${center}
    }
  }
`;
