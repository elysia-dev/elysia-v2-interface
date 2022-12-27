import { QuestionBoxWrapper } from './styles';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';

interface Props {
  isActive: boolean;
  setActiveBox: () => void;
  question: string;
  answer: string;
  GA: GoogleAnalyticsAction;
}

const QuestionBox: React.FC<Props> = (props) => {
  return (
    <QuestionBoxWrapper active={props.isActive}>
      <div
        onClick={() => {
          !props.isActive &&
            gtag.event({
              action: props.GA,
              category: GoogleAnalyticsCategory.FAQ,
              label: '',
            });
          props.setActiveBox();
        }}>
        <span>Q</span>
        <p>{props.question}</p>
        <div />
      </div>
      <section>
        <p>{props.answer}</p>
      </section>
    </QuestionBoxWrapper>
  );
};

export default QuestionBox;
