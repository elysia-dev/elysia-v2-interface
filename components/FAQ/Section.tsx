import PageHeader from 'components/Common/PageHeader';
import { useTranslation } from 'react-i18next';
import { SectionWrapper, Line, QuestionWrapper, ELbridgeImage } from './styles';
import { useState } from 'react';
import GoogleGAAction from 'enums/GoogleGAAction';
import QuestionBox from './QuestionBox';

const Section = () => {
  const { t } = useTranslation();
  const [activeBox, setActiveBox] = useState(0);
  const currentQuestionLength = [
    GoogleGAAction.ElBridgeFAQ01,
    GoogleGAAction.ElBridgeFAQ02,
    GoogleGAAction.ElBridgeFAQ03,
    GoogleGAAction.ElBridgeFAQ04,
    GoogleGAAction.ElBridgeFAQ05,
    GoogleGAAction.ElBridgeFAQ06,
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
