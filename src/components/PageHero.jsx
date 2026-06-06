import { motion } from 'framer-motion'
import Icon from './Icon'
import './PageHero.css'

const ease = [0.22, 1, 0.36, 1]

export default function PageHero({ eyebrow, title, highlight, lead }) {
  return (
    <section className="pagehero">
      <div className="pagehero__bg" aria-hidden="true">
        <div className="pagehero__grid" />
        <span className="pagehero__orb pagehero__orb--1" />
        <span className="pagehero__orb pagehero__orb--2" />
      </div>
      <div className="container pagehero__inner">
        {eyebrow && (
          <motion.span
            className="pagehero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Icon name="spark" size={14} /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          className="pagehero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease }}
        >
          {title} {highlight && <span className="text-grad">{highlight}</span>}
        </motion.h1>
        {lead && (
          <motion.p
            className="pagehero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease }}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  )
}
