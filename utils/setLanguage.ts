import LanguageType from 'enums/LanguageType';
import router from 'next/router';

const setLanguage = (language: LanguageType) => {
  const getPath = location.pathname.split('/')[2];

  window.localStorage.setItem('@language', language);
  if (getPath === undefined) {
    return router.push(`/${language}`);
  }
  return router.push(
    `/${language + '/' + getPath + location.pathname.split(getPath)[1]}`,
  );
};

export default setLanguage;
