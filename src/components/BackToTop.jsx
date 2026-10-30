import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/site'

// Persistent WhatsApp shortcut for quick client enquiries, plus a back-to-top button once scrolled.
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fab-stack">
      <AnimatePresence>
        {isVisible && (
          <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fab" aria-label="Back to top">
            <FaArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={whatsappLink('Hi Mohamed, I would like to discuss a project.')} target="_blank" rel="noopener noreferrer" className="fab fab-wa" aria-label="Chat on WhatsApp">
        <FaWhatsapp size={22} /><span>Chat with me</span>
      </a>
    </div>
  )
}

export default BackToTop
