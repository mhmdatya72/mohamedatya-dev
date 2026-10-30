'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaShieldAlt, FaCode, FaUsers, FaGraduationCap } from 'react-icons/fa'
import SectionHead from './SectionHead'

const reasons = [
  { icon: <FaRocket />, title: 'Performance you can measure', description: 'Reduced API response times by 30% while serving 1,000+ concurrent users.' },
  { icon: <FaUsers />, title: 'Built to scale', description: 'Architecture and database design that keep working as your users and data grow.' },
  { icon: <FaShieldAlt />, title: 'Security by default', description: 'Role-based access, secure APIs and safe deployments in every project.' },
  { icon: <FaCode />, title: 'Clean, maintainable code', description: 'Documented, tested code your team can keep extending long after launch.' },
]

const focus = ['Architecture', 'Backend', 'SEO', 'Team leadership', 'SaaS']

const About = () => (
  <section id="about" className="section">
    <div className="wrap">
      <SectionHead eyebrow="Why work with me">
        An engineer who thinks like <span className="grad-text">a business partner</span>
      </SectionHead>

      <div className="about-grid">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
          <p className="about-lead">I turn complex business needs into software that scales.</p>
          <div className="about-copy">
            <p>I'm a Software Engineering Team Lead and Senior Full Stack Laravel Developer with <b>5+ years</b> of experience architecting and scaling web applications, cloud ERPs and SaaS platforms using PHP 8+, Laravel, MySQL, Vue.js and RESTful APIs. I also handle SEO so your website is easy to find.</p>
            <p>I lead engineering teams and manage the full software development lifecycle in Agile environments — with a proven record of optimizing backend performance and delivering complex B2B and enterprise solutions on time.</p>
          </div>
          <div className="focus-row">{focus.map((item) => <span key={item} className="chip">{item}</span>)}</div>
          <div className="card edu">
            <span><FaGraduationCap size={20} /></span>
            <div>
              <small>Education</small>
              <b>B.Sc. Computers &amp; Information (Information Systems)</b>
              <p>Damanhour University · Class of 2024</p>
            </div>
          </div>
        </motion.div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card card-hover why">
              <span className="why-icon">{item.icon}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
