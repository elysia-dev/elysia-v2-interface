import { Trans } from 'react-i18next';

const PageHeader: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <section>
      <h1>{headers[0]}</h1>
      <h2>{headers[1]}</h2>
      <p>
        <Trans>{headers[2]}</Trans>
      </p>
    </section>
  );
};

export default PageHeader;
