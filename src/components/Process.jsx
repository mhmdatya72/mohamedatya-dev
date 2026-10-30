'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHead from './SectionHead'

const steps = [
  { title: 'Discover & scope', text: 'We talk through your goals, users and constraints. I turn them into a clear scope, priorities and a realistic plan.', out: 'Scope & plan' },
  { title: 'Architect & design', text: 'I design the data model, API and system architecture so the product can scale and stay secure as it grows.', out: 'Architecture' },
  { title: 'Build in iterations', text: 'Agile delivery with regular demos, code reviews and testing, so you see working software early and often.', out: 'Working releases' },
  { title: 'Launch & support', text: 'Deployment, SSL, performance tuning and hand-over — then ongoing support as your product evolves.', out: 'Stable launch' },
]

const Process = () => (
  <section id="process" className="section section-alt">
    <div className="wrap">
      <SectionHead eyebrow="How we work" lead="A simple, transparent workflow that keeps you informed from the first call to launch day.">
        From idea to <span className="grad-text">production</span> in four steps
      </SectionHead>
      <div className="process-grid">
        {steps.map((step, index) => (
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

export default Process
