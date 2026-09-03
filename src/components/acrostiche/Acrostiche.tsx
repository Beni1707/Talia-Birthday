import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import confetti from 'canvas-confetti'
import { acrosticheLetters } from '@/data/acrostiche'

const AUTO_ADVANCE_MS = 7000

export function Acrostiche() {
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
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.4 },
      colors: ['#C97B7B', '#C9A961', '#E5B8B8'],
      scalar: 0.7,
      ticks: 150,
    })
  }, [index])

  function goTo(next: number) {
    setIndex((next + acrosticheLetters.length) % acrosticheLetters.length)
  }

  const current = acrosticheLetters[index]

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        <button
          type="button"
          aria-label="Lettre précédente"
          onClick={() => goTo(index - 1)}
          className="absolute left-0 z-10 text-mocha transition-colors hover:text-rose md:left-4"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 px-12"
          >
            <span className="font-serif text-9xl leading-none text-rose md:text-[200px]">
              {current.letter}
            </span>
            <p className="max-w-3xl font-serif text-2xl leading-relaxed text-ink md:text-3xl">
              {current.text}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Lettre suivante"
          onClick={() => goTo(index + 1)}
          className="absolute right-0 z-10 text-mocha transition-colors hover:text-rose md:right-4"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex gap-3">
        {acrosticheLetters.map((letter, dotIndex) => (
          <button
            key={`${letter.letter}-${dotIndex}`}
            type="button"
            aria-label={`Aller à la lettre ${letter.letter}`}
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
