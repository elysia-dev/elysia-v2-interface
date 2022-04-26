import { useTranslation } from 'react-i18next';
import { MainTeamWrapper } from './styles';

const Team = () => {
  const { t } = useTranslation();

  return (
    <MainTeamWrapper>
      <div>
        <div>
          <span>{t('main.developers.0')}</span>
          <br />
          <span>{t('main.developers.1')}</span>
          <br />
          {t('main.developers.2')}
        </div>
        <div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
          <div>이미지</div>
        </div>
      </div>
      <div>
        <div>
          <span>{t('main.press.0')}</span>
          <br />
          <span>{t('main.press.1')}</span>
          <br />
          {t('main.press.2')}
        </div>
        <div>
          <div>
            <div>
              <div>이미지</div>
              <div>이미지</div>
            </div>
            <div>
              <div>{t('main.press.3')}</div>
              <div>{t('main.press.4')}</div>
            </div>
          </div>
          <div>
            <div>
              <div>이미지</div>
              <div>이미지</div>
            </div>
            <div>
              <div>{t('main.press.5')}</div>
              <div>{t('main.press.6')}</div>
            </div>
          </div>
          <div>
            <div>
              <div>이미지</div>
              <div>이미지</div>
            </div>
            <div>
              <div>{t('main.press.7')}</div>
              <div>{t('main.press.8')}</div>
            </div>
          </div>
        </div>
      </div>
    </MainTeamWrapper>
  );
};

export default Team;
