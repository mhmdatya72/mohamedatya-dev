'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaShieldAlt, FaCode, FaUsers, FaGraduationCap } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading, renderBold } from '../i18n/LangProvider'

const icons = [<FaRocket key="r" />, <FaUsers key="u" />, <FaShieldAlt key="s" />, <FaCode key="c" />]

const About = () => {
  const { t } = useT()
  const a = t.about

  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead eyebrow={a.eyebrow}><Heading title={a.title} /></SectionHead>

        <div className="about-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <p className="about-lead">{a.lead}</p>
            <div className="about-copy">
              {a.copy.map((paragraph) => <p key={paragraph}>{renderBold(paragraph)}</p>)}
            </div>
            <div className="focus-row">{a.focus.map((item) => <span key={item} className="chip">{item}</span>)}</div>
            <div className="card edu">
              <span><FaGraduationCap size={20} /></span>
              <div>
                <small>{a.edu.label}</small>
                <b>{a.edu.degree}</b>
                <p>{a.edu.school}</p>
              </div>
            </div>
          </motion.div>

          <div className="why-grid">
            {a.reasons.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card card-hover why">
                <span className="why-icon">{icons[index]}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
