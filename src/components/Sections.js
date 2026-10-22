import React, { useEffect, useRef, useState } from "react";
import { Education, Experience, Profile, Projects, SkillGroups } from "../Data/profile";
import { Github, Gitlab, Linkedin, Mail } from "./AllSvgs";
import Terminal from "./Terminal";
import Me from "../assets/Images/okba.png";

const SectionHead = ({ path, title }) => (
  <div className="section-head">
    <p className="section-path" aria-hidden="true">
      <span className="t-prompt">okba@algiers:</span>~/{path}
    </p>
    <h2>{title}</h2>
  </div>
);

const Pin = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const Socials = () => (
  <ul className="socials">
    <li><a href={Profile.github} target="_blank" rel="noreferrer"><Github width="18" height="18" fill="currentColor" /> GitHub</a></li>
    <li><a href={Profile.gitlab} target="_blank" rel="noreferrer"><Gitlab width="18" height="18" fill="currentColor" /> GitLab</a></li>
    <li><a href={Profile.linkedin} target="_blank" rel="noreferrer"><Linkedin width="18" height="18" fill="currentColor" /> LinkedIn</a></li>
  </ul>
);

export const Hero = ({ onToggleTheme }) => (
  <section id="top" className="hero">
    <div className="container">
      <ul className="hero-chips">
        <li className="chip"><Pin /> {Profile.location}</li>
        <li className="chip chip-open"><span className="pulse" aria-hidden="true" /> Open to new roles</li>
      </ul>
      <h1 className="hero-name">{Profile.name}</h1>
      <p className="hero-role">
        <span className="t-prompt">&gt;</span> {Profile.role}
      </p>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="lead">{Profile.summary}</p>
          <div className="cta-row">
            <a className="btn" href={Profile.resume} target="_blank" rel="noreferrer">My resume (PDF)</a>
            <a className="btn btn-ghost" href={`mailto:${Profile.email}`}>Email me</a>
          </div>
          <Socials />
        </div>
        <Terminal onToggleTheme={onToggleTheme} />
      </div>
    </div>
  </section>
);

export const About = () => {
  const facts = [
    ["location", Profile.location],
    ["experience", `${Profile.years} years`],
    ["degree", Education[0].degree],
    ["languages", Profile.languages],
  ];
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <SectionHead path="about" title="About" />
          <div className="prose">
            {Profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className="about-side">
        <figure className="window photo">
          <div className="window-bar">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="window-title">okba.png</span>
          </div>
          <img src={Me} alt={`Portrait of ${Profile.name}`} width="400" height="400" loading="lazy" decoding="async" />
        </figure>
        <div className="window code about-card" aria-label="Profile summary">
          <div className="window-bar">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="window-title">okba.json</span>
          </div>
          <pre className="code-body"><code>
            <span className="c-punc">{"{"}</span>{"\n"}
            {facts.map(([k, v], i) => (
              <React.Fragment key={k}>
                {"  "}<span className="c-key">"{k}"</span><span className="c-punc">: </span>
                {Array.isArray(v) ? (
                  <>
                    <span className="c-punc">[</span>{"\n"}
                    {v.map((item, j) => (
                      <React.Fragment key={item}>
                        {"    "}<span className="c-str">"{item}"</span>{j < v.length - 1 ? <span className="c-punc">,</span> : null}{"\n"}
                      </React.Fragment>
                    ))}
                    {"  "}<span className="c-punc">]</span>
                  </>
                ) : (
                  <span className="c-str">"{v}"</span>
                )}
                {i < facts.length - 1 ? <span className="c-punc">,</span> : null}{"\n"}
              </React.Fragment>
            ))}
            <span className="c-punc">{"}"}</span>
          </code></pre>
        </div>
        </div>
      </div>
    </section>
  );
};

const ProjectLinks = ({ project, onPlay }) => (
  <div className="project-links">
    {project.live ? <a className="btn btn-small" href={project.live} target="_blank" rel="noreferrer">Try the live demo</a> : null}
    {project.video ? (
      <button type="button" className="btn btn-small" onClick={onPlay}>
        <PlayIcon /> Watch the demo <span className="btn-meta">{project.videoLength}</span>
      </button>
    ) : null}
    <a className="btn btn-small btn-ghost" href={project.github} target="_blank" rel="noreferrer">Source on GitHub</a>
  </div>
);

const Metrics = ({ items }) => (
  <ul className="metrics" aria-label="Measured results">
    {items.map((m) => (
      <li key={m}><span className="check" aria-hidden="true">✓</span> {m}</li>
    ))}
  </ul>
);

// Demo recordings open in a popup player (native <dialog>: Esc closes it, focus is trapped).
const VideoModal = ({ project, open, onClose }) => {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal?.();
      video?.play().catch(() => {});
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open && video && !video.paused) {
      video.pause();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="video-modal"
      aria-label={`${project.name} demo video`}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className="window video-window">
        <div className="window-bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="window-title">{project.id}/demo.mp4</span>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close video">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <video
          ref={videoRef}
          className="modal-video"
          src={open ? project.video : undefined}
          poster={project.poster}
          controls
          playsInline
          muted
          preload="none"
        />
      </div>
    </dialog>
  );
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
);

