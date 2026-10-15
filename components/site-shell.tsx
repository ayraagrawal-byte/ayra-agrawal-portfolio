import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { links } from "@/lib/content";
export function Header() {
  return (
    <header className="site-header shell">
      <Link href="/" className="wordmark" aria-label="Ayra Agrawal home">
        ayra agrawal<span aria-hidden="true">.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#toolkit">Toolkit</Link>
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
      <span>Software, with a human perspective.</span>
      <a href={links.github}>
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
