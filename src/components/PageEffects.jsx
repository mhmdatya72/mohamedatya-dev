'use client'

import { useEffect } from 'react'
import { safeStorage } from '../utils/storage'
import { SECTION_IDS } from '../data/site'

// Home-page behaviours: scroll to a requested section after load, and keep the URL hash in sync with the section in view.
const PageEffects = () => {
  useEffect(() => {
    const requested = safeStorage.sGet('scrollToSection')
    const target = requested || window.location.hash
    if (!target) return
    if (requested) safeStorage.sRemove('scrollToSection')

    let timeout
    let attempts = 0
    const scrollToTarget = () => {
      const element = document.querySelector(target)
      if (element) {
        window.scrollTo({ top: element.offsetTop - 64, behavior: 'smooth' })
      } else if (attempts++ < 20) {
        timeout = setTimeout(scrollToTarget, 100)
      }
    }
    timeout = setTimeout(scrollToTarget, 800)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 100
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id)
        if (element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight) {
          const hash = `#${id}`
          if (window.location.hash !== hash) window.history.replaceState(null, '', hash)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    const hash = window.location.hash
    if (!hash || hash === '#home') handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}

export default PageEffects
