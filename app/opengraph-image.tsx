import { ImageResponse } from "next/og";
export const alt =
  "Hi, I’m Ayra. CS + Psychology at Rutgers. Backend systems, AI, and a lot of questions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FAF7F2",
        color: "#49324F",
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
        <span>ayra agrawal ✳</span>
        <span style={{ fontSize: 20 }}>CS + Psychology @ Rutgers</span>
      </div>
      <div
        style={{
          fontSize: 78,
          lineHeight: 1.16,
          letterSpacing: "-2px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            background: "#DCCAF4",
            padding: "12px 25px",
            borderRadius: 24,
          }}
        >
          hi, i’m ayra.
        </span>
        <span style={{ fontSize: 35, marginTop: 25 }}>
          i build things, ask lots of questions,
        </span>
        <span style={{ fontSize: 35 }}>
          and love figuring out how they work.
        </span>
      </div>
      <div
        style={{
          fontSize: 17,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Backend systems · Full-stack · AI</span>
        <span
          style={{
            background: "#F5B992",
            padding: "8px 16px",
            borderRadius: 20,
          }}
        >
          Summer 2027 internships
        </span>
      </div>
    </div>,
    size,
  );
}
