import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { setLenisInstance } from '@/lib/lenis'

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis()
    setLenisInstance(lenis)

    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    let frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [enabled])
}
