'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaCheck, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHead from './SectionHead'

const experiences = [
  {
    title: 'Software Engineering Team Lead / Senior Full Stack Developer',
    company: 'Cord Digital',
    website: 'https://corddigital.com/',
    period: 'Jan 2022 – Present',
    type: 'Full-time',
    description: 'Head of the Software Engineering Department, driving technical architecture decisions, overseeing code reviews and mentoring the team across all active projects.',
    achievements: [
      'Developed and maintained 20+ web applications using Laravel, PHP, MySQL, Vue.js and Bootstrap',
      'Engineered custom ERP systems, dashboards, RBAC, inventory, sales and financial reporting workflows',
      'Managed the full SDLC — from requirements analysis to deployment',
      'Optimized database indexing and Eloquent queries for scalable solutions',
    ],
  },
  {
    title: 'Full Stack Laravel Developer',
    company: 'SEO Wolves',
    website: 'https://seo-wolves.com/',
    period: 'Jul 2026 – Present',
    type: 'Part-time',
    description: 'Developing high-performance, SEO-friendly web applications, custom CMS solutions and digital marketing tools.',
    achievements: [
      'Improved core web vitals and database performance (up to −30% page load times)',
      'Built scalable RESTful APIs for client platforms',
      'Integrated automated analytics tools for reporting and performance tracking',
    ],
  },
  {
    title: 'Senior Full Stack Laravel Developer',
    company: 'The Mok Company',
    website: 'https://themok.company/',
    period: 'Jan 2024 – Jun 2026',
    type: 'Part-time',
    description: 'Architected enterprise-grade web applications, SaaS platforms and internal dashboards, including the Al-Nasser Group Portal and Taggz AI App.',
    achievements: [
      'Designed modular RESTful APIs and Eloquent schemas supporting RBAC and real-time analytics',
      'Optimized backend architecture, database queries and server-side caching',
      'Ensured low latency and high availability for high-traffic applications',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Kemeder / Kemework',
    website: 'https://kemedar.com/',
    period: 'Jun 2021 – Dec 2021',
    type: 'Contract',
    description: 'Led backend development of the Kemework freelance marketplace, delivering 20+ core features with Laravel and Bootstrap.',
    achievements: [
      'Implemented Redis/Laravel caching, cutting API response times by 30% for 1,000+ concurrent users',
      'Integrated real-time notifications and payment gateways (+35% success rate, +22% engagement)',
      'Revamped backend architecture for performance and reliability',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Inom Tecks',
    period: 'Jan 2020 – May 2021',
    type: 'Full-time',
    description: 'Built core CRM modules and improved system reliability for multiple client projects.',
    achievements: [
      'Built core CRM modules for 5+ client projects, reducing sales cycles by 15%',
      'Achieved a 95% client satisfaction rate',
      'Improved reliability via CI/CD, PHPUnit testing and API versioning (−60% bugs)',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2019 – Present',
    type: 'Freelance',
    description: 'Delivered SEO-optimized web applications and e-commerce portals for clients, managing end-to-end delivery.',
    achievements: [
      'Built 5+ SEO-optimized web applications and e-commerce portals (+40% user retention)',
      'Improved overall speed performance by 30%',
      'Integrated analytics and payment solutions (+20% conversions and delivery speed)',
    ],
  },
]

const VISIBLE = 3

const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const jobs = showAll ? experiences : experiences.slice(0, VISIBLE)

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Experience" lead="Six roles across agencies, product teams and freelance — always focused on shipping software that holds up in production.">
          Trusted by teams <span className="grad-text">across industries</span>
        </SectionHead>

        <div className="timeline">
          {jobs.map((job, index) => (
            <motion.article key={`${job.company}-${job.title}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.06 }} className={`card job${job.period.includes('Present') ? ' job-current' : ''}`}>
              <div className="job-top">
                <div>
                  <h3>{job.title}</h3>
                  {job.website ? (
                    <a className="job-company" href={job.website} target="_blank" rel="noopener noreferrer">{job.company}<FaExternalLinkAlt size={10} aria-hidden="true" /></a>
                  ) : (
                    <span className="job-company">{job.company}</span>
                  )}
                </div>
                <div className="job-meta"><FaCalendarAlt size={12} />{job.period} · {job.type}</div>
              </div>
              <p className="job-desc">{job.description}</p>
              <ul>{job.achievements.map((a) => <li key={a}><FaCheck size={11} />{a}</li>)}</ul>
            </motion.article>
          ))}
        </div>

        <div className="work-cta">
          <button type="button" className="btn" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
            {showAll ? 'Show less' : `Show earlier experience (${experiences.length - VISIBLE} more)`}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience
