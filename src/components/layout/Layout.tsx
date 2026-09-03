import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <Outlet />
    </main>
  )
}
