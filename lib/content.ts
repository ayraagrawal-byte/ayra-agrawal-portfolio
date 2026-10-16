export const links = {
  github: "https://github.com/ayraagrawal-byte",
  linkedin: "https://www.linkedin.com/in/ayra-agrawal/",
  email: "mailto:ayraagrawal@gmail.com",
  resume: "/resume",
};
export const projects = [
  // Project facts are kept separate from homepage presentation.
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
// Update these notes when activities change; each reflects the supplied resume.
export const currently = [
  {
    label: "Building",
    text: "Backend systems for Love Blue with Hack4Impact at Rutgers.",
    href: "#experience",
  },
  {
    label: "Learning",
    text: "Frontend engineering through the Rutgers Blueprint fellowship.",
    href: "#experience",
  },
  {
    label: "Exploring",
    text: "Cognition, behavioral data, and careful measurement at CALC Lab.",
    href: "#research",
  },
] as const;
export const experience = [
  {
    slug: "blueprint",
    org: "Rutgers Blueprint",
    role: "Frontend Software Engineering Fellow",
    date: "Oct 2026 — Present",
    text: "Expanding my frontend engineering practice through Blueprint’s structured eight-week fellowship.",
    context: "An eight-week frontend software engineering fellowship covering the path from responsive web foundations to typed React applications.",
    contributions: [
      "Building on my backend experience through guided work in HTML, CSS, responsive design, JavaScript, and browser interactivity.",
      "Following a curriculum that progresses into TypeScript, typed API interactions, React components, hooks, state, and routing.",
    ],
    methods: ["React", "TypeScript", "HTML", "CSS"],
    status: "Eight-week fellowship in progress",
    links: [],
    details: [
      {
        title: "Curriculum status",
        text: "The October 8 and October 15 sessions were scheduled for HTML/CSS foundations, responsive design, JavaScript, DOM interaction, and events. The remaining topics are upcoming in the published syllabus, so they are described as planned learning rather than completed work.",
      },
      {
        title: "What comes next",
        text: "Scheduled sessions cover TypeScript and typed JSON/API work, React and reusable components, hooks and state management, routing, deployment fundamentals, and a collaborative final project with three or four fellows. The syllabus plans a December presentation; no finished application or certificate is claimed.",
      },
    ],
  },
  {
    slug: "hack4impact",
    org: "Hack4Impact · Rutgers",
    role: "Backend Developer",
    date: "Sep 2026 — Present",
    text: "Owning authentication and profile creation for Love Blue Inc.’s volunteer platform.",
    context: "Love Blue is developing one platform for volunteers, chapter leaders, and national administrators to coordinate cleanups and document environmental impact.",
    contributions: [
      "Own the current authentication work, including Supabase sign-in providers and user-profile creation on signup.",
      "Use role-aware identity as the foundation for deciding what volunteers, chapter leaders, and national administrators can access.",
      "Ship changes through reviewed pull requests; no planned feature is presented here as complete without implementation evidence.",
    ],
    methods: ["Supabase Auth", "Supabase", "Authentication", "Pull requests"],
    status: "MVP in development · target Dec 22, 2026",
    links: [],
    details: [
      {
        title: "Product direction and approved MVP",
        text: "The product vision is a central home for people, chapters, events, participation, hours, and impact. The approved MVP narrows that direction to accounts and profiles; chapter creation, approval, and administration; event discovery and registration; cleanup check-in and check-out; volunteer hours and trash reporting; leaderboards; and leader and national administration tools.",
      },
      {
        title: "My verified scope",
        text: "My independently supported work is authentication, Supabase sign-in providers, and profile creation on signup. These identity flows matter because one account can participate as a volunteer while permissions determine who may manage a chapter or the national network. The broader backend plan is team scope, not individual attribution.",
      },
      {
        title: "Planned and outside the MVP",
        text: "The six-sprint plan targets a working MVP by December 22, 2026. Later sprints schedule chapters, events, attendance, impact totals, leaderboards, administration, testing, and permissions review. AI trash scanning, push notifications, the activity feed, interactive map, achievements, advanced analytics and exports, and other expansion ideas are explicitly deferred beyond the MVP.",
      },
    ],
  },
  {
    slug: "calc-lab",
    org: "CALC Lab · Rutgers Center for Cognitive Science",
    role: "Undergraduate Research Assistant & IT Team Member",
    date: "May 2026 — Present",
    text: "Engineering R data-processing and validation pipelines, developing PsychoPy experiments, and supporting eye-tracking systems.",
    context: "Engineering support for developmental and numerical-cognition research at the Cognition and Learning Center.",
    contributions: [
      "Built and refined R workflows that extract measurement periods, frame onsets, looking durations, and looking-away measurements from behavioral coding exports.",
      "Added validation checks that surface timing and coding inconsistencies across 227+ coding files (approximately 300 datasets).",
      "Configured and tested Tobii eye-tracking systems with DeTox, developed PsychoPy experiments, and supported behavioral coding in Datavyu.",
      "Building EyeSpy, an ongoing number-word study; no unpublished findings or participant data are presented here.",
    ],
    methods: ["R", "PsychoPy", "Tobii Pro", "DeTox", "Datavyu"],
    status: "Current role; EyeSpy is ongoing",
    links: [{ label: "Research case study", href: "/research/calc-lab" }],
    details: [],
  },
  {
    slug: "rumad",
    org: "Rutgers Mobile App Development Incubator",
    role: "Backend Developer",
    date: "Feb — May 2026",
    text: "Worked on authentication, profiles, and backend integration for RUThrift, a Rutgers marketplace built by a four-person team.",
    context: "RUThrift is a team-built Rutgers marketplace developed through the RUMAD Incubator.",
    contributions: [
      "Worked on Supabase-backed profile upsert and email OTP request and verification routes.",
      "Contributed to onboarding and frontend/backend integration in a React Native and Expo application.",
      "Presented the team project at the RUMAD showcase; the repository snapshot still uses mock data for parts of listings and messaging.",
    ],
    methods: ["TypeScript", "Express", "Supabase", "React Native", "Expo"],
    status: "Incubator completed; repository is a project snapshot",
    links: [{ label: "Team repository", href: "https://github.com/ayraagrawal-byte/rumad-incubator-2026" }],
    details: [],
  },
] as const;
