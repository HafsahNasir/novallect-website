import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import { serviceCategories } from '../data/services'
import './ServiceCategories.css'

export default function ServiceCategories() {
  return (
    <section className="svc section">
      <div className="container">
        <Reveal className="svc__head">
          <span className="eyebrow">
            <Icon name="spark" size={15} /> What we do
          </span>
          <h2 className="section-title">
            Four pillars. <span className="text-grad">One trusted partner.</span>
          </h2>
          <p className="section-lead">
            From SAP-driven ERP and end-to-end IT to decision-ready analytics and
            expert consulting, everything your business needs to run smarter, under
            one roof.
          </p>
        </Reveal>

        <div className="svc__grid">
          {serviceCategories.map((cat, i) => (
            <Reveal as="article" key={cat.id} delay={i * 0.1} className="svc__card">
              <div className="svc__card-glow" />
              <span className="svc__card-icon">
                <Icon name={cat.icon} size={26} />
              </span>
              <h3 className="svc__card-title">{cat.name}</h3>
              <p className="svc__card-tag">{cat.tagline}</p>
              <p className="svc__card-blurb">{cat.blurb}</p>

              <ul className="svc__card-list">
                {cat.services.slice(0, 4).map((s) => (
                  <li key={s.name}>
                    <Icon name="check" size={16} />
                    {s.name}
                  </li>
                ))}
              </ul>

              <Link to={`/services#${cat.id}`} className="svc__card-link">
                Explore {cat.name}
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