const ProjectWindow = ({ project, compact }) => {
  const [playing, setPlaying] = useState(false);
  return (
  <article className={`window project${compact ? " project-compact" : ""}`}>
    <div className="window-bar">
      <span className="dots" aria-hidden="true"><i /><i /><i /></span>
      <span className="window-title">~/projects/{project.id}</span>
      {project.live ? <span className="live-badge"><span className="pulse" aria-hidden="true" />live</span> : null}
    </div>
    <div className="project-inner">
      <div className="project-shot">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          width={project.imageSize[0]}
          height={project.imageSize[1]}
          style={{ "--ratio": project.imageSize[0] / project.imageSize[1] }}
          loading="lazy"
          decoding="async"
        />
        {project.video ? (
          <button type="button" className="shot-play" onClick={() => setPlaying(true)} aria-label={`Watch the ${project.name} demo (${project.videoLength})`}>
            <span className="shot-play-icon"><PlayIcon /></span>
          </button>
        ) : null}
      </div>
      <div className="project-text">
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p>{project.description}</p>
        {!compact ? (
          <ul className="highlights">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        ) : null}
        <Metrics items={project.metrics} />
        <ul className="tags" aria-label="Stack">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <ProjectLinks project={project} onPlay={() => setPlaying(true)} />
      </div>
    </div>
    {project.video ? <VideoModal project={project} open={playing} onClose={() => setPlaying(false)} /> : null}
  </article>
  );
};

export const Work = () => {
  const featured = Projects.filter((p) => p.featured);
  const more = Projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead path="projects" title="Projects" />
        <p className="section-intro">
          Personal projects where I build the AI part and the boring parts around it: auth, queues, tests and evals.
          Every number below comes from the project's own README.
        </p>
        <div className="project-list">
          {featured.map((p) => <ProjectWindow key={p.id} project={p} />)}
        </div>
        <div className="project-pair">
          {more.map((p) => <ProjectWindow key={p.id} project={p} compact />)}
        </div>
      </div>
    </section>
  );
};

const splitPoint = (text) => {
  const i = text.indexOf("; ");
  if (i === -1) return [null, text];
  const rest = text.slice(i + 2);
  return [text.slice(0, i) + ".", rest.charAt(0).toUpperCase() + rest.slice(1)];
};

export const ExperienceTimeline = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHead path="experience" title="Experience" />
      <p className="section-intro">Each point starts with the problem, then what I built.</p>
      <ol className="timeline">
        {Experience.map((job) => (
          <li key={job.company} className="job">
            <div className="job-meta">
              <p className="job-period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-place">{job.place}</p>
            </div>
            <ul className="job-points">
              {job.points.map((point) => {
                const [problem, built] = splitPoint(point);
                return (
                  <li key={point}>
                    {problem ? <p className="problem">{problem}</p> : null}
                    <p className="built">{built}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
        <li className="job">
          <div className="job-meta">
            <p className="job-period">2017 – 2022</p>
            <h3>Education</h3>
          </div>
          <ul className="job-points education">
            {Education.map((e) => (
              <li key={e.degree}>
                <p className="built">{e.degree}</p>
                <p className="problem">{e.school}, {e.period}</p>
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  </section>
);

const skillKey = (title) => title.split(" ")[0].toLowerCase();

export const Skills = () => {
  const lines = [
    <><span className="c-kw">export const</span> <span className="c-var">stack</span> <span className="c-punc">= {"{"}</span></>,
    ...SkillGroups.flatMap((g) => [
      <>{"  "}<span className="c-comment">{"// "}{g.title}</span></>,
      <span className="hang">
        <span className="c-item">
          <span className="c-key">{skillKey(g.title)}</span><span className="c-punc">: [</span>
          <span className="c-str">"{g.items[0]}"</span><span className="c-punc">,</span>
        </span>{" "}
        {g.items.slice(1).map((item, i) => (
          <React.Fragment key={item}>
            <span className="c-item">
              <span className="c-str">"{item}"</span>
              <span className="c-punc">{i < g.items.length - 2 ? "," : "],"}</span>
            </span>{" "}
          </React.Fragment>
        ))}
      </span>,
    ]),
    <span className="c-punc">{"};"}</span>,
  ];
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead path="skills" title="Skills" />
        <div className="window code skills-window">
          <div className="window-bar">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="window-title">skills.ts</span>
          </div>
          <pre className="code-body"><code>
            {lines.map((content, i) => (
              <span key={i} className="code-line">
                <span className="ln" aria-hidden="true">{i + 1}</span>
                <span className="lc">{content}</span>
              </span>
            ))}
          </code></pre>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(Profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.location.href = `mailto:${Profile.email}`;
    }
  };
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHead path="contact" title="Let's talk" />
        <p className="section-intro">
          I'm open to AI engineer and full-stack roles. The fastest way to reach me is email.
        </p>
        <div className="contact-row">
          <a className="contact-email" href={`mailto:${Profile.email}`}>
            <Mail width="28" height="28" fill="currentColor" /> {Profile.email}
          </a>
          <button type="button" className="btn btn-small btn-ghost" onClick={copy}>
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
        <Socials />
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} {Profile.name}</p>
      <p><a href={Profile.resume} target="_blank" rel="noreferrer">My resume (PDF)</a></p>
    </div>
  </footer>
);
