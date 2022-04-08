import LanguageType from 'enums/LanguageType';

const getLocalLanguage = (): LanguageType => {
  const language = window.localStorage.getItem('@language') as LanguageType;
  let localLanguage = LanguageType.EN;

  const userLang = navigator.language;

  if (userLang?.includes('ko')) {
    localLanguage = LanguageType.KO;
  }

  return language || localLanguage;
};

export default getLocalLanguage;
