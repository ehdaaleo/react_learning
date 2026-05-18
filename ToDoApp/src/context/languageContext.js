import { createContext } from 'react'

export const LANGUAGE_KEY = 'movieLanguage'
export const defaultLanguage = 'en-US'

export const languages = [
  { value: 'en-US', label: 'English' },
  { value: 'ar-EG', label: 'Arabic' },
  { value: 'fr-FR', label: 'French' },
]

export const LanguageContext = createContext(null)
