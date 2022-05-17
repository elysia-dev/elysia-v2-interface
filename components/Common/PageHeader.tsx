import { Trans } from 'react-i18next';

const PageHeader: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <div>
      <div>
        <div>{headers[0]}</div>
        <div>{headers[1]}</div>
        <Trans>{headers[2]}</Trans>
      </div>
    </div>
  );
};

export default PageHeader;
