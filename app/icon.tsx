import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * No real MSCI Mobilindo logo asset exists yet. This is a minimal
 * technical placeholder (brand initial on the site's own accent color) so
 * the browser tab has a working icon instead of a broken request — not a
 * designed logo. Replace with the real brand mark once available.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e50914",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
