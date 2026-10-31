'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaArrowUp, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { useT } from '../i18n/LangProvider'
import { getProject, getRelated, projectPath, projectsBase } from '../data/projectIndex'
import { whatsappLink } from '../data/site'

const ProjectDetail = ({ slug }) => {
  const { t, lang } = useT()
  const p = t.projectsPage
  const d = t.projectPage
  const project = getProject(slug, lang)
  const related = getRelated(slug, lang)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return null
  const status = p.status[project.status] || project.status
  const country = p.countries[project.country] || project.country
  const live = project.demo !== '#'

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link href={projectsBase(lang)} className="back-link"><FaArrowLeft size={12} className="rtl-flip" /> {d.back}</Link>
          <div><span className="tag-live"><i className="pulse" /> {status} · {country}</span></div>
          <h1 style={{ marginTop: '1rem' }}>{project.title}</h1>
          <p>{project.description}</p>
          <div className="pd-actions">
            {live && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.visit} <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>}
            <a href={whatsappLink(d.similarMsg.replace('{title}', project.title))} target="_blank" rel="noopener noreferrer" className="btn"><FaWhatsapp size={15} /> {d.similar}</a>
          </div>
        </div>
      </header>

      <main className="wrap" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="pd-hero"><img src={project.image} alt={project.title} fetchPriority="high" decoding="async" /></div>

        <div className="pd-grid">
          <section className="card pd-card">
            <h2>{d.features}</h2>
            <ul className="project-features">
              {project.features.map((feature) => <li key={feature}><FaCheckCircle size={13} /><span>{feature}</span></li>)}
            </ul>
          </section>

          <aside className="card pd-card">
            <h2>{d.facts}</h2>
            <dl className="pd-facts">
              <div><dt>{d.status}</dt><dd>{status}</dd></div>
              <div><dt>{d.country}</dt><dd>{country}</dd></div>
            </dl>
            <h3 className="pd-sub">{d.stack}</h3>
            <div className="project-stack" dir="ltr">{project.technologies.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
          </aside>
        </div>

        <section className="pd-related">
          <h2>{d.related}</h2>
          <div className="pd-related-grid">
            {related.map((r) => (
              <Link key={r.slug} href={projectPath(lang, r.slug)} className="card card-hover pd-mini">
                <h3>{r.title}</h3>
                <span className="project-stack" dir="ltr">{r.technologies.slice(0, 3).map((tech) => <span key={tech} className="chip">{tech}</span>)}</span>
                <span className="project-link">{p.details}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default ProjectDetail
