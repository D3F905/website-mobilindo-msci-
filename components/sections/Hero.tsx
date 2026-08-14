import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getGeneralInquiryLink } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappLink = getGeneralInquiryLink();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/fleet/pajero-sport.jpg"
          alt="MSCI Mobilindo - Pajero Sport"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_15%_100%,rgba(229,9,20,0.30),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_50%,transparent_45%,rgba(8,8,8,0.55)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-28 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
            Trusted Car Rent
          </p>
          <h1 className="mt-6 font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Rental Mobil</span>
            <span className="block">Terpercaya di</span>
            <span className="block">Bandung.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-white/70 sm:text-lg">
            Pilihan kendaraan untuk kebutuhan perjalanan pribadi, keluarga, maupun perjalanan
            bisnis.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button href={whatsappLink} variant="primary" size="lg">
              Booking via WhatsApp
            </Button>
            <a
              href="#armada"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              Lihat Armada
              <span className="h-px w-6 bg-white/40 transition-all duration-200 motion-reduce:transition-none group-hover:w-10 group-hover:bg-accent-400" />
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 border-t border-white/10 pt-6 sm:mt-28">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Pajero Sport — Armada MSCI Mobilindo
          </p>
        </div>
      </Container>
    </section>
  );
}
