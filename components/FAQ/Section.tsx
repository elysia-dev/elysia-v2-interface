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
  const currentQuestionLength = 6;

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
          {Array(currentQuestionLength)
            .fill(0)
            .map((_x, index) => {
              return (
                <QuestionBox
                  isActive={activeBox === index + 1}
                  setActiveBox={() =>
                    setActiveBox(activeBox === index + 1 ? 0 : index + 1)
                  }
                  question={t(`FAQ.question.${index}`)}
                  answer={t(`FAQ.answer.${index}`)}
                />
              );
            })}
        </QuestionWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
