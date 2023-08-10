import LanguageContext from 'contexts/LanguageContext';
import LanguageType from 'enums/LanguageType';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as gtag from 'lib/gtag';
import GoogleAnalyticsAction from 'enums/GoogleAnalyticsAction';
import GoogleAnalyticsCategory from 'enums/GoogleAnalyticsCategory';

const LanguageConverter = () => {
  const { setLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const lng = router.asPath.substring(1);
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

  const ChangeLanguage = () => {
    return (
      <ChangeLanguageContainer style={{ display: visible ? 'flex' : 'none' }}>
        {[LanguageType.EN, LanguageType.KO, LanguageType.ZHHANS]
          .filter((languageType) => languageType !== lng)
          .map((languageType, index) => {
            return (
              <ChangeLanguageType
                key={index}
                onClick={() => {
                  gtag.event({
                    action: GoogleAnalyticsAction.NavLanguage,
                    category: GoogleAnalyticsCategory.Nav,
                    label: '',
                  });
                  setLanguage(languageType);
                  handleHover();
                }}>
                <p>{languageType.substring(0, 2)}</p>
              </ChangeLanguageType>
            );
          })}
      </ChangeLanguageContainer>
    );
  };

  return (
    <Container ref={LangRef}>
      <ConverterType
        onClick={() => {
          handleHover();
        }}>
        <p>{lng.substring(0, 2)}</p>
      </ConverterType>
      <ChangeLanguage />
    </Container>
  );
};

const Container = styled.article`
  width: 46px;
  height: 46px;
  background-color: #000;
  border-radius: 100%;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;
const ConverterType = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > p {
    color: #fff;
    font-weight: bold;
  }
`;

const ChangeLanguageContainer = styled.article`
  flex-direction: column;
  position: relative;
  top: 20px;
  height: 100%;
  > * + * {
    margin-top: 20px;
  }
`;

const ChangeLanguageType = styled.section`
  width: 46px;
  height: 46px;
  min-height: 46px;
  background-color: #000;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    color: #fff;
  }
`;

export default LanguageConverter;
