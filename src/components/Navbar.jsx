import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { NAV_ITEMS, NAV_PARENT, SECTION_IDS, goToSection, whatsappLink } from '../data/site'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    if (window.location.pathname !== '/') return
    const spy = () => {
      const position = window.scrollY + 160
      let current = 'home'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= position) current = id
      }
      setActiveSection(NAV_PARENT[current] || current)
    }
    window.addEventListener('scroll', spy, { passive: true })
    spy()
    return () => window.removeEventListener('scroll', spy)
  }, [])

  useEffect(() => {
    const onResize = () => window.innerWidth >= 900 && setIsOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = (id) => {
    setIsOpen(false)
    setTimeout(() => goToSection(id), 120)
  }

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={`nav${scrolled || isOpen ? ' scrolled' : ''}`}>
      <div className="nav-bar">
        <button type="button" onClick={() => go('home')} className="brand" aria-label="Mohamed Atya Hawash — Home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48"><path d="M8 35V13l9 13 8-13v22" /><path d="m27 35 8-22 8 22M30 28h10" /></svg>
          </span>
          <span className="brand-copy">
            <span className="brand-name">Mohamed Atya</span>
            <span className="brand-role">Laravel &amp; Vue.js Engineer</span>
          </span>
        </button>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} type="button" onClick={() => go(item.id)} className={`nav-link${activeSection === item.id ? ' active' : ''}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" onClick={toggleDarkMode} className="icon-btn" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <a href={whatsappLink('Hi Mohamed, I would like to discuss a project.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm nav-cta">
            <FaWhatsapp size={15} /> Start a project
          </a>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="icon-btn menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="mobile-menu">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} type="button" onClick={() => go(item.id)} className={`nav-link${activeSection === item.id ? ' active' : ''}`}>
                {item.label}
              </button>
            ))}
            <a href={whatsappLink('Hi Mohamed, I would like to discuss a project.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaWhatsapp size={16} /> Start a project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
