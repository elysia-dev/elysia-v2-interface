import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';
import SectionItem from './SectionItem';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const Section = () => {
  const { i18n } = useTranslation();

  const sectionArrayItems = [
    [
      [
        t('main.sectionElBridge.0'),
        t('main.sectionElBridge.1'),
        t('main.sectionElBridge.2'),
      ],
      'ELBridge',
      GoogleAnalyticsAction.MainElBridgeCard,
    ],
    [
      [
        t('main.sectionGovernance.0'),
        t('main.sectionGovernance.1'),
        t('main.sectionGovernance.2'),
      ],
      'Governance',
      GoogleAnalyticsAction.MainGovernanceCard,
    ],
    [
      [
        t('main.sectionEcosystem.0'),
        t('main.sectionEcosystem.1'),
        t('main.sectionEcosystem.2'),
      ],
      'Ecosystem',
      GoogleAnalyticsAction.MainEcosystemCard,
    ],
    [
      [
        t('main.sectionCommunity.0'),
        t('main.sectionCommunity.1'),
        t('main.sectionCommunity.2'),
      ],
      'Community',
      GoogleAnalyticsAction.MainCommunityCard,
    ],
    [
      [
        t('main.sectionDevelopers.0'),
        t('main.sectionDevelopers.1'),
        t('main.sectionDevelopers.2'),
      ],
      'Developers',
      GoogleAnalyticsAction.MainDevelopersCard,
    ],
  ];

  return (
    <MainSectionWrapper>
      {sectionArrayItems.map((data, index) => {
        return (
          <SectionItem
            section={data[0] as string[]}
            isLeftArrow={index % 2 ? true : false}
            link={`${i18n.language}/${data[1]}`}
            key={`section-items-${index}`}
            onClickEvent={() =>
              gtag.event({
                action: data[2] as GoogleAnalyticsAction,
                category: GoogleAnalyticsCategory.Main,
                label: '',
              })
            }
          />
        );
      })}
    </MainSectionWrapper>
  );
};

export default Section;
