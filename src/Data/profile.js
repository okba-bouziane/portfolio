export const Profile = {
  name: "Okba Bouziane",
  role: "Full-Stack & AI Engineer",
  location: "Algiers, Algeria",
  years: 6,
  summary:
    "I build web products end to end with Angular, React and NestJS, and I bring LLMs into them safely: agents that act with the user's own permissions, RAG with citations, and evals that run in CI.",
  about: [
    "I'm a full-stack engineer based in Algiers with 6 years of building web and mobile products, from start-up MVPs at an incubator to B2B platforms at Smartest Algeria.",
    "My day-to-day stack is Angular, React, TypeScript and NestJS, and I care about the parts that are easy to get wrong: Keycloak and OAuth2 authentication, role-based access, clean architecture, tests and fast queries.",
    "With an MSc in Artificial Intelligence, I now focus on putting LLMs into real products: AI agents, RAG and Graph RAG, voice agents and secure MCP servers, each measured with evals instead of guesses.",
  ],
  languages: ["Arabic (native)", "English (full professional)", "French (limited working)"],
  email: "okba.bouziane@outlook.com",
  resume: "/okba-resume.pdf",
  github: "https://github.com/okba-bouziane",
  gitlab: "https://gitlab.com/okba-bouziane",
  linkedin: "https://www.linkedin.com/in/okba-bouziane/",
};

export const Projects = [
  {
    id: "secure-agent-workspace",
    featured: true,
    name: "Secure Agent Workspace",
    tagline: "Full-stack agent app: React + NestJS + LangGraph",
    image: "/projects/secure-agent-workspace.jpg",
    imageSize: [1400, 885],
    description:
      "A chat workspace where a LangGraph agent works on business data through my SecureMCP server, using the signed-in user's own Keycloak token, so the agent can never do more than the user is allowed to.",
    highlights: [
      "React + Vite UI with Keycloak PKCE login, streamed agent steps and an approval card for every write",
      "Human-in-the-loop with LangGraph interrupt and a Postgres checkpointer (approvals survive restarts)",
      "Hybrid RAG on Postgres: full-text + pgvector with rank fusion, citations, poisoned-document defence",
      "BullMQ + Redis ingestion queue, rate limiting, tracing UI, evals in CI, Kubernetes manifests, load test",
    ],
    metrics: ["82 automated tests", "recall@3 1.00 on 18 questions", "10/10 injection attacks detected"],
    tags: ["TypeScript", "NestJS", "React", "LangGraph", "MCP", "Keycloak", "pgvector", "Redis", "BullMQ", "Docker"],
    github: "https://github.com/okba-bouziane/SecureAgentWorkspace",
    demo: "https://github.com/okba-bouziane/SecureAgentWorkspace/blob/main/docs/demo.mp4",
    video: "/videos/secure-agent-workspace.mp4",
    poster: "/videos/secure-agent-workspace-poster.jpg",
    videoLength: "1:14",
  },
  {
    id: "voicedesk",
    featured: true,
    name: "VoiceDesk",
    tagline: "LiveKit voice agent with a gRPC microservice",
    image: "/projects/voicedesk.jpg",
    imageSize: [1260, 1400],
    description:
      "A voice receptionist for a fictional clinic: speech-to-text, a LangGraph conversation that fills booking slots and answers from documents, then text-to-speech, with bookings handled by a separate gRPC service.",
    highlights: [
      "LiveKit Agents pipeline: VAD, turn detection, interruptions, Whisper STT, LLM, TTS",
      "Booking microservice with a Protobuf contract, gRPC server and Postgres storage",
      "Pydantic structured outputs with validation and retry; pgvector hybrid search over clinic docs",
      "Per-turn latency metrics, versioned prompts and an eval gate in CI",
    ],
    metrics: ["74 pytest tests", "recall@3 1.00 with hybrid search", "1.59 s speech-to-reply on a live call"],
    tags: ["Python", "LiveKit", "LangGraph", "gRPC", "Protobuf", "pgvector", "FastAPI", "Pydantic"],
    github: "https://github.com/okba-bouziane/VoiceDesk",
    live: "https://voicedesk-beta.vercel.app",
  },
  {
    id: "lexgraph",
    featured: true,
    name: "LexGraph",
    tagline: "Graph RAG on Neo4j with measured retrieval",
    image: "/projects/lexgraph.jpg",
    imageSize: [1400, 875],
    description:
      "Graph RAG over a fictional contract corpus: documents become a Neo4j knowledge graph of parties, contracts, amendments and guarantees, so multi-hop questions can follow the links instead of guessing.",
    highlights: [
      "LlamaIndex + Neo4j property graph with a vector index and local bge-small embeddings",
      "Vector, graph-expansion (Cypher paths) and hybrid retrievers compared on 31 labelled questions",
      "Graph retrieval raises multi-hop full coverage from 0.47 to 0.84 at k=5",
      "LangGraph query flow with citations, graph paths used and a groundedness self-check",
    ],
    metrics: ["multi-hop recall@5 0.74 → 0.92", "multi-hop full coverage 0.47 → 0.84", "41 pytest tests"],
    tags: ["Python", "Neo4j", "LlamaIndex", "LangGraph", "Graph RAG", "FastAPI", "Evals"],
    github: "https://github.com/okba-bouziane/LexGraph",
    demo: "https://github.com/okba-bouziane/LexGraph/blob/main/docs/demo.mp4",
    video: "/videos/lexgraph.mp4",
    poster: "/videos/lexgraph-poster.jpg",
    videoLength: "0:54",
  },
  {
    id: "securemcp",
    name: "SecureMCP",
    tagline: "Keycloak-secured MCP server",
    image: "/projects/securemcp.jpg",
    imageSize: [1065, 1400],
    description:
      "A Model Context Protocol server that lets AI agents query and update business data, with every tool call authenticated and authorized by a Keycloak-issued JWT.",
    highlights: [
      "JWT verification (RS256 via JWKS, issuer, audience, expiry) on every request",
      "Role-based tool access: viewer vs. admin, with readable Forbidden errors",
      "Audit log of every allowed and denied agent action in SQLite",
      "Web demo console, one-command Docker Compose setup, Vitest suite and GitHub Actions CI",
    ],
    metrics: ["every tool call needs a valid JWT", "every allowed or denied call audited"],
    tags: ["TypeScript", "MCP SDK", "Keycloak", "OAuth 2.0", "SQLite", "Docker"],
    github: "https://github.com/okba-bouziane/SecureMCP",
    gitlab: "https://gitlab.com/okba-bouziane/securemcp",
  },
  {
    id: "unipath",
    name: "UniPath AI",
    tagline: "RAG admissions assistant",
    image: "/projects/unipath.jpg",
    imageSize: [1400, 900],
    description:
      "An AI agent that answers UK university and pathway-programme questions for Algerian students, grounded in a curated knowledge base, with every answer citing its source.",
    highlights: [
      "LangGraph agent with semantic search and fee-comparison tools",
      "Local sentence-transformer embeddings stored in ChromaDB",
      "Refuses to guess: answers only from retrieved documents",
      "Evaluation script scoring 10/10 answer accuracy, plus a pytest suite",
    ],
    metrics: ["10/10 on the answer eval", "a cited source on every answer"],
    tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "RAG", "Streamlit"],
    github: "https://github.com/okba-bouziane/UniPath",
    live: "https://unipath-okba.streamlit.app",
    gitlab: "https://gitlab.com/okba-bouziane/unipath",
  },
];

