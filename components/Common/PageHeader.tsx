import { Trans } from 'react-i18next';
import styled from 'styled-components';

const PageHeaderWrapper = styled.article`
  padding-top: 60vh;
  margin-bottom: 30px;
  > h1 {
    color: #ffffff;
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 5px;
    @media (max-width: 460px) {
      font-size: 1.5rem;
    }
  }
  > h2 {
    color: #33a5ff;
    margin: 0;
    margin-bottom: 14px;
    font-weight: normal;
  }
  > p {
    color: #cbcbcb;
    margin: 0;
    font-size: 1.375rem;
    @media (max-width: 460px) {
      font-size: 1rem;
    }
  }
`;

const PageHeader: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <PageHeaderWrapper>
      <h1>{headers[0]}</h1>
      <h2>{headers[1]}</h2>
      <p>
        <Trans>{headers[2]}</Trans>
      </p>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
