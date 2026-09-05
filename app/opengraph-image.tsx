import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "Waypoint — Financial AI Product Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#07111f",
          color: "#eaf1f8",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#5bb7ff",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.2em",
              color: "#9fb1c5",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.tagline}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ fontSize: "88px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Waypoint
          </span>
          <span style={{ fontSize: "30px", color: "#9fb1c5" }}>
            Financial AI Product Portfolio
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
