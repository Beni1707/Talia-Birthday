import { carouselPhotos } from '@/data/photos'

const photos = [...carouselPhotos, ...carouselPhotos]

export function PhotoCarousel() {
  return (
    <div className="group overflow-hidden py-16">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {photos.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="mx-4 h-64 w-auto shrink-0 rounded-xl object-cover shadow-lg md:h-80"
          />
        ))}
      </div>
    </div>
  )
}
