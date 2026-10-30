import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { NAV_ITEMS, PERSON, SOCIAL_URLS, goToSection, whatsappLink } from '../data/site'

const socials = [
  { icon: <FaLinkedin size={17} />, url: SOCIAL_URLS.linkedin, label: 'LinkedIn' },
  { icon: <FaGithub size={17} />, url: SOCIAL_URLS.github, label: 'GitHub' },
  { icon: <FaFacebook size={17} />, url: SOCIAL_URLS.facebook, label: 'Facebook' },
  { icon: <FaWhatsapp size={17} />, url: whatsappLink(), label: 'WhatsApp' },
]

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="brand-name" style={{ fontSize: '1.25rem' }}>{PERSON.name}</span>
          <p>Full Stack Laravel &amp; Vue.js engineer building ERP systems, SaaS platforms and SEO-ready websites for businesses that need software they can rely on.</p>
          <div className="footer-socials">
            {socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>)}
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => <li key={item.id}><button type="button" onClick={() => goToSection(item.id)}>{item.label}</button></li>)}
          </ul>
        </div>

        <div>
          <h4>Get in touch</h4>
          <ul className="footer-links">
            <li><a href={`mailto:${PERSON.email}`}>{PERSON.email}</a></li>
            <li><a href={PERSON.phoneHref}>{PERSON.phone}</a></li>
            <li><span style={{ color: 'var(--muted)', fontSize: '.92rem' }}>{PERSON.location}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {PERSON.name}. All rights reserved.</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <FaArrowUp size={11} /></button>
      </div>
    </div>
  </footer>
)

export default Footer
