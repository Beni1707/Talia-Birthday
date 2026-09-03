import { useEffect } from 'react'
import { carouselPhotos } from '@/data/photos'

const photos = [...carouselPhotos, ...carouselPhotos, ...carouselPhotos]

export function PhotoCarousel() {
  useEffect(() => {
    function handleVisibilityChange() {
      if (!document.hidden) {
        window.dispatchEvent(new Event('resize'))
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return (
    <div className="group overflow-hidden py-8 md:py-16">
      <div
        className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] md:gap-10"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      >
        {photos.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="aspect-square h-48 shrink-0 rounded-full border-4 border-roseLight/40 object-cover shadow-xl sm:h-56 md:h-72 lg:h-80"
          />
        ))}
      </div>
    </div>
  )
}
