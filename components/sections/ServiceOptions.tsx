import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  getDriverInquiryLink,
  getGeneralInquiryLink,
  getSelfDriveInquiryLink,
} from "@/lib/whatsapp";

interface ServiceOption {
  number: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  href: string;
  Icon: (props: { className?: string }) => ReactNode;
}

/**
 * "With Driver" deliberately avoids unverified claims like "profesional"
 * or "berpengalaman" — safe wording only ("tersedia dengan driver").
 * Neither card names a driver price: it isn't fixed, so none is shown.
 */
const SERVICES: ServiceOption[] = [
  {
    number: "01",
    title: "Self Drive",
    description: "Sewa mobil tanpa driver.",
    points: [
      "Kendaraan digunakan sendiri oleh penyewa",
      "Pilihan transmisi Matic / Manual",
      "Harga mengikuti katalog armada",
      "Booking melalui WhatsApp",
      "Ketersediaan mengikuti jadwal kendaraan",
    ],
    ctaLabel: "Sewa Self Drive",
    href: getSelfDriveInquiryLink(),
    Icon: WheelIcon,
  },
  {
    number: "02",
    title: "With Driver",
    description: "Sewa kendaraan sekaligus driver.",
    points: [
      "Tersedia dengan driver",
      "Cocok untuk perjalanan dalam kota maupun luar kota",
      "Harga driver tidak fixed",
      "Harga disesuaikan dengan tujuan, durasi, dan kebutuhan perjalanan",
      "Dinegosiasikan langsung melalui WhatsApp",
    ],
    ctaLabel: "Tanyakan Harga Driver",
    href: getDriverInquiryLink(),
    Icon: DriverIcon,
  },
];

export default function ServiceOptions() {
  const whatsappLink = getGeneralInquiryLink();

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div
        className="animate-glow-pulse pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-accent-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
              N.02
            </span>
            <span className="h-px w-8 bg-accent-500/60" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
              Service Options
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            <span className="block">Pilih Cara</span>
            <span className="block">Perjalananmu</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-white/60">
            Beragam pilihan kendaraan Matic dan Manual untuk perjalanan Anda.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {SERVICES.map((service, index) => (
              <Reveal key={service.number} className={index === 1 ? "delay-100" : ""}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:bg-accent-500/[0.04] sm:p-8">
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-300 motion-reduce:transition-none group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span
                      className="font-heading text-3xl font-extrabold text-white/20"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                    <service.Icon className="h-7 w-7 text-accent-400 transition-transform duration-300 motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{service.description}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-6 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-400 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {service.ctaLabel}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-200 motion-reduce:transition-none group-hover/cta:w-full" />
                    </span>
                    <ArrowIcon />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="delay-100">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div
                className="absolute inset-8 rounded-full bg-accent-500/10 blur-[90px]"
                aria-hidden="true"
              />
              <div className="animate-car-float motion-reduce:animate-none relative h-full w-full">
                <Image
                  src="/images/fleet/pajero-sport.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 32vw, 80vw"
                  className="object-cover [mask-image:radial-gradient(ellipse_65%_65%_at_50%_45%,black_55%,transparent_100%)]"
                />
                <div
                  className="animate-light-streak motion-reduce:hidden pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div
                className="absolute inset-x-10 bottom-6 h-6 rounded-full bg-black/60 blur-xl"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-col gap-4 rounded-md border border-accent-500/30 bg-accent-500/[0.05] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
                With Driver
              </p>
              <p className="mt-2 text-sm text-white">Tersedia dengan driver.</p>
              <p className="mt-1 text-sm text-white/60">
                Harga driver menyesuaikan tujuan, durasi, dan kebutuhan perjalanan.
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent-400 transition-colors hover:text-white"
            >
              Hubungi WhatsApp
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function WheelIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 5.5V9M6.4 15.2l3.3-1.9M17.6 15.2l-3.3-1.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DriverIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="7.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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
