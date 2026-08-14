import { getGeneralInquiryLink } from "@/lib/whatsapp";
import { getGoogleMapsShortLink } from "@/lib/maps";

/**
 * Persistent bottom-right stack: Maps above WhatsApp. Both are `<a>`
 * elements (no client JS needed) reusing the site's existing link
 * helpers — no new WhatsApp URL, and the Maps button uses the exact
 * maps.app.goo.gl link supplied for it, kept separate from the
 * text-search link used elsewhere in ContactSection.
 */
export default function FloatingActions() {
  const whatsappLink = getGeneralInquiryLink();
  const mapsLink = getGoogleMapsShortLink();

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lihat lokasi MSCI Mobilindo di Google Maps"
        className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/15 bg-ink-900 text-white shadow-lg shadow-black/40 transition-colors duration-200 hover:border-accent-500/60 hover:text-accent-400 sm:h-14 sm:w-14"
      >
        <MapPinIcon />
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          Lihat Lokasi
        </span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi MSCI Mobilindo via WhatsApp"
        className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-black/40 transition-colors duration-200 hover:bg-accent-600 sm:h-14 sm:w-14"
      >
        <span
          className="absolute inset-0 -z-10 rounded-full bg-accent-500/50 blur-lg"
          aria-hidden="true"
        />
        <WhatsAppIcon />
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          Chat via WhatsApp
        </span>
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12.04 2.003c-5.48 0-9.93 4.45-9.93 9.93 0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.14-2.91-7.02a9.87 9.87 0 0 0-7.02-2.9Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 0 1 2.4 5.82c0 4.53-3.69 8.22-8.23 8.22a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.19-.31a8.15 8.15 0 0 1-1.26-4.37c0-4.54 3.7-8.22 8.24-8.22Zm-4.49 4.6c-.17 0-.44.06-.67.31s-.88.86-.88 2.1c0 1.24.9 2.44 1.03 2.6.13.18 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.29-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.43-.57-.43l-.48-.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
