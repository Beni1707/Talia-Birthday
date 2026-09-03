import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Gallery as GalleryGrid } from '@/components/gallery/Gallery'

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-16 flex items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-sans text-sm text-pearl transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          retour
        </Link>
      </div>

      <h1 className="mb-16 text-center font-serif text-4xl font-light text-ink md:text-5xl">
        Nos souvenirs
      </h1>

      <GalleryGrid />
    </div>
  )
}
