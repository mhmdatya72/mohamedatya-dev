import React from 'react'
import { FaPhp, FaLaravel, FaVuejs, FaDatabase, FaCode, FaSearch, FaGitAlt, FaServer, FaWordpress } from 'react-icons/fa'
import { SiReact, SiNextdotjs } from 'react-icons/si'

const stack = [
  { name: 'Laravel', icon: FaLaravel },
  { name: 'PHP 8+', icon: FaPhp },
  { name: 'Vue.js', icon: FaVuejs },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'REST APIs', icon: FaCode },
  { name: 'Technical SEO', icon: FaSearch },
  { name: 'AWS & VPS', icon: FaServer },
  { name: 'Git & CI/CD', icon: FaGitAlt },
]

const TechStrip = () => (
  <div className="marquee" aria-label="Core technologies">
    <div className="marquee-inner">
      {[...stack, ...stack].map(({ name, icon: Icon }, i) => (
        <span key={`${name}-${i}`} className="marquee-item" aria-hidden={i >= stack.length}><Icon size={18} />{name}</span>
      ))}
    </div>
  </div>
)

export default TechStrip
