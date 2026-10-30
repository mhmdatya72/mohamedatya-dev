'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaArrowUp, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { goToSection } from '../data/site'
import { projects, additionalProjects, clientProjects } from '../data/projects'

const groups = [
  { title: 'Featured projects', note: 'Platforms and systems I architected and shipped.', items: projects },
  { title: 'Additional projects', note: 'Earlier work and special builds.', items: additionalProjects },
  { title: 'Client websites', note: 'Live websites and platforms built for clients.', items: clientProjects },
]

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
    className="card card-hover project"
  >
    {project.demo !== '#' ? (
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-media" aria-label={`Open ${project.title}`}>
        <img src={project.image} alt={`${project.title} website`} loading="lazy" />
        <div className="project-tags"><span className="tag-live"><i className="pulse" /> {project.status}{project.country ? ` · ${project.country}` : ''}</span></div>
      </a>
    ) : (
      <div className="project-media">
        <img src={project.image} alt={`${project.title} website`} loading="lazy" />
        <div className="project-tags"><span className="tag-live">{project.status}</span></div>
      </div>
    )}
    <div className="project-body">
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-features">
        {project.features.slice(0, 3).map((feature) => <li key={feature}><FaCheckCircle size={12} /><span>{feature}</span></li>)}
      </ul>
      <div className="project-stack">{project.technologies.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
      {project.demo !== '#' ? (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Visit live site <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>
      ) : (
        <span className="soon">Coming soon</span>
      )}
    </div>
  </motion.article>
)

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link href="/" className="back-link"><FaArrowLeft size={12} /> Back to portfolio</Link>
          <h1>All <span className="grad-text">projects</span></h1>
          <p>Every system, platform and website listed here is live. Open any of them to see the work in production.</p>
        </div>
      </header>

      <main className="wrap" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        {groups.map((group) => (
          <section key={group.title}>
            <div className="group-title"><h2>{group.title}</h2><p>{group.note}</p></div>
            <div className="project-list">
              {group.items.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </section>
        ))}

        <div className="work-cta" style={{ marginTop: '4rem' }}>
          <p>Have something similar in mind?</p>
          <button type="button" className="btn btn-primary" onClick={() => goToSection('contact')}>Start a project <FaArrowRight size={13} /></button>
        </div>
      </main>
    </>
  )
}

export default AllProjects
