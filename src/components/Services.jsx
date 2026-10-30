import React from 'react'
import { motion } from 'framer-motion'
import { FaCogs, FaLayerGroup, FaCode, FaRocket, FaArrowRight, FaSearch, FaCheck } from 'react-icons/fa'
import SectionHead from './SectionHead'

const services = [
  {
    title: 'Business Platforms & ERP',
    description: 'Custom cloud systems that connect operations, teams and data in one dependable workspace — so your staff stop juggling spreadsheets.',
    details: ['ERP workflows, CRM & POS', 'Inventory, HR and finance', 'Role-based access & e-invoicing'],
    icon: <FaLayerGroup />,
    featured: true,
  },
  {
    title: 'SaaS & Full-Stack Products',
    description: 'From product requirements to deployment, I build web applications that are ready to onboard users and grow with them.',
    details: ['Multi-tenant SaaS applications', 'Vue.js / React interfaces', 'Dashboards & reporting'],
    icon: <FaCogs />,
    featured: true,
  },
  {
    title: 'Backend Systems & APIs',
    description: 'Secure Laravel backends and REST APIs designed to carry complex products, mobile apps and third-party integrations.',
    details: ['Laravel architecture', 'RESTful APIs & integrations', 'Payments, auth & RBAC'],
    icon: <FaCode />,
  },
  {
    title: 'SEO-Ready Websites',
    description: 'Fast, technically sound websites that are easier to discover on search engines and convert visitors into enquiries.',
    details: ['Technical & on-page SEO', 'Core Web Vitals tuning', 'Arabic / English builds'],
    icon: <FaSearch />,
  },
  {
    title: 'Performance & Team Leadership',
    description: 'Rescue slow or fragile systems, and help your engineering team ship reliable, maintainable software.',
    details: ['Query & cache optimization', 'Code reviews & architecture', 'Team mentorship'],
    icon: <FaRocket />,
  },
]

const Services = () => (
  <section id="services" className="section">
    <div className="wrap">
      <SectionHead eyebrow="What I do" lead="Five ways I help businesses turn a technical challenge into software that works every day.">
        Services built around <span className="grad-text">your business goals</span>
      </SectionHead>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className={`card card-hover service${service.featured ? ' service-featured' : ''}`}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>{service.details.map((d) => <li key={d}><FaCheck size={11} />{d}</li>)}</ul>
            <a href="#contact" className="service-link">Discuss this <FaArrowRight size={12} /></a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
