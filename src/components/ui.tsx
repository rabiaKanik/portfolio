import { useEffect, useRef, type ReactNode } from 'react'

/** Fades children in when they scroll into view. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <Reveal>
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          <span className="font-mono text-base font-normal text-accent">{index}.</span>
          {title}
          <span className="h-px flex-1 bg-line" />
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-xs text-zinc-400">
      {children}
    </span>
  )
}
