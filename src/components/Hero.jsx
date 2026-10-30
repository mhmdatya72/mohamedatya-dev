import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { SOCIAL_URLS, whatsappLink } from '../data/site'

const roles = ['Full Stack Developer', 'Laravel & Vue.js Architect', 'SEO-Friendly Web Builds', 'Software Engineering Team Lead']

const proof = [
  { value: '5+', label: 'Years building' },
  { value: '25+', label: 'Projects delivered' },
  { value: '1,000+', label: 'Concurrent users served' },
  { value: '−30%', label: 'API response time' },
]

const socials = [
  { label: 'GitHub', href: SOCIAL_URLS.github, icon: FaGithub },
  { label: 'LinkedIn', href: SOCIAL_URLS.linkedin, icon: FaLinkedin },
  { label: 'Facebook', href: SOCIAL_URLS.facebook, icon: FaFacebook },
  { label: 'WhatsApp', href: whatsappLink(), icon: FaWhatsapp },
]

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: 'easeOut' } })

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <motion.span {...fade(0)} className="hero-badge"><i className="pulse" /> Available for new projects</motion.span>
          <motion.h1 {...fade(0.08)}>
            I build the software <span className="grad-text">your business runs on.</span>
          </motion.h1>
          <motion.div {...fade(0.14)} className="hero-role" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={roleIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p {...fade(0.2)} className="hero-sub">
            Senior Laravel &amp; Vue.js engineer and team lead. I design and ship ERP systems, SaaS platforms and SEO-ready websites — from first architecture sketch to a stable, secure launch.
          </motion.p>
          <motion.div {...fade(0.26)} className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a project <FaArrowRight size={13} /></a>
            <a href="#work" className="btn">See live work</a>
          </motion.div>
          <motion.div {...fade(0.32)} className="hero-links">
            <a href="/Mohamed_Atya_Hawash.pdf" download="Mohamed_Atya_Hawash_CV.pdf" className="inline-flex items-center gap-2"><FaDownload size={12} /> Download CV</a>
            <span className="hero-socials">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"><Icon size={15} /></a>
              ))}
            </span>
          </motion.div>
          <motion.div {...fade(0.38)} className="hero-proof">
            {proof.map((item) => (
              <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-visual">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait"><img src="/mohamed-atya-workspace.png" alt="Mohamed Atya Hawash at his desk" /></div>
          <div className="float float-stat">
            <div><b>−30%</b><small>faster API responses</small></div>
          </div>
          <div className="float float-browser" aria-hidden="true">
            <div className="bar"><i /><i /><i /><span>cordiana-sys.com</span></div>
            <img src="/project-cordiana.jpg" alt="" />
          </div>
          <div className="float float-live"><i className="pulse" /> 7 platforms live in production</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
