import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { links } from "@/lib/content";
export function Header() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Ayra Agrawal home">
        ayra agrawal <Star />
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
export function Star() {
  return (
    <svg
      className="star"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    >
      <path d="M24 5v38M7.5 14.5l33 19M7.5 33.5l33-19" />
    </svg>
  );
}
