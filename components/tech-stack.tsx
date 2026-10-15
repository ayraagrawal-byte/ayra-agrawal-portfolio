import Image from "next/image";
const logos: Record<string, string> = {
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Java: "java",
  C: "c",
  R: "r",
  React: "react",
  "Next.js": "nextjs",
  "React Native": "reactnative",
  Expo: "expo",
  "Tailwind CSS": "tailwindcss",
  FastAPI: "fastapi",
  SQLAlchemy: "sqlalchemy",
  PostgreSQL: "postgresql",
  pgvector: "postgresql",
  Redis: "redis",
  Supabase: "supabase",
  Docker: "docker",
  "AWS EC2": "amazonwebservices",
  Git: "git",
  "GitHub Actions": "githubactions",
  Pytest: "pytest",
  Vitest: "vitest",
  Playwright: "playwright",
  Vercel: "vercel",
  "Node.js": "nodejs",
  "HTML/CSS": "html5",
  Ollama: "ollama",
  MediaPipe: "mediapipe",
  Gemini: "googlegemini",
  ElevenLabs: "elevenlabs",
};
export function TechLogo({ name }: { name: string }) {
  const logo = logos[name];
  return (
    <span className="tech-logo" aria-hidden="true">
      {logo ? (
        <Image
          src={`/tech/${logo}.svg`}
          width={21}
          height={21}
          alt=""
          unoptimized
        />
      ) : (
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#527688"
          strokeWidth="1.6"
        >
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
        </svg>
      )}
    </span>
  );
}
const groups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "R"],
  },
  {
    title: "Applications",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "FastAPI",
      "Node.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & AI",
    items: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Supabase",
      "SQLAlchemy",
      "Ollama",
      "MediaPipe",
      "Gemini",
    ],
  },
  {
    title: "Infrastructure & testing",
    items: [
      "Docker",
      "AWS EC2",
      "Git",
      "GitHub Actions",
      "Vercel",
      "Pytest",
      "Vitest",
      "Playwright",
    ],
  },
];
export function TechStack() {
  return (
    <section
      id="toolkit"
      className="toolkit-section shell"
      aria-labelledby="toolkit-title"
    >
      <div className="section-head">
        <span className="eyebrow">02 / Technical toolkit</span>
        <h2 id="toolkit-title">
          What I work
          <br />
          <em>with.</em>
        </h2>
        <p>Across engineering projects, research, and coursework.</p>
      </div>
      <div className="toolkit-grid">
        {groups.map((g) => (
          <div className="toolkit-group" key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((name) => (
                <li key={name}>
                  <TechLogo name={name} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
