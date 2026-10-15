import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CommandMenu } from "./command-menu";
export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Ayra Agrawal home">
        <span className="brand-mark" aria-hidden="true">
          a<span>.</span>
        </span>
        AYRA AGRAWAL
      </Link>
      <nav aria-label="Main navigation">
        <Link className="header-link" href="/#work">
          Work
        </Link>
        <Link className="header-link" href="/resume">
          Résumé
        </Link>
        <CommandMenu />
        <ThemeToggle />
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer shell">
      <span>© {new Date().getFullYear()} Ayra Agrawal</span>
      <span>Always a work in progress.</span>
      <a href="https://github.com/ayraagrawal-byte/ayra-agrawal-portfolio">
        Source ↗
      </a>
    </footer>
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
