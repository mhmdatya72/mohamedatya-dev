import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUp, FaCheckCircle } from 'react-icons/fa'
import SectionHead from './SectionHead'

const projects = [
  {
    title: 'Cordiana ERP System',
    kind: 'Cloud ERP · SaaS',
    description: 'An all-in-one enterprise management platform covering Sales CRM, POS, HR & Payroll, Financial Accounting and Electronic Invoicing.',
    result: 'Sales, POS, HR, accounting and e-invoicing run in one secure multi-tenant platform.',
    image: '/project-cordiana.jpg',
    mobileImage: '/mobile-project-cordiana.png',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'RBAC', 'REST APIs'],
    demo: 'https://cordiana-sys.com/',
    country: 'Egypt',
    featured: true,
  },
  {
    title: 'One Step Industrial',
    kind: 'B2B Marketplace',
    description: 'A scalable industrial marketplace with multi-category hierarchies, dynamic machinery quote requests and a custom back-office.',
    result: '+35% API performance with search across 1,000+ SKUs.',
    image: '/project-onestep.jpg',
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    demo: 'https://onestepcorp.com/',
    country: 'Egypt',
  },
  {
    title: 'Taggz App',
    kind: 'AI Platform',
    description: 'Backend APIs and media workflows for an event platform that matches and distributes photos using facial recognition.',
    result: 'Attendees receive their own event photos automatically, with real-time gallery sync.',
    image: '/project-taggz.jpg',
    stack: ['Laravel', 'REST APIs', 'Media processing'],
    demo: 'https://taggz.app/',
    country: 'Egypt',
  },
  {
    title: 'Al-Nasser Group Portal',
    kind: 'Enterprise Portal',
    description: 'An internal portal for a leading Kuwaiti retail brand to manage logistics, delivery operations and multi-store workflows.',
    result: 'One role-based dashboard for logistics, delivery and store operations.',
    image: '/alnasser-brand.jpg',
    stack: ['Laravel', 'Vue.js', 'RBAC'],
    demo: 'https://alnasser.themok.company/',
    country: 'Kuwait',
  },
  {
    title: 'Tour Egypt Club',
    kind: 'Travel Booking Engine',
    description: 'An interactive travel engine with dynamic tour itineraries, transport reservations and automated quotes.',
    result: 'Automated quotes and a streamlined UI built to lift engagement and conversions.',
    image: '/project-tour.jpg',
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    demo: 'https://touregyptclub.com/',
    country: 'Egypt',
  },
  {
    title: 'Al Manarat Al Munira',
    kind: 'Fleet Management',
    description: 'A web solution for heavy-equipment and crane hire, service management and engineering project tracking.',
    result: 'Hire requests, quotes and client notifications handled online instead of by hand.',
    image: '/project-almanarat.jpg',
    stack: ['Laravel', 'Vue.js', 'MySQL'],
    demo: 'https://almanratalmonerah.com/',
    country: 'Egypt',
  },
  {
    title: 'Eleman EG — Al Eman Contracting',
    kind: 'Corporate Website · SEO',
    description: 'An Arabic-first company website presenting general contracting, construction and surveying services across Egypt.',
    result: 'Bilingual (Arabic RTL + English) with search-friendly metadata and structured business data.',
    image: '/project-eleman-eg.png',
    stack: ['Arabic RTL', 'English', 'SEO'],
    demo: 'https://elemaneg.com/',
    country: 'Egypt',
  },
]

const Projects = () => (
  <section id="work" className="section section-alt">
    <div className="wrap">
      <SectionHead eyebrow="Selected work" lead="Real systems used by real businesses every day. Each one is live — open them and see for yourself.">
        Live projects, <span className="grad-text">real results</span>
      </SectionHead>

      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
            className={`card card-hover project${project.featured ? ' project-featured' : ''}`}
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-media" aria-label={`Open ${project.title}`}>
              <img src={project.image} alt={`${project.title} website`} loading="lazy" />
              <div className="project-tags">
                <span className="tag-live"><i className="pulse" /> Live · {project.country}</span>
              </div>
              {project.mobileImage && <div className="phone" aria-hidden="true"><img src={project.mobileImage} alt="" loading="lazy" /></div>}
            </a>
            <div className="project-body">
              <span className="project-kind">{project.kind}</span>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-result"><FaCheckCircle size={14} /><span>{project.result}</span></div>
              <div className="project-stack">{project.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Visit live site <FaArrowUp size={12} style={{ transform: 'rotate(45deg)' }} /></a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="work-cta">
        <p>25+ projects delivered — enterprise systems, e-commerce, client websites and more.</p>
        <Link to="/projects" className="btn btn-primary">Browse all projects <FaArrowRight size={13} /></Link>
      </div>
    </div>
  </section>
)

export default Projects
