'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaCode, FaGitAlt, FaUsers, FaSearch, FaShieldAlt } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'

// Icons per skill group, in the same order as the dictionary groups.
const icons = [<FaServer key="s" />, <FaCode key="c" />, <FaShieldAlt key="h" />, <FaGitAlt key="g" />, <FaSearch key="e" />, <FaUsers key="u" />]

const Skills = () => {
  const { t } = useT()
  const s = t.skills

  return (
    <section id="skills" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} lead={s.lead}><Heading title={s.title} /></SectionHead>
        <div className="skills-grid">
          {s.groups.map((group, index) => (
            <motion.article key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: (index % 3) * 0.08 }} className="card skill-group">
              <h3><span>{icons[index]}</span>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <span key={skill} className={`skill-pill${group.core.includes(skill) ? ' core' : ''}`}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
