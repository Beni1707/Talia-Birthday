import { useTranslation } from 'react-i18next'
import { Acrostiche } from '@/components/acrostiche/Acrostiche'
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

      <section className="flex flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <h2 className="font-display text-4xl font-semibold text-rose md:text-5xl">
          {t('gallery.kennedy.title')}
        </h2>
        <img
          src={memePhoto}
          alt=""
          loading="lazy"
          className="max-w-md rounded-2xl shadow-xl"
        />
        <p className="font-body text-base text-mocha italic">
          {t('gallery.kennedy.joke')}
        </p>
      </section>
    </>
  )
}
