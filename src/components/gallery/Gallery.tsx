import { useState } from 'react'
import { memories, type Memory } from '@/data/memories'
import { MemoryCard } from './MemoryCard'
import { MemoryModal } from './MemoryModal'

export function Gallery() {
  const [selected, setSelected] = useState<Memory | null>(null)
  const [open, setOpen] = useState(false)

  function handleOpen(memory: Memory) {
    setSelected(memory)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} onOpen={handleOpen} />
        ))}
      </div>
      <MemoryModal memory={selected} open={open} onOpenChange={setOpen} />
    </>
  )
}
