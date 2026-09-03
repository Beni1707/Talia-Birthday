import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { heroPhoto } from '@/data/photos'
import { fireConfetti } from '@/lib/confetti'
import { GiftButton } from '@/components/ui/GiftButton'
import { AnimatedTitle } from './AnimatedTitle'

export function Hero() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  function handleGiftClick() {
    fireConfetti()
    navigate('/gallery')
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-12">
        <motion.img
          src={heroPhoto}
          alt="Talia"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 aspect-square w-64 justify-self-center rounded-full border-4 border-rose/40 object-cover shadow-2xl ring-8 ring-roseLight/30 md:w-[400px] lg:w-[500px]"
        />

        <AnimatedTitle
          text={t('home.title')}
          className="order-2 text-center md:text-left"
        />

        <GiftButton
          onClick={handleGiftClick}
          className="order-3 justify-self-center md:order-4 md:justify-self-start"
        >
          {t('home.cta')}
        </GiftButton>

        <div className="order-4 max-w-lg space-y-4 text-left font-body text-base leading-relaxed text-ink md:order-3 md:text-lg">
          <p>{t('home.wishes.intro')}</p>
          <p>{t('home.wishes.body')}</p>
          <p>{t('home.wishes.outro')}</p>
        </div>
      </div>
    </section>
  )
}
