import confetti from 'canvas-confetti'

const COLORS = ['#C97B7B', '#C9A961', '#E5B8B8', '#F5EBDD']

const DEFAULT_OPTIONS: confetti.Options = {
  particleCount: 80,
  spread: 90,
  origin: { y: 0.6 },
  colors: COLORS,
  scalar: 0.9,
  ticks: 200,
}

export function fireConfetti(overrides: Partial<confetti.Options> = {}) {
  confetti({ ...DEFAULT_OPTIONS, ...overrides })
}
