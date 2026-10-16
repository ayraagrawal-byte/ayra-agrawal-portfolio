import Link from "next/link";
import Image from "next/image";
import { TechLogo, TechStack } from "@/components/tech-stack";
import { Arrow, Star, SocialIcon, DownloadIcon } from "@/components/site-shell";
import { TraceArchitecture } from "@/components/system-figure";
import { projects, experience, links, currently } from "@/lib/content";

function ProjectStack({
  stack,
  name,
}: {
  stack: readonly string[];
  name: string;
}) {
  return (
    <ul className="stack" aria-label={`${name} technologies`}>
      {stack.map((tool) => (
        <li key={tool}>
          <TechLogo name={tool} />
          {tool}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [trace, recall, spoton] = projects;
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-intro">
          <p className="hello-note">
            Software engineer · Rutgers student
          </p>
          <h1 id="hero-title">
            hi, i’m ayra <Star />
          </h1>
          <p className="hero-thought">
            I build things, ask lots of questions, and love figuring out{" "}
            <em>how they work.</em>
          </p>
          <p className="hero-school">CS + Psychology @ Rutgers University</p>
          <p className="hero-description">
            I work on backend systems, full-stack applications, AI tools,
            and cognitive science research.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              View projects <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-outline" href="/Ayra-Agrawal-Resume.pdf" download>
              Download résumé <DownloadIcon />
            </a>
            <Link className="text-link resume-page-link" href={links.resume}>
              View résumé online <Arrow />
            </Link>
          </div>
          <div className="hero-social">
            <a className="external-link" href={links.github}>
              <SocialIcon name="github" /> GitHub <Arrow />
            </a>
            <a className="external-link" href={links.linkedin}>
              <SocialIcon name="linkedin" /> LinkedIn <Arrow />
            </a>
            <span className="availability">
              <span className="status-dot" /> Seeking Summer 2027 SWE
              internships
            </span>
          </div>
        </div>
        <aside className="hero-note" aria-label="A little life update">
          <p className="note-heading">currently…</p>
          <p>{currently[0].text}</p>
          <a className="text-link" href="#about">
            A little more about me <Arrow />
          </a>
          <div className="note-foot">Also learning at Blueprint and CALC Lab.</div>
        </aside>
      </section>

      <section
        id="work"
        className="work-section shell"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Some things I’ve made</p>
            <h2 id="work-title">
              Built with <em>curiosity.</em>
            </h2>
          </div>
          <p>
            Selected projects in AI, backend systems,
            <br className="desktop-break" /> and computer vision.
          </p>
        </div>
        <article className="recall-feature" aria-labelledby="recall-title">
          <div className="recall-copy">
            <span className="project-kind">Full-stack AI research workspace</span>
            <h3 id="recall-title">Recall</h3>
            <p className="project-intro">
              Ask questions about research PDFs.
            </p>
            <p>
              I built a workspace that combines keyword and vector search,
              reranking, and a local LLM to answer questions with source-linked citations.
            </p>
            <ProjectStack stack={recall.stack} name="Recall" />
            <div className="project-links">
              <a
                className="button"
                href={recall.demo}
                aria-label="View Recall controlled demo"
              >
                View demo <Arrow />
              </a>
              <Link
                className="text-link"
                href="/work/recall#main"
                aria-label="Read Recall case study"
              >
                Read case study <Arrow />
              </Link>
              <a className="text-link external-link" href={recall.github}>
                <SocialIcon name="github" /> GitHub <Arrow />
              </a>
            </div>
            <p className="project-note">Scripted public demo · AI pipeline runs locally.</p>
          </div>
          <div className="recall-window">
            <figure className="screenshot-frame">
              <Image
                src="/recall-workspace.jpg"
                alt="Recall workspace showing a research answer beside the PDF passage supporting it"
                width={1280}
                height={720}
                sizes="(max-width: 800px) 92vw, 58vw"
              />
              <figcaption>A look inside the public controlled demo</figcaption>
            </figure>
          </div>
        </article>
        <article className="trace-feature" aria-labelledby="trace-title">
          <div className="trace-copy">
            <p className="project-kind">Distributed tracing & observability backend</p>
            <h3 id="trace-title">TraceLab</h3>
            <p className="project-intro">
              Trace ingestion, processing, and storage.
            </p>
            <p>
              FastAPI queues traces in Redis; a background worker writes them
              to PostgreSQL. Docker, AWS EC2 deployment, metrics, and load
              testing are part of the project.
            </p>
            <ProjectStack stack={trace.stack} name="TraceLab" />
            <div className="project-links">
              <Link
                className="button"
                href="/work/tracelab#main"
                aria-label="Read TraceLab case study"
              >
                Read case study <Arrow />
              </Link>
              <a className="text-link external-link" href={trace.github}>
                <SocialIcon name="github" /> GitHub <Arrow />
              </a>
            </div>
          </div>
          <div className="trace-notebook">
            <TraceArchitecture />
          </div>
        </article>
        <article className="spoton-feature" aria-labelledby="spoton-title">
          <figure className="spoton-snapshot screenshot-frame">
            <span className="snapshot-label">
              HackRU · Built with two teammates
            </span>
            <Image
              src="/spoton-home.jpg"
              alt="SpotOn application with options to record a squat, replay movement, and compare attempts"
              width={2560}
              height={1440}
              sizes="(max-width: 800px) 90vw, 45vw"
            />
            <figcaption>SpotOn · Recording, replay, and comparison</figcaption>
          </figure>
          <div className="spoton-copy">
            <p className="project-kind">Computer vision fitness analyzer</p>
            <h3 id="spoton-title">SpotOn</h3>
            <p className="project-intro">Track and replay a squat workout.</p>
            <p>
              Built at HackRU with two teammates: browser-based pose tracking,
              squat analysis, and workout replay. Full pose recordings stay
              in IndexedDB; cloud features are optional.
            </p>
            <ProjectStack stack={spoton.stack} name="SpotOn" />
            <div className="project-links">
              <a className="button" href={spoton.demo}>
                Try the demo <Arrow />
              </a>
              <a className="text-link external-link" href={spoton.github}>
                <SocialIcon name="github" /> GitHub <Arrow />
              </a>
            </div>
            <details className="project-detail">
              <summary>
                What I worked on <span aria-hidden="true">+</span>
              </summary>
              <p>
                {spoton.role} {spoton.decision}
              </p>
              <p>Three-person collaboration; team repository owned by shuknuk.</p>
            </details>
          </div>
        </article>
        <div className="also-built">
          <span aria-hidden="true">↳</span>
          <p>
            <strong>Also, RUThrift:</strong> a campus marketplace I worked on
            with three teammates. My focus was authentication, profiles, and
            backend integration.
          </p>
          <a
            className="text-link"
            href="https://github.com/ayraagrawal-byte/rumad-incubator-2026"
          >
            Take a look <Arrow />
          </a>
        </div>
      </section>
      <TechStack />
      <section
        id="about"
        className="about-section shell"
        aria-labelledby="about-title"
      >
        <div className="about-copy">
          <p className="eyebrow">The person behind the projects</p>
          <h2 id="about-title">A little about me.</h2>
          <p>
            I study Computer Science and Psychology at Rutgers. I like
            understanding why systems work the way they do, whether I’m
            working on a backend or analyzing cognitive science data.
          </p>
          <p>
            I learn new technologies by building with them. Figuring out a
            difficult problem is usually the part that keeps me interested.
          </p>
          <div className="education">
            <strong>Rutgers University–New Brunswick</strong>
            <span>B.S. Computer Science · B.A. Psychology</span>
            <span>Data Science minor · Expected May 2029</span>
          </div>
        </div>
        <div className="currently-board">
          <h3>currently…</h3>
          {currently.map((item) => (
            <a href={item.href} key={item.label}>
              <span>{item.label}</span>
              <p>{item.text}</p>
              <Arrow />
            </a>
          ))}
        </div>
      </section>
      <section
        id="experience"
        className="experience-section shell"
        aria-labelledby="experience-title"
      >
        <div className="experience-heading">
          <p className="eyebrow">Teams & roles</p>
          <h2 id="experience-title">Experience.</h2>
          <p>
            Software development and research at Rutgers.
          </p>
          <Link className="text-link" href={links.resume}>
            View résumé <Arrow />
          </Link>
        </div>
        <div className="experience-list">
          {experience.map((e) => (
            <article key={e.org}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="date">{e.date}</p>
              <h3>{e.org}</h3>
              <p className="role">{e.role}</p>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="research"
        className="research-section"
        aria-labelledby="research-title"
      >
        <div className="shell research-grid">
          <div className="research-title">
            <p className="eyebrow">Cognitive science</p>
            <h2 id="research-title">
              Research at CALC Lab.
            </h2>
            <p>CALC Lab · Rutgers Center for Cognitive Science</p>
          </div>
          <div className="research-copy">
            <p className="large-copy">
              In infant cognition research, a small inconsistency in the data
              can change what you learn from it.
            </p>
            <p>
              I work on R pipelines that extract measurement periods, frame
              onsets, and looking durations from behavioral coding files.
              Automated validation flags inconsistencies before analysis.
            </p>
            <p>
              I also develop PsychoPy experiments and help configure, test, and
              maintain Tobii eye-tracking systems. That work involves checking
              how measurements are collected as well as how they’re processed.
            </p>
            <div className="research-tags">
              <span>R + validation</span>
              <span>PsychoPy</span>
              <span>Eye tracking</span>
              <span>Infant numerical cognition</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="contact-section shell"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">Always happy to say hello</p>
          <h2 id="contact-title">
            Have something
            <br />
            <em>in mind?</em>
          </h2>
          <p>
            I’m looking for Summer 2027 SWE internships.
            <br />
            I’d love to hear what you’re working on.
          </p>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={links.email}>
            ayraagrawal@gmail.com <Arrow />
          </a>
          <div>
            <a className="external-link" href={links.github}>
              <SocialIcon name="github" /> GitHub <Arrow />
            </a>
            <a className="external-link" href={links.linkedin}>
              <SocialIcon name="linkedin" /> LinkedIn <Arrow />
            </a>
            <Link href={links.resume}>
              Résumé <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
