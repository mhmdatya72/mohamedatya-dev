'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCogs, FaLayerGroup, FaCode, FaRocket, FaArrowRight, FaSearch, FaCheck } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

// Icons and layout flags per service, in the same order as the dictionary items.
const meta = [
  { icon: <FaLayerGroup />, featured: true },
  { icon: <FaCogs />, featured: true },
  { icon: <FaCode /> },
  { icon: <FaSearch /> },
  { icon: <FaRocket /> },
]

const Services = () => {
  const { t } = useT()
  const s = t.services

  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} lead={s.lead}><Heading title={s.title} /></SectionHead>

        <div className="services-grid">
          {s.items.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`card card-hover service${meta[index].featured ? ' service-featured' : ''}`}
            >
              <div className="service-icon">{meta[index].icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.details.map((d) => <li key={d}><FaCheck size={11} />{d}</li>)}</ul>
              <a href="#contact" className="service-link">{s.link} <FaArrowRight size={12} className="rtl-flip" /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
