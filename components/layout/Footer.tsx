import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getGeneralInquiryLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#armada", label: "Armada" },
  { href: "#cara-sewa", label: "Cara Sewa" },
  { href: "#syarat", label: "Syarat & Ketentuan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = getGeneralInquiryLink();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] opacity-[0.04] sm:h-[520px] sm:w-[520px]"
        aria-hidden="true"
      >
        <Image src="/images/Logo/msci-logo.png" alt="" fill className="object-contain" />
      </div>
      <Container className="relative py-16 sm:py-24">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24">
          <Image
            src="/images/Logo/msci-logo.png"
            alt="MSCI Mobilindo"
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
          Trusted Car Rent
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Navigasi
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all duration-200 motion-reduce:transition-none group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Kontak
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:02285949644" className="transition-colors hover:text-white">
                  Telepon: 022-85949644
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: 0821-2915-9636
                </a>
              </li>
              <li>Lokasi: Baleendah, Kabupaten Bandung</li>
            </ul>
          </div>

          <div className="sm:flex sm:items-start sm:justify-end">
            <Button href={whatsappLink} variant="primary" size="md">
              Booking via WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/60">
          &copy; {year} MSCI Mobilindo. Hak cipta dilindungi.
        </div>
      </Container>
    </footer>
  );
}
