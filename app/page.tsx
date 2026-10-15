import Image from "next/image";
import Link from "next/link";
import { projects, experience, links } from "@/lib/content";
import { SystemFigure } from "@/components/system-figure";
import { PixelIcon } from "@/components/pixel-icon";
import type { IconName } from "@/components/pixel-icon";
const roleTools = [
  ["React", "TypeScript", "Frontend"],
  ["Supabase", "PostgreSQL", "Backend"],
  ["R", "PsychoPy", "Tobii"],
  ["React Native", "Expo", "Supabase"],
];
const skills = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "R"],
  },
  {
    name: "Frontend & mobile",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    name: "Backend & data",
    items: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Supabase",
    ],
  },
  {
    name: "AI & retrieval",
    items: ["Ollama", "Sentence Transformers", "BM25", "MediaPipe", "Gemini"],
  },
  {
    name: "Infrastructure & testing",
    items: [
      "Docker",
      "AWS EC2",
      "Vercel",
      "Git",
      "GitHub Actions",
      "Pytest",
      "Vitest",
      "Playwright",
    ],
  },
  {
    name: "Research systems",
    items: ["R pipelines", "PsychoPy", "Tobii Pro", "DeTox", "Data validation"],
  },
];
function SectionTitle({
  title,
  icon,
  description,
  count,
}: {
  title: string;
  icon: IconName;
  description?: string;
  count?: string;
}) {
  return (
    <div className="section-title">
      <div>
        <h2
          id={
            title === "Experience"
              ? "experience-title"
              : title === "Selected projects"
                ? "projects-title"
                : undefined
          }
        >
          <PixelIcon name={icon} />
          {title}
        </h2>
        {description ? <p>{description}</p> : null}
      </div>
      {count ? <span className="section-count">{count}</span> : null}
    </div>
  );
}
export default function Home() {
  return (
    <main id="main" className="shell">
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-main">
          <span className="eyebrow">
            <span className="status-dot" />
            Software engineering / Rutgers ’29
          </span>
          <h1 id="intro-title">
            AYRA
            <br />
            <span>AGRAWAL</span>
            <span className="title-dot">.</span>
          </h1>
          <p className="intro-description">
            I build <strong>backend systems</strong>,
            <br className="desktop-break" /> full-stack applications,
            <br className="desktop-break" /> and{" "}
            <strong>AI tools with evidence.</strong>
          </p>
        </div>
        <aside className="intro-status" aria-label="Current status">
          <span className="eyebrow">A little context</span>
          <p>
            CS + psychology
            <br />
            at <strong>Rutgers.</strong>
          </p>
          <p className="status-copy">
            Working on research software at CALC Lab and backend systems at
            Hack4Impact.
          </p>
          <div className="looking">
            <span className="status-dot" />
            Seeking Summer 2027 SWE internships
          </div>
          <div className="intro-links">
            <a href={links.github}>
              <PixelIcon name="github" />
              GitHub
            </a>
            <a href={links.linkedin}>
              <PixelIcon name="link" />
              LinkedIn
            </a>
          </div>
          <a className="resume-inline" href={links.resume}>
            View résumé <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </section>
      <section
        id="experience"
        className="section"
        aria-labelledby="experience-title"
      >
        <SectionTitle
          title="Experience"
          icon="work"
          description="Different settings. The same curiosity about how things work."
          count="04 ROLES"
        />
        <div className="timeline">
          {experience.map((e, i) => (
            <details className="role-row" key={e.org} open>
              <summary>
                <span className="timeline-node" aria-hidden="true" />
                <span className="role-icon">
                  <PixelIcon name={i === 2 ? "research" : "work"} />
                </span>
                <span className="role-summary">
                  <strong>{e.role}</strong>
                  <span className="role-org">{e.org}</span>
                  <span className="role-description">{e.text}</span>
                </span>
                <span className="role-meta">
                  <span>{e.date}</span>
                  <small>
                    {
                      [
                        "Frontend engineering",
                        "Nonprofit technology",
                        "Cognitive science",
                        "Mobile development",
                      ][i]
                    }
                  </small>
                </span>
                <span className="disclosure-arrow" aria-hidden="true">
                  ⌃
                </span>
              </summary>
              <div className="role-expanded">
                <ul className="tags" aria-label={`${e.org} focus areas`}>
                  {roleTools[i].map((t) => (
                    <li key={t}>
                      <span aria-hidden="true">·</span>
                      {t}
                    </li>
                  ))}
                </ul>
                {i === 3 ? (
                  <a
                    className="inline-link"
                    href="https://github.com/ayraagrawal-byte/rumad-incubator-2026"
                  >
                    RUThrift repository ↗
                  </a>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section id="work" className="section" aria-labelledby="projects-title">
        <SectionTitle
          title="Selected projects"
          icon="layers"
          description="A closer look at the implementation—and the trade-offs."
          count="04 PROJECTS"
        />
        <div className="project-grid">
          {projects.map((p) => (
            <article key={p.slug} className="project-card">
              <div className={`card-preview preview-${p.slug}`}>
                {p.slug === "tracelab" ? (
                  <SystemFigure />
                ) : (
                  <Image
                    src={
                      p.slug === "recall"
                        ? "/recall-workspace.jpg"
                        : "/spoton-home.jpg"
                    }
                    width={p.slug === "recall" ? 1280 : 2560}
                    height={p.slug === "recall" ? 720 : 1440}
                    alt={
                      p.slug === "recall"
                        ? "Recall public controlled demo showing a source-linked answer"
                        : "SpotOn collaborative project public demo homepage"
                    }
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                )}
                <span className="preview-label">
                  {p.slug === "tracelab"
                    ? "Architecture sketch"
                    : "Authentic demo capture"}
                </span>
              </div>
              <div className="card-content">
                <span className="eyebrow">{p.category}</span>
                <h3>
                  {p.name}
                  <a href={p.github} aria-label={`Open ${p.name} repository`}>
                    <PixelIcon name="arrow" />
                  </a>
                </h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="contribution">
                  <strong>
                    {p.slug === "spoton"
                      ? "Team contribution"
                      : "My contribution"}
                  </strong>
                  <p>{p.role}</p>
                </div>
                <p className="project-caveat">
                  {p.slug === "tracelab"
                    ? "Reported local test: ~500 req/s steady-state API enqueue, 96 ms p95, 100 clients. Not production persistence throughput."
                    : p.slug === "recall"
                      ? "Public demo: curated content and recorded execution. Full RAG backend runs locally."
                      : "Three-person team; teammate-owned repository. Physical-camera accuracy and device acceptance remain unverified."}
                </p>
                <div className="card-actions">
                  {p.slug !== "spoton" ? (
                    <Link href={`/work/${p.slug}`}>
                      <PixelIcon name="code" />
                      Case study
                    </Link>
                  ) : null}
                  {p.demo ? (
                    <a href={p.demo}>
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <a href={p.github}>GitHub ↗</a>
                </div>
              </div>
            </article>
          ))}
          <article className="project-card">
            <div className="card-preview ruthrift-preview">
              <div
                className="market-diagram"
                aria-label="RUThrift concept diagram, not an application screenshot"
              >
                <span className="market-school">
                  RUTGERS / STUDENT MARKETPLACE
                </span>
                <strong>
                  RU<span>Thrift</span>
                </strong>
                <div>
                  <span>profiles</span>
                  <span>auth</span>
                  <span>listings</span>
                </div>
                <small>React Native → Express → Supabase</small>
              </div>
              <span className="preview-label">
                Project concept / no verified screenshot
              </span>
            </div>
            <div className="card-content">
              <span className="eyebrow">
                Mobile development · RUMAD Incubator
              </span>
              <h3>
                RUThrift
                <a
                  href="https://github.com/ayraagrawal-byte/rumad-incubator-2026"
                  aria-label="Open RUThrift repository"
                >
                  <PixelIcon name="arrow" />
                </a>
              </h3>
              <p>
                A Rutgers-exclusive marketplace developed through the Mobile App
                Development Incubator on a four-person team.
              </p>
              <ul className="tags">
                {["React Native", "Expo", "Supabase", "PostgreSQL"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="contribution">
                <strong>My contribution</strong>
                <p>
                  Authentication, profiles, and backend integration, including
                  email verification flows.
                </p>
              </div>
              <p className="project-caveat">
                The public snapshot includes mock listing and chat flows; it
                does not establish a complete persisted messaging backend.
              </p>
              <div className="card-actions">
                <a href="https://github.com/ayraagrawal-byte/rumad-incubator-2026">
                  Explore repository ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="research" className="section research-section">
        <SectionTitle
          title="Research"
          icon="research"
          description="Software that helps make a measurement trustworthy."
        />
        <div className="research-panel">
          <div>
            <span className="eyebrow">
              CALC Lab / Rutgers Center for Cognitive Science
            </span>
            <h3>
              From behavioral data
              <br />
              to a reliable pipeline.
            </h3>
          </div>
          <div>
            <p>
              I build R pipelines that extract measurement periods, frame
              onsets, and looking durations for infant cognition research, with
              automated validation to flag inconsistent coding files.
            </p>
            <p>
              I also develop PsychoPy experiments and help configure, test, and
              maintain Tobii eye-tracking systems. My interests connect
              cognitive science, human-computer interaction, and software that
              makes research more reproducible.
            </p>
            <ul className="tags">
              <li>Infant numerical cognition</li>
              <li>R automation</li>
              <li>Eye tracking</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <SectionTitle
          title="Technical toolkit"
          icon="code"
          description="The tools I use across projects, research, and coursework."
        />
        <div className="skill-grid">
          {skills.map((group, i) => (
            <div className={`skill-group group-${i}`} key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((s) => (
                  <li key={s}>
                    <span className="skill-dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="section about-section">
        <SectionTitle title="About me" icon="research" />
        <div className="about-grid">
          <p>
            I’m studying computer science and psychology because I’m interested
            in both the systems we build and the people who use them. I like
            working through difficult details, understanding what a system
            actually guarantees, and making the result easier to use.
          </p>
          <div className="education">
            <strong>Rutgers University–New Brunswick</strong>
            <span>B.S. Computer Science · B.A. Psychology</span>
            <span>Data Science minor · Expected May 2029</span>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <div>
          <span className="eyebrow">Open to Summer 2027 opportunities</span>
          <h2>Have something in mind?</h2>
          <p>I’d like to hear about it.</p>
        </div>
        <div className="contact-links">
          <a href={links.email}>
            <PixelIcon name="mail" />
            ayraagrawal@gmail.com
            <PixelIcon name="arrow" />
          </a>
          <div>
            <a href={links.github}>GitHub ↗</a>
            <a href={links.linkedin}>LinkedIn ↗</a>
            <a href={links.resume}>Résumé ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
