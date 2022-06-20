import LanguageContext from 'contexts/LanguageContext';
import GoogleGAAction from 'enums/GoogleGAAction';
import GoogleGACategory from 'enums/GoogleGACategory';
import LanguageType from 'enums/LanguageType';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { googleGAEvent } from 'utils/gaEvent';
import setLanguage from 'utils/setLanguage';

const LanguageConverter = () => {
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

  const ChangeLanguage = () => {
    return (
      <ChangeLanguageContainer style={{ display: visible ? 'flex' : 'none' }}>
        {[LanguageType.EN, LanguageType.KO]
          .filter((languageType) => languageType !== lng)
          .map((languageType, index) => {
            return (
              <ChangeLanguageType
                key={index}
                onClick={() => {
                  googleGAEvent(
                    GoogleGAAction.NavLanguage,
                    GoogleGACategory.Nav,
                  );
                  setLanguage(languageType);
                  handleHover();
                }}>
                <p>{languageType}</p>
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
        <p>{lng}</p>
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
  width: 46px;
  height: 46px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  top: calc(46px + 10px);
  cursor: pointer;
`;
const ChangeLanguageType = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > p {
    color: #fff;
  }
`;

export default LanguageConverter;
