import React from 'react'
import { motion } from 'framer-motion'

const SectionHead = ({ eyebrow, children, lead, center = false }) => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55 }}
    className={`section-head${center ? ' center' : ''}`}
  >
    <span className="eyebrow"><i />{eyebrow}</span>
    <h2>{children}</h2>
    {lead && <p>{lead}</p>}
  </motion.header>
)

export default SectionHead
