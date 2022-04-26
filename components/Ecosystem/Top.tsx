import { Trans, useTranslation } from 'react-i18next';
import { TopWrapper } from './styles';

const Top = () => {
  const { t } = useTranslation();

  return (
    <TopWrapper>
      <div>
        <div>{t('ecosystem.top.0')}</div>
        <div>
          <Trans>{t('ecosystem.top.1')}</Trans>
        </div>
      </div>
      <div>이미지</div>
    </TopWrapper>
  );
};

export default Top;
