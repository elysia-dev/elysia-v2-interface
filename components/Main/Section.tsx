import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';
import SectionItem from './SectionItem';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';

const Section = () => {
  const { i18n } = useTranslation();

  const sectionArrayItems = [
    [
      [
        t('main.section_governance.0'),
        t('main.section_governance.1'),
        t('main.section_governance.2'),
      ],
      'Governance',
      GoogleGAAction.MainGovernanceCard,
    ],
    [
      [
        t('main.section_ecosystem.0'),
        t('main.section_ecosystem.1'),
        t('main.section_ecosystem.3'),
      ],
      'Ecosystem',
      GoogleGAAction.MainEcosystemCard,
    ],
    [
      [
        t('main.section_community.0'),
        t('main.section_community.1'),
        t('main.section_community.3'),
      ],
      'Community',
      GoogleGAAction.MainCommunityCard,
    ],
    [
      [
        t('main.section_developers.0'),
        t('main.section_developers.1'),
        t('main.section_developers.3'),
      ],
      'Developers',
      GoogleGAAction.MainDevelopersCard,
    ],
    [
      [t('FAQ.top.0'), t('FAQ.top.1'), t('FAQ.top.2')],
      'FAQ',
      GoogleGAAction.MainFAQCard,
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
              googleGAEvent(data[2] as GoogleGAAction, GoogleGACategory.Main)
            }
          />
        );
      })}
    </MainSectionWrapper>
  );
};

export default Section;
