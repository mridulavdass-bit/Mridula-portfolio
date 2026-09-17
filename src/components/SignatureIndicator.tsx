import { useEffect, useRef, useState } from 'react'

/**
 * The one signature interaction: a quiet column of ticks on the edge of
 * the viewport, jittered at the top of the page and resolving into a
 * clean, even line by the time you reach the bottom. Complexity →
 * structure → clarity, expressed as a small tactile detail rather than
 * a literal progress bar.
 */
const TICKS = [
  { rot: -14, dx: 3, op: 0.3 },
  { rot: 9, dx: -2, op: 0.55 },
  { rot: -6, dx: 4, op: 0.4 },
  { rot: 13, dx: -3, op: 0.25 },
  { rot: -11, dx: 2, op: 0.6 },
  { rot: 7, dx: -4, op: 0.35 },
  { rot: -4, dx: 3, op: 0.5 },
  { rot: 12, dx: -2, op: 0.3 },
  { rot: -9, dx: 4, op: 0.45 },
  { rot: 5, dx: -3, op: 0.55 },
  { rot: -13, dx: 2, op: 0.32 },
  { rot: 8, dx: -4, op: 0.42 },
]

export default function SignatureIndicator() {
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const frame = useRef<number>()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      setProgress(Math.min(1, Math.max(0, p)))
      frame.current = undefined
    }
    const onScroll = () => {
      if (frame.current !== undefined) return
      frame.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame.current !== undefined) cancelAnimationFrame(frame.current)
    }
  }, [reducedMotion])

  const resolved = reducedMotion ? 1 : progress

  return (
    <div className="signature-indicator" aria-hidden="true">
      {TICKS.map((tick, i) => (
        <span
          key={i}
          className="signature-tick"
          style={{
            transform: `translateX(${tick.dx * (1 - resolved)}px) rotate(${tick.rot * (1 - resolved)}deg)`,
            opacity: tick.op + (1 - tick.op) * resolved,
          }}
        />
      ))}
    </div>
  )
}
