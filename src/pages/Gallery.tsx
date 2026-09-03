import { Acrostiche } from '@/components/acrostiche/Acrostiche'
import { PhotoCarousel } from '@/components/shared/PhotoCarousel'
import { memePhoto } from '@/data/photos'

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-16 text-center md:pt-24">
        <h1 className="font-serif text-4xl font-light text-ink md:text-5xl">
          Un acrostiche pour toi
        </h1>
        <p className="mt-4 font-sans text-lg text-mocha">
          — une lettre, une pensée —
        </p>
      </section>

      <Acrostiche />

      <PhotoCarousel />

      <section className="flex flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <h2 className="font-serif text-4xl text-rose md:text-6xl">
          Joyeux anniversaire Kennedy !
        </h2>
        <img
          src={memePhoto}
          alt=""
          loading="lazy"
          className="max-w-md rounded-2xl shadow-xl"
        />
        <p className="font-sans text-base text-mocha italic">
          Je regrette toujours que ce ne soit pas toi sur la photo... 😂
        </p>
      </section>
    </>
  )
}
