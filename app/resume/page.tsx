import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Résumé",
  robots: { index: false, follow: true },
};
export default function Resume() {
  return (
    <main id="main" className="shell resume-page">
      <span className="eyebrow">Background & experience</span>
      <h1>
        Résumé<em>.</em>
      </h1>
      <p>A public copy of my resume, with my phone number removed.</p>
      <a className="button" href="/Ayra-Agrawal-Resume.pdf" download>
        Download PDF <span aria-hidden="true">↓</span>
      </a>
      <iframe src="/Ayra-Agrawal-Resume.pdf" title="Ayra Agrawal resume PDF" />
      <p>
        PDF viewer unavailable?{" "}
        <a className="text-link" href="/Ayra-Agrawal-Resume.pdf">
          Open the PDF directly ↗
        </a>
      </p>
    </main>
  );
}
