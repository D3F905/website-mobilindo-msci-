"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getGeneralInquiryLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#armada", label: "Armada" },
  { href: "#cara-sewa", label: "Cara Sewa" },
  { href: "#syarat", label: "Syarat & Ketentuan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = getGeneralInquiryLink();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isSolid
          ? "border-b border-white/10 bg-ink-950/[0.92] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          <a
            href="#"
            className="font-heading text-lg font-bold uppercase tracking-tight text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            MSCI Mobilindo
          </a>

          <nav aria-label="Navigasi utama" className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-xs font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-400 transition-all duration-200 motion-reduce:transition-none group-hover:w-full" />
              </a>
            ))}
            <Button href={whatsappLink} variant="primary" size="md">
              Booking WhatsApp
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Booking via WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-accent-500 text-white transition-colors hover:bg-accent-600"
            >
              <ChatIcon />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-white"
              aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigasi mobile"
          className="border-t border-white/10 bg-ink-950 md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={whatsappLink} variant="primary" size="md" className="mt-2 w-full">
              Booking WhatsApp
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.08 6.01-.1.99-.45 2.28-1.33 3.49 1.55-.15 3.04-.75 4.24-1.62A10.4 10.4 0 0 0 12 19c4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
