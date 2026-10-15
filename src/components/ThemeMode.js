import React, { createContext, useCallback, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from './Theme'

// Light/dark preference for the light pages (Home, Skills, Experience).
// Light by default; About and Work always use the dark theme.

const STORAGE_KEY = 'color-mode'

const ThemeModeContext = createContext({ mode: 'light', toggleMode: () => {} })

const initialMode = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {}
  return 'light'
}

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(initialMode)

  // Only an explicit click is remembered, so first visits always start light.
  const toggleMode = useCallback(() => {
    setMode(m => {
      const next = m === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch (e) {}
      return next
    })
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
