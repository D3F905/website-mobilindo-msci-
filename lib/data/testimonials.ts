export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  photo?: string;
  /** True for placeholder/demo content — Testimonials.tsx shows a small
   * visible disclosure on the page whenever any entry has this set, so
   * demo copy is never mistaken for real customer social proof. */
  isDemo?: boolean;
}

/**
 * Demo/placeholder content, deliberately generic (no fabricated ratings,
 * numbers, or named individuals — "Customer MSCI" is used for every entry
 * on purpose) and flagged via `isDemo: true`. Replace with real customer
 * testimonials as they come in: same shape, just drop `isDemo` (or set it
 * to false) once a quote is real. The layout doesn't need to change.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    quote: "Pengalaman sewa yang mudah, armada nyaman, dan proses booking cepat.",
    name: "Customer MSCI",
    role: "Rental Customer",
    isDemo: true,
  },
  {
    id: "demo-2",
    quote: "Booking cukup lewat WhatsApp, prosesnya jelas dan tidak ribet.",
    name: "Customer MSCI",
    role: "Rental Customer",
    isDemo: true,
  },
  {
    id: "demo-3",
    quote: "Mobil dalam kondisi baik saat serah terima, sesuai dengan yang dijanjikan.",
    name: "Customer MSCI",
    role: "Rental Customer",
    isDemo: true,
  },
  {
    id: "demo-4",
    quote: "Komunikasi dengan pihak MSCI Mobilindo responsif dan mudah dihubungi.",
    name: "Customer MSCI",
    role: "Rental Customer",
    isDemo: true,
  },
];
