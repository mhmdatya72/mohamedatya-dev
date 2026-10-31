'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaArrowUp, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { goToSection } from '../data/site'
import { allProjects, localizeProject, projectPath } from '../data/projectIndex'
import { useT, Heading } from '../i18n/LangProvider'

const groups = [0, 1, 2].map((group) => allProjects.filter((project) => project.group === group))

const ProjectCard = ({ project, index, t, lang }) => {
  const p = t.projectsPage
  const status = p.status[project.status] || project.status
  const country = p.countries[project.country] || project.country

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="card card-hover project"
    >
      {project.demo !== '#' ? (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-media" aria-label={project.title}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-tags"><span className="tag-live"><i className="pulse" /> {status}{country ? ` · ${country}` : ''}</span></div>
        </a>
      ) : (
        <div className="project-media">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-tags"><span className="tag-live">{status}</span></div>
        </div>
      )}
      <div className="project-body">
        <h3><Link href={projectPath(lang, project.slug)}>{project.title}</Link></h3>
        <p className="project-desc">{project.description}</p>
        <ul className="project-features">
          {project.features.slice(0, 3).map((feature) => <li key={feature}><FaCheckCircle size={12} /><span>{feature}</span></li>)}
        </ul>
        <div className="project-stack" dir="ltr">{project.technologies.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
        <div className="project-links">
          <Link href={projectPath(lang, project.slug)} className="project-link">{p.details}</Link>
          {project.demo !== '#' ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">{p.visit} <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>
          ) : (
            <span className="soon">{p.comingSoon}</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const AllProjects = () => {
  const { t, lang, homePath } = useT()
  const p = t.projectsPage

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link href={homePath} className="back-link"><FaArrowLeft size={12} className="rtl-flip" /> {p.back}</Link>
          <h1><Heading title={p.title} /></h1>
          <p>{p.lead}</p>
        </div>
      </header>

      <main className="wrap" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        {groups.map((items, groupIndex) => (
          <section key={p.groups[groupIndex].title}>
            <div className="group-title"><h2>{p.groups[groupIndex].title}</h2><p>{p.groups[groupIndex].note}</p></div>
            <div className="project-list">
              {items.map((project, index) => <ProjectCard key={project.slug} project={localizeProject(project, lang)} index={index} t={t} lang={lang} />)}
            </div>
          </section>
        ))}

        <div className="work-cta" style={{ marginTop: '4rem' }}>
          <p>{p.cta}</p>
          <button type="button" className="btn btn-primary" onClick={() => goToSection('contact', homePath)}>{t.common.startProject} <FaArrowRight size={13} className="rtl-flip" /></button>
        </div>
      </main>
    </>
  )
}

export default AllProjects