export const Experience = [
  {
    company: "Smartest Algeria",
    role: "Full-Stack Developer",
    place: "Algiers, Algeria",
    period: "Nov 2022 – Oct 2026",
    points: [
      "Operations teams were reviewing documents and filling forms by hand inside the business applications; integrated LLM APIs for document summarization, smart search and form auto-fill, built end to end with Angular, React and NestJS.",
      "Each product had its own login and duplicated access rules; integrated Keycloak (OAuth2/OpenID Connect) with JWT-secured APIs and Role-Based Access Control for single sign-on across the applications, and built a custom admin console on the Keycloak Admin REST API for users, roles and clients.",
      "Licensing was handled separately in each application; designed and built a SaaS-style licensing platform that every Smartest application integrates with, centralizing license issuing and validation in one service.",
      "Business users depended on developers for every new report; built a Word-like report designer in which users bind data sources and datasets to tables and charts on a document canvas and generate reports themselves.",
      "Several applications needed visual flow editing, and each would otherwise have rebuilt graph rendering from scratch; designed flow-dcl, a reusable Angular flow-graph editor library integrated across the apps, with an extension API that lets developers register custom node and edge types without modifying the core.",
      "Legacy modules were tightly coupled and risky to change; refactored them toward Clean Architecture with unit tests and a shared Angular component library, optimized PostgreSQL and MongoDB queries behind slow reporting screens, integrated MinIO (S3-compatible) for file storage, and shipped services with Docker through CI/CD.",
    ],
  },
  {
    company: "Tebessa Innoest",
    role: "Mobile & Web Developer",
    place: "Tebessa, Algeria",
    period: "Mar 2020 – Jan 2022",
    points: [
      "Incubated founders had ideas but no product to pitch; turned them into mobile and web MVPs in short delivery cycles, advising on technical scope and feature priority so each team could demo a working first version.",
      "Start-ups needed apps on both platforms on a small budget; built cross-platform React Native apps (iOS and Android) with authentication, REST APIs, push notifications and offline-friendly screens, plus React websites for demo days.",
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
    items: ["LLMs", "RAG", "Graph RAG", "AI Agents", "LangChain", "LangGraph", "LlamaIndex", "MCP", "LiveKit Voice Agents", "pgvector", "Neo4j", "Evals", "Structured Outputs"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "React Native", "TypeScript", "Redux", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "Python", "REST", "GraphQL", "gRPC / Protobuf", "Microservices", "BullMQ / Redis"],
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
