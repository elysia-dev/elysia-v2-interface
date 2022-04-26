import { useTranslation } from 'react-i18next';
import { PartnersWrapper } from './styles';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <PartnersWrapper>
      <div>
        <span>{t('main.partners.0')}</span>
        <br />
        <span>{t('main.partners.1')}</span>
        <br />
        {t('main.partners.2')}
      </div>
      <div>
        <div>
          <div>{t('main.partners.3')}</div>
          <div>
            <div>이미지</div>
            <div>이미지</div>
          </div>
        </div>
        <div>
          <div>{t('main.partners.4')}</div>
          <div>
            <div>이미지</div>
            <div>이미지</div>
            <div>이미지</div>
            <div>이미지</div>
            <div>이미지</div>
            <div>이미지</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{t('main.partners.5')}</div>
          <div>
            <div>이미지</div>
            <div>이미지</div>
          </div>
        </div>
        <div>
          <div>{t('main.partners.6')}</div>
          <div>
            <div>이미지</div>
            <div>이미지</div>
            <div>이미지</div>
          </div>
        </div>
      </div>
      <div>
        <div>{t('main.partners.7')}</div>
        <div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
        </div>
      </div>
    </PartnersWrapper>
  );
};

export default Partners;
