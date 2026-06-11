import PageHero from '../components/PageHero'
import Stats from '../components/Stats'
import Leadership from '../components/Leadership'
import Partners from '../components/Partners'
import WhyNovallect from '../components/WhyNovallect'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import usePageTitle from '../hooks/usePageTitle'
import './About.css'

const pillars = [
  {
    icon: 'spark',
    title: 'Our Mission',
    text: 'To make enterprise-grade ERP, IT and analytics accessible to every ambitious business in the Middle East, delivered with clarity, not complexity.',
  },
  {
    icon: 'rocket',
    title: 'Our Vision',
    text: 'To be the region\'s most trusted technology partner, the team businesses call first when they want systems that actually work.',
  },
  {
    icon: 'handshake',
    title: 'Our Promise',
    text: 'Solutions. Services. Delivered. We measure ourselves on outcomes shipped and problems solved, not hours billed.',
  },
]

const values = [
  'Clarity over jargon',
  'Outcomes over output',
  'Long-term partnership',
  'Security & reliability first',
  'Practical, business-led advice',
  'Right-sized for every stage',
]

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero
        eyebrow="About Novallect"
        title="Technology partners who"
        highlight="actually deliver."
        lead="We help startups, SMEs and enterprises across the Gulf modernise with confidence, combining deep SAP & ERP know-how, broad IT capability and sharp analytics under one roof."
      />

      <Stats />

      {/* Story */}
      <section className="about section">
        <div className="container about__story">
          <Reveal className="about__story-text">
            <span className="eyebrow">
              <Icon name="users" size={16} /> Who we are
            </span>
            <h2 className="section-title">
              Built on experience. <span className="text-grad">Driven by results.</span>
            </h2>
            <p>
              Novallect was founded on a simple belief: technology should make
              business easier, not harder. Too many companies are sold complex
              systems they never fully use, and left to figure out the rest alone.
            </p>
            <p>
              We do things differently. With over a decade of combined experience
              across SAP and ERP implementations, IT infrastructure, and business
              intelligence, our team partners with you end-to-end, from the first
              conversation to long after go-live.
            </p>
            <p>
              Whether you're a startup setting up your first systems, an SME ready
              to scale, or an enterprise modernising operations, we deliver the
              right-sized solution and stay accountable for the outcome.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="about__values">
            <h3>What we stand for</h3>
            <ul>
              {values.map((v) => (
                <li key={v}>
                  <Icon name="check" size={17} />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="about-pillars section">
        <div className="container">
          <div className="about-pillars__grid">
            {pillars.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 0.1} className="about-pillar">
                <span className="about-pillar__icon">
                  <Icon name={p.icon} size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Leadership />

      <Partners />

      <WhyNovallect />
      <CTASection />
    </>
  )
}
