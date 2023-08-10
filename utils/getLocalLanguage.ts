import LanguageType from 'enums/LanguageType';

const getLocalLanguage = (): LanguageType => {
  const language = window.localStorage.getItem('@language') as LanguageType;
  let localLanguage = LanguageType.KO;

  const userLang = navigator.language;

  if (userLang?.includes('en')) {
    localLanguage = LanguageType.EN;
  }
  if (userLang?.includes('zhHans')) {
    localLanguage = LanguageType.ZHHANS;
  }

  return language || localLanguage;
};

export default getLocalLanguage;
