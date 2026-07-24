import { ImageResponse } from "next/og";

export const alt = "Nipun Chaudhari — AI & Data Science Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            backgroundImage: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Nipun Chaudhari
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#A1A1AA", marginTop: 24 }}>
          AI Engineer · GenAI Developer · AI Researcher
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 120,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #6366F1 0%, #22D3EE 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
