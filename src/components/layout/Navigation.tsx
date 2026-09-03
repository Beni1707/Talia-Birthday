import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-40 flex w-full items-center justify-between px-6 py-6 md:px-12">
      <Link
        to="/"
        className="font-serif text-sm tracking-wide text-ink/70 transition-colors hover:text-ink"
      >
        Accueil
      </Link>
    </nav>
  )
}
