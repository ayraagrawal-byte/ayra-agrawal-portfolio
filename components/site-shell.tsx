import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { links } from "@/lib/content";
export function Header() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Ayra Agrawal home">
        ayra agrawal
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Projects</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="shell site-footer">
      <span>© {new Date().getFullYear()} Ayra Agrawal</span>
      <span>
        Thanks for stopping by.
      </span>
      <a href={links.github}>
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}
export function Arrow() {
  return (
    <svg
      className="arrow-icon"
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 13 13 3M3 3h10v10" />
    </svg>
  );
}
export function DownloadIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </svg>
  );
}
export function SocialIcon({ name }: { name: "github" | "linkedin" }) {
  return name === "github" ? (
    <svg className="social-icon" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.52-1.3-1.26-1.65-1.26-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.72-1.5-2.5-.29-5.14-1.25-5.14-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.62 1.55.24 2.7.12 2.98.72.8 1.16 1.8 1.16 3.02 0 4.33-2.64 5.28-5.16 5.56.4.35.77 1.04.77 2.1v3.09c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z" />
    </svg>
  ) : (
    <svg className="social-icon" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.25Z" />
    </svg>
  );
}
