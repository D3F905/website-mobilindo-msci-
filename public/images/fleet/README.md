# Fleet images

One image file per vehicle **unit** (not per model — units with the same model
name but different plate numbers each get their own file), named after the
`Vehicle.id` in `lib/data/fleet.ts`.

## Status as of 2026-08-13 — 11 of 16 integrated

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

Not integrated — no verifiable photo, still `image: null`:

| id | Why |
|---|---|
| alphard | No matching photo in the upload |
| veloz-manual | No confidently-manual Veloz photo |
| veloz | Would just duplicate the veloz-matic photo across 2 catalog entries |
| avanza-tss | "TSS" is a trim/tech badge not visually verifiable from an exterior photo |
| avanza-luxury | "Luxury" is a trim name not visually verifiable from an exterior photo |

Extra photos received but not used (no free slot / duplicate angle of an
already-matched plate, still in the original Downloads folder only): a
second facelift-gen white Avanza (D 9379 YVB), a third older-gen white
Avanza (D 1379 YVB), a newest-gen black Avanza (D 1121 YQI), and rear-angle
shots of the D 1039 XT Terios.

No manual re-encoding/resizing was done on the copied files — `next/image`
(already used in `FleetCard` and `Hero`) handles responsive resizing and
format optimization at request time, so re-compressing them here would only
risk quality loss for no benefit.

Expected filenames (16 total — 5 still pending a photo):

```
pajero-sport.*      ✅
alphard.*
veloz-matic.*       ✅
veloz-manual.*
avanza-tss.*
honda-brv.*         ✅
ertiga.*            ✅
terios.*            ✅
avanza-facelift.*   ✅
xenia-01.*          ✅
avanza-luxury.*
veloz.*
avanza-01.*         ✅
xenia-02.*          ✅
avanza-02.*         ✅
xenia-03.*          ✅
```

The 5 unmatched vehicles still render the branded placeholder (no stock
photos, no fabricated vehicle photography) via `VehicleImagePlaceholder`.
