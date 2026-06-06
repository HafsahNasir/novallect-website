// Counts up to a target number when scrolled into view.
// Pass `value` as a number; `suffix`/`prefix` for things like "+" or "X".
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ value, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    let start
    const animate = (t) => {
      if (start === undefined) start = t
      const progress = Math.min((t - start) / duration, 1)
      // easeOutExpo for a snappy, premium finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
