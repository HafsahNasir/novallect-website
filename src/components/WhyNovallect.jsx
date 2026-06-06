import Icon from './Icon'
import Reveal from './Reveal'
import './WhyNovallect.css'

const features = [
  {
    icon: 'pin',
    title: 'Built for the Middle East',
    text: 'We understand how Gulf businesses operate, scale and report, and we tailor solutions to fit the region.',
  },
  {
    icon: 'handshake',
    title: 'End-to-end delivery',
    text: 'From first consultation to go-live and beyond, one accountable partner across ERP, IT and analytics.',
  },
  {
    icon: 'erp',
    title: 'SAP & ERP expertise',
    text: 'Hands-on experience with SAP implementations, migrations and support that keep operations running.',
  },
  {
    icon: 'chart',
    title: 'Decision-ready data',
    text: 'Power BI dashboards and reporting that turn scattered data into clear, confident decisions.',
  },
  {
    icon: 'shield',
    title: 'Secure & reliable',
    text: 'Security-first infrastructure and proactive managed support so you can focus on growth.',
  },
  {
    icon: 'rocket',
    title: 'Scales with you',
    text: 'Right-sized for startups today and ready to grow with you into a full enterprise tomorrow.',
  },
]

export default function WhyNovallect() {
  return (
    <section className="why section">
      <div className="container">
        <Reveal className="why__head">
          <span className="eyebrow">
            <Icon name="handshake" size={16} /> Why Novallect
          </span>
          <h2 className="section-title">
            A partner that delivers, <span className="text-grad">not just advises.</span>
          </h2>
          <p className="section-lead">
            "Solutions. Services. Delivered." isn't just a tagline. It's how we
            work with every client, from first call to long-term support.
          </p>
        </Reveal>

        <div className="why__grid">
          {features.map((f, i) => (
            <Reveal as="article" key={f.title} delay={(i % 3) * 0.08} className="why__card">
              <span className="why__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <h3 className="why__title">{f.title}</h3>
              <p className="why__text">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
