import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { MainSectionWrapper } from './styles';
import SectionItem from './SectionItem';

const Section = () => {
  const { i18n } = useTranslation();

  const sectionArrayItems = [
    [
      [
        t('main.section_el_bridge.0'),
        t('main.section_el_bridge.1'),
        t('main.section_el_bridge.3'),
      ],
      'ELBridge',
    ],
    [
      [
        t('main.section_governance.0'),
        t('main.section_governance.1'),
        t('main.section_governance.2'),
      ],
      'Governance',
    ],
    [
      [
        t('main.section_ecosystem.0'),
        t('main.section_ecosystem.1'),
        t('main.section_ecosystem.3'),
      ],
      'Ecosystem',
    ],
    [
      [
        t('main.section_community.0'),
        t('main.section_community.1'),
        t('main.section_community.3'),
      ],
      'Community',
    ],
    [
      [
        t('main.section_developers.0'),
        t('main.section_developers.1'),
        t('main.section_developers.3'),
      ],
      'Developers',
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
          />
        );
      })}
    </MainSectionWrapper>
  );
};

export default Section;
