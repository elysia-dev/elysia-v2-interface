import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';
import SectionItem from './SectionItem';

const Section = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}>
        <MainSectionWrapper>
          <SectionItem
            section={[
              t('main.section_el_bridge.0'),
              t('main.section_el_bridge.1'),
              t('main.section_el_bridge.3'),
            ]}
            isLeftArrow={false}
            link={`${i18n.language}/ELBridge`}
          />
          <SectionItem
            section={[
              t('main.section_governance.0'),
              t('main.section_governance.1'),
              t('main.section_governance.2'),
            ]}
            isLeftArrow={true}
            link={`${i18n.language}/Governance`}
          />
          <SectionItem
            section={[
              t('main.section_ecosystem.0'),
              t('main.section_ecosystem.1'),
              t('main.section_ecosystem.3'),
            ]}
            isLeftArrow={false}
            link={`${i18n.language}/Ecosystem`}
          />
          <SectionItem
            section={[
              t('main.section_community.0'),
              t('main.section_community.1'),
              t('main.section_community.3'),
            ]}
            isLeftArrow={true}
            link={`${i18n.language}/Community`}
          />
          <SectionItem
            section={[
              t('main.section_developers.0'),
              t('main.section_developers.1'),
              t('main.section_developers.3'),
            ]}
            isLeftArrow={false}
            link={`${i18n.language}/Developers`}
          />
        </MainSectionWrapper>
      </div>
    </>
  );
};

export default Section;
