import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: "Pilihan Armada",
    description: "Tersedia berbagai pilihan kendaraan dengan transmisi Matic dan Manual.",
  },
  {
    title: "Booking via WhatsApp",
    description:
      "Customer dapat menghubungi MSCI Mobilindo langsung melalui WhatsApp untuk menanyakan kendaraan dan jadwal rental.",
  },
  {
    title: "Pilihan Kendaraan Beragam",
    description:
      "Tersedia berbagai kategori kendaraan mulai dari kendaraan keluarga hingga kendaraan premium.",
  },
  {
    title: "Lokasi Baleendah Bandung",
    description: "MSCI Mobilindo berlokasi di area Baleendah, Kabupaten Bandung.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] opacity-[0.07] lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/fleet/terios.jpg"
          alt=""
          fill
          className="object-cover object-right [mask-image:linear-gradient(to_right,black,transparent)]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-ink-950 via-ink-950/85 to-ink-950/40"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
              N.04
            </span>
            <span className="h-px w-8 bg-white/20" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-heading text-6xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            <span className="block">Why</span>
            <span className="block">MSCI</span>
            <span className="block">Mobilindo</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14 sm:mt-20">
          <div className="border-t border-white/10">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 border-b border-white/10 py-8 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-2xl font-bold text-white/25 sm:w-16 sm:shrink-0 sm:text-3xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl">
                    {feature.title}
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-white/60 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
