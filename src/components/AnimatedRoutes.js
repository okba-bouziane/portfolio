import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AboutPage from './AboutPage'
import ExperiencePage from './ExperiencePage'
import Main from './Main'
import MySkillsPage from './MySkillsPage'
import WorkPage from './WorkPage'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/skills' element={<MySkillsPage />} />
        <Route path='/blog' element={<Navigate to='/experience' replace />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
