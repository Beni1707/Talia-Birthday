import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 bg-roseDark px-4 py-3 shadow-md md:px-12 md:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="font-display text-lg text-cream italic md:text-xl">
          {t('header.brand')}
        </Link>
        <LanguageToggle />
      </div>
    </header>
  )
}
