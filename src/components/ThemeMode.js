import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from './Theme'

// Light/dark preference for the light pages (Home, Skills, Experience).
// About and Work always use the dark theme.

const STORAGE_KEY = 'theme-mode'

const ThemeModeContext = createContext({ mode: 'light', toggleMode: () => {} })

const initialMode = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(initialMode)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch (e) {}
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode(m => (m === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={mode === 'dark' ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)
