import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';

const Section = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <div>
        <div>
          <span>{t('developers.0')}</span>
          <br />
          <span>{t('developers.1')}</span>
          <br />
          <Trans>{t('developers.2')}</Trans>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>{t('developers.3')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('developers.4')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('developers.5')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('developers.6')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('developers.7')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('developers.8')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('developers.9')}</div>
            <div>아이콘</div>
          </div>
          <div>
            <div>{t('developers.10')}</div>
            <div>아이콘</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
