import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'

const STORAGE_KEY = 'language'
const savedLanguage = localStorage.getItem(STORAGE_KEY)

void i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: savedLanguage ?? 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
