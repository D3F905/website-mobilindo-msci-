import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getGeneralInquiryLink } from "@/lib/whatsapp";
import { getGoogleMapsEmbedUrl, getGoogleMapsLink } from "@/lib/maps";

interface ContactRow {
  label: string;
  value: ReactNode;
  href: string;
  ctaLabel: string;
}

export default function ContactSection() {
  const whatsappLink = getGeneralInquiryLink();

  const rows: ContactRow[] = [
    {
      label: "WhatsApp",
      value: "0821-2915-9636",
      href: whatsappLink,
      ctaLabel: "Chat via WhatsApp",
    },
    {
      label: "Telepon",
      value: "022-85949644",
      href: "tel:02285949644",
      ctaLabel: "Hubungi Kami",
    },
    {
      label: "Lokasi",
      value: (
        <address className="not-italic">
          Komplek Bojong Malaka Indah
          <br />
          Depan H1 No 9
          <br />
          Baleendah Bandung
        </address>
      ),
      href: getGoogleMapsLink(),
      ctaLabel: "Buka Google Maps",
    },
  ];

  return (
    <section id="kontak" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(229,9,20,0.16),transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
              N.06
            </span>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
              Hubungi Kami
            </p>
            <h2 className="mt-6 font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Siap untuk</span>
              <span className="block">Perjalanan</span>
              <span className="block">Berikutnya?</span>
            </h2>
            <p className="mt-6 text-base text-white/60 sm:text-lg">
              Hubungi MSCI Mobilindo untuk mengecek kendaraan dan kebutuhan rental Anda.
            </p>
            <div className="mt-10">
              <Button href={whatsappLink} variant="primary" size="lg">
                Booking via WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-20 sm:mt-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
              {rows.map((row) => {
                const isExternal = /^https?:\/\//.test(row.href);
                return (
                  <div key={row.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                      {row.label}
                    </p>
                    <div className="mt-3 text-base text-white sm:text-lg">{row.value}</div>
                    <a
                      href={row.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-400 transition-colors hover:text-white"
                    >
                      {row.ctaLabel}
                      <ArrowIcon />
                    </a>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-md border border-white/15 bg-ink-900">
                <iframe
                  src={getGoogleMapsEmbedUrl()}
                  title="Lokasi MSCI Mobilindo di Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
              <p className="mt-3 text-xs text-white/50">
                Peta berdasarkan pencarian alamat — gunakan tombol &ldquo;Buka Google Maps&rdquo; di
                atas untuk navigasi.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
