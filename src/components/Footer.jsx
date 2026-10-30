'use client'

import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { NAV_IDS, PERSON, SOCIAL_URLS, goToSection, whatsappLink } from '../data/site'
import { useT } from '../i18n/LangProvider'

const socials = [
  { icon: <FaLinkedin size={17} />, url: SOCIAL_URLS.linkedin, label: 'LinkedIn' },
  { icon: <FaGithub size={17} />, url: SOCIAL_URLS.github, label: 'GitHub' },
  { icon: <FaFacebook size={17} />, url: SOCIAL_URLS.facebook, label: 'Facebook' },
  { icon: <FaWhatsapp size={17} />, url: whatsappLink(), label: 'WhatsApp' },
]

const Footer = () => {
  const { t, homePath } = useT()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-name" style={{ fontSize: '1.25rem' }}>{t.meta.siteName}</span>
            <p>{f.description}</p>
            <div className="footer-socials" dir="ltr">
              {socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>)}
            </div>
          </div>

          <div>
            <h4>{f.explore}</h4>
            <ul className="footer-links">
              {NAV_IDS.map((id) => <li key={id}><button type="button" onClick={() => goToSection(id, homePath)}>{t.nav.items[id]}</button></li>)}
            </ul>
          </div>

          <div>
            <h4>{f.touch}</h4>
            <ul className="footer-links">
              <li><a href={`mailto:${PERSON.email}`} dir="ltr">{PERSON.email}</a></li>
              <li><a href={PERSON.phoneHref} dir="ltr">{PERSON.phone}</a></li>
              <li><span style={{ color: 'var(--muted)', fontSize: '.92rem' }}>{t.contact.locationValue}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {t.meta.siteName}. {f.rights}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{f.backToTop} <FaArrowUp size={11} /></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
