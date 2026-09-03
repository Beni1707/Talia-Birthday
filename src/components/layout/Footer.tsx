import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-roseDark px-4 py-4 md:py-6">
      <p className="text-center font-body text-xs text-cream sm:text-sm">
        {t('footer.copyright')} {year}
      </p>
    </footer>
  )
}
