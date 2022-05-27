import { Trans } from 'react-i18next';

const ContentDescription: React.FC<{ description?: string }> = ({
  description,
}) => {
  return description ? (
    <p>
      <Trans>{description}</Trans>
    </p>
  ) : null;
};

export default ContentDescription;
