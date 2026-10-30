'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress