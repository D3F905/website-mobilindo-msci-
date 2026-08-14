import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const heading = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading-sora",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-inter",
  display: "swap",
});

const TITLE = "MSCI Mobilindo | Rental Mobil Bandung";
const DESCRIPTION =
  "Rental mobil MSCI Mobilindo di Bandung. Pilihan kendaraan Matic dan Manual dengan booking mudah melalui WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
