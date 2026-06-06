import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { serviceCategories } from '../data/services'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus whenever the route changes
  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
    setMobileServices(false)
  }, [location])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Solid bar when scrolled, not on home, or when the mega menu is open
  const solid = scrolled || !isHome || megaOpen
  const variant = solid ? 'dark' : 'light'

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand">
          <Logo variant={variant} height={40} />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>

          <div
            className="nav__item-mega"
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`nav__link nav__link--btn ${megaOpen ? 'is-open' : ''}`}
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
            >
              Services
              <Icon name="chevron" size={16} className="nav__caret" />
            </button>
          </div>

          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
        </nav>

        <div className="nav__cta">
          <Link to="/contact" className="btn btn-primary nav__cta-btn">
            Contact Us
            <Icon name="arrow" />
          </Link>
        </div>

        <button
          className="nav__burger"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Icon name="menu" size={26} />
        </button>
      </div>

      {/* ---------- Desktop mega menu ---------- */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
          >
            <div className="mega__inner container">
              <div className="mega__grid">
                {serviceCategories.map((cat) => (
                  <div className="mega__col" key={cat.id}>
                    <Link to={`/services#${cat.id}`} className="mega__head">
                      <span className="mega__icon">
                        <Icon name={cat.icon} size={20} />
                      </span>
                      <span>
                        <span className="mega__cat">{cat.name}</span>
                        <span className="mega__tag">{cat.tagline}</span>
                      </span>
                    </Link>
                    <ul className="mega__list">
                      {cat.services.slice(0, 5).map((s) => (
                        <li key={s.name}>
                          <Link to={`/services#${cat.id}`}>
                            <Icon name="arrow" size={15} />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services#${cat.id}`} className="mega__all">
                      View all {cat.name} services
                      <Icon name="arrowUpRight" size={15} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mega__promo">
                <div>
                  <p className="mega__promo-kicker">Not sure where to start?</p>
                  <p className="mega__promo-title">
                    Let's map the right solution for your business.
                  </p>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Book a free consultation
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="drawer__scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="drawer__top">
                <Logo variant="dark" />
                <button
                  className="drawer__close"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon name="close" size={24} />
                </button>
              </div>

              <nav className="drawer__nav">
                <NavLink to="/" className="drawer__link">
                  Home
                </NavLink>

                <button
                  className="drawer__link drawer__accordion"
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                >
                  Services
                  <Icon
                    name="chevron"
                    size={18}
                    style={{
                      transform: mobileServices ? 'rotate(180deg)' : 'none',
                      transition: 'transform .25s',
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="drawer__sub">
                        {serviceCategories.map((cat) => (
                          <div key={cat.id} className="drawer__subgroup">
                            <Link
                              to={`/services#${cat.id}`}
                              className="drawer__subhead"
                            >
                              <Icon name={cat.icon} size={17} />
                              {cat.name}
                            </Link>
                            <ul>
                              {cat.services.slice(0, 4).map((s) => (
                                <li key={s.name}>
                                  <Link to={`/services#${cat.id}`}>{s.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <NavLink to="/about" className="drawer__link">
                  About
                </NavLink>
                <NavLink to="/contact" className="drawer__link">
                  Contact
                </NavLink>
              </nav>

              <Link to="/contact" className="btn btn-primary drawer__cta">
                Contact Us
                <Icon name="arrow" />
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
