'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { safeStorage } from '../utils/storage'

const THEME_KEY = 'portfolio-theme-v3'
const ThemeContext = createContext({ darkMode: true, toggleDarkMode: () => {} })

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  // The inline script in the layout already set the class before paint; sync React state with it.
  useEffect(() => {
    setDarkMode(safeStorage.getItem(THEME_KEY) !== 'light')
  }, [])

  const toggleDarkMode = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
    safeStorage.setItem(THEME_KEY, next ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}
