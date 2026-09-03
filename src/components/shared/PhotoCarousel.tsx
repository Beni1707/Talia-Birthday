import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { carouselPhotos } from '@/data/photos'

export function PhotoCarousel() {
  return (
    <section className="bg-gradient-to-b from-beige to-beigeDark px-6 py-20 md:py-32">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="photo-swiper pb-14"
      >
        {carouselPhotos.map((src, index) => (
          <SwiperSlide
            key={src}
            className="h-[350px] w-[280px] md:h-[500px] md:w-[400px]"
          >
            <img
              src={src}
              alt={`Souvenir ${index + 1}`}
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
