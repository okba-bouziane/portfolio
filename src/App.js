import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import { About, Contact, ExperienceTimeline, Footer, Hero, Skills, Work } from './components/Sections';
import { scrollToSection } from './components/Terminal';
import './styles.css';

const STORAGE_KEY = 'color-mode';

// Old multi-page URLs (/work, /about...) now point at sections of the single page.
const LEGACY_PATHS = { '/work': 'projects', '/about': 'about', '/experience': 'experience', '/skills': 'skills', '/blog': 'experience' };

const initialMode = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {}
  return 'dark';
};

function App() {
  const [mode, setMode] = useState(initialMode);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  // The DOM is updated right away so the theme view transition can snapshot it.
  const toggleMode = useCallback(() => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
    setMode(next);
  }, []);

  useEffect(() => {
    const target = LEGACY_PATHS[location.pathname] || location.hash.slice(1);
    if (!target) return;
    if (LEGACY_PATHS[location.pathname]) window.history.replaceState(null, '', `/#${target}`);
    requestAnimationFrame(() => scrollToSection(target));
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skip-link" href="#projects">Skip to projects</a>
      <Nav mode={mode} onToggleTheme={toggleMode} />
      <main>
        <Hero onToggleTheme={toggleMode} />
        <About />
        <Work />
        <ExperienceTimeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
