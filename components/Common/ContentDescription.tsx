import { Trans } from 'react-i18next';

const ContentDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div>
      <div>
        <Trans> {description}</Trans>
      </div>
    </div>
  );
};

export default ContentDescription;
