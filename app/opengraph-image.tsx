import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f3f3f1",
          color: "#1d1d1f",
        }}
      >
        <div style={{ display: "flex", width: 56, height: 6, background: "#0e6464" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, letterSpacing: -2, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#5b5b5f", marginTop: 20 }}>
            {site.role}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
