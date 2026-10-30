'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

// Numbers per stat, in the same order as the dictionary labels.
const VALUES = [
  { value: 5, suffix: '+' },
  { value: 25, suffix: '+' },
  { value: 12, suffix: '+' },
  { value: 1000, suffix: '+' },
]

const useCountUp = (target, start) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let frame
    const duration = 1600
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, start])
  return value
}

const Result = ({ stat, label, start }) => {
  const count = useCountUp(stat.value, start)
  return (
    <div className="result">
      <strong className="ltr-num">{count.toLocaleString('en-US')}<em>{stat.suffix}</em></strong>
      <span>{label}</span>
    </div>
  )
}

const Stats = () => {
  const { t } = useT()
  const r = t.results
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="results" ref={ref} className="section">
      <div className="wrap">
        <SectionHead eyebrow={r.eyebrow} center lead={r.lead}><Heading title={r.title} /></SectionHead>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="results">
          {VALUES.map((stat, index) => <Result key={r.items[index]} stat={stat} label={r.items[index]} start={inView} />)}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
