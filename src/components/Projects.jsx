'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaArrowUp, FaCheckCircle } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { useT, Heading } from '../i18n/LangProvider'
import { projectPath } from '../data/projectIndex'

// Technical data per featured project, in the same order as the dictionary items (texts live in i18n).
const meta = [
  { slug: 'cordiana-erp-system', image: '/project-cordiana.webp', mobileImage: '/mobile-project-cordiana.webp', stack: ['Laravel', 'Vue.js', 'MySQL', 'RBAC', 'REST APIs'], demo: 'https://cordiana-sys.com/', country: 'Egypt', featured: true },
  { slug: 'mountain-lakes-bagels', image: '/project-mlbagels.webp', stack: ['Online Ordering', 'Cart & Checkout', 'Offers'], demo: 'https://mlbagels.com/home', country: 'USA', featured: true },
  { slug: 'one-step-industrial', image: '/project-onestep.webp', stack: ['Laravel', 'Vue.js', 'MySQL'], demo: 'https://onestepcorp.com/', country: 'Egypt' },
  { slug: 'taggz-app', image: '/project-taggz.webp', stack: ['Laravel', 'REST APIs', 'Media processing'], demo: 'https://taggz.app/', country: 'Egypt' },
  { slug: 'al-nasser-group-portal', image: '/alnasser-brand.webp', stack: ['Laravel', 'Vue.js', 'RBAC'], demo: 'https://alnasser.themok.company/', country: 'Kuwait' },
  { slug: 'tour-egypt-club', image: '/project-tour.webp', stack: ['Laravel', 'Vue.js', 'MySQL'], demo: 'https://touregyptclub.com/', country: 'Egypt' },
  { slug: 'al-manarat-al-munira', image: '/project-almanarat.webp', stack: ['Laravel', 'Vue.js', 'MySQL'], demo: 'https://almanratalmonerah.com/', country: 'Egypt' },
  { slug: 'eleman-eg-al-eman-contracting', image: '/project-eleman-eg.webp', stack: ['Arabic RTL', 'English', 'SEO'], demo: 'https://elemaneg.com/', country: 'Egypt' },
]

const Projects = () => {
  const { t, lang, projectsPath } = useT()
  const w = t.work

  return (
    <section id="work" className="section section-alt">
      <div className="wrap">
        <SectionHead eyebrow={w.eyebrow} lead={w.lead}><Heading title={w.title} /></SectionHead>

        <div className="work-grid">
          {w.items.map((project, index) => {
            const m = meta[index]
            return (
              <motion.article
                key={m.demo}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className={`card card-hover project${m.featured ? ' project-featured' : ''}`}
              >
                <Link href={projectPath(lang, m.slug)} className="project-media" aria-label={project.title}>
                  <img src={m.image} alt={project.title} loading="lazy" />
                  <div className="project-tags">
                    <span className="tag-live"><i className="pulse" /> {w.live} · {w.countries[m.country]}</span>
                  </div>
                  {m.mobileImage && <div className="phone" aria-hidden="true"><img src={m.mobileImage} alt="" loading="lazy" /></div>}
                </Link>
                <div className="project-body">
                  <span className="project-kind">{project.kind}</span>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-result"><FaCheckCircle size={14} /><span>{project.result}</span></div>
                  <div className="project-stack" dir="ltr">{m.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                  <div className="project-links">
                    <Link href={projectPath(lang, m.slug)} className="btn btn-sm project-details">{w.details} <FaArrowRight size={12} className="rtl-flip" /></Link>
                    <a href={m.demo} target="_blank" rel="noopener noreferrer" className="project-link">{w.visit} <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="work-cta">
          <p>{w.ctaText}</p>
          <Link href={projectsPath} className="btn btn-primary">{w.browseAll} <FaArrowRight size={13} className="rtl-flip" /></Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
