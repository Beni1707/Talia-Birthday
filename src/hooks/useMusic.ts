import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

export function useMusic(src: string) {
  const soundRef = useRef<Howl | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const sound = new Howl({ src: [src], loop: true, volume: 0.5 })
    soundRef.current = sound

    return () => {
      sound.unload()
    }
  }, [src])

  function toggle() {
    const sound = soundRef.current
    if (!sound) return

    if (isPlaying) {
      sound.pause()
    } else {
      sound.play()
    }
    setIsPlaying(!isPlaying)
  }

  return { isPlaying, toggle }
}
