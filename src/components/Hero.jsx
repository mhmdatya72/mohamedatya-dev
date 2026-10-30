'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaLaravel, FaVuejs, FaWordpress } from 'react-icons/fa'
import { SiReact, SiNextdotjs } from 'react-icons/si'
import { SOCIAL_URLS, whatsappLink } from '../data/site'
import { useT } from '../i18n/LangProvider'

const stack = [
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Vue.js', icon: FaVuejs },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'WordPress', icon: FaWordpress },
]

const socials = [
  { label: 'GitHub', href: SOCIAL_URLS.github, icon: FaGithub },
  { label: 'LinkedIn', href: SOCIAL_URLS.linkedin, icon: FaLinkedin },
  { label: 'Facebook', href: SOCIAL_URLS.facebook, icon: FaFacebook },
  { label: 'WhatsApp', href: whatsappLink(), icon: FaWhatsapp },
]

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: 'easeOut' } })

const Hero = () => {
  const { t } = useT()
  const h = t.hero
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % h.roles.length), 2800)
    return () => clearInterval(timer)
  }, [h.roles.length])

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <motion.span {...fade(0)} className="hero-badge"><i className="pulse" /> {h.badge}</motion.span>
          <motion.h1 {...fade(0.08)}>
            {h.h1a}<span className="grad-text">{h.h1b}</span>
          </motion.h1>
          <motion.div {...fade(0.14)} className="hero-role" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={roleIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                {h.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p {...fade(0.2)} className="hero-sub">{h.sub}</motion.p>
          <motion.div {...fade(0.22)} className="hero-stack" aria-label={t.common.techAria} dir="ltr">
            {stack.map(({ name, icon: Icon }) => <span key={name} className="hero-tech"><Icon size={15} />{name}</span>)}
          </motion.div>
          <motion.div {...fade(0.26)} className="hero-actions">
            <a href="#contact" className="btn btn-primary">{h.primary} <FaArrowRight size={13} className="rtl-flip" /></a>
            <a href="#work" className="btn">{h.secondary}</a>
          </motion.div>
          <motion.div {...fade(0.32)} className="hero-links">
            <a href="/Mohamed_Atya_Hawash.pdf" download="Mohamed_Atya_Hawash_CV.pdf" className="inline-flex items-center gap-2"><FaDownload size={12} /> {h.cv}</a>
            <span className="hero-socials" dir="ltr">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"><Icon size={15} /></a>
              ))}
            </span>
          </motion.div>
          <motion.div {...fade(0.38)} className="hero-proof">
            {h.proof.map((item) => (
              <div key={item.label}><strong className="ltr-num">{item.value}</strong><span>{item.label}</span></div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-visual">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait"><img src="/mohamed-atya-workspace.webp" alt={h.imgAlt} width="900" height="1125" fetchPriority="high" decoding="async" /></div>
          <div className="float float-stat">
            <div><b className="ltr-num">−30%</b><small>{h.floatStat}</small></div>
          </div>
          <div className="float float-browser" aria-hidden="true" dir="ltr">
            <div className="bar"><i /><i /><i /><span>cordiana-sys.com</span></div>
            <img src="/project-cordiana.webp" alt="" width="1200" height="750" decoding="async" />
          </div>
          <div className="float float-live"><i className="pulse" /> {h.live}</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
