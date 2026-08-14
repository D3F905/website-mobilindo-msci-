import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Pilih Armada",
    description: "Pilih kendaraan yang sesuai dengan kebutuhan perjalanan Anda.",
  },
  {
    number: "02",
    title: "Hubungi WhatsApp",
    description:
      "Klik tombol Booking via WhatsApp dan sampaikan kendaraan serta kebutuhan rental Anda.",
  },
  {
    number: "03",
    title: "Konfirmasi Rental",
    description:
      "Konfirmasi ketersediaan kendaraan, jadwal, harga, dan persyaratan rental dengan pihak MSCI Mobilindo.",
  },
  {
    number: "04",
    title: "Serah Terima Kendaraan",
    description:
      "Setelah proses rental disepakati, lakukan proses serah terima kendaraan sesuai ketentuan MSCI Mobilindo.",
  },
];

export default function HowToRent() {
  return (
    <section id="cara-sewa" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
              Cara Sewa
            </p>
            <h2 className="mt-4 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-ink-950 sm:text-6xl">
              Sewa Mobil dengan Proses yang Sederhana
            </h2>
          </div>
        </Reveal>

        <Reveal className="relative mt-16 sm:mt-20">
          <div
            className="absolute inset-x-0 top-6 hidden h-px bg-neutral-300 sm:top-7 lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step) => (
              <li key={step.number} className="relative bg-white lg:pr-4">
                <span
                  aria-hidden="true"
                  className="relative z-10 inline-block bg-white pr-3 font-heading text-4xl font-extrabold text-ink-950/5 sm:text-5xl"
                >
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-ink-950 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
