import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageType from 'enums/LanguageType';
import LanguageContext from '../contexts/LanguageContext';
import getLocalLanguage from 'utils/getLocalLanguage';

const LanguageProvider: React.FC = (props) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  const setLanguage = (language: LanguageType) => {
    window.localStorage.setItem('@language', language);
    const getPath = location.pathname.split('/')[2];
    if (getPath === undefined) {
      return router.push(`/${language}`);
    }
    i18n.changeLanguage(language);
    router.push(
      `/${language + '/' + getPath + location.pathname.split(getPath)[1]}`,
    );
  };

  useEffect(() => {
    i18n.changeLanguage(getLocalLanguage());
  }, []);

  useEffect(() => {
    if ([LanguageType.EN, LanguageType.KO].includes(lng as LanguageType)) {
      window.localStorage.setItem('@language', lng);
      i18n.changeLanguage(lng);
    }
    if (router.pathname === '/') {
      router.push(`/${getLocalLanguage()}`);
    }
  }, [lng]);

  return (
    <LanguageContext.Provider
      value={{
        setLanguage,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
