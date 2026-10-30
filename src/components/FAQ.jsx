import React from 'react'
import { motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'
import SectionHead from './SectionHead'

const faqs = [
  { q: 'What kind of projects do you take on?', a: 'Custom ERP and business systems, SaaS platforms, backend APIs and integrations, SEO-ready websites, and performance rescues for slow or fragile systems.' },
  { q: 'Can you work on an existing codebase or with my team?', a: 'Yes. I regularly optimize existing Laravel systems (queries, caching, architecture), run code reviews and mentor engineering teams alongside delivering new features.' },
  { q: 'Which technologies do you use?', a: 'Laravel, PHP 8+, MySQL, Vue.js, React and Next.js, REST APIs, plus deployment on AWS, VPS or cPanel with SSL and domain setup.' },
  { q: 'Do you also handle SEO and deployment?', a: 'Yes. Technical and on-page SEO, Core Web Vitals tuning, Arabic/English builds and the full launch — hosting, SSL and hand-over — are part of how I work.' },
  { q: 'How do we get started?', a: 'Send a short brief through the form or WhatsApp. We discuss your goals and scope on a call or chat, then I come back with an approach and next steps.' },
  { q: 'Do you work with clients outside Egypt?', a: 'Yes — I have delivered platforms for clients in Egypt and Kuwait, and collaborate over WhatsApp, email and calls.' },
]

const FAQ = () => (
  <section id="faq" className="section section-alt">
    <div className="wrap faq-wrap">
      <SectionHead eyebrow="FAQ" center>
        Questions clients <span className="grad-text">ask first</span>
      </SectionHead>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <motion.details key={item.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="card faq-item">
            <summary><span>{item.q}</span><FaPlus size={13} aria-hidden="true" /></summary>
            <p>{item.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQ
