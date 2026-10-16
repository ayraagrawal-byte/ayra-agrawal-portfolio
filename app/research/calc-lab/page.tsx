import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "CALC Lab research engineering",
  description: "A public-safe case study of Ayra Agrawal’s research software and data-quality work at Rutgers CALC Lab.",
};

const pipeline = [
  ["01", "Behavioral coding exports", "Study timing and coded looking behavior"],
  ["02", "R processing", "Measurement periods, frame onsets, and durations"],
  ["03", "Validation", "Checks surface missing or inconsistent records"],
  ["04", "Review-ready tables", "Structured outputs for the research team"],
] as const;

export default function CalcLabCaseStudy() {
  return (
    <main id="main" className="shell case-main research-case">
      <Link className="back-link" href="/experience#calc-lab">← Experience</Link>
      <header className="case-hero">
        <span className="eyebrow">Research engineering · Cognitive science</span>
        <h1>Careful data makes careful research possible<em>.</em></h1>
        <p>
          At Rutgers’ Cognition and Learning Center, I build and support the
          software paths between an experiment, a behavioral coding file, and
          data the research team can inspect with confidence.
        </p>
        <div className="case-meta">
          <div><strong>Role</strong>Undergraduate Research Assistant & IT Team Member</div>
          <div><strong>Methods</strong>R · PsychoPy · Tobii Pro · DeTox · Datavyu</div>
          <div><strong>Status</strong>Current role · EyeSpy is ongoing</div>
        </div>
      </header>
      <div className="case-layout">
        <aside aria-label="Case study sections">
          <a href="#environment">Research environment</a>
          <a href="#pipeline">Data pipeline</a>
          <a href="#validation">Quality checks</a>
          <a href="#experiments">Experiment systems</a>
          <a href="#lessons">Engineering lessons</a>
        </aside>
        <div className="case-body">
          <section id="environment">
            <h2>Engineering inside a research workflow.</h2>
            <p>
              The lab studies developmental and numerical cognition. My work
              supports how behavioral observations are collected, transformed,
              checked, and prepared for research review. That means treating
              measurement definitions and edge cases as part of the software—not
              as cleanup after it runs.
            </p>
            <p className="notice">
              This page describes public-safe engineering methods only. It does
              not include participant information, recordings, internal lab
              code, study stimuli, or unpublished findings.
            </p>
          </section>
          <section id="pipeline">
            <h2>From coded behavior to inspectable data.</h2>
            <figure className="research-pipeline">
              <ol>
                {pipeline.map(([number, title, description]) => (
                  <li key={number}><span>{number}</span><strong>{title}</strong><small>{description}</small></li>
                ))}
              </ol>
              <figcaption>A public-safe process diagram; no participant data or internal code is shown.</figcaption>
            </figure>
            <p>
              I engineered R workflows that extract study measurement periods,
              frame-onset timing, infant looking-duration measures, and
              looking-away measures from behavioral coding exports. The work
              has covered 227+ coding files—approximately 300 datasets—while
              preserving a path back to the source record for review.
            </p>
          </section>
          <section id="validation">
            <h2>Make inconsistencies visible.</h2>
            <p>
              Automated checks flag timing or coding inconsistencies before
              downstream analysis. The useful outcome is not a claim that data
              becomes infallible; it is a repeatable way to surface records that
              need a researcher’s attention and to reduce silent manual error.
            </p>
            <p>
              I distinguish my pipeline and validation contributions from the
              lab’s existing protocols, study designs, coding systems, and
              collaborative research infrastructure.
            </p>
          </section>
          <section id="experiments">
            <h2>Work at collection time, too.</h2>
            <p>
              I configure, test, and maintain Tobii eye-tracking hardware and
              DeTox workflows, and develop PsychoPy experiments. I also code
              behavioral observations in Datavyu. This connects data processing
              decisions to the practical conditions under which measurements
              are collected.
            </p>
            <h3>EyeSpy — ongoing</h3>
            <p>
              I am building and testing PsychoPy software for EyeSpy, a
              number-word study. The project is explicitly ongoing; this case
              study does not claim results or expose experimental materials.
            </p>
          </section>
          <section id="lessons">
            <h2>What the work has taught me.</h2>
            <p>
              Research software rewards the same habits as reliable backend
              work: define contracts, retain provenance, validate boundaries,
              and make failure states observable. It also adds a responsibility
              that matters deeply—protecting participants and keeping technical
              summaries separate from scientific conclusions.
            </p>
          </section>
          <nav className="case-next" aria-label="Continue exploring">
            <Link className="text-link" href="/experience">All experience <Arrow /></Link>
            <Link className="text-link" href="/work/tracelab#main">TraceLab case study <Arrow /></Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
