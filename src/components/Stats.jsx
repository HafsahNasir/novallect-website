import Counter from './Counter'
import Reveal from './Reveal'
import './Stats.css'

// Items with a numeric `value` animate; items with `placeholder` render as-is.
const stats = [
  { value: 30, suffix: '+', label: 'Years of combined experience' },
  { value: 10, suffix: '+', label: 'Projects delivered' },
  { value: 15, suffix: '+', label: 'Businesses supported' },
  { value: 8, suffix: '+', label: 'Industries served' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <div className="stat__num">
                {s.placeholder ? (
                  s.placeholder
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </div>
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
