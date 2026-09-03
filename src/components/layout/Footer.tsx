import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-roseDark py-6">
      <p className="text-center font-body text-sm text-cream">
        {t('footer.copyright')} {year}
      </p>
    </footer>
  )
}
