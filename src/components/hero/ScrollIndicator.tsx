import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 text-pearl">
      <span className="font-sans text-xs tracking-widest uppercase">Défiler</span>
      <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
    </div>
  )
}
