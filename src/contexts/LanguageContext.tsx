
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

type Translations = {
  [key: string]: {
    en: string;
    fr: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultTranslations: Translations = {};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
  translations: Translations;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  translations = defaultTranslations,
}) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translations[key][language] || translations[key].en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
