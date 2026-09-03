import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function FloatingBubble() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="mx-auto my-16 max-w-lg px-4 md:my-24 md:max-w-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-3xl bg-gradient-to-br from-rose to-roseLight p-8 shadow-2xl md:p-10"
      >
        <p className="font-body text-base leading-relaxed text-cream md:text-lg">
          {t('gallery.bubble.main')}
        </p>
        <p className="mt-4 font-body text-sm italic text-cream opacity-90 md:text-base">
          {t('gallery.bubble.ps')}
        </p>
        <div className="absolute -bottom-2 left-12 h-6 w-6 rotate-45 bg-roseLight" />
      </motion.div>
    </motion.div>
  )
}
