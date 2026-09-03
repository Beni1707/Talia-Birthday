export interface AcrosticheEntry {
  letter: string
  key: 'T' | 'A1' | 'L' | 'I' | 'A2'
}

export const acrosticheLetters: AcrosticheEntry[] = [
  { letter: 'T', key: 'T' },
  { letter: 'A', key: 'A1' },
  { letter: 'L', key: 'L' },
  { letter: 'I', key: 'I' },
  { letter: 'A', key: 'A2' },
]
