import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHead from './SectionHead'

const STATS = [
  { value: 5, suffix: '+', label: 'Years of professional experience' },
  { value: 25, suffix: '+', label: 'Projects delivered to clients' },
  { value: 12, suffix: '+', label: 'Happy clients and teams' },
  { value: 1000, suffix: '+', label: 'Users served on the platforms I build' },
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

const Result = ({ stat, start }) => {
  const count = useCountUp(stat.value, start)
  return (
    <div className="result">
      <strong>{count.toLocaleString('en-US')}<em>{stat.suffix}</em></strong>
      <span>{stat.label}</span>
    </div>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="results" ref={ref} className="section">
      <div className="wrap">
        <SectionHead eyebrow="Track record" center lead="Measured outcomes from the systems and teams I've helped build.">
          Delivery you can <span className="grad-text">count on</span>
        </SectionHead>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="results">
          {STATS.map((stat) => <Result key={stat.label} stat={stat} start={inView} />)}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
