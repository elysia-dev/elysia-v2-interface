import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko.json';
import en from './en.json';
import zhHans from './zhHans.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ko,
      en,
      zhHans
    },
    lng: 'ko',
    fallbackLng: 'ko',

    interpolation: {
      escapeValue: false,
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['strong', 'p', 'br', 'i'],
    },
  });

export default i18n;
