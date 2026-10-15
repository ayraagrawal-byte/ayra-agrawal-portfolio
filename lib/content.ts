export const links = {
  github: "https://github.com/ayraagrawal-byte",
  linkedin: "https://www.linkedin.com/in/ayra-agrawal/",
  email: "mailto:ayraagrawal@gmail.com",
  resume: "/resume",
};
export const projects = [
  {
    slug: "tracelab",
    number: "01",
    name: "TraceLab",
    category: "Backend systems & infrastructure",
    title: "A fast response is only the beginning.",
    description:
      "A tracing backend that separates API ingestion from database writes, with a Redis queue, a dedicated worker, and metrics for both sides of the handoff.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS EC2"],
    github: "https://github.com/ayraagrawal-byte/tracelab",
    demo: null,
    role: "Built the API, asynchronous ingestion worker, caching, observability, and containerized deployment.",
    decision:
      "Decouple enqueue latency from persistence, and measure them as separate concerns.",
  },
  {
    slug: "recall",
    number: "02",
    name: "Recall",
    category: "Full-stack AI engineering",
    title: "An answer should come with its evidence.",
    description:
      "A research workspace that connects hybrid search and local language-model generation to the exact PDF passages behind an answer.",
    stack: ["Next.js", "TypeScript", "FastAPI", "pgvector", "Ollama"],
    github: "https://github.com/ayraagrawal-byte/recall",
    demo: "https://recall-research-workspace-demo.vercel.app/",
    role: "Built PDF ingestion, retrieval and RAG services, plus the research workspace and source-linked evidence viewer.",
    decision:
      "Combine semantic and lexical retrieval, then rerank candidates before building a grounded prompt.",
  },
  {
    slug: "spoton",
    number: "03",
    name: "SpotOn",
    category: "Computer vision · HackRU Fall 2026",
    title: "Make movement easier to inspect.",
    description:
      "A three-person hackathon project for browser-based squat analysis, with landmark recording, joint-angle measurements, skeleton replay, and attempt comparison.",
    stack: ["Next.js", "MediaPipe", "IndexedDB", "Gemini", "ElevenLabs"],
    github: "https://github.com/shuknuk/hackru-fall-2026",
    demo: "https://menhel-motion.vercel.app/",
    role: "Co-developed the squat-analysis experience, local-first workout storage, optional AI feedback, and voice guidance on a three-person team.",
    decision:
      "Keep full pose recordings in the browser; make cloud feedback and workout summaries optional.",
  },
] as const;
export const experience = [
  {
    org: "Rutgers Blueprint",
    role: "Frontend Software Engineering Fellow",
    date: "Oct 2026 — Present",
    text: "Developing my frontend engineering practice through the Rutgers Blueprint fellowship.",
  },
  {
    org: "Hack4Impact · Rutgers",
    role: "Backend Developer",
    date: "Sep 2026 — Present",
    text: "Building Supabase backend systems and role-based functionality for Love Blue Inc.’s beach-cleanup tracking application.",
  },
  {
    org: "CALC Lab · Rutgers Center for Cognitive Science",
    role: "Undergraduate Research Assistant & IT Team Member",
    date: "May 2026 — Present",
    text: "Engineering R data-processing and validation pipelines, developing PsychoPy experiments, and supporting eye-tracking systems.",
  },
  {
    org: "Rutgers Mobile App Development Incubator",
    role: "Backend Developer",
    date: "Feb — May 2026",
    text: "Worked on authentication, profiles, and backend integration for RUThrift, a Rutgers marketplace built by a four-person team.",
  },
];
