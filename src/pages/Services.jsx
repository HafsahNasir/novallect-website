import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { serviceCategories } from '../data/services'
import usePageTitle from '../hooks/usePageTitle'
import './Services.css'

export default function Services() {
  usePageTitle('Services')
  const { hash } = useLocation()

  // Scroll to the right category when arriving via /services#erp etc.
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      // small delay so layout/fonts settle first
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top: y, behavior: 'smooth' })
      }, 120)
    }
  }, [hash])

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your business needs to"
        highlight="run smarter."
        lead="Four connected service pillars (ERP, IT Solutions, Analysis and Consulting) delivered by one team that owns the outcome from start to finish."
      />

      {/* quick category nav */}
      <div className="svcnav">
        <div className="container svcnav__inner">
          {serviceCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="svcnav__pill">
              <Icon name={cat.icon} size={17} />
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`svcfull section ${idx % 2 === 1 ? 'svcfull--alt' : ''}`}
        >
          <div className="container">
            <Reveal className="svcfull__head">
              <span className="svcfull__icon">
                <Icon name={cat.icon} size={26} />
              </span>
              <div>
                <span className="eyebrow">{cat.tagline}</span>
                <h2 className="svcfull__title">{cat.name}</h2>
                <p className="svcfull__blurb">{cat.blurb}</p>
              </div>
            </Reveal>

            <div className="svcfull__grid">
              {cat.services.map((s, i) => (
                <Reveal
                  as="article"
                  key={s.name}
                  delay={(i % 4) * 0.06}
                  className="svcitem"
                >
                  <span className="svcitem__check">
                    <Icon name="check" size={16} />
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="svcfull__cta">
              <Link to="/contact" className="btn btn-primary">
                Discuss your {cat.name} needs
                <Icon name="arrow" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection
        kicker="One partner, every pillar"
        title="Not sure which service you need?"
        text="Tell us your goal and we'll recommend the right mix of ERP, IT, analytics and consulting, with a clear plan and no obligation."
      />
    </>
  )
}
