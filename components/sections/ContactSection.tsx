import type { ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getGeneralInquiryLink } from "@/lib/whatsapp";
import { getGoogleMapsLink } from "@/lib/maps";

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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 sm:aspect-video lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/images/photo lokasi/lokasi-msci.jpg"
                alt="Lokasi MSCI Mobilindo di Komplek Bojong Malaka Indah, Baleendah, Bandung"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Baleendah, Bandung
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-1 lg:content-center lg:gap-8">
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
                      {row.label === "Lokasi" && <MapPinIcon />}
                      {row.ctaLabel}
                      <ArrowIcon />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
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
