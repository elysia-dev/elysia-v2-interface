import PageHeader from 'components/Common/PageHeader';
import { useTranslation } from 'react-i18next';
import { SectionWrapper, Line, QuestionWrapper, ELbridgeImage } from './styles';
import { useState } from 'react';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import QuestionBox from './QuestionBox';

const Section = () => {
  const { t } = useTranslation();
  const [activeBox, setActiveBox] = useState(0);
  const currentQuestionLength = [
    GoogleAnalyticsAction.ElBridgeFAQ01,
    GoogleAnalyticsAction.ElBridgeFAQ02,
    GoogleAnalyticsAction.ElBridgeFAQ03,
    GoogleAnalyticsAction.ElBridgeFAQ04,
    GoogleAnalyticsAction.ElBridgeFAQ05,
    GoogleAnalyticsAction.ElBridgeFAQ06,
  ];

  return (
    <>
      <ELbridgeImage />
      <SectionWrapper>
        <PageHeader
          headers={[t('FAQ.top.0'), t('FAQ.top.1'), t('FAQ.top.2')]}
        />

        <Line />
        <QuestionWrapper>
          {currentQuestionLength.map((GA, index) => {
            return (
              <QuestionBox
                key={index}
                isActive={activeBox === index + 1}
                setActiveBox={() =>
                  setActiveBox(activeBox === index + 1 ? 0 : index + 1)
                }
                question={t(`FAQ.question.${index}`)}
                answer={t(`FAQ.answer.${index}`)}
                GA={GA}
              />
            );
          })}
        </QuestionWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
