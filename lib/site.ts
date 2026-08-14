/**
 * Production domain is not yet known. `example.com` is the IANA-reserved
 * placeholder domain (RFC 2606) — used here so metadataBase/canonical/
 * sitemap URLs resolve to something obviously non-production instead of a
 * guessed real domain. Set NEXT_PUBLIC_SITE_URL once the real domain is
 * confirmed.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
