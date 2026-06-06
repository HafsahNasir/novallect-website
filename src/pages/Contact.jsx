import { useState, useRef, useLayoutEffect } from 'react'
import { PhoneInput, defaultCountries, parseCountry } from 'react-international-phone'
import 'react-international-phone/style.css'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { serviceCategories } from '../data/services'
import './Contact.css'

const channels = [
  {
    icon: 'mail',
    label: 'Email us',
    value: 'info@novallect.com',
    href: 'mailto:info@novallect.com',
    note: 'We reply within one business day',
  },
  {
    icon: 'phone',
    label: 'Call us',
    value: '+971 54 775 7765',
    href: 'tel:+971547757765',
    note: 'Sun–Thu, 9am–6pm GST',
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/971547757765',
    note: 'Fastest way to reach us',
  },
  {
    icon: 'pin',
    label: 'Location',
    value: 'Gulf & Middle East',
    href: null,
    note: 'Serving the region',
  },
]

const initial = { name: '', email: '', phone: '', company: '', service: '', message: '' }

// Formspree endpoint — enquiries are delivered to the configured inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdedwnp'

// Parsed UAE country, used as the initial state before any onChange fires.
const DEFAULT_COUNTRY = parseCountry(defaultCountries.find((c) => c[1] === 'ae'))

