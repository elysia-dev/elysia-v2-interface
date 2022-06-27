import { QuestionBoxWrapper } from './styles';
import * as gtag from 'lib/gtag';
import GoogleGACategory from 'enums/GoogleGACategory';
import GoogleGAAction from 'enums/GoogleGAAction';

interface Props {
  isActive: boolean;
  setActiveBox: () => void;
  question: string;
  answer: string;
  GA: GoogleGAAction;
}

const QuestionBox: React.FC<Props> = (props) => {
  return (
    <QuestionBoxWrapper active={props.isActive}>
      <div
        onClick={() => {
          !props.isActive &&
            gtag.event({
              action: props.GA,
              category: GoogleGACategory.FAQ,
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
