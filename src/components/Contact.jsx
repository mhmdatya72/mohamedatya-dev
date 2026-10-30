'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { PERSON, whatsappLink } from '../data/site'
import { useT, Heading } from '../i18n/LangProvider'

const Contact = () => {
  const { t } = useT()
  const c = t.contact
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [kindIndex, setKindIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      c.wa.heading,
      `${c.wa.name}: ${formData.name}`,
      `${c.wa.email}: ${formData.email}`,
      `${c.wa.kind}: ${c.kinds[kindIndex]}`,
      '',
      `${c.wa.message}:`,
      formData.message,
    ].join('\n')
    const win = window.open(whatsappLink(body), '_blank')
    if (win) win.opener = null
    setIsSubmitted(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setIsSubmitted(false), 7000)
  }

  const channels = [
    { icon: <FaEnvelope size={16} />, label: c.channels.email, value: PERSON.email, href: `mailto:${PERSON.email}`, ltr: true },
    { icon: <FaPhone size={16} />, label: c.channels.phone, value: PERSON.phone, href: PERSON.phoneHref, ltr: true },
    { icon: <FaMapMarkerAlt size={16} />, label: c.channels.location, value: c.locationValue, href: PERSON.locationHref, external: true },
  ]

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }} className="cta-panel">
          <div className="cta-copy">
            <span className="eyebrow"><i />{c.eyebrow}</span>
            <h2><Heading title={c.title} /></h2>
            <p>{c.lead}</p>
            <div className="hero-actions">
              <a href={whatsappLink(t.common.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><FaWhatsapp size={18} /> {c.whatsapp}</a>
            </div>
            <div className="cta-list">
              {channels.map((ch) => (
                <a key={ch.label} href={ch.href} className="contact-row" {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span>{ch.icon}</span>
                  <div><small>{ch.label}</small><b {...(ch.ltr ? { dir: 'ltr', style: { textAlign: 'start' } } : {})}>{ch.value}</b></div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <h3>{c.formTitle}</h3>
            {isSubmitted && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="sent" role="status">
                <FaCheckCircle size={18} /> {c.sent}
              </motion.div>
            )}
            <div>
              <span className="field-label" id="kind-label">{c.kindLabel}</span>
              <div className="kinds" role="group" aria-labelledby="kind-label">
                {c.kinds.map((k, index) => <button key={k} type="button" className="kind" aria-pressed={kindIndex === index} onClick={() => setKindIndex(index)}>{k}</button>)}
              </div>
            </div>
            <div className="field">
              <label htmlFor="name">{c.name}</label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="field-input" placeholder={c.namePh} autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">{c.email}</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="field-input" placeholder={c.emailPh} autoComplete="email" dir="ltr" />
            </div>
            <div className="field">
              <label htmlFor="message">{c.message}</label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="field-input" placeholder={c.messagePh} />
            </div>
            <button type="submit" className="btn btn-primary"><FaWhatsapp size={18} /> {c.submit}</button>
            <p className="form-note">{c.note}</p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
