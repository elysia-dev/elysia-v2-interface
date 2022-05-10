import { useTranslation } from 'react-i18next';
import { PortFolioWrapper } from './styles';

const PortFolio = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background: '#000000',
      }}>
      <PortFolioWrapper>
        <div>
          <div>{t('ecosystem.portfolio.0')}</div>
          <div>{t('ecosystem.portfolio.1')}</div>
        </div>
        <div>
          <div>
            <div>
              <div>{t('ecosystem.portfolio.2')}</div>
              <div>{'{ 총 자산 토큰 수 }'}</div>
            </div>
            <div>
              <div>{t('ecosystem.portfolio.3')}</div>
              <div>{'{ 총 자산 토큰 가치 }'}</div>
            </div>
          </div>
          <div>
            <div>
              <div />
              <div>
                <div>{'{프로젝트 명}'}</div>
                <div>{'{달러 가치}'}</div>
              </div>
            </div>
            <div>
              <div />
              <div>{'{프로젝트 명}'}</div>
              <div>{'{달러 가치}'}</div>
            </div>
            <div>
              <div />
              <div>{'{프로젝트 명}'}</div>
              <div>{'{달러 가치}'}</div>
            </div>
            <div>
              <div>이미지</div>
              <div>{'{프로젝트 명}'}</div>
              <div>{'{달러 가치}'}</div>
            </div>
            <div>
              <div>이미지</div>
              <div>{'{프로젝트 명}'}</div>
              <div>{'{달러 가치}'}</div>
            </div>
            <div>
              <div>이미지</div>
              <div>{'{프로젝트 명}'}</div>
              <div>{'{달러 가치}'}</div>
            </div>
          </div>
          <div>{t('ecosystem.portfolio.4')}</div>
        </div>
      </PortFolioWrapper>
    </div>
  );
};

export default PortFolio;
