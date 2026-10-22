import React, { useEffect, useRef, useState } from "react";
import { Profile, Projects } from "../Data/profile";

// The hero terminal: types a short intro, then accepts commands that move
// the visitor around the page.

const PROMPT = "okba@algiers:~$";

const BOOT = [
  { cmd: "whoami", out: [`${Profile.name.toLowerCase()}, ${Profile.role.toLowerCase()} in ${Profile.location.split(",")[0].toLowerCase()}`] },
  { cmd: "cat focus.txt", out: ["agents that act with the user's own permissions", "RAG with citations and evals in CI", "Keycloak in front of every tool call"] },
  { cmd: "ls projects/", out: [Projects.map((p) => p.id).join("  ")] },
];

const SECTIONS = ["about", "projects", "experience", "skills", "contact"];

const HELP = [
  "about        who I am",
  "projects     what I've built",
  "experience   where I've worked",
  "skills       my stack",
  "contact      how to reach me",
  "resume       open my resume (PDF)",
  "github       open my GitHub",
  "theme        switch light / dark",
  "clear        clear the screen",
];

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
};

function Terminal({ onToggleTheme }) {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState("");
  const [booted, setBooted] = useState(false);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const all = BOOT.flatMap(({ cmd, out }) => [
      { kind: "cmd", text: cmd },
      ...out.map((text) => ({ kind: "out", text })),
    ]);

    if (reducedMotion()) {
      setLines(all);
      setBooted(true);
      return;
    }

    (async () => {
      await sleep(500);
      for (const { cmd, out } of BOOT) {
        for (let i = 1; i <= cmd.length; i++) {
          if (cancelled) return;
          setTyping(cmd.slice(0, i));
          await sleep(45 + Math.random() * 40);
        }
        await sleep(220);
        if (cancelled) return;
        setTyping("");
        setLines((l) => [...l, { kind: "cmd", text: cmd }]);
        await sleep(160);
        for (const text of out) {
          if (cancelled) return;
          setLines((l) => [...l, { kind: "out", text }]);
          await sleep(90);
        }
        await sleep(420);
      }
      if (!cancelled) setBooted(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [lines, typing]);

  const run = (raw) => {
    const input = raw.trim();
    const cmd = input.toLowerCase().replace(/^(cd|\.\/|open)\s*/, "").replace(/\/$/, "");
    const echo = { kind: "cmd", text: input };
    let out = [];

    if (!input) {
      setLines((l) => [...l, echo]);
      return;
    }
    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "help" || cmd === "ls") {
      out = HELP;
    } else if (SECTIONS.includes(cmd) || cmd === "work") {
      const target = cmd === "work" ? "projects" : cmd;
      out = [`→ scrolling to ${target}`];
      setTimeout(() => scrollToSection(target), 150);
    } else if (cmd === "whoami") {
      out = BOOT[0].out;
    } else if (cmd === "resume" || cmd === "cv") {
      out = [`opening ${Profile.resume}`];
      window.open(Profile.resume, "_blank", "noopener");
    } else if (cmd === "github" || cmd === "gitlab" || cmd === "linkedin") {
      out = [`opening ${Profile[cmd]}`];
      window.open(Profile[cmd], "_blank", "noopener");
    } else if (cmd === "theme") {
      onToggleTheme();
      out = ["theme switched"];
    } else if (cmd === "email" || cmd === "mail") {
      out = [Profile.email];
    } else if (cmd.startsWith("sudo")) {
      out = ["permission denied: even here, the agent only gets the user's own roles", "try 'contact' instead"];
    } else {
      out = [`command not found: ${input}`, "type 'help' to see what works"];
    }

    setLines((l) => [...l, echo, ...out.map((text) => ({ kind: "out", text }))]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(value);
      if (value.trim()) setHistory((h) => [value, ...h]);
      setHistoryIndex(-1);
      setValue("");
    } else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(i);
      setValue(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = historyIndex - 1;
      setHistoryIndex(Math.max(i, -1));
      setValue(i < 0 ? "" : history[i]);
    }
  };

  return (
    <div className="window terminal" onClick={() => booted && inputRef.current?.focus()}>
      <div className="window-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="window-title">zsh: ~</span>
      </div>
      <div className="terminal-body" ref={bodyRef} aria-live={booted ? "polite" : "off"}>
        {lines.map((line, i) =>
          line.kind === "cmd" ? (
            <p key={i} className="t-line">
              <span className="t-prompt">{PROMPT}</span> {line.text}
            </p>
          ) : (
            <p key={i} className="t-line t-out">{line.text}</p>
          )
        )}
        {!booted ? (
          <p className="t-line" aria-hidden="true">
            <span className="t-prompt">{PROMPT}</span> {typing}
            <span className="cursor" />
          </p>
        ) : (
          <div className="t-line t-input-row">
            <label htmlFor="terminal-input" className="t-prompt">{PROMPT}</label>
            <input
              id="terminal-input"
              ref={inputRef}
              className="t-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type help"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Terminal command. Type help for a list of commands."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
