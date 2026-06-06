import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import './CTASection.css'

export default function CTASection({
  kicker = 'Ready when you are',
  title = "Let's build what's next for your business.",
  text = 'Tell us about your goals and our team will map the right ERP, IT or analytics solution — no pressure, no jargon.',
}) {
  return (
    <section className="cta section">
      <div className="container">
        <Reveal className="cta__panel">
          <div className="cta__bg" aria-hidden="true">
            <span className="cta__orb cta__orb--1" />
            <span className="cta__orb cta__orb--2" />
            <div className="cta__grid" />
          </div>
          <div className="cta__content">
            <span className="cta__kicker">
              <Icon name="spark" size={15} /> {kicker}
            </span>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
                <Icon name="arrow" />
              </Link>
              <a href="tel:+971547757765" className="btn btn-ghost">
                <Icon name="phone" size={17} />
                Book a consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
