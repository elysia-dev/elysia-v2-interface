import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';
import SectionItem from './SectionItem';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

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
            onClickEvent={() =>
              googleGAEvent(
                GoogleGAAction.MainElBridgeCard,
                GoogleGACategory.Main,
              )
            }
          />
          <SectionItem
            section={[
              t('main.section_governance.0'),
              t('main.section_governance.1'),
              t('main.section_governance.2'),
            ]}
            isLeftArrow={true}
            link={`${i18n.language}/Governance`}
            onClickEvent={() =>
              googleGAEvent(
                GoogleGAAction.MainGovernanceCard,
                GoogleGACategory.Main,
              )
            }
          />
          <SectionItem
            section={[
              t('main.section_ecosystem.0'),
              t('main.section_ecosystem.1'),
              t('main.section_ecosystem.3'),
            ]}
            isLeftArrow={false}
            link={`${i18n.language}/Ecosystem`}
            onClickEvent={() =>
              googleGAEvent(
                GoogleGAAction.MainEcosystemCard,
                GoogleGACategory.Main,
              )
            }
          />
          <SectionItem
            section={[
              t('main.section_community.0'),
              t('main.section_community.1'),
              t('main.section_community.3'),
            ]}
            isLeftArrow={true}
            link={`${i18n.language}/Community`}
            onClickEvent={() =>
              googleGAEvent(
                GoogleGAAction.MainCommunityCard,
                GoogleGACategory.Main,
              )
            }
          />
          <SectionItem
            section={[
              t('main.section_developers.0'),
              t('main.section_developers.1'),
              t('main.section_developers.3'),
            ]}
            isLeftArrow={false}
            link={`${i18n.language}/Developers`}
            onClickEvent={() =>
              googleGAEvent(
                GoogleGAAction.MainDevelopersCard,
                GoogleGACategory.Main,
              )
            }
          />
        </MainSectionWrapper>
      </div>
    </>
  );
};

export default Section;
