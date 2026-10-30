'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  if (!testimonials.length) return null
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Client feedback" center>
          What clients <span className="grad-text">say</span>
        </SectionHead>
        <div className="quotes">
          {testimonials.map((t, index) => (
            <motion.figure key={t.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card quote">
              <FaQuoteLeft size={20} aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption><b>{t.name}</b><span>{t.role}{t.project ? ` · ${t.project}` : ''}</span></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
