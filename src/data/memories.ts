export interface Memory {
  id: string
  image: string
  title: string
  date: string
  location?: string
  story: string
  category: 'ski' | 'music' | 'friendship' | 'travel'
}

export const memories: Memory[] = [
  {
    id: 'memory-1',
    image: 'https://picsum.photos/600/600?random=1',
    title: 'Au sommet',
    date: 'Février 2023',
    location: 'Les Alpes',
    story:
      "Ce jour-là, le soleil se reflétait sur la neige et le monde semblait s'arrêter. Un souvenir qu'on garde précieusement.",
    category: 'ski',
  },
  {
    id: 'memory-2',
    image: 'https://picsum.photos/600/600?random=2',
    title: 'Le concert',
    date: 'Juin 2023',
    location: 'Montréal',
    story:
      "La musique à fond, les voix un peu cassées à force de chanter. Une soirée qu'on n'oubliera pas de sitôt.",
    category: 'music',
  },
  {
    id: 'memory-3',
    image: 'https://picsum.photos/600/600?random=3',
    title: 'Premiers pas',
    date: 'Décembre 2022',
    story:
      "Le début d'une amitié qu'on savait déjà rare. Certaines rencontres changent tout, discrètement.",
    category: 'friendship',
  },
  {
    id: 'memory-4',
    image: 'https://picsum.photos/600/600?random=4',
    title: 'Route improvisée',
    date: 'Août 2023',
    location: 'Gaspésie',
    story:
      'Un road trip décidé sur un coup de tête, sans plan précis, juste l\'envie de voir où la route mène.',
    category: 'travel',
  },
  {
    id: 'memory-5',
    image: 'https://picsum.photos/600/600?random=5',
    title: 'Nuit blanche',
    date: 'Mars 2024',
    story:
      "À refaire le monde jusqu'aux petites heures, entre fous rires et silences complices.",
    category: 'friendship',
  },
  {
    id: 'memory-6',
    image: 'https://picsum.photos/600/600?random=6',
    title: 'Piste enneigée',
    date: 'Janvier 2024',
    location: 'Mont-Tremblant',
    story:
      'Encore une descente, encore un fou rire dans la remontée. La montagne comme prétexte à être ensemble.',
    category: 'ski',
  },
]
