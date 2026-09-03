import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Memory } from '@/data/memories'

interface MemoryModalProps {
  memory: Memory | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MemoryModal({ memory, open, onOpenChange }: MemoryModalProps) {
  if (!memory) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-ivory sm:max-w-md">
        <DialogHeader>
          <img
            src={memory.image}
            alt={memory.title}
            className="aspect-square w-full rounded-lg object-cover"
          />
          <DialogTitle className="font-serif pt-4 text-2xl font-light text-ink">
            {memory.title}
          </DialogTitle>
          <p className="font-sans text-sm text-pearl">
            {memory.date}
            {memory.location ? ` · ${memory.location}` : ''}
          </p>
        </DialogHeader>
        <p className="font-sans text-base leading-relaxed text-ink/80">
          {memory.story}
        </p>
      </DialogContent>
    </Dialog>
  )
}
