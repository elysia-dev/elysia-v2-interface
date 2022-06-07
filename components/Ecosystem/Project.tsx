import { Trans, useTranslation } from 'react-i18next';
import { ProjectWrapper } from './styles';

const Project = () => {
  const { t } = useTranslation();

  return (
    <ProjectWrapper>
      <div>
        <div>{t('ecosystem.project.0')}</div>
        <div>
          <Trans>{t('ecosystem.project.1')}</Trans>
        </div>
      </div>
      <div>
        <div>
          <div>이미지</div>
          <div>
            <div>ELYFI</div>
            <div>화살표</div>
          </div>
          <div>
            <Trans>{t('ecosystem.project.2')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>{t('ecosystem.project.3')}</div>
            <div>
              <div>구글스토어 아이콘</div>
              <div>애플스토어 아이콘</div>
            </div>
          </div>
          <div>
            <div>{t('ecosystem.project.4')}</div>
          </div>
          <div>
            <Trans>{t('ecosystem.project.5')}</Trans>
          </div>
        </div>
        <div>
          <div>
            <div>Coming Soon!</div>
          </div>
          <div>
            <div>{t('ecosystem.project.6')}</div>
          </div>
          <div>
            <Trans>{t('ecosystem.project.7')}</Trans>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
