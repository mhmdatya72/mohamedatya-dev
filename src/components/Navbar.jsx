'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'
import { useT } from '../i18n/LangProvider'
import { NAV_IDS, NAV_PARENT, SECTION_IDS, goToSection, whatsappLink } from '../data/site'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const { t, lang, homePath, otherPaths } = useT()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const projectMatch = pathname.match(/\/projects\/([^/]+)\/?$/)
  const onProjectsPage = /\/projects(\/|$)/.test(pathname)
  const langHref = projectMatch ? `${otherPaths.projects}/${projectMatch[1]}` : onProjectsPage ? otherPaths.projects : otherPaths.home
  const otherLang = lang === 'ar' ? 'en' : 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    if (onProjectsPage) return
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
  }, [onProjectsPage])

  useEffect(() => {
    const onResize = () => window.innerWidth >= 900 && setIsOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = (id) => {
    setIsOpen(false)
    setTimeout(() => goToSection(id, homePath), 120)
  }

  const waHref = whatsappLink(t.common.whatsappMsg)

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={`nav${scrolled || isOpen ? ' scrolled' : ''}`}>
      <div className="nav-bar">
        <button type="button" onClick={() => go('home')} className="brand" aria-label={t.common.homeAria}>
          <span className="brand-logo">
            <span className="brand-first">{t.nav.brandName.split(' ')[0]}</span>
            <span className="brand-last grad-text">{t.nav.brandName.split(' ').slice(1).join(' ')}</span>
            <span className="brand-dot" aria-hidden="true" />
          </span>
        </button>

        <div className="nav-links">
          {NAV_IDS.map((id) => (
            <button key={id} type="button" onClick={() => go(id)} className={`nav-link${activeSection === id ? ' active' : ''}`}>
              {t.nav.items[id]}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a href={langHref} className="icon-btn lang-btn" hrefLang={otherLang} lang={otherLang} aria-label={t.common.langAria}>
            {t.common.langLabel}
          </a>
          <button type="button" onClick={toggleDarkMode} className="icon-btn" aria-label={darkMode ? t.common.toLight : t.common.toDark}>
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm nav-cta">
            <FaWhatsapp size={15} /> {t.common.startProject}
          </a>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="icon-btn menu-toggle" aria-label={isOpen ? t.common.closeMenu : t.common.openMenu} aria-expanded={isOpen}>
            {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="mobile-menu">
            {NAV_IDS.map((id) => (
              <button key={id} type="button" onClick={() => go(id)} className={`nav-link${activeSection === id ? ' active' : ''}`}>
                {t.nav.items[id]}
              </button>
            ))}
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaWhatsapp size={16} /> {t.common.startProject}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
