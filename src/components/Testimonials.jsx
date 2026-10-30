'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  const { t, lang } = useT()
  if (!testimonials.length) return null
  const s = t.testimonials

  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} center><Heading title={s.title} /></SectionHead>
        <div className="quotes">
          {testimonials.map((item, index) => {
            const text = item[lang] || item
            return (
              <motion.figure key={item.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card quote">
                <FaQuoteLeft size={20} aria-hidden="true" />
                <blockquote>{text.quote}</blockquote>
                <figcaption><b>{text.name}</b><span>{text.role}{text.project ? ` · ${text.project}` : ''}</span></figcaption>
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
