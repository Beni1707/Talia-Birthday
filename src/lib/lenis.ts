import type Lenis from '@studio-freight/lenis'

let instance: Lenis | null = null

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis
}

export function getLenisInstance() {
  return instance
}
