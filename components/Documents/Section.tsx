import { Trans, useTranslation } from 'react-i18next';
import { SectionWrapper } from './styles';

const Section = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div>
        <div>
          <span>{t('documents.0')}</span>
          <br />
          <span>{t('documents.1')}</span>
          <br />
          <Trans>{t('documents.2')}</Trans>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>{t('documents.3')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans> {t('documents.4')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('documents.5')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('documents.6')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('documents.7')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('documents.8')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
        <div>
          <div>
            <div>{t('documents.9')}</div>
            <div>화살표</div>
          </div>
          <div>
            <div>
              <Trans>{t('documents.10')}</Trans>
            </div>
            <div>아이콘</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
