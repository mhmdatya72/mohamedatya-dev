'use client'

import React, { createContext, useContext } from 'react'

const LangContext = createContext(null)

// Arabic is the primary language and lives at the site root; English lives under /en.
export const PATHS = {
  ar: { home: '/', projects: '/projects' },
  en: { home: '/en', projects: '/en/projects' },
}

export const LangProvider = ({ dict, children }) => {
  const paths = PATHS[dict.lang]
  const otherLang = dict.lang === 'ar' ? 'en' : 'ar'
  const value = { t: dict, lang: dict.lang, dir: dict.dir, homePath: paths.home, projectsPath: paths.projects, otherPaths: PATHS[otherLang] }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useT = () => useContext(LangContext)

// Renders **bold** segments inside a translated string.
export const renderBold = (text) =>
  text.split('**').map((part, index) => (index % 2 ? <b key={index}>{part}</b> : part))

export const Heading = ({ title }) => (
  <>
    {title.pre}
    <span className="grad-text">{title.accent}</span>
    {title.post}
  </>
)
