import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/content";
import { Arrow } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ayra Agrawal’s software engineering and cognitive science research experience at Rutgers.",
};

export default function ExperiencePage() {
  return (
    <main id="main" className="shell detail-page">
      <header className="detail-hero">
        <p className="eyebrow">Teams, research & practice</p>
        <h1>Experience<em>.</em></h1>
        <p className="large-copy">
          I build software with teams and for research settings—thinking about
          the data, the people using it, and what “done” actually means.
        </p>
      </header>
      <div className="experience-detail-list">
        {experience.map((item) => (
          <article id={item.slug} key={item.slug} className="experience-detail-card">
            <div className="experience-detail-heading">
              <p className="date">{item.date}</p>
              <p className="status-label">{item.status}</p>
            </div>
            <h2>{item.org}</h2>
            <p className="role">{item.role}</p>
            <p>{item.context}</p>
            <h3>What I worked on</h3>
            <ul>
              {item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
            <ul className="method-list" aria-label={`${item.org} technologies and methods`}>
              {item.methods.map((method) => <li key={method}>{method}</li>)}
            </ul>
            {item.details.length ? (
              <details className="experience-more">
                <summary>Scope, curriculum & status <span aria-hidden="true">+</span></summary>
                <div className="experience-more-grid">
                  {item.details.map((detail) => (
                    <section key={detail.title}>
                      <h3>{detail.title}</h3>
                      <p>{detail.text}</p>
                    </section>
                  ))}
                </div>
              </details>
            ) : null}
            {item.links.length ? (
              <div className="project-links">
                {item.links.map((link) => link.href.startsWith("/") ? (
                  <Link className="text-link" href={link.href} key={link.href}>{link.label} <Arrow /></Link>
                ) : (
                  <a className="text-link external-link" href={link.href} key={link.href}>{link.label} <Arrow /></a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <nav className="case-next" aria-label="Continue exploring">
        <Link className="text-link" href="/#work">Selected projects <Arrow /></Link>
        <Link className="text-link" href="/research/calc-lab">CALC research <Arrow /></Link>
      </nav>
    </main>
  );
}
