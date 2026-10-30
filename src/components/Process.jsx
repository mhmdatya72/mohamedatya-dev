'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

const Process = () => {
  const { t } = useT()
  const p = t.process

  return (
    <section id="process" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} lead={p.lead}><Heading title={p.title} /></SectionHead>
        <div className="process-grid">
          {p.steps.map((step, index) => (
            <motion.article key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.09 }} className="card step">
              <span className="step-num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <small>→ {step.out}</small>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
