import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { safeStorage } from './utils/storage'
import { SECTION_IDS } from './data/site'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Services from './components/Services'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Process from './components/Process'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import AllProjects from './components/AllProjects'

function App() {
  const [darkMode, setDarkMode] = useState(() => safeStorage.getItem('portfolio-theme-v3') !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    safeStorage.setItem('portfolio-theme-v3', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Handle scrolling to a section after page load (hash in the URL or a pending request from another page)
  useEffect(() => {
    const scrollToSection = safeStorage.sGet('scrollToSection')
    const urlHash = window.location.hash

    if (scrollToSection || urlHash) {
      const targetSection = scrollToSection || urlHash
      if (scrollToSection) safeStorage.sRemove('scrollToSection')

      let scrollTimeout
      let attempts = 0

      const scrollToTarget = () => {
        const element = document.querySelector(targetSection)
        if (element) {
          window.scrollTo({ top: element.offsetTop - 64, behavior: 'smooth' })
        } else if (attempts++ < 20) {
          // Element not rendered yet, try again shortly
          scrollTimeout = setTimeout(scrollToTarget, 100)
        }
      }

      scrollTimeout = setTimeout(scrollToTarget, 800)
      return () => clearTimeout(scrollTimeout)
    }
  }, [])

  // Keep the URL hash in sync with the section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          const newUrl = `#${section}`
          if (window.location.hash !== newUrl) window.history.replaceState(null, null, newUrl)
          break
        }
      }
    }

    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Skip the initial sync when an incoming hash still needs to be scrolled to
      const currentHash = window.location.hash
      if (!currentHash || currentHash === '#home') handleScroll()
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => setDarkMode((current) => !current)

  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <div className="backdrop" aria-hidden="true"><div className="backdrop-grid" /></div>
              <ScrollProgress />
              <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <main>
                <Hero />
                <TechStrip />
                <Services />
                <Projects />
                <Stats />
                <Process />
                <About />
                <Skills />
                <Experience />
                <Testimonials />
                <FAQ />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
            </>
          } />
          <Route path="/projects" element={<AllProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
