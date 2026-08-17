import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface PriceRow {
  vehicle: string;
  category: string;
  image: string;
  msciPrice: string;
  competitorPrices: string[];
}

/**
 * Figures reflect the 2026-08-15 owner correction: updated competitor
 * prices for Pajero Sport, Veloz and Avanza, and the Veloz MSCI price
 * fixed from 300K to 400K (matches veloz-matic/veloz-manual in
 * lib/data/fleet.ts — "veloz" was the one stale outlier). See
 * docs/competitor-pricing.md for the full note on this correction and its
 * provenance (owner-provided figures, not re-run web research).
 *
 * Competitor identities are intentionally not shown here — this is a
 * price comparison, not competitor advertising. Alphard is deliberately
 * excluded: MSCI's unit's year/trim isn't confirmed yet, and competitor
 * listings vary hugely by trim, so a comparison would be misleading.
 *
 * Do not round or adjust these numbers to make MSCI look cheaper — Veloz
 * MSCI (400K) ties the lowest competitor figure exactly, which is why the
 * page copy says "salah satu harga paling kompetitif" (one of the most
 * competitive), never "termurah" (cheapest) or "nomor 1".
 */
const ROWS: PriceRow[] = [
  {
    vehicle: "Pajero Sport",
    category: "SUV Premium",
    image: "/images/fleet/pajero-sport.jpg",
    msciPrice: "850K",
    competitorPrices: ["1.100K", "1.200K", "1.250K", "1.300K"],
  },
  {
    vehicle: "Veloz",
    category: "MPV Premium",
    image: "/images/fleet/veloz-matic.jpg",
    msciPrice: "400K",
    competitorPrices: ["400K", "450K", "500K", "550K"],
  },
  {
    vehicle: "Avanza",
    category: "MPV Keluarga",
    image: "/images/fleet/avanza-facelift.jpg",
    msciPrice: "300K",
    competitorPrices: ["325K", "350K", "375K", "400K"],
  },
];

const COMPETITOR_LABELS = ["Kompetitor A", "Kompetitor B", "Kompetitor C", "Kompetitor D"];

const VALUE_STRIP = [
  { title: "Harga Transparan", description: "Tanpa biaya tersembunyi", Icon: TagIcon },
  { title: "Armada Terawat", description: "Bersih, nyaman, siap jalan", Icon: ShieldIcon },
  { title: "Proses Cepat", description: "Booking mudah via WhatsApp", Icon: BoltIcon },
  { title: "Layanan Responsif", description: "Siap membantu Anda", Icon: HeadsetIcon },
];

export default function PriceComparison() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] opacity-[0.08] sm:block"
        aria-hidden="true"
      >
        <Image
          src="/images/fleet/pajero-sport.jpg"
          alt=""
          fill
          className="object-cover object-left [mask-image:linear-gradient(to_left,black,transparent)]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
              N.03
            </span>
            <span className="h-px w-8 bg-white/20" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
              Compare &amp; Save
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl">
            Salah Satu Harga Paling Kompetitif di Bandung
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/60">
            Berdasarkan riset perbandingan harga sewa lepas kunci dari beberapa
            penyedia rental di Bandung, per Agustus 2026.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[32%] border-b border-white/10 pb-5 pr-4 align-bottom text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                  >
                    Kendaraan
                  </th>
                  <th
                    scope="col"
                    className="border-x border-b border-accent-500/40 bg-accent-500/[0.06] px-4 pb-5 pt-6 text-center align-bottom text-xs font-semibold uppercase tracking-[0.2em] text-accent-400"
                  >
                    MSCI Mobilindo
                  </th>
                  {COMPETITOR_LABELS.map((label) => (
                    <th
                      key={label}
                      scope="col"
                      className="border-b border-white/10 px-4 pb-5 text-center align-bottom text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.vehicle}>
                    <th scope="row" className="border-b border-white/10 py-6 pr-4 text-left font-normal">
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md bg-ink-900 sm:h-16 sm:w-24">
                          <Image
                            src={row.image}
                            alt={`MSCI Mobilindo - ${row.vehicle}`}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-heading text-lg font-bold text-white sm:text-xl">
                            {row.vehicle}
                          </p>
                          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                            {row.category}
                          </p>
                        </div>
                      </div>
                    </th>
                    <td className="border-x border-b border-accent-500/40 bg-accent-500/[0.06] px-4 py-6 text-center">
                      <span className="font-heading text-2xl font-extrabold text-accent-400 sm:text-3xl">
                        {row.msciPrice}
                      </span>
                    </td>
                    {row.competitorPrices.map((price, i) => (
                      <td
                        key={i}
                        className="border-b border-white/10 px-4 py-6 text-center font-heading text-lg font-semibold text-white/70 sm:text-xl"
                      >
                        {price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="max-w-2xl text-xs text-white/50">
            Perbandingan berdasarkan harga sewa lepas kunci (self-drive) yang
            dipublikasikan oleh masing-masing penyedia per Agustus 2026, untuk
            kategori kendaraan yang dapat dibandingkan secara setara — bukan
            perbandingan menyeluruh seluruh penyedia rental di Bandung. Harga
            dapat berubah sewaktu-waktu; hubungi kami untuk info terbaru.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 divide-y divide-white/10 rounded-md border border-white/10 bg-white/[0.03] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {VALUE_STRIP.map((item) => (
              <div key={item.title} className="flex items-start gap-4 px-6 py-8">
                <item.Icon className="mt-0.5 shrink-0 text-accent-500" />
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function TagIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M11.5 4H6a2 2 0 0 0-2 2v5.5a2 2 0 0 0 .59 1.41l8.5 8.5a2 2 0 0 0 2.82 0l5.5-5.5a2 2 0 0 0 0-2.82l-8.5-8.5A2 2 0 0 0 11.5 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function HeadsetIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 19v.5a3 3 0 0 1-3 3h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
