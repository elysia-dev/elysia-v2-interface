import { useTranslation } from 'react-i18next';
import styles from './Governance.module.scss';

type Props = {
  guideText: string;
  visible: boolean;
  mouseEnter: () => void;
  mouseLeave: () => void;
};

const Questionmark = (props: Props) => {
  const { guideText, mouseEnter, mouseLeave, visible } = props;
  const { i18n } = useTranslation();

  return (
    <div
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
      className={styles.question}>
      ?
      {visible && (
        <div
          style={{
            right: i18n.language === 'ko' ? -25 : undefined,
          }}>
          {guideText}
        </div>
      )}
    </div>
  );
};

export default Questionmark;