// A country's format is either a single template string (dots = digit slots,
// spaces = separators) or an object of regex→template for number-type variants
// (e.g. UAE mobile vs. landline). Resolve the template the library is currently
// applying so the ghost mask shows the right number of blanks.
const FALLBACK_MASK = '............'
const activeMask = (country, nationalDigits) => {
  const fmt = country.format
  if (typeof fmt === 'string') return fmt
  if (fmt && typeof fmt === 'object') {
    for (const key of Object.keys(fmt)) {
      if (key === 'default') continue
      try {
        if (new RegExp(key.replace(/^\/|\/$/g, '')).test(nationalDigits)) return fmt[key]
      } catch {
        /* ignore an unparseable pattern and fall through to default */
      }
    }
    return fmt.default || FALLBACK_MASK
  }
  return FALLBACK_MASK
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  // Currently selected country, so validation knows the dial-code length and the
  // ghost mask knows which format template to show.
  const [country, setCountry] = useState(DEFAULT_COUNTRY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Geometry + content for the "fill in the blanks" ghost mask overlay.
  const phoneWrapRef = useRef(null)
  const [ghost, setGhost] = useState(null)

  // After every render, measure the real input and compute the trailing blanks
  // ("__ ___ ____") that should appear after whatever has been typed so far.
  useLayoutEffect(() => {
    const wrap = phoneWrapRef.current
    const input = wrap?.querySelector('.react-international-phone-input')
    if (!wrap || !input) return

    const compute = () => {
      const wrapRect = wrap.getBoundingClientRect()
      const inputRect = input.getBoundingClientRect()
      const cs = getComputedStyle(input)
      const value = input.value
      const national = value.replace(/\D/g, '').slice(country.dialCode.length)
      const template = `+${country.dialCode} ${activeMask(country, national).replace(/\./g, '_')}`
      setGhost({
        left: inputRect.left - wrapRect.left,
        top: inputRect.top - wrapRect.top,
        height: inputRect.height,
        paddingLeft: cs.paddingLeft,
        fontSize: cs.fontSize,
        fontFamily: cs.fontFamily,
        letterSpacing: cs.letterSpacing,
        value,
        tail: template.length > value.length ? template.slice(value.length) : '',
      })
    }

    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [form.phone, country])

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
    setSubmitError('')
  }

  // PhoneInput hands back the full international value (e.g. "+971 50 123 4567")
  // plus meta about the picked country.
  const onPhoneChange = (phone, meta) => {
    setForm((f) => ({ ...f, phone }))
    setCountry(meta.country)
    setErrors((err) => ({ ...err, phone: undefined }))
    setSubmitError('')
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      next.email = 'Please enter a valid email'
    // National digits = everything typed minus the country dial code.
    const nationalDigits =
      form.phone.replace(/\D/g, '').length - country.dialCode.length
    if (nationalDigits < 1) next.phone = 'Please enter your phone number'
    else if (nationalDigits < 6)
      next.phone = 'Please enter a complete phone number'
    if (!form.message.trim()) next.message = 'Tell us a little about your project'
    return next
  }

  // Submits the enquiry to Formspree and shows the success state on a 2xx reply.
  const onSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm(initial)
        setCountry(DEFAULT_COUNTRY)
      } else {
        const data = await res.json().catch(() => ({}))
        setSubmitError(
          data?.errors?.[0]?.message ||
            'Something went wrong sending your message. Please try again or email us directly.'
        )
      }
    } catch {
      setSubmitError(
        'Network error — please check your connection and try again, or reach us by email.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about"
        highlight="your next move."
        lead="Tell us where you want your business to go. We'll help you get there with the right ERP, IT or analytics solution — starting with a free, no-pressure consultation."
      />

      <section className="contact section">
        <div className="container contact__grid">
          {/* Form */}
          <Reveal className="contact__formwrap">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">
                  <Icon name="check" size={34} />
                </span>
                <h2>Thank you — message received!</h2>
                <p>
                  Thanks for reaching out to Novallect. A member of our team will
                  get back to you within one business day.
                </p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={onSubmit} noValidate>
                <h2 className="contact__form-title">Send us an enquiry</h2>
                <p className="contact__form-sub">
                  Fill in the form and we'll be in touch shortly.
                </p>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Full name *</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your name"
                      className={errors.name ? 'is-error' : ''}
                    />
                    {errors.name && <span className="field-err">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@company.com"
                      className={errors.email ? 'is-error' : ''}
                    />
                    {errors.email && <span className="field-err">{errors.email}</span>}
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Phone number *</label>
                    <div className="phone-intl-wrap" ref={phoneWrapRef}>
                      <PhoneInput
                        defaultCountry="ae"
                        value={form.phone}
                        onChange={onPhoneChange}
                        className={`phone-intl ${errors.phone ? 'is-error' : ''}`}
                        inputProps={{ id: 'phone', name: 'phone', autoComplete: 'tel' }}
                      />
                      {ghost?.tail && (
                        <div
                          className="phone-ghost"
                          aria-hidden="true"
                          style={{
                            left: ghost.left,
                            top: ghost.top,
                            height: ghost.height,
                            paddingLeft: ghost.paddingLeft,
                            fontSize: ghost.fontSize,
                            fontFamily: ghost.fontFamily,
                            letterSpacing: ghost.letterSpacing,
                          }}
                        >
                          <span className="phone-ghost__filled">{ghost.value}</span>
                          <span className="phone-ghost__blank">{ghost.tail}</span>
                        </div>
                      )}
                    </div>
                    {errors.phone && <span className="field-err">{errors.phone}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={update}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="service">Service of interest</label>
                  <select
                    id="service"
                    name="service"
                    className={form.service ? '' : 'is-placeholder'}
                    value={form.service}
                    onChange={update}
                  >
                    <option value="">Select a service…</option>
                    {serviceCategories.map((cat) => (
                      <optgroup key={cat.id} label={cat.name}>
                        {cat.services.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us about your project, goals or challenge…"
                    className={errors.message ? 'is-error' : ''}
                  />
                  {errors.message && <span className="field-err">{errors.message}</span>}
                </div>

                {submitError && (
                  <p className="contact__submit-error">{submitError}</p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={submitting}
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                  {!submitting && <Icon name="arrow" />}
                </button>
                <p className="contact__privacy">
                  We respect your privacy. Your details are only used to respond to
                  your enquiry.
                </p>
              </form>
            )}
          </Reveal>

          {/* Channels */}
          <Reveal delay={0.12} className="contact__aside">
            <h3 className="contact__aside-title">Prefer to reach out directly?</h3>
            <p className="contact__aside-sub">
              Choose whatever's easiest — we're happy to help however you'd like to
              connect.
            </p>

            <div className="contact__channels">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span className="contact__ch-icon">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <span className="contact__ch-text">
                      <span className="contact__ch-label">{c.label}</span>
                      <span className="contact__ch-value">{c.value}</span>
                      <span className="contact__ch-note">{c.note}</span>
                    </span>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact__channel"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="contact__channel">
                    {inner}
                  </div>
                )
              })}
            </div>

            <div className="contact__cta-card">
              <Icon name="clock" size={22} />
              <div>
                <strong>Free 30-minute consultation</strong>
                <span>No cost, no obligation — just a clear next step.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
