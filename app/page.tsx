import Link from "next/link";
import Image from "next/image";
import { TechLogo, TechStack } from "@/components/tech-stack";
import { Arrow, Star } from "@/components/site-shell";
import { SystemFigure } from "@/components/system-figure";
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
            Welcome to my little corner of the internet
          </p>
          <h1 id="hero-title">
            hi, i’m ayra <Star />
          </h1>
          <p className="hero-thought">
            i build things, ask lots of questions, and love figuring out{" "}
            <em>how they work.</em>
          </p>
          <p className="hero-school">CS + Psychology @ Rutgers University</p>
          <p className="hero-description">
            Usually somewhere between backend systems, AI, full-stack
            development, and a question about human behavior.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Things I’ve built <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" href={links.resume}>
              My résumé <Arrow />
            </Link>
          </div>
          <div className="hero-social">
            <a href={links.github}>
              GitHub <Arrow />
            </a>
            <a href={links.linkedin}>
              LinkedIn <Arrow />
            </a>
            <span className="availability">
              <span className="status-dot" /> Seeking Summer 2027 SWE
              internships
            </span>
          </div>
        </div>
        <aside className="hero-note" aria-label="A little life update">
          <span className="note-tape" aria-hidden="true" />
          <span className="note-asterisk" aria-hidden="true">
            <Star />
          </span>
          <p className="note-heading">currently…</p>
          <p>{currently[0].text}</p>
          <a className="text-link" href="#about">
            A little more about me <Arrow />
          </a>
          <div className="note-foot">curiosity is a good place to start.</div>
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
            A few questions I followed
            <br className="desktop-break" /> far enough to build something.
          </p>
        </div>
        <article className="recall-feature" aria-labelledby="recall-title">
          <div className="recall-copy">
            <span className="project-kind">Full-stack + AI</span>
            <h3 id="recall-title">
              Recall <Star />
            </h3>
            <p className="project-intro">
              An answer is more useful when you can see where it came from.
            </p>
            <p>
              I built a research workspace that brings PDF reading, hybrid
              retrieval, and source-linked answers together.
            </p>
            <ProjectStack stack={recall.stack} name="Recall" />
            <div className="project-links">
              <a
                className="button button-apricot"
                href={recall.demo}
                aria-label="View Recall controlled demo"
              >
                View demo <Arrow />
              </a>
              <Link
                className="button button-outline"
                href="/work/recall#main"
                aria-label="Read Recall case study"
              >
                Read case study <Arrow />
              </Link>
              <a className="text-link" href={recall.github}>
                GitHub <Arrow />
              </a>
            </div>
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
          <div className="recall-foot">
            <p>
              <strong>My favorite part:</strong> Inside Recall lets you follow a
              recorded execution from question to evidence.
            </p>
            <p className="project-caveat">
              Public demo: curated content + recorded execution. Full RAG
              backend: runs locally.
            </p>
          </div>
        </article>
        <article className="trace-feature" aria-labelledby="trace-title">
          <div className="trace-copy">
            <p className="project-kind">Backend + infrastructure</p>
            <h3 id="trace-title">TraceLab</h3>
            <p className="project-intro">
              What happens after an API says “accepted”?
            </p>
            <p>
              I built a tracing backend to explore that handoff: take in a
              request, queue it, persist it, and measure each step.
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
              <a className="text-link" href={trace.github}>
                GitHub <Arrow />
              </a>
            </div>
          </div>
          <div className="trace-notebook">
            <span className="margin-note">a request’s little journey</span>
            <SystemFigure />
            <div className="benchmark-note">
              <strong>
                ~500 <span>requests/sec</span>
              </strong>
              <p>
                Reported local API ingestion / enqueue performance.
                <br />
                100 clients · 96 ms p95 · not production throughput.
              </p>
            </div>
            <p className="project-caveat">
              The interesting distinction: a fast enqueue is only one part of
              reliable processing.
            </p>
          </div>
        </article>
        <article className="spoton-feature" aria-labelledby="spoton-title">
          <figure className="spoton-snapshot screenshot-frame">
            <span className="snapshot-label">
              a HackRU weekend, three teammates
            </span>
            <Image
              src="/spoton-home.jpg"
              alt="SpotOn application with options to record a squat, replay movement, and compare attempts"
              width={2560}
              height={1440}
              sizes="(max-width: 800px) 90vw, 45vw"
            />
            <figcaption>The actual SpotOn application</figcaption>
          </figure>
          <div className="spoton-copy">
            <p className="project-kind">Computer vision + collaboration</p>
            <h3 id="spoton-title">
              SpotOn{" "}
              <span className="motion-mark" aria-hidden="true">
                ↝
              </span>
            </h3>
            <p className="project-intro">A closer look at how we move.</p>
            <p>
              My teammates and I built browser-based squat analysis at HackRU:
              pose landmarks, joint angles, skeleton replay, and attempt
              comparison.
            </p>
            <ProjectStack stack={spoton.stack} name="SpotOn" />
            <div className="project-links">
              <a className="button button-outline" href={spoton.demo}>
                Try the demo <Arrow />
              </a>
              <a className="text-link" href={spoton.github}>
                Team GitHub <Arrow />
              </a>
            </div>
            <details className="project-detail">
              <summary>
                What I worked on <span aria-hidden="true">+</span>
              </summary>
              <p>
                {spoton.role} {spoton.decision}
              </p>
              <p className="project-caveat">
                Three-person collaboration; repository owned by teammate
                shuknuk. Physical-camera accuracy and device acceptance remain
                unverified.
              </p>
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
          <h2 id="about-title">
            I tend to ask
            <br />
            <em>“but why?”</em>
          </h2>
          <p>
            That’s part of why I study computer science and psychology. I like
            understanding the systems we build and the people who use them.
          </p>
          <p>
            A queue, a research question, an unexpected result—I enjoy pulling
            at the thread, working through the details, and making what I learn
            useful.
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
          <p className="eyebrow">Learning by doing</p>
          <h2 id="experience-title">
            A few places
            <br />
            I’m <em>growing.</em>
          </h2>
          <p>
            Different teams, different problems,
            <br />
            plenty to figure out.
          </p>
          <Link className="text-link" href={links.resume}>
            The résumé version <Arrow />
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
            <span className="research-doodle" aria-hidden="true">
              ?
            </span>
            <p className="eyebrow">A different kind of debugging</p>
            <h2 id="research-title">
              Questions, experiments
              <br />& a lot of <em>R.</em>
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
              Automated validation helps flag inconsistencies before they travel
              further.
            </p>
            <p>
              I also develop PsychoPy experiments and help configure, test, and
              maintain Tobii eye-tracking systems. It’s taught me to pay
              attention to how a measurement was made.
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
            <em>in mind?</em> <Star />
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
            <a href={links.github}>
              GitHub <Arrow />
            </a>
            <a href={links.linkedin}>
              LinkedIn <Arrow />
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
