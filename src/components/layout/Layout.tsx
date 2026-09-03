import { Outlet } from 'react-router-dom'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { BackgroundDecorations } from '@/components/effects/BackgroundDecorations'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  useSmoothScroll()

  return (
    <div className="relative min-h-screen bg-beige text-ink">
      <BackgroundDecorations />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
