import { ImageResponse } from "next/og";
export const alt =
  "Ayra Agrawal — Backend systems. Full-stack applications. AI tools with evidence.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#20242d",
        color: "#edeef5",
        width: "100%",
        height: "100%",
        padding: 48,
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #50576c",
          borderRadius: 14,
          padding: 45,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 17,
            color: "#b0b7ca",
          }}
        >
          <span>SOFTWARE ENGINEERING</span>
          <span>RUTGERS ’29</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: 82,
            lineHeight: 1.05,
            letterSpacing: "-3px",
          }}
        >
          <span>AYRA</span>
          <span style={{ color: "#b7abff" }}>AGRAWAL.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
          }}
        >
          <span>Backend / Full-stack / AI</span>
          <span style={{ color: "#8dc8b9" }}>Summer 2027 internships</span>
        </div>
      </div>
    </div>,
    size,
  );
}
