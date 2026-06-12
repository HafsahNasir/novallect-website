import Reveal from './Reveal'
import Icon from './Icon'
import nasir from '../assets/team/nasir-rashid.jpg'
import anwaar from '../assets/team/anwaar-pervaiz.jpg'
import './Leadership.css'

const leaders = [
  {
    name: 'Nasir Rashid',
    role: 'Founder & Managing Director',
    photo: nasir,
    tags: ['SAP-Certified', 'PMP', 'Published Author'],
    intro:
      "Our leadership's operating experience is why clients trust us with strategy, not just delivery.",
    credentials: [
      '20+ years global SAP & enterprise transformation leadership',
      'Former SVP Finance & Systems Controller, GCC',
      'Operated across UAE, KSA, Bahrain, Singapore & Pakistan',
      '12+ years leading SAP Finance & cross-module teams',
      'Former SAP consultant at SAP Arabia and Siemens',
    ],
  },
  {
    name: 'Anwaar Awan',
    role: 'Director Admin & Legal',
    photo: anwaar,
    tags: ['KAU Jeddah', 'Arabic Fluent', 'GCC Networks'],
    intro:
      '20+ years of entrepreneurial leadership, regulatory expertise, and stakeholder engagement across the GCC.',
    credentials: [
      '20+ years entrepreneurial leadership across Pakistan & GCC',
      'Diversified portfolio: trading, healthcare, hospitality & professional services',
      'Active networks across Saudi ministries & municipal bodies',
      'Expert in MOMRAH, SASO & Saudi industrial licensing frameworks',
      'Multi-jurisdictional business partnerships across KSA & Pakistan',
    ],
  },
]

export default function Leadership() {
  return (
    <section className="leaders section">
      <div className="container">
        <Reveal className="leaders__head">
          <span className="eyebrow">
            <Icon name="users" size={15} /> Leadership
          </span>
          <h2 className="section-title">
            Operators first. <span className="text-grad">Advisors always.</span>
          </h2>
          <p className="section-lead">
            Our leadership's hands-on enterprise experience is why clients trust
            us with strategy, not just delivery.
          </p>
        </Reveal>

        <div className="leaders__list">
          {leaders.map((l, i) => (
            <Reveal
              as="article"
              key={l.name}
              delay={i * 0.1}
              className={`leader ${i % 2 === 1 ? 'leader--flip' : ''}`}
            >
              <div className="leader__photo">
                <img src={l.photo} alt={l.name} loading="lazy" />
                <span className="leader__badge">{l.role}</span>
              </div>

              <div className="leader__body">
                <h3 className="leader__name">{l.name}</h3>
                <p className="leader__role">{l.role}</p>
                <div className="leader__tags">
                  {l.tags.map((t) => (
                    <span key={t} className="leader__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="leader__intro">{l.intro}</p>
                <ul className="leader__creds">
                  {l.credentials.map((c) => (
                    <li key={c}>
                      <Icon name="check" size={16} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
