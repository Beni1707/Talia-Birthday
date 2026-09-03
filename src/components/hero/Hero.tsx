import { motion } from 'framer-motion'
import { heroPhoto } from '@/data/photos'
import { AnimatedTitle } from './AnimatedTitle'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-1/2"
      >
        <img
          src={heroPhoto}
          alt="Talia"
          className="max-h-[70vh] w-full rounded-2xl object-cover shadow-2xl"
        />
      </motion.div>

      <div className="flex w-full flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left">
        <AnimatedTitle text="JOYEUX ANNIVERSAIRE TALIA !!" />
      </div>
    </section>
  )
}
