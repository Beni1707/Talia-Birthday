import { useTranslation } from 'react-i18next'

const STORAGE_KEY = 'language'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()

  function setLanguage(lang: 'fr' | 'en') {
    void i18n.changeLanguage(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <div className="flex items-center gap-1.5 font-body text-sm text-cream md:text-base">
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-label="Français"
        className={`px-1.5 py-1.5 ${
          i18n.language === 'fr' ? 'font-semibold' : 'opacity-60 transition-opacity hover:opacity-100'
        }`}
      >
        {t('language.fr')}
      </button>
      <span aria-hidden="true" className="opacity-50">
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="English"
        className={`px-1.5 py-1.5 ${
          i18n.language === 'en' ? 'font-semibold' : 'opacity-60 transition-opacity hover:opacity-100'
        }`}
      >
        {t('language.en')}
      </button>
    </div>
  )
}
