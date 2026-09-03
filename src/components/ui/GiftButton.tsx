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
        'flex min-h-[44px] items-center justify-center rounded-full bg-rose px-6 py-3 font-body text-base font-medium text-cream shadow-xl transition-colors hover:bg-roseDark sm:px-8 sm:py-4 sm:text-lg md:text-xl',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
