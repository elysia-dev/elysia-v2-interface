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
        t('main.sectionGovernance.0'),
        t('main.sectionGovernance.1'),
        t('main.sectionGovernance.2'),
      ],
      'Governance',
      GoogleGAAction.MainGovernanceCard,
    ],
    [
      [
        t('main.sectionEcosystem.0'),
        t('main.sectionEcosystem.1'),
        t('main.sectionEcosystem.2'),
      ],
      'Ecosystem',
      GoogleGAAction.MainEcosystemCard,
    ],
    [
      [
        t('main.sectionCommunity.0'),
        t('main.sectionCommunity.1'),
        t('main.sectionCommunity.2'),
      ],
      'Community',
      GoogleGAAction.MainCommunityCard,
    ],
    [
      [
        t('main.sectionDevelopers.0'),
        t('main.sectionDevelopers.1'),
        t('main.sectionDevelopers.2'),
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
