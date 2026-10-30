'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

const FAQ = () => {
  const { t } = useT()
  const f = t.faq

  return (
    <section id="faq" className="section section-alt">
      <div className="wrap faq-wrap">
        <SectionHead eyebrow={f.eyebrow} center><Heading title={f.title} /></SectionHead>
        <div className="faq-list">
          {f.items.map((item, index) => (
            <motion.details key={item.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="card faq-item">
              <summary><span>{item.q}</span><FaPlus size={13} aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
