import Reveal from './Reveal'
import Icon from './Icon'
import fastnexa from '../assets/partners/fastnexa.png'
import orbin from '../assets/partners/orbin.png'
import nouveau from '../assets/partners/nouveau-equation.png'
import mkonnect from '../assets/partners/mkonnect.png'
import rizwan from '../assets/partners/rizwan.png'
import './Partners.css'

const partnerGroups = [
  {
    label: 'Technology Partners',
    icon: 'it',
    logos: [
      { src: fastnexa, name: 'FastNexa' },
      { src: orbin, name: 'Orbin' },
    ],
    capabilities: [
      'AI & Automation',
      'Cybersecurity',
      'Cloud Services',
      'IT Infrastructure',
      'Software Development',
      'Marketing & Innovation',
    ],
  },
  {
    label: 'SAP Delivery Partner',
    icon: 'erp',
    logos: [{ src: nouveau, name: 'Nouveau Equation' }],
    capabilities: [
      'S/4HANA',
      'Enterprise Transformation',
      'SAP Implementation',
      'Rollouts & Migration',
      'Functional & Technical Consulting',
      'AMS & Support',
      'System Integration',
    ],
  },
  {
    label: 'Advisory Partners',
    icon: 'handshake',
    logos: [
      { src: mkonnect, name: 'MKonnect Global' },
      { src: rizwan, name: 'Rizwan & Company' },
    ],
    capabilities: [
      'Strategy',
      'Financial Advisory',
      'Digital Consulting',
      'Corporate Restructuring',
      'Accounting & Finance',
      'Business Consulting',
      'Project Feasibility',
    ],
  },
]

export default function Partners() {
  return (
    <section className="partners section">
      <div className="container">
        <Reveal className="partners__head">
          <span className="eyebrow">
            <Icon name="handshake" size={15} /> Our Ecosystem
          </span>
          <h2 className="section-title">
            A trusted network of <span className="text-grad">delivery partners.</span>
          </h2>
          <p className="section-lead">
            We extend our in-house expertise through carefully chosen technology,
            SAP delivery and advisory partners, so clients get specialist depth
            with a single point of accountability.
          </p>
        </Reveal>

        <div className="partners__grid">
          {partnerGroups.map((g, i) => (
            <Reveal
              as="article"
              key={g.label}
              delay={i * 0.1}
              className="partner-card"
            >
              <span className="partner-card__kicker">
                <Icon name={g.icon} size={17} />
                {g.label}
              </span>

              <div className="partner-card__logos">
                {g.logos.map((logo) => (
                  <div key={logo.name} className="partner-logo">
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  </div>
                ))}
              </div>

              <ul className="partner-card__caps">
                {g.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
