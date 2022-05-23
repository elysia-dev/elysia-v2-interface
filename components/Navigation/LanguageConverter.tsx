import LanguageContext from 'contexts/LanguageContext';
import LanguageType from 'enums/LanguageType';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

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
        className="footer__lang__image-handler"
        style={{ display: visible ? 'flex' : 'none' }}>
        {[LanguageType.EN, LanguageType.KO]
          .filter((languageType) => languageType !== lng)
          .map((languageType, index) => {
            return (
              <div
                className="footer__lang__image-handler__wrapper"
                key={index}
                onClick={() => {
                  setLanguage(languageType);
                  handleHover();
                }}>
                <p>{languageType}</p>
              </div>
            );
          })}
      </div>
    );
  };

  const showingLanguageIcon = (languageType: LanguageType) => {
    return (
      <>
        <p className="montserrat">{languageType}</p>
      </>
    );
  };

  return (
    <div className="footer__lang" ref={LangRef}>
      {changeLanguage()}
      <div className="footer__lang__wrapper" onClick={() => handleHover()}>
        {showingLanguageIcon(lng as LanguageType)}
      </div>
    </div>
  );
};

export default LanguageConverter;
