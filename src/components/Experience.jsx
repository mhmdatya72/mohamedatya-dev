'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaCheck, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

// Company websites per job, in the same order as the dictionary jobs (undefined = no link).
const WEBSITES = ['https://corddigital.com/', 'https://seo-wolves.com/', 'https://themok.company/', 'https://kemedar.com/', undefined, undefined]
// Jobs that are still running, regardless of language.
const CURRENT = [true, true, false, false, false, true]

const VISIBLE = 3

const Experience = () => {
  const { t } = useT()
  const e = t.experience
  const [showAll, setShowAll] = useState(false)
  const jobs = showAll ? e.jobs : e.jobs.slice(0, VISIBLE)

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead eyebrow={e.eyebrow} lead={e.lead}><Heading title={e.title} /></SectionHead>

        <div className="timeline">
          {jobs.map((job, index) => (
            <motion.article key={`${job.company}-${job.title}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.06 }} className={`card job${CURRENT[index] ? ' job-current' : ''}`}>
              <div className="job-top">
                <div>
                  <h3>{job.title}</h3>
                  {WEBSITES[index] ? (
                    <a className="job-company" href={WEBSITES[index]} target="_blank" rel="noopener noreferrer">{job.company}<FaExternalLinkAlt size={10} aria-hidden="true" /></a>
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
            {showAll ? e.showLess : e.showMore.replace('{n}', e.jobs.length - VISIBLE)}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience
