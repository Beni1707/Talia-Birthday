import { Outlet } from 'react-router-dom'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col bg-beige text-ink">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
