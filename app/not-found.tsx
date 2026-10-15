import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <span className="eyebrow">404 / Page not found</span>
      <h1>A loose end.</h1>
      <p>
        This page isn’t here. The selected projects are a good place to start.
      </p>
      <Link className="text-link" href="/#work">
        Back to selected work →
      </Link>
    </main>
  );
}
