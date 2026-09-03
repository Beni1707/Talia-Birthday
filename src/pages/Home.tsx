import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Hero } from '@/components/hero/Hero'
import { PhotoCarousel } from '@/components/shared/PhotoCarousel'
import { GiftButton } from '@/components/ui/GiftButton'
import { fireConfetti } from '@/lib/confetti'

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(fireConfetti, 500)
    return () => clearTimeout(timer)
  }, [])

  function handleGiftClick() {
    fireConfetti()
    navigate('/gallery')
  }

  return (
    <>
      <Hero />

      <PhotoCarousel />

      <section className="flex justify-center px-6 py-16 md:py-24">
        <GiftButton onClick={handleGiftClick}>{t('home.cta')}</GiftButton>
      </section>
    </>
  )
}
