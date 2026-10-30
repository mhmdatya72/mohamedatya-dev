import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { PERSON, whatsappLink } from '../data/site'

const KINDS = ['ERP / business system', 'SaaS / web app', 'Website + SEO', 'API / backend', 'Something else']

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [kind, setKind] = useState(KINDS[0])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      'New project enquiry',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project type: ${kind}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')
    const win = window.open(whatsappLink(body), '_blank')
    if (win) win.opener = null
    setIsSubmitted(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setIsSubmitted(false), 7000)
  }

  const channels = [
    { icon: <FaEnvelope size={16} />, label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
    { icon: <FaPhone size={16} />, label: 'Phone', value: PERSON.phone, href: PERSON.phoneHref },
    { icon: <FaMapMarkerAlt size={16} />, label: 'Based in', value: PERSON.location, href: PERSON.locationHref },
  ]

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }} className="cta-panel">
          <div className="cta-copy">
            <span className="eyebrow"><i />Let's talk</span>
            <h2>Have a project in mind? <span className="grad-text">Let's build it.</span></h2>
            <p>Tell me what you're trying to achieve — an ERP, a SaaS product, a faster website or a stronger backend. I'll reply with honest advice and a clear next step.</p>
            <div className="hero-actions">
              <a href={whatsappLink('Hi Mohamed, I would like to discuss a project.')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><FaWhatsapp size={18} /> Chat on WhatsApp</a>
            </div>
            <div className="cta-list">
              {channels.map((c) => (
                <a key={c.label} href={c.href} className="contact-row" {...(c.label === 'Based in' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span>{c.icon}</span>
                  <div><small>{c.label}</small><b>{c.value}</b></div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <h3>Send a project brief</h3>
            {isSubmitted && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="sent" role="status">
                <FaCheckCircle size={18} /> WhatsApp opened with your message. Press Send there to deliver it.
              </motion.div>
            )}
            <div>
              <span className="field-label" id="kind-label">What do you need?</span>
              <div className="kinds" role="group" aria-labelledby="kind-label">
                {KINDS.map((k) => <button key={k} type="button" className="kind" aria-pressed={kind === k} onClick={() => setKind(k)}>{k}</button>)}
              </div>
            </div>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="field-input" placeholder="Your name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="field-input" placeholder="you@company.com" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Project details</label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="field-input" placeholder="What are you building, and what does success look like?" />
            </div>
            <button type="submit" className="btn btn-primary"><FaWhatsapp size={18} /> Continue in WhatsApp</button>
            <p className="form-note">Your message opens in WhatsApp — nothing is stored on this site.</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
