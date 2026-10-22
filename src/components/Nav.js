import React, { useEffect, useRef, useState } from "react";
import { scrollToSection } from "./Terminal";

const LINKS = ["about", "projects", "experience", "skills", "contact"];

const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Sun that folds into a moon. The current theme comes from html[data-theme] in CSS.
const ThemeIcon = () => (
  <svg className="theme-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <mask id="theme-moon-mask">
      <rect width="24" height="24" fill="#fff" />
      <circle className="moon-cut" cx="17.5" cy="6.5" r="6.5" fill="#000" />
    </mask>
    <circle className="sun-core" cx="12" cy="12" r="5.5" fill="currentColor" mask="url(#theme-moon-mask)" />
    <g className="sun-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1.5" x2="12" y2="3.5" />
      <line x1="12" y1="20.5" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="3.5" y2="12" />
      <line x1="20.5" y1="12" x2="22.5" y2="12" />
      <line x1="4.6" y1="4.6" x2="6" y2="6" />
      <line x1="18" y1="18" x2="19.4" y2="19.4" />
      <line x1="4.6" y1="19.4" x2="6" y2="18" />
      <line x1="18" y1="6" x2="19.4" y2="4.6" />
    </g>
  </svg>
);

function Nav({ mode, onToggleTheme }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  // Highlight the section currently in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...LINKS].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
    window.history.replaceState(null, "", id === "top" ? "/" : `/#${id}`);
  };

  // The new theme grows as a circle out of the toggle, where the browser supports it.
  const toggleTheme = (e) => {
    if (!document.startViewTransition || reducedMotion()) {
      onToggleTheme();
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(onToggleTheme);
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  const links = (className) => (
    <ul className={className}>
      {LINKS.map((id) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={active === id ? "is-active" : undefined}
            aria-current={active === id ? "location" : undefined}
            onClick={(e) => go(e, id)}
          >
            {id}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="brand" onClick={(e) => go(e, "top")} aria-label="Okba Bouziane, back to top">
          <span className="t-prompt">~/</span>okba
        </a>
        <nav aria-label="Sections" className="nav-desktop">
          {links("nav-links")}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={mode === "dark" ? "Light theme" : "Dark theme"}
          >
            <ThemeIcon />
          </button>
          <button
            type="button"
            ref={menuButton}
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Sections" className="nav-mobile" hidden={!open}>
        {links("mobile-links")}
      </nav>
    </header>
  );
}

export default Nav;
