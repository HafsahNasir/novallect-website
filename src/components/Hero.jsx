import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon'
import fertiglobe from '../assets/clients/fertiglobe.png'
import mianGroup from '../assets/clients/mian-group.png'
import anwaarGroup from '../assets/clients/anwaar-group.webp'
import './Hero.css'

const clientLogos = [
  { src: fertiglobe, name: 'Fertiglobe', h: 54 },
  { src: mianGroup, name: 'Mian International', h: 42 },
  { src: anwaarGroup, name: 'Anwaar Group', h: 56 },
]

const floatCards = [
  { icon: 'erp', title: 'SAP & ERP', sub: 'Implemented & supported', cls: 'fc--tl' },
  { icon: 'cloud', title: 'Cloud & IT', sub: 'Secure infrastructure', cls: 'fc--tr' },
  { icon: 'chart', title: 'Power BI', sub: 'Live dashboards', cls: 'fc--bl' },
  { icon: 'shield', title: 'Cybersecurity', sub: 'Always protected', cls: 'fc--br' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="hero">
      {/* animated background layers */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orbit hero__orbit--1" />
        <div className="hero__orbit hero__orbit--2" />
        <div className="hero__glow" />
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
      </div>

      {/* floating glass cards */}
      {floatCards.map((c, i) => (
        <motion.div
          key={c.title}
          className={`hero__fcard ${c.cls}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 + i * 0.12, ease }}
        >
          <span className="hero__fcard-icon">
            <Icon name={c.icon} size={24} />
          </span>
          <div>
            <strong>{c.title}</strong>
            <span>{c.sub}</span>
          </div>
        </motion.div>
      ))}

      <div className="hero__inner container">
        <motion.span
          className="hero__badge"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Icon name="spark" size={15} />
          ERP · IT SOLUTIONS · ANALYTICS
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
        >
          Smarter Systems.
          <br />
          <span className="text-grad">Stronger Decisions.</span>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease }}
        >
          Novallect helps startups, SMEs and enterprises across the Middle East
          modernise with reliable SAP &amp; ERP systems, future-ready IT
          solutions, and analytics that turn data into confident decisions.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease }}
        >
          <Link to="/contact" className="btn btn-primary">
            Contact Us
            <Icon name="arrow" />
          </Link>
          <Link to="/services" className="btn btn-ghost">
            Explore Services
            <Icon name="arrowUpRight" />
          </Link>
        </motion.div>

        <motion.div
          className="hero__trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="hero__trust-label">
            Enabling growth for businesses across the Gulf and beyond
          </span>
          <div className="hero__logos">
            {clientLogos.map((c) => (
              <span key={c.name} className="hero__logo">
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  style={{ maxHeight: `${c.h}px` }}
                />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
