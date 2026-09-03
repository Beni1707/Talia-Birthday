import { carouselPhotos } from '@/data/photos'

const photos = [...carouselPhotos, ...carouselPhotos]

export function PhotoCarousel() {
  return (
    <div className="group overflow-hidden py-8 md:py-16">
      <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused] md:gap-8">
        {photos.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-48 w-auto shrink-0 rounded-xl object-cover shadow-lg sm:h-56 md:h-72 lg:h-80"
          />
        ))}
      </div>
    </div>
  )
}
