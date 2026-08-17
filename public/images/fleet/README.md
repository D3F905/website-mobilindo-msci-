# Fleet images

One image file per vehicle **unit** (not per model — units with the same model
name but different plate numbers each get their own file), named after the
`Vehicle.id` in `lib/data/fleet.ts`.

## Status as of 2026-08-16 — all 16 have an image (12 real unit photos + 4 representative)

Photos were supplied via a Downloads folder (`Compressed/mobil-.../mobil/`,
20 files) and matched to fleet listings by visual content + plate number,
then copied here and wired into `lib/data/fleet.ts`. Originals were left
untouched in Downloads.

| id | Match | Plate | File | Confidence |
|---|---|---|---|---|
| pajero-sport | Mitsubishi Pajero Sport, black | D 1318 YCC | `pajero-sport.jpg` (also used as the Hero background) | High |
| honda-brv | Honda BR-V, red | D 1169 AEG | `honda-brv.jpg` | High |
| ertiga | Suzuki Ertiga, silver | D 1458 SHC | `ertiga.jpg` | High |
| terios | Daihatsu Terios, black | D 1039 XT | `terios.jpg` | High |
| avanza-facelift | Toyota Avanza (facelift-gen), silver | D 1738 YCB | `avanza-facelift.jpg` | Medium-High |
| avanza-01 | Toyota Avanza (older gen), gray | D 1750 YVL | `avanza-01.jpg` | Medium-High |
| avanza-02 | Toyota Avanza (older gen), white | D 1015 QE | `avanza-02.jpg` | Medium-High |
| xenia-01 | Daihatsu Xenia-family, bronze | D 1809 UL | `xenia-01.jpg` | Medium-High |
| xenia-02 | Daihatsu Xenia-family, white (Sportivo bodykit) | D 1380 XHB | `xenia-02.jpg` | Medium — real Xenia-family unit, but heavily modified; confirm this is the intended rental unit |
| xenia-03 | Daihatsu Xenia-family, white | D 1611 QC | `xenia-03.jpg` | Medium-High |
| veloz-matic | Toyota Veloz (new-gen), white — "VELOZ" badge visible on fender | D 1495 UBQ | `veloz-matic.jpg` | Medium — Veloz confirmed, matic assumed (new-gen Veloz is predominantly CVT), not verified from source |
| alphard | Toyota Alphard, silver | D 1023 YVB | `alphard.jpg` — supplied directly 2026-08-16 | High |

## Representative photos (added 2026-08-15)

No unit-specific photo exists for these four, but a same-model photo
exists elsewhere in the set, so per owner instruction they now reuse it
as an explicitly-flagged representative photo (`imageType: "representative"`
in `lib/data/fleet.ts`, surfaced as a small "Foto representatif" label in
`FleetCard`) rather than staying a placeholder:

| id | Representative file | Reused from |
|---|---|---|
| veloz-manual | `veloz-matic.jpg` | veloz-matic (same model family, no manual-specific photo) |
| veloz | `veloz-matic.jpg` | veloz-matic |
| avanza-tss | `avanza-facelift.jpg` | avanza-facelift ("TSS" is a tech badge, not visually distinct) |
| avanza-luxury | `avanza-01.jpg` | avanza-01 ("Luxury" is a trim name, not visually distinct) |

Note this means `veloz-matic.jpg` and `avanza-01.jpg` each appear twice in
the fleet grid (once for their own real unit, once as a stand-in) — an
accepted tradeoff of reusing real photos instead of leaving a blank
placeholder. Supplying real, distinct photos for these four units later
would remove the duplication.

Extra photos received but not used (no free slot / duplicate angle of an
already-matched plate, still in the original Downloads folder only): a
second facelift-gen white Avanza (D 9379 YVB), a third older-gen white
Avanza (D 1379 YVB), a newest-gen black Avanza (D 1121 YQI), and rear-angle
shots of the D 1039 XT Terios.

No manual re-encoding/resizing was done on the copied files — `next/image`
(already used in `FleetCard` and `Hero`) handles responsive resizing and
format optimization at request time, so re-compressing them here would only
risk quality loss for no benefit.

Expected filenames (16 total — all 16 have an image):

```
pajero-sport.*      ✅ real
alphard.*           ✅ real
veloz-matic.*       ✅ real
veloz-manual.*      ✅ representative (veloz-matic.jpg)
avanza-tss.*        ✅ representative (avanza-facelift.jpg)
honda-brv.*         ✅ real
ertiga.*            ✅ real
terios.*            ✅ real
avanza-facelift.*   ✅ real
xenia-01.*          ✅ real
avanza-luxury.*     ✅ representative (avanza-01.jpg)
veloz.*             ✅ representative (veloz-matic.jpg)
avanza-01.*         ✅ real
xenia-02.*          ✅ real
avanza-02.*         ✅ real
xenia-03.*          ✅ real
```

`VehicleImagePlaceholder` is no longer rendered for any of the 16
listings, but the component is kept as-is in case a future listing
arrives without a photo (no stock photos, no fabricated vehicle
photography, no cross-model substitution).
