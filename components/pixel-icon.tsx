export type IconName =
  | "work"
  | "code"
  | "research"
  | "arrow"
  | "github"
  | "mail"
  | "layers"
  | "link";
const paths: Record<IconName, string> = {
  work: "M8 5V3h8v2M3 7h18v13H3V7Zm0 5h18M10 12v3h4v-3",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18",
  research: "M9 3h6m-5 0v6l-6 10v2h16v-2L14 9V3M7 16h10",
  arrow: "M5 19 19 5M5 5h14v14",
  github:
    "M8 20c-4 1-4-2-6-2m12 4v-4c0-1 0-2-1-2 4 0 7-2 7-6 0-2-1-3-2-4 0-1 0-3-1-4-2 0-3 1-4 1a12 12 0 0 0-6 0C6 2 5 1 3 2c-1 1-1 3-1 4-1 1-1 2-1 4 0 4 3 6 7 6-1 1-1 2-1 3v3",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  layers: "m12 2 10 6-10 6L2 8l10-6ZM2 12l10 6 10-6M2 16l10 6 10-6",
  link: "M10 14 14 10m-6 6-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 10a4 4 0 0 0 6 0l5-5a4 4 0 0 0-6-6l-2 2",
};
export function PixelIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={`pixel-icon ${className}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
