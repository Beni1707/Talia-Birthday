import { Button } from '@/components/ui/button'
import type { Memory } from '@/data/memories'

interface MemoryCardProps {
  memory: Memory
  onOpen: (memory: Memory) => void
}

export function MemoryCard({ memory, onOpen }: MemoryCardProps) {
  return (
    <div className="group flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={memory.image}
          alt={memory.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-xl font-light text-ink">{memory.title}</h3>
        <p className="font-sans text-sm text-pearl">{memory.date}</p>
      </div>
      <Button
        variant="outline"
        className="w-fit rounded-full border-ink/20 font-sans text-sm text-ink hover:bg-ink hover:text-ivory"
        onClick={() => onOpen(memory)}
      >
        Lire l'histoire
      </Button>
    </div>
  )
}
