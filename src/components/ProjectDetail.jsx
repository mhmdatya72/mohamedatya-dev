'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { useT } from '../i18n/LangProvider'
import { getProject, getRelated, getNeighbors, projectPath, projectsBase } from '../data/projectIndex'
import { whatsappLink } from '../data/site'

const ProjectDetail = ({ slug }) => {
  const { t, lang } = useT()
  const p = t.projectsPage
  const d = t.projectPage
  const project = getProject(slug, lang)
  const related = getRelated(slug, lang)
  const { prev, next } = getNeighbors(slug, lang)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return null
  const status = p.status[project.status] || project.status
  const country = p.countries[project.country] || project.country
  const category = p.groups[project.group].title
  const live = project.demo !== '#'
  const whatsapp = whatsappLink(d.similarMsg.replace('{title}', project.title))

  const facts = [
    { label: d.status, value: status },
    { label: d.country, value: country },
    { label: d.type, value: category },
    { label: d.techCount, value: String(project.technologies.length) },
  ]

  return (
    <>
      <header className="page-head pd-head">
        <div className="wrap">
          <Link href={projectsBase(lang)} className="back-link"><FaArrowLeft size={12} className="rtl-flip" /> {d.back}</Link>
          <div className="pd-intro">
            <div className="pd-text">
              <span className="tag-live"><i className="pulse" /> {status} · {country}</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="pd-actions">
                {live && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.visit} <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn"><FaWhatsapp size={15} /> {d.similar}</a>
              </div>
            </div>
            <div className="pd-hero"><img src={project.image} alt={project.title} fetchPriority="high" decoding="async" /></div>
          </div>
        </div>
      </header>

      <main className="wrap pd-main">
        <dl className="pd-facts">
          {facts.map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>

        <section className="pd-section">
          <h2>{d.features}</h2>
          <ul className="pd-features">
            {project.features.map((feature) => (
              <li key={feature} className="card"><FaCheckCircle size={15} /><span>{feature}</span></li>
            ))}
          </ul>
        </section>

        <section className="pd-section">
          <h2>{d.stack}</h2>
          <div className="project-stack" dir="ltr">{project.technologies.map((tech) => <span key={tech} className="chip">{tech}</span>)}</div>
        </section>

        <section className="pd-cta card">
          <div>
            <h2>{d.ctaTitle}</h2>
            <p>{d.ctaText}</p>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><FaWhatsapp size={16} /> {d.similar}</a>
        </section>

        <nav className="pd-nav" aria-label={d.related}>
          <Link href={projectPath(lang, prev.slug)} className="card card-hover pd-step">
            <small><FaArrowLeft size={11} className="rtl-flip" /> {d.prev}</small>
            <strong>{prev.title}</strong>
          </Link>
          <Link href={projectPath(lang, next.slug)} className="card card-hover pd-step pd-step-next">
            <small>{d.next} <FaArrowRight size={11} className="rtl-flip" /></small>
            <strong>{next.title}</strong>
          </Link>
        </nav>

        <section className="pd-section">
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
