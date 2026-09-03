interface AnimatedTitleProps {
  text: string
  className?: string
}

export function AnimatedTitle({ text, className = '' }: AnimatedTitleProps) {
  return (
    <h1
      className={`animate-in fade-in font-serif text-5xl font-light tracking-tight text-ink duration-1000 md:text-7xl lg:text-8xl ${className}`}
    >
      {text}
    </h1>
  )
}
