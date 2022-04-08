import { createContext } from 'react';
import LanguageType from 'enums/LanguageType';

export interface ILanguageContext {
  setLanguage: (language: LanguageType) => void;
}

export const initialLanguageContext = {
  setLanguage: (language: LanguageType): void => {},
};

const LanguageContext = createContext<ILanguageContext>(initialLanguageContext);

export default LanguageContext;
