import styles from './Governance.module.scss';

type Props = {
  guideText: string;
  visible: boolean;
  mouseEnter: () => void;
  mouseLeave: () => void;
};

const Questionmark = (props: Props) => {
  const { guideText, mouseEnter, mouseLeave, visible } = props;

  return (
    <div
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
      className={styles.question}>
      ?{visible && <div>{guideText}</div>}
    </div>
  );
};

export default Questionmark;
