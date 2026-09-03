import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-roseDark py-4 shadow-md md:py-6">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-12">
        <Link
          to="/"
          className="font-serif text-xl italic text-cream md:text-2xl"
        >
          Yikessss
        </Link>
      </div>
    </header>
  )
}
