import { motion } from 'framer-motion'

interface AnimatedTitleProps {
  text: string
  className?: string
}

export function AnimatedTitle({ text, className = '' }: AnimatedTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`font-display text-5xl leading-tight font-bold text-rose drop-shadow-sm md:text-6xl lg:text-7xl ${className}`}
    >
      {text}
    </motion.h1>
  )
}
