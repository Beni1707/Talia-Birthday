const BASE = import.meta.env.BASE_URL

const CAROUSEL_FILES = [
  '60f03930-62e5-486e-8f6e-74b59a5a219b.jpg',
  'b587cc65-5da5-4634-8ac7-fd7db1781771.jpg',
  'img_1920.jpg',
  'img_2342.jpg',
  'img_2343.jpg',
  'img_2344.jpg',
  'img_2345.jpg',
  'img_2346.jpg',
  'img_3251.jpg',
  'img_3252.jpg',
]

export const carouselPhotos: string[] = CAROUSEL_FILES.map(
  (file) => `${BASE}photos/${file}`,
)

export const heroPhoto = `${BASE}photos/accueil.jpg`
export const memePhoto = `${BASE}photos/meme.jpg`
