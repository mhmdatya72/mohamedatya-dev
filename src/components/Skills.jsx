import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaCode, FaGitAlt, FaUsers, FaSearch, FaShieldAlt } from 'react-icons/fa'
import SectionHead from './SectionHead'

const skillGroups = [
  { title: 'Backend', icon: <FaServer />, skills: ['Laravel', 'PHP 8+', 'MySQL', 'MongoDB', 'RESTful APIs', 'Composer'], core: ['Laravel', 'PHP 8+', 'MySQL', 'RESTful APIs'] },
  { title: 'Frontend', icon: <FaCode />, skills: ['Vue.js', 'React', 'Next.js', 'WordPress', 'JavaScript ES6+', 'HTML5 / CSS3', 'Sass', 'Bootstrap', 'Blade'], core: ['Vue.js', 'React', 'Next.js', 'WordPress'] },
  { title: 'APIs & Testing', icon: <FaShieldAlt />, skills: ['Postman', 'JSON / XML', 'API Resources', 'JWT / Sanctum', 'PHPUnit', 'Laravel Dusk'], core: [] },
  { title: 'Deployment & Tools', icon: <FaGitAlt />, skills: ['Git / GitHub / GitLab', 'cPanel / WHM', 'AWS / VPS', 'SSL & domains', 'AWS S3 / Backblaze B2'], core: [] },
  { title: 'Search Engine Optimization', icon: <FaSearch />, skills: ['Technical SEO', 'On-page optimization', 'SEO-friendly development'], core: ['Technical SEO'] },
  { title: 'Working style', icon: <FaUsers />, skills: ['Problem solving & debugging', 'Agile leadership', 'Stakeholder communication', 'Rapid onboarding'], core: [] },
]

const Skills = () => (
  <section id="skills" className="section section-alt">
    <div className="wrap">
      <SectionHead eyebrow="Toolbox" lead="Proven tools I use every day to ship reliable products. Highlighted items are my daily drivers.">
        The stack behind <span className="grad-text">your product</span>
      </SectionHead>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: (index % 3) * 0.08 }} className="card skill-group">
            <h3><span>{group.icon}</span>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => <span key={skill} className={`skill-pill${group.core.includes(skill) ? ' core' : ''}`}>{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
