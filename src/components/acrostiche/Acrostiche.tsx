import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { fireConfetti } from '@/lib/confetti'
import { acrosticheLetters } from '@/data/acrostiche'

const AUTO_ADVANCE_MS = 7000

export function Acrostiche() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % acrosticheLetters.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [index])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    fireConfetti({ particleCount: 30, spread: 60, scalar: 0.7 })
  }, [index])

  function goTo(next: number) {
    setIndex((next + acrosticheLetters.length) % acrosticheLetters.length)
  }

  const current = acrosticheLetters[index]
  const text = t(`gallery.letters.${current.key}`)

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        <button
          type="button"
          aria-label={t('acrostiche.prev')}
          onClick={() => goTo(index - 1)}
          className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rose/20 text-mocha transition-colors hover:bg-rose/40 hover:text-rose sm:h-10 sm:w-10 md:left-4"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 px-10 sm:px-12 md:px-16"
          >
            <span className="font-display text-[100px] leading-none font-bold text-rose sm:text-[140px] md:text-[180px] lg:text-[220px]">
              {current.letter}
            </span>
            <p className="mx-auto max-w-md px-6 font-body text-lg leading-relaxed text-ink sm:max-w-lg sm:text-xl md:max-w-2xl md:px-0 md:text-2xl">
              {text}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label={t('acrostiche.next')}
          onClick={() => goTo(index + 1)}
          className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rose/20 text-mocha transition-colors hover:bg-rose/40 hover:text-rose sm:h-10 sm:w-10 md:right-4"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex gap-3">
        {acrosticheLetters.map((letter, dotIndex) => (
          <button
            key={`${letter.key}-${dotIndex}`}
            type="button"
            aria-label={t('acrostiche.goTo', { letter: letter.letter })}
            onClick={() => goTo(dotIndex)}
            className={`h-2 w-2 rounded-full transition-colors ${
              dotIndex === index ? 'bg-rose' : 'bg-roseLight'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
