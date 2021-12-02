import React, { createContext, useContext, useState, useEffect } from 'react';
import { setStorageValue, getStorageValue } from '../helper/storage';
import { frLanguage, enLanguage } from '../helper/languages';

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [languageIsLoaded, setLanguageIsLoaded] = useState(false);
  const [language, setLanguage] = useState(enLanguage);

  async function getStoredLanguage() {
    const usedLanguage = await getStorageValue("usedLanguage");

    if (usedLanguage && usedLanguage === "fr")
      setLanguage(frLanguage);
    else
      setLanguage(enLanguage);
  }

  async function getLanguage() {
    getStoredLanguage();
    setLanguageIsLoaded(true);
  }

  useEffect(() => {
    getLanguage();
  }, []);

  function ChangeLanguage(newLanguage) {
    switch(newLanguage) {
      case "fr":
        setLanguage(frLanguage);
        break;
      case "en":
        setLanguage(enLanguage);
        break;
      default:
        break;
    }
    setStorageValue("usedLanguage", newLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, languageIsLoaded, ChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider;
