import PageHeader from 'components/Common/PageHeader';
import { Trans, useTranslation } from 'react-i18next';
import * as gtag from 'lib/gtag';
import { SectionWrapper, Line, QuestionWrapper, ELbridgeImage } from './styles';
import { useCallback, useMemo, useState } from 'react';
import { googleGAEvent } from 'utils/gaEvent';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import QuestionBox from './QuestionBox';

const Section = () => {
  const { t, i18n } = useTranslation();
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
          headers={[
            t('elbridge.top.0'),
            t('elbridge.top.1'),
            t('elbridge.top.2'),
          ]}
        />

        <Line />
        <QuestionWrapper>
          <h2>{t('elbridge.nft_description.0')}</h2>
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
