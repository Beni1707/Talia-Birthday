import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Mic, Mountain, Music, Plane } from 'lucide-react'

interface Decoration {
  id: string
  style: CSSProperties
  delay: number
  duration: number
  hideOnMobile?: boolean
  content: ReactNode
}

const ICON = 'h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9'
const ICON_SMALL = 'sm:h-5 sm:w-5 md:h-6 md:w-6'
const EMOJI_PRIMARY = 'text-2xl select-none sm:text-3xl md:text-4xl'
const EMOJI_SECONDARY = 'select-none sm:text-3xl'

const decorations: Decoration[] = [
  { id: 'cello-1', style: { top: '6%', left: '4%' }, delay: 0, duration: 7, content: <span className={EMOJI_PRIMARY}>🎻</span> },
  { id: 'plane-1', style: { top: '10%', right: '6%' }, delay: 1.2, duration: 8, content: <Plane className={`${ICON} text-rose`} strokeWidth={1.2} /> },
  { id: 'eiffel-1', style: { bottom: '8%', left: '6%' }, delay: 2, duration: 6.5, content: <span className={EMOJI_PRIMARY}>🗼</span> },
  { id: 'ski-1', style: { bottom: '10%', right: '5%' }, delay: 0.8, duration: 7.5, content: <Mountain className={`${ICON} text-mocha`} strokeWidth={1.2} /> },
  { id: 'mic-1', style: { top: '45%', left: '3%' }, delay: 1.6, duration: 6.8, content: <Mic className={`${ICON} text-rose`} strokeWidth={1.2} /> },
  { id: 'music-1', style: { top: '50%', right: '4%' }, delay: 2.4, duration: 7.2, content: <Music className={`${ICON} text-mocha`} strokeWidth={1.2} /> },
  { id: 'ski-2', style: { top: '20%', left: '18%' }, delay: 3, duration: 8, content: <Mountain className={`${ICON_SMALL} text-rose`} strokeWidth={1.2} /> },
  { id: 'plane-2', style: { bottom: '20%', right: '20%' }, delay: 1, duration: 7, content: <Plane className={`${ICON_SMALL} text-mocha`} strokeWidth={1.2} /> },
  { id: 'cello-2', style: { bottom: '30%', left: '10%' }, delay: 2.6, duration: 6.5, hideOnMobile: true, content: <span className={EMOJI_SECONDARY}>🎻</span> },
  { id: 'music-2', style: { top: '30%', right: '12%' }, delay: 0.4, duration: 7.8, hideOnMobile: true, content: <Music className={`${ICON_SMALL} text-rose`} strokeWidth={1.2} /> },
  { id: 'eiffel-2', style: { top: '70%', left: '22%' }, delay: 3.4, duration: 6.2, hideOnMobile: true, content: <span className={EMOJI_SECONDARY}>🗼</span> },
  { id: 'mic-2', style: { top: '80%', right: '15%' }, delay: 1.8, duration: 7.4, hideOnMobile: true, content: <Mic className={`${ICON_SMALL} text-mocha`} strokeWidth={1.2} /> },
  { id: 'plane-3', style: { top: '5%', left: '40%' }, delay: 2.2, duration: 8.2, hideOnMobile: true, content: <Plane className={`${ICON_SMALL} text-rose`} strokeWidth={1.2} /> },
  { id: 'ski-3', style: { bottom: '5%', left: '45%' }, delay: 0.6, duration: 7.6, hideOnMobile: true, content: <Mountain className={`${ICON_SMALL} text-mocha`} strokeWidth={1.2} /> },
  { id: 'music-3', style: { bottom: '45%', right: '30%' }, delay: 1.4, duration: 7, hideOnMobile: true, content: <Music className={`${ICON_SMALL} text-rose`} strokeWidth={1.2} /> },
  { id: 'cello-3', style: { top: '85%', left: '35%' }, delay: 2.8, duration: 6.8, hideOnMobile: true, content: <span className={EMOJI_SECONDARY}>🎻</span> },
]

function FloatingItem({
  style,
  delay,
  duration,
  hideOnMobile,
  children,
}: {
  style: CSSProperties
  delay: number
  duration: number
  hideOnMobile?: boolean
  children: ReactNode
}) {
  return (
    <motion.div
      className={`absolute opacity-10 sm:opacity-15 ${hideOnMobile ? 'hidden sm:block' : ''}`}
      style={style}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export function BackgroundDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {decorations.map((decoration) => (
        <FloatingItem
          key={decoration.id}
          style={decoration.style}
          delay={decoration.delay}
          duration={decoration.duration}
          hideOnMobile={decoration.hideOnMobile}
        >
          {decoration.content}
        </FloatingItem>
      ))}
    </div>
  )
}
