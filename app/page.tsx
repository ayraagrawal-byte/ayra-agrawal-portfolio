import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/site-shell";
import { SystemFigure } from "@/components/system-figure";
import { projects, experience, links } from "@/lib/content";
export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-meta">
          <span className="eyebrow">Software engineer · Rutgers ’29</span>
          <span className="availability">
            <span className="status-dot" />
            Seeking Summer 2027 internships
          </span>
        </div>
        <h1 id="hero-title">
          Systems, software,
          <br />
          and the <em>people</em>
          <br />
          on the other side.
        </h1>
        <div className="hero-bottom">
          <p>
            I’m Ayra, a CS and psychology student at Rutgers. I build backend
            systems, full-stack applications, and AI products—and like
            understanding what happens beneath the interface.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={links.resume}>
              View résumé <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>New Brunswick, NJ</span>
          <div>
            <a href={links.github}>
              GitHub <Arrow />
            </a>
            <a href={links.linkedin}>
              LinkedIn <Arrow />
            </a>
          </div>
          <span className="scroll-note">A few things I’ve built ↓</span>
        </div>
      </section>
      <section
        id="work"
        className="work-section shell"
        aria-labelledby="work-title"
      >
        <div className="section-head">
          <span className="eyebrow">01 / Selected work</span>
          <h2 id="work-title">
            From the request
            <br />
            to the <em>reason behind it.</em>
          </h2>
          <p>Three projects, three ways of thinking about a system.</p>
        </div>
        {projects.map((project) => (
          <article
            className={`project project-${project.slug}`}
            key={project.slug}
          >
            <div className="project-copy">
              <div className="project-kicker">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="stack" aria-label={`${project.name} technologies`}>
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.slug !== "spoton" ? (
                  <Link className="text-link" href={`/work/${project.slug}`}>
                    Read the case study <Arrow />
                  </Link>
                ) : (
                  <a className="text-link" href={project.demo}>
                    Explore demo <Arrow />
                  </a>
                )}
                <a href={project.github}>
                  GitHub <Arrow />
                </a>
              </div>
            </div>
            <div className="project-visual">
              {project.slug === "tracelab" ? (
                <>
                  <SystemFigure />
                  <div className="metric-strip">
                    <div>
                      <strong>
                        ~500<span>req/s</span>
                      </strong>
                      <small>steady-state ingestion</small>
                    </div>
                    <div>
                      <strong>
                        96<span>ms</span>
                      </strong>
                      <small>p95 API latency</small>
                    </div>
                    <div>
                      <strong>100</strong>
                      <small>concurrent clients</small>
                    </div>
                  </div>
                  <p className="caption">
                    Reported local Docker / Locust test. API enqueue
                    performance, not database persistence throughput.
                  </p>
                </>
              ) : project.slug === "recall" ? (
                <>
                  <figure className="screenshot-frame">
                    <Image
                      src="/recall-workspace.jpg"
                      alt="Recall controlled demo showing a scripted answer and linked PDF source"
                      width={1280}
                      height={720}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <figcaption>
                      Recall · public workspace demonstration
                    </figcaption>
                  </figure>
                  <div className="evidence-note">
                    <span className="eyebrow">Inspect the answer</span>
                    <p>
                      Question → passages → context → generation → evidence.
                    </p>
                    <a href={project.demo}>
                      Open the controlled demo <Arrow />
                    </a>
                  </div>
                  <p className="caption">
                    Public demo uses curated content and recorded execution. The
                    complete RAG backend runs locally.
                  </p>
                </>
              ) : (
                <>
                  <figure className="screenshot-frame spoton-screenshot">
                    <Image
                      src="/spoton-home.jpg"
                      alt="SpotOn public demo landing page with squat recording, replay, and comparison workflow"
                      width={2560}
                      height={1440}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <figcaption>SpotOn · collaborative project</figcaption>
                  </figure>
                  <p className="caption">
                    Co-developed on a three-person team. Physical-camera
                    accuracy and device acceptance remain unverified.
                  </p>
                </>
              )}
            </div>
            <details className="project-detail">
              <summary>
                My contribution & engineering choices{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <p>
                  <strong>My contribution.</strong> {project.role}
                </p>
                <p>
                  <strong>Engineering choice.</strong> {project.decision}
                </p>
                {project.slug === "spoton" ? (
                  <p>
                    Repository owned by teammate shuknuk. Team capabilities are
                    described collectively; individual ownership of every
                    component is not implied.
                  </p>
                ) : null}
              </div>
            </details>
          </article>
        ))}
      </section>
      <section
        id="experience"
        className="experience-section shell"
        aria-labelledby="experience-title"
      >
        <div className="section-head">
          <span className="eyebrow">02 / Experience</span>
          <h2 id="experience-title">
            Useful work.
            <br />
            <em>Different contexts.</em>
          </h2>
        </div>
        <div className="experience-list">
          {experience.map((e) => (
            <article key={e.org}>
              <p className="date">{e.date}</p>
              <div>
                <h3>{e.org}</h3>
                <p className="role">{e.role}</p>
                <p>{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="research" className="research-section">
        <div className="shell research-grid">
          <div>
            <span className="eyebrow">03 / Research & engineering</span>
            <h2>
              Better questions.
              <br />
              <em>More reliable data.</em>
            </h2>
          </div>
          <div>
            <p className="large-copy">
              In cognitive science research, the details of the pipeline shape
              what you can learn from the result.
            </p>
            <p>
              At Rutgers’ Cognition and Learning Center, I work on behavioral
              data processing for infant cognition research. My R pipelines
              extract measurement periods, frame onsets, and looking durations,
              with automated validation to flag inconsistent coding files.
            </p>
            <p>
              I also develop PsychoPy experiments and help configure, test, and
              maintain Tobii eye-tracking systems. It’s engineering where
              repeatability and careful measurement matter.
            </p>
            <div className="research-tags">
              <span>R automation & validation</span>
              <span>Infant numerical cognition</span>
              <span>PsychoPy & eye tracking</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="about-section shell"
        aria-labelledby="about-title"
      >
        <div>
          <span className="eyebrow">04 / A little context</span>
          <h2 id="about-title">
            I like knowing
            <br />
            <em>why it works.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m studying computer science and psychology because I’m interested
            in both the systems we build and the people who use them.
          </p>
          <p>
            The projects that hold my attention usually have something difficult
            underneath: a queue that changes what “success” means, a search
            result that needs evidence, or a measurement that needs to be
            trusted. I like working through those details, then making the
            result easier to use.
          </p>
          <div className="education">
            <strong>Rutgers University–New Brunswick</strong>
            <span>B.S. Computer Science · B.A. Psychology</span>
            <span>Data Science minor · Expected May 2029</span>
          </div>
          <p className="skills-line">
            <strong>Working toolkit</strong>
            <br />
            Python, Java, C, TypeScript, SQL, R · React, Next.js, FastAPI ·
            PostgreSQL, Redis, Supabase · Docker, Git, AWS EC2
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="contact-section shell"
        aria-labelledby="contact-title"
      >
        <span className="eyebrow">05 / Get in touch</span>
        <h2 id="contact-title">
          Let’s build something
          <br />
          <em>worth understanding.</em>
        </h2>
        <a className="contact-email" href={links.email}>
          ayraagrawal@gmail.com <Arrow />
        </a>
        <div className="contact-bottom">
          <p>
            Open to software engineering internships
            <br />
            for Summer 2027.
          </p>
          <div>
            <a href={links.github}>
              GitHub <Arrow />
            </a>
            <a href={links.linkedin}>
              LinkedIn <Arrow />
            </a>
            <a href={links.resume}>
              Résumé <Arrow />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
