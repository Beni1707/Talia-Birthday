import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GiftButtonProps {
  onClick: () => void
  children: ReactNode
  className?: string
}

export function GiftButton({ onClick, children, className }: GiftButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'block rounded-full bg-rose px-8 py-4 font-body text-lg font-medium text-cream shadow-xl transition-colors hover:bg-roseDark md:text-xl',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
