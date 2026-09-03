import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenisInstance } from '@/lib/lenis'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = getLenisInstance()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}
