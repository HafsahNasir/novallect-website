import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { serviceCategories } from '../data/services'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg" aria-hidden="true">
        <span className="footer__orb" />
      </div>

      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" height={46} />
            <p className="footer__about">
              ERP, IT solutions and analytics that help startups, SMEs and
              enterprises across the Middle East run smarter and decide faster.
            </p>
            <div className="footer__contacts">
              <a href="mailto:info@novallect.com">
                <Icon name="mail" size={17} /> info@novallect.com
              </a>
              <a href="tel:+971547757765">
                <Icon name="phone" size={17} /> +971 54 775 7765
              </a>
              <span>
                <Icon name="pin" size={17} /> Gulf &amp; Middle East
              </span>
            </div>
          </div>

          <div className="footer__cols">
            {serviceCategories.map((cat) => (
              <div className="footer__col" key={cat.id}>
                <h4>{cat.name}</h4>
                <ul>
                  {cat.services.slice(0, 5).map((s) => (
                    <li key={s.name}>
                      <Link to={`/services#${cat.id}`}>{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <p>© {new Date().getFullYear()} Novallect. All rights reserved.</p>
          <p className="footer__tagline">Solutions · Services · Delivered</p>
        </div>
      </div>
    </footer>
  )
}
