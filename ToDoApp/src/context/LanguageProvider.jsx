import { useMemo, useState } from 'react'
import { defaultLanguage, LANGUAGE_KEY, LanguageContext } from './languageContext'

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => localStorage.getItem(LANGUAGE_KEY) || defaultLanguage)

  const setLanguage = (nextLanguage) => {
    localStorage.setItem(LANGUAGE_KEY, nextLanguage)
    setLanguageState(nextLanguage)
  }

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
