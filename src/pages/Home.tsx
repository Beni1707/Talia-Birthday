import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useNavigate } from 'react-router-dom'
import { Hero } from '@/components/hero/Hero'
import { PhotoCarousel } from '@/components/shared/PhotoCarousel'

const CONFETTI_COLORS = ['#C97B7B', '#C9A961', '#E5B8B8', '#F5EBDD']

function fireConfetti() {
  confetti({
    particleCount: 80,
    spread: 90,
    origin: { y: 0.6 },
    colors: CONFETTI_COLORS,
    scalar: 0.9,
    ticks: 200,
  })
}

export default function Home() {
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

      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-lg leading-relaxed text-ink md:text-xl"
        >
          <p>
            Je suis pas très doué avec les mots et les longs souhaits, so j'ai
            laissé mes lignes de code parler...
          </p>
          <p>
            Bon anniversaire Talia, j'espère que tu passeras une excellente
            journée avec tes proches. Je ne regrette pas de t'avoir connue, tu
            as apporté beaucoup plus dans le camp d'été que ce pour quoi tu
            étais payée. Tu as apporté de la joie, la paix, la bonne humeur et
            bien plus encore. Profite de ta journée.
          </p>
          <p>Et clique sur le bouton en bas pour voir ton petit petit cadeau.</p>
        </motion.div>
      </section>

      <PhotoCarousel />

      <section className="flex justify-center px-6 py-16 md:py-24">
        <motion.button
          type="button"
          onClick={handleGiftClick}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
          className="rounded-full bg-rose px-8 py-4 text-xl text-cream shadow-xl transition-colors hover:bg-roseDark"
        >
          Découvrir ton cadeau →
        </motion.button>
      </section>
    </>
  )
}
