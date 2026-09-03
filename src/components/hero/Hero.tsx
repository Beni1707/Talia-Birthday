import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AnimatedTitle } from './AnimatedTitle'
import { ScrollIndicator } from './ScrollIndicator'

const RECIPIENT_NAME = 'Prénom'

export function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <AnimatedTitle text={`Joyeux Anniversaire ${RECIPIENT_NAME}`} />
        <p className="font-script text-2xl text-pearl md:text-3xl">
          — un jour, mille souvenirs —
        </p>
      </div>

      <Button
        variant="outline"
        size="lg"
        className="mt-4 rounded-full border-ink/20 px-8 font-sans text-ink hover:bg-ink hover:text-ivory"
        onClick={() => navigate('/gallery')}
      >
        Découvrir
      </Button>

      <div className="absolute bottom-10">
        <ScrollIndicator />
      </div>
    </section>
  )
}
