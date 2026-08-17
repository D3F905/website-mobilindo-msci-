# Competitor Pricing Research — Bandung Car Rental

Internal research log, not for public display. Used to support the
"Compare & Save" section's pricing claim on the website. All prices found
via public Google search results and competitor websites, checked
2026-08-13. Rental pricing changes frequently — this should be re-verified
periodically rather than treated as permanently accurate.

## 2026-08-15 owner correction — figures currently shown on the site

The owner corrected two things directly: (1) MSCI's own Veloz price is
**400K, not 300K** — the `lib/data/fleet.ts` "veloz" (plain) listing had a
stale 300K left over from an earlier pass; `veloz-matic` and
`veloz-manual` were already 400K. (2) updated competitor figures for
Pajero Sport, Veloz and Avanza, provided directly by the owner rather than
from a fresh round of web research:

| Vehicle | MSCI | Kompetitor A | Kompetitor B | Kompetitor C | Kompetitor D |
|---|---|---|---|---|---|
| Pajero Sport | 850K | 1.100K | 1.200K | 1.250K | 1.300K |
| Veloz | 400K | 400K | 450K | 500K | 550K |
| Avanza | 300K | 325K | 350K | 375K | 400K |

**Provenance note**: these competitor figures came directly from the
owner, not from re-running the Google searches below — they supersede the
web-research figures for what's displayed in `PriceComparison.tsx`, but
the original research tables are kept below for historical context. Since
Veloz MSCI (400K) exactly ties Kompetitor A, the site must not claim
"termurah" (cheapest) or "nomor 1" for Veloz — the honest framing already
in use ("salah satu harga paling kompetitif") still holds.

**Methodology**: searched Google for `sewa [vehicle] Bandung lepas kunci
harga per hari` per vehicle class, then cross-checked the resulting
competitor sites/listings. "Lepas kunci" = self-drive (no driver), which is
MSCI Mobilindo's rental model — self-drive prices were prioritized to keep
the comparison apples-to-apples with MSCI's listed prices. Where a listing
was driver-inclusive or duration didn't match a full day, that's flagged
explicitly rather than treated as equivalent.

## Pajero Sport (MSCI: 850K)

| Competitor | Source | Price | Transmission | Duration | Driver | Date checked | Notes |
|---|---|---|---|---|---|---|---|
| Kang Transport | kangtransport.com/rental | Rp850.000 | Matic | 24 jam | Self-drive available (site FAQ confirms) | 2026-08-13 | Ties MSCI exactly |
| Fazza Transport | fazzatransport.com | Rp1.300.000 | Matic | Per hari | Unclear if driver included | 2026-08-13 | |
| Abigail Rental | abigailrental.com | Rp1.100.000 | Matic | Per hari | Both self-drive & all-in-driver offered at this price point | 2026-08-13 | |
| ICAN Transport Network | icanrentacar.com | Mulai Rp1.300.000 | Matic | Per hari | Lepas kunci (explicit) | 2026-08-13 | "Starting from" |
| PT Satrio Langit Transport | satriolangit.com | Rp850.000 | Matic | 6 jam | With driver + fuel | 2026-08-13 | Not directly comparable — short duration, driver included |

**Summary**: MSCI (850K) ties the lowest self-drive price found (Kang
Transport) and beats every other self-drive listing (1.1jt–1.3jt).

## Alphard (MSCI: 700K) — ⚠️ not confidently comparable

MSCI's Alphard listing now has a real unit photo (added 2026-08-16, see
`public/images/fleet/README.md`), but its year/trim generation still
isn't confirmed from that alone. Every competitor listing found specifies
a generation/trim ("Transformer", "Hybrid", "Gen 3", "Gen 4"), and prices
vary enormously by trim:

| Competitor | Source | Price | Driver | Date checked | Notes |
|---|---|---|---|---|---|
| PT Global Transport | globaltransport.co.id | Rp3.375.000 | Lepas kunci | 2026-08-13 | Likely a premium trim |
| Fazza Transport | fazzatransport.com | Mulai Rp2.300.000 | Dengan supir | 2026-08-13 | |
| PT Satrio Langit Transport | satriolangit.com | Rp1.500.000–2.100.000 | Lepas kunci | 2026-08-13 | Range by package |
| Xavier Trans | xaviertrans.com | Rp2.500.000 (Gen 3) – Rp4.200.000+ (Gen 4) | — | 2026-08-13 | Explicitly generation-dependent |
| Iq Holiday Tour | iqholidaytour.com | Rp3.800.000 | Dengan driver/lepas kunci | 2026-08-13 | |

