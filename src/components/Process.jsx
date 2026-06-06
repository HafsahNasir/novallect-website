import Icon from './Icon'
import Reveal from './Reveal'
import './Process.css'

const steps = [
  {
    n: '01',
    icon: 'users',
    title: 'Discover',
    text: 'We listen first, understanding your goals, challenges and current systems before recommending anything.',
  },
  {
    n: '02',
    icon: 'spark',
    title: 'Design',
    text: 'We map the right ERP, IT or analytics solution and a clear plan, scoped to your size and budget.',
  },
  {
    n: '03',
    icon: 'rocket',
    title: 'Deliver',
    text: 'We implement, integrate and train your team, on time, with minimal disruption to your business.',
  },
  {
    n: '04',
    icon: 'shield',
    title: 'Support',
    text: 'We stay on as your partner with ongoing support, optimisation and reporting as you grow.',
  },
]

export default function Process() {
  return (
    <section className="proc section">
      <div className="container">
        <Reveal className="proc__head">
          <span className="eyebrow">
            <Icon name="clock" size={16} /> How we work
          </span>
          <h2 className="section-title">
            A simple path from <span className="text-grad">idea to impact.</span>
          </h2>
          <p className="section-lead">
            A proven, four-step approach that keeps projects clear, predictable
            and focused on results.
          </p>
        </Reveal>

        <div className="proc__grid">
          <div className="proc__line" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal as="div" key={s.n} delay={i * 0.1} className="proc__step">
              <span className="proc__dot">
                <Icon name={s.icon} size={22} />
              </span>
              <span className="proc__n">{s.n}</span>
              <h3 className="proc__title">{s.title}</h3>
              <p className="proc__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
