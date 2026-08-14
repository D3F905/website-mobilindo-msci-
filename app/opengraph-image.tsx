import { ImageResponse } from "next/og";

export const alt = "MSCI Mobilindo - Trusted Car Rent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * No real brand/vehicle photo exists yet (source-assets/ has not been
 * provided). This composes only verified text already used across the
 * site — brand name + tagline — rather than substituting a stock or
 * AI-generated vehicle image. Replace with a real photo once available.
 */
export default function Image() {
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
          backgroundColor: "#080808",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          MSCI MOBILINDO
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.3em",
            color: "#ff1e2d",
          }}
        >
          TRUSTED CAR RENT
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 120,
            height: 6,
            borderRadius: 0,
            backgroundColor: "#e50914",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
