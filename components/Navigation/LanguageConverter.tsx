import LanguageContext from 'contexts/LanguageContext';
import LanguageType from 'enums/LanguageType';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.scss';

const LanguageConverter = () => {
  const { setLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);
  const [visible, setVisible] = useState(false);
  const LangRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    setVisible(!visible);
  };
  const handleOut = () => {
    setVisible(false);
  };

  const HandleClickOutside = (ref: any) => {
    useEffect(() => {
      function HandleClickOutside(e: any): void {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handleOut();
        }
      }
      document.addEventListener('mousedown', HandleClickOutside);
      return () => {
        document.removeEventListener('mousedown', HandleClickOutside);
      };
    }, [ref]);
  };

  HandleClickOutside(LangRef);

  const changeLanguage = () => {
    return (
      <div
        className={styles.language_converter__handler}
        style={{ display: visible ? 'flex' : 'none' }}>
        {[LanguageType.EN, LanguageType.KO]
          .filter((languageType) => languageType !== lng)
          .map((languageType, index) => {
            return (
              <div
                className={styles.language_converter__handler__type__wrapper}
                key={index}
                onClick={() => {
                  setLanguage(languageType);
                  handleHover();
                }}>
                <p className={styles.language_converter__handler__type}>
                  {languageType}
                </p>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className={styles.language_converter} ref={LangRef}>
      <div
        className={styles.language_converter__type__wrapper}
        onClick={() => handleHover()}>
        <p className={styles.language_converter__type}>{lng}</p>
      </div>
      {changeLanguage()}
    </div>
  );
};

export default LanguageConverter;
