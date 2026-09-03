import { useTranslation } from 'react-i18next'
import { Acrostiche } from '@/components/acrostiche/Acrostiche'
import { FloatingBubble } from '@/components/effects/FloatingBubble'
import { memePhoto } from '@/data/photos'

export default function GalleryPage() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          {t('gallery.title')}
        </h1>
        <p className="mt-4 font-body text-xl font-light text-mocha italic md:text-2xl">
          {t('gallery.subtitle')}
        </p>
      </section>

      <Acrostiche />

      <FloatingBubble />

      <section className="flex flex-col items-center gap-6 px-4 py-16 text-center sm:gap-8 sm:px-6 md:py-24">
        <h2 className="font-display text-3xl font-semibold text-rose sm:text-4xl md:text-5xl lg:text-6xl">
          {t('gallery.kennedy.title')}
        </h2>
        <img
          src={memePhoto}
          alt=""
          loading="lazy"
          className="aspect-square w-64 rounded-full border-4 border-roseLight/40 object-cover shadow-2xl sm:w-72 md:w-80"
        />
        <p className="px-4 font-body text-sm text-mocha italic sm:text-base">
          {t('gallery.kennedy.joke')}
        </p>
      </section>
    </>
  )
}
