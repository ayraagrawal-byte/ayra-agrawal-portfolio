import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3107"),
  ),
  title: {
    default: "Ayra Agrawal — Software Engineer",
    template: "%s · Ayra Agrawal",
  },
  description:
    "Rutgers CS and psychology student building backend systems, full-stack applications, and AI products. Selected work: TraceLab, Recall, and SpotOn.",
  openGraph: {
    title: "Ayra Agrawal — Software Engineer",
    description:
      "Backend systems, full-stack applications, and AI tools with evidence.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
const themeScript = `try{var t=localStorage.getItem('ayra-theme-v1');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{}`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
