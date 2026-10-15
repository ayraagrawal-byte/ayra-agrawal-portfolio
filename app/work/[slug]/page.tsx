import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { SystemFigure } from "@/components/system-figure";
import { TechLogo } from "@/components/tech-stack";
export function generateStaticParams() {
  return [{ slug: "tracelab" }, { slug: "recall" }];
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} — Engineering case study` : "Project",
    description: p?.description,
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || slug === "spoton") notFound();
  const trace = slug === "tracelab";
  return (
    <main id="main" className={`shell case-main case-${slug}`}>
      <Link className="back-link" href="/#work">
        ← All selected work
      </Link>
      <header className="case-hero">
        <span className="eyebrow">A closer look · {project.category}</span>
        <h1>
          {project.name}
          <em>.</em>
        </h1>
        <p>
          {project.title} {project.description}
        </p>
        <div className="case-meta">
          <div>
            <strong>My work</strong>
            {trace
              ? "Backend API, worker, infrastructure"
              : "Full-stack workspace & RAG pipeline"}
          </div>
          <div>
            <strong>Core technologies</strong>
            <ul className="stack">
              {project.stack.map((tool) => (
                <li key={tool}>
                  <TechLogo name={tool} />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Explore</strong>
            <a href={project.github}>Source ↗</a>
            {project.demo ? (
              <a className="button button-apricot" href={project.demo}>
                Controlled demo ↗
              </a>
            ) : null}
          </div>
        </div>
      </header>
      <div className="case-layout">
        <aside aria-label="Case study sections">
          <a href="#problem">The problem</a>
          <a href="#architecture">Architecture</a>
          <a href="#decisions">Engineering decisions</a>
          <a href="#limits">Evidence & limitations</a>
          <a href="#source">Source references</a>
        </aside>
        <div className="case-body">
          <section id="problem">
            <h2>
              {trace
                ? "What does “accepted” actually mean?"
                : "Keep the answer close to the evidence."}
            </h2>
            <p>
              {trace
                ? "An ingestion API has two responsibilities that need not finish at the same time: accepting a payload and writing it durably. TraceLab explores that separation with a FastAPI service, a Redis queue, and a PostgreSQL persistence worker."
                : "Research questions rarely stop at an answer. A useful workspace also needs to show the passage behind it, preserve the source page, and support the surrounding work of collecting papers and taking notes. Recall brings those steps into one interface."}
            </p>
            <p>{project.role}</p>
          </section>
          {!trace ? (
            <figure className="case-screenshot">
              <Image
                src="/recall-workspace.jpg"
                alt="Authentic screenshot of the Recall public controlled demo"
                width={1280}
                height={720}
                sizes="(max-width: 640px) 100vw, 800px"
              />
              <figcaption className="caption">
                Captured October 15, 2026. Fictional sample papers and scripted
                responses.
              </figcaption>
            </figure>
          ) : null}
          <section id="architecture">
            <h2>Follow the data.</h2>
            <SystemFigure kind={trace ? "tracelab" : "recall"} />
            {trace ? (
              <>
                <p>
                  The asynchronous endpoint returns <code>202 Accepted</code>{" "}
                  after placing a serialized trace in Redis. A separate worker
                  consumes that queue and uses SQLAlchemy to commit trace
                  records to PostgreSQL. Trace reads can use Redis caching,
                  while span records preserve parent-child relationships.
                </p>
                <p>
                  Docker Compose defines four services: API, worker, PostgreSQL,
                  and Redis. The database has a health check; API and worker
                  metrics make the two sides of ingestion observable.
                </p>
              </>
            ) : (
              <>
                <p>
                  PDF text is extracted and split into chunks. Sentence
                  Transformer embeddings are stored in pgvector. Semantic
                  retrieval and expanded-query BM25 produce candidates that are
                  merged and reranked with a cross-encoder before generation.
                </p>
                <p>
                  FastAPI streams local Ollama output to a Next.js workspace.
                  Citations identify source filenames and pages, so the evidence
                  viewer can bring the relevant PDF passage into the reading
                  workflow.
                </p>
              </>
            )}
          </section>
          <section id="decisions">
            <h2>Choices and their costs.</h2>
            {trace ? (
              <>
                <h3>Queue first, persist independently</h3>
                <p>
                  Moving database writes out of the request path reduces the
                  work the API must complete before replying. It also means API
                  success alone cannot prove persistence. Queue depth, worker
                  processing, and database outcomes need their own measurements.
                </p>
                <h3>Duplicate handling at the database boundary</h3>
                <p>
                  The worker rolls back integrity errors and records duplicate
                  counts. This prevents a duplicate write from creating a second
                  trace, but an integrity error is not a complete retry or
                  recovery strategy.
                </p>
                <h3>One small deployment unit</h3>
                <p>
                  Docker Compose makes the four-service system straightforward
                  to run together on an EC2 instance. It is a practical project
                  deployment, with shared-host availability and scaling
                  constraints.
                </p>
              </>
            ) : (
              <>
                <h3>Lexical and semantic retrieval together</h3>
                <p>
                  Vector search finds related meaning; BM25 preserves an
                  additional route for lexical matches. Reranking adds another
                  inference step, trading computation for a narrower set of
                  passages to put into the generation prompt.
                </p>
                <h3>Make citations usable</h3>
                <p>
                  Returning a source identifier is only part of the workflow.
                  Linking an answer to a PDF page makes the supporting material
                  directly inspectable. Grounded prompting and citation parsing
                  help constrain responses, but do not guarantee factual
                  correctness.
                </p>
                <h3>Separate the demo from the local system</h3>
                <p>
                  The public Vercel frontend uses curated content and a
                  sanitized recording of a real RAG execution. This makes the
                  pipeline inspectable without operating public uploads, an
                  exposed research database, or hosted model inference.
                </p>
                <p>
                  <a href="https://recall-research-workspace-demo.vercel.app/inside-recall">
                    Inside Recall
                  </a>{" "}
                  lets a visitor follow that recorded run through retrieval,
                  reranking, context construction, and generation. It makes the
                  work behind an answer visible without presenting the replay as
                  live inference.
                </p>
              </>
            )}
          </section>
          <section id="limits">
            <h2>Evidence, with its boundaries.</h2>
            {trace ? (
              <>
                <p className="notice">
                  The README reports a local Docker / Locust test at 100
                  concurrent clients: 14,109 requests, 484.12 requests/second
                  average, approximately 500 requests/second steady state, 96 ms
                  p95 API latency, and 0% HTTP failures. These are API
                  ingestion/enqueue results, not production traffic or database
                  persistence throughput. I have not independently rerun that
                  benchmark here.
                </p>
                <p>
                  The current worker uses Redis <code>BLPOP</code>, removing a
                  queued item before the database transaction finishes. There is
                  no visible acknowledgment, dead-letter queue, or retry loop in
                  that worker. A worker failure after removal can lose the item.
                  Redis persistence policy and end-to-end delivery guarantees
                  need further work before production use.
                </p>
                <p>
                  The repository includes API integration tests and GitHub
                  Actions configuration. The README documents an AWS EC2
                  deployment; this case study does not claim a currently
                  reachable public API.
                </p>
              </>
            ) : (
              <>
                <p className="notice">
                  The public site is a controlled frontend demonstration. Inside
                  Recall replays a recorded local execution using fictional
                  sample PDFs. It does not run live inference or accept public
                  uploads. The full backend runs locally.
                </p>
                <p>
                  The repository has separate <code>main</code>,{" "}
                  <code>recall-2.0</code>, and <code>recall-demo</code>{" "}
                  branches. The newer workspace implementation is on{" "}
                  <code>recall-2.0</code>; the README’s local setup explicitly
                  selects it.
                </p>
                <p>
                  Retrieval and generation depend on the documents and local
                  models used. Source citations help a reader verify an answer;
                  they do not establish universal answer accuracy. Public
                  multi-user access and secured live inference remain future
                  work.
                </p>
              </>
            )}
          </section>
          <section id="source">
            <h2>Inspect the implementation.</h2>
            <p>
              Claims in this case study were cross-checked against the resume
              and repository source on October 15, 2026. Repository
              documentation reports benchmark and deployment history; source
              inspection establishes the implementation choices described above.
            </p>
            <ul>
              {trace ? (
                <>
                  <li>
                    <a href={`${project.github}/blob/main/app/worker.py`}>
                      Worker persistence and duplicate handling
                    </a>
                  </li>
                  <li>
                    <a href={`${project.github}/blob/main/docker-compose.yml`}>
                      Four-service Docker Compose configuration
                    </a>
                  </li>
                  <li>
                    <a href={`${project.github}/blob/main/tests/test_api.py`}>
                      API integration tests
                    </a>
                  </li>
                  <li>
                    <a href={`${project.github}#performance-testing`}>
                      Reported local load-test results
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href={`${project.github}/tree/recall-2.0`}>
                      Workspace and live-system branch
                    </a>
                  </li>
                  <li>
                    <a href={`${project.github}/blob/main/backend/app/rag.py`}>
                      Generation prompting, streaming, and citations
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${project.github}/blob/main/backend/app/hybrid_retrieval.py`}
                    >
                      Hybrid retrieval implementation
                    </a>
                  </li>
                  <li>
                    <a href="https://recall-research-workspace-demo.vercel.app/inside-recall">
                      Inside Recall execution replay
                    </a>
                  </li>
                </>
              )}
            </ul>
          </section>
          <nav className="case-next" aria-label="More projects">
            <Link className="text-link" href="/#work">
              ← Back to my projects
            </Link>
            <Link
              className="text-link"
              href={`/work/${trace ? "recall" : "tracelab"}#main`}
            >
              Next: {trace ? "Recall" : "TraceLab"} ↗
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
