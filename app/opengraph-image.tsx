import { ImageResponse } from "next/og";
export const alt =
  "Ayra Agrawal — Systems, software, and the people on the other side.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f5f2eb",
        color: "#252b27",
        width: "100%",
        height: "100%",
        padding: "65px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: 22,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>ayra agrawal.</span>
        <span style={{ fontSize: 16 }}>SOFTWARE ENGINEER · RUTGERS ’29</span>
      </div>
      <div
        style={{
          fontFamily: "serif",
          fontSize: 77,
          lineHeight: 1.06,
          letterSpacing: "-3px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Systems, software,</span>
        <span style={{ color: "#98462f" }}>and the people</span>
        <span>on the other side.</span>
      </div>
      <div
        style={{
          fontSize: 17,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Backend systems / Full-stack / AI</span>
        <span>Summer 2027 internships</span>
      </div>
    </div>,
    size,
  );
}
