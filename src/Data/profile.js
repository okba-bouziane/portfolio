export const Profile = {
  name: "Okba Bouziane",
  role: "Full-Stack Developer",
  location: "Algiers, Algeria",
  email: "okba.bouziane@outlook.com",
  resume: "/okba-resume.pdf",
  github: "https://github.com/okba-bouziane",
  gitlab: "https://gitlab.com/okba-bouziane",
  linkedin: "https://www.linkedin.com/in/okba-bouziane/",
};

export const Projects = [
  {
    id: "securemcp",
    name: "SecureMCP",
    tagline: "Keycloak-secured MCP server",
    description:
      "A Model Context Protocol server that lets AI agents query and update business data — with every tool call authenticated and authorized by a Keycloak-issued JWT.",
    highlights: [
      "JWT verification (RS256 via JWKS, issuer, audience, expiry) on every request",
      "Role-based tool access: viewer vs. admin, with readable Forbidden errors",
      "Audit log of every allowed and denied agent action in SQLite",
      "One-command Docker Compose setup, Vitest suite and GitHub Actions CI",
    ],
    tags: ["TypeScript", "MCP SDK", "Keycloak", "OAuth 2.0", "SQLite", "Docker"],
    github: "https://github.com/okba-bouziane/SecureMCP",
    gitlab: "https://gitlab.com/okba-bouziane/securemcp",
  },
  {
    id: "unipath",
    name: "UniPath AI",
    tagline: "RAG admissions assistant",
    description:
      "An AI agent that answers UK university and pathway-programme questions for Algerian students — grounded in a curated knowledge base, with every answer citing its source.",
    highlights: [
      "LangGraph agent with semantic search and fee-comparison tools",
      "Local sentence-transformer embeddings stored in ChromaDB",
      "Refuses to guess: answers only from retrieved documents",
      "Evaluation script scoring 10/10 answer accuracy, plus a pytest suite",
    ],
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "RAG", "Streamlit"],
    github: "https://github.com/okba-bouziane/UniPath",
    gitlab: "https://gitlab.com/okba-bouziane/unipath",
  },
];

export const Experience = [
  {
    company: "Smartest Algeria",
    role: "Full-Stack Developer",
    place: "Remote, Algeria",
    period: "Oct 2022 – Oct 2026",
    points: [
      "Shipped 5 production apps in Angular, React and TypeScript on Node.js/NestJS, used daily by 300+ staff across client companies.",
      "Unified login across 4 applications with Keycloak SSO (OAuth 2.0/OIDC, RBAC), cutting access-related support requests by ~30%.",
      "Built a shared library of 30+ UI components, reducing duplicate UI code by ~30%.",
      "Refactored legacy modules toward Clean Architecture, raising test coverage on core modules from near zero to ~50%.",
      "Optimized PostgreSQL and MongoDB queries, cutting response times by ~50% on the heaviest endpoints.",
      "Brought LLM features (summarization, smart search, form auto-fill) into business apps, saving ~25% of manual data entry.",
      "Led code reviews and mentored 2 junior developers in Agile/Scrum sprints.",
    ],
  },
  {
    company: "Tebessa Innoest",
    role: "Mobile & Web Developer",
    place: "Tebessa, Algeria",
    period: "Jan 2020 – Jan 2022",
    points: [
      "Delivered 6+ MVPs across mobile and web for start-ups in an incubator.",
      "Built cross-platform React Native apps with auth, REST APIs, push notifications and offline-friendly screens.",
      "Developed responsive React websites and landing pages for pitches, demo days and investor meetings.",
    ],
  },
];

export const Education = [
  {
    school: "Badji Mokhtar University",
    degree: "MSc in Artificial Intelligence",
    period: "2020 – 2022",
  },
  {
    school: "Badji Mokhtar University",
    degree: "Bachelor's in Computer Science",
    period: "2017 – 2020",
  },
];

export const SkillGroups = [
  {
    title: "AI & ML",
    items: ["LLMs", "RAG", "AI Agents", "LangChain", "LangGraph", "MCP", "pgvector", "Prompt Engineering"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "React Native", "TypeScript", "Redux", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "Python", "REST", "GraphQL", "Microservices"],
  },
  {
    title: "Auth & Security",
    items: ["Keycloak", "OAuth 2.0", "OpenID Connect", "JWT", "SSO", "RBAC"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Data Modeling", "Query Optimization"],
  },
  {
    title: "DevOps & Practices",
    items: ["Docker", "CI/CD", "Git", "Linux", "Clean Architecture", "Unit Testing", "Agile/Scrum"],
  },
];
