const MAPS_QUERY = "MSCI Mobilindo, Komplek Bojong Malaka Indah, Baleendah Bandung";

/**
 * Text-search URL (no API key, no coordinates/place ID) — safe to use
 * before the katalog vs. formulir address discrepancy is resolved, since
 * it just runs a Google Maps search rather than pinning an unverified
 * location.
 */
export function getGoogleMapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
}

/**
 * Query-based embed (no API key, no manually-derived latitude/longitude)
 * for the ContactSection map. Google resolves MAPS_QUERY the same way the
 * search link above does — this is a location reference, not a claim of a
 * precise verified pin.
 */
export function getGoogleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
}

/**
 * The business's own Google Maps share link (maps.app.goo.gl short URL),
 * supplied directly rather than derived. Used only by the floating Maps
 * button — kept separate from getGoogleMapsLink() above (a generic
 * text-search fallback used elsewhere) since only the floating button was
 * asked to use this exact URL.
 */
export function getGoogleMapsShortLink(): string {
  return "https://maps.app.goo.gl/iVd9pHTXasGaTgvHA?g_st=ic";
}