**Do not use this category to support a "cheapest" claim.** The gap between
MSCI's 700K and every competitor (1.5jt–4.2jt) is too large to be a fair
same-trim comparison — it almost certainly means MSCI's unit is an older/
base generation, not that MSCI is 2–5× cheaper for the same car. Revisit
once the Alphard unit's exact year/trim generation is confirmed.

## Avanza (MSCI: 300K–350K depending on variant)

| Competitor | Source | Price | Duration | Driver | Date checked | Notes |
|---|---|---|---|---|---|---|
| Fazza Transport | fazzatransport.com | Mulai Rp400.000 | Per hari | — | 2026-08-13 | |
| Abigail Rental | abigailrental.com | Rp325.000 (2018) / Rp375.000 (Grand New) | Per hari | Lepas kunci | 2026-08-13 | |
| Putra Praja Rent Car | putraprajarentcar.com | Rp350.000 | Per hari | — | 2026-08-13 | |
| Sora Sae Trans | Instagram @sorasaetrans | Rp300.000 / Rp350.000 | 12 jam / 24 jam | Lepas kunci | 2026-08-13 | Bundled with Xenia/Brio/Yaris/Mobilio (2020-up) |
| PT Global Transport | globaltransport.co.id | Mulai Rp250.000 | — | Lepas kunci | 2026-08-13 | **PROMO** — bundled Avanza/Veloz Facelift teaser price |

**Summary**: excluding the promo teaser, MSCI (300K–350K) sits at the
low-to-mid end of the 325K–400K range.

## Veloz (MSCI: 400K — corrected 2026-08-15, was previously listed as 300K–400K)

| Competitor | Source | Price | Duration | Date checked | Notes |
|---|---|---|---|---|---|
| Kang Transport | kangtransport.com/rental | Rp450.000 / Rp550.000 | 12 jam / 24 jam | 2026-08-13 | New Veloz AT |
| Movic.id | movic.id | Mulai Rp400.000 | Per hari | 2026-08-13 | All New Veloz |
| PT Global Transport | globaltransport.co.id | Mulai Rp250.000 | — | 2026-08-13 | **PROMO** — same bundled teaser as above |
| Carmudi Indonesia *(media article, not a rental company)* | carmudi.co.id | Rp350.000 / Rp400.000 | 12 jam / 24 jam | 2026-08-13 | "4 Tempat Sewa Mobil Matic Murah di Bandung 2024" — used as market context only, not counted toward the competitor total |

**Summary**: excluding the promo teaser, MSCI (400K) ties the lowest
self-drive Veloz price found and beats the rest (400K–550K). See the
2026-08-15 owner correction above for the figures actually shown on site.

## Ertiga / Honda BR-V (MSCI: Ertiga 300K, BR-V 350K)

| Competitor | Source | Price | Duration | Date checked | Notes |
|---|---|---|---|---|---|
| Sora Sae Trans | Instagram @sorasaetrans | Rp350.000 / Rp400.000 | 12 jam / 24 jam | 2026-08-13 | Bundled BR-V/XL7/Ertiga AT listing, not split per model |

Only one directly comparable listing found for this class. MSCI's Ertiga
(300K) and BR-V (350K) are at or below this bundled rate — noted for
context, not used as primary evidence given the single data point.

## Competitors researched (11 total)

1. Kang Transport — kangtransport.com
2. Fazza Transport — fazzatransport.com
3. Abigail Rental — abigailrental.com
4. PT Global Transport — globaltransport.co.id
5. ICAN Transport Network — icanrentacar.com
6. PT Satrio Langit Transport — satriolangit.com
7. Xavier Trans — xaviertrans.com
8. Iq Holiday Tour — iqholidaytour.com
9. Putra Praja Rent Car — putraprajarentcar.com
10. Sora Sae Trans — Instagram @sorasaetrans / sewa.abrentcar.com
11. Movic.id — movic.id

## Conclusion / claim used on site

MSCI is **not** provably the single cheapest option in Bandung — this
research is a sample from public search results, not an exhaustive market
survey, and the Alphard category isn't fairly comparable. But across every
*confidently comparable* category (Pajero Sport, Avanza, Veloz), MSCI is
never the most expensive option and ties or beats every non-promotional
self-drive price found.

**Claim used**: "Salah satu harga paling kompetitif di Bandung" (one of the
most competitive prices in Bandung) — not "termurah" (cheapest), since that
would overstate what this sample actually proves.

**To update**: re-run the searches above, update the tables, and re-check
whether the claim tier still holds before changing anything in the
`PriceComparison` component's copy.
