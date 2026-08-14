import type { Vehicle } from "@/types/vehicle";

/**
 * Source of truth for the fleet catalog: 16 listings total, matching the
 * verified MSCI Mobilindo catalog (page 1 = 10 listings, page 2 = 6
 * listings). Several names repeat (three "Xenia", two "Avanza") because
 * they are separate units in the source material — do not deduplicate by
 * name. `plateNumber` and `image` are set for the 11 units identified and
 * photographed from the 2026-08-13 upload (see
 * public/images/fleet/README.md for match confidence per unit). The
 * remaining 5 (Alphard, Veloz Manual, Veloz, Avanza TSS, Avanza Luxury)
 * stay `image: null` — no verifiable photo exists for them yet.
 */
export const fleet: Vehicle[] = [
  // Page 1 (10 listings)
  {
    id: "pajero-sport",
    name: "Pajero Sport",
    priceLabel: "850K",
    transmission: "matic",
    image: "/images/fleet/pajero-sport.jpg",
    catalogPage: 1,
    unitIndex: 1,
    plateNumber: "D 1318 YCC",
  },
  {
    id: "alphard",
    name: "Alphard",
    priceLabel: "700K",
    transmission: "matic",
    image: null,
    catalogPage: 1,
    unitIndex: 2,
  },
  {
    id: "veloz-matic",
    name: "Veloz Matic",
    priceLabel: "400K",
    transmission: "matic",
    image: "/images/fleet/veloz-matic.jpg",
    catalogPage: 1,
    unitIndex: 3,
    plateNumber: "D 1495 UBQ",
  },
  {
    id: "veloz-manual",
    name: "Veloz Manual",
    priceLabel: "400K",
    transmission: "manual",
    image: null,
    catalogPage: 1,
    unitIndex: 4,
  },
  {
    id: "avanza-tss",
    name: "Avanza TSS",
    priceLabel: "350K",
    transmission: "manual",
    image: null,
    catalogPage: 1,
    unitIndex: 5,
  },
  {
    id: "honda-brv",
    name: "Honda BR-V",
    priceLabel: "350K",
    transmission: "manual",
    image: "/images/fleet/honda-brv.jpg",
    catalogPage: 1,
    unitIndex: 6,
    plateNumber: "D 1169 AEG",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    priceLabel: "300K",
    transmission: "manual",
    image: "/images/fleet/ertiga.jpg",
    catalogPage: 1,
    unitIndex: 7,
    plateNumber: "D 1458 SHC",
  },
  {
    id: "terios",
    name: "Terios",
    priceLabel: "300K",
    transmission: "matic",
    image: "/images/fleet/terios.jpg",
    catalogPage: 1,
    unitIndex: 8,
    plateNumber: "D 1039 XT",
  },
  {
    id: "avanza-facelift",
    name: "Avanza Facelift",
    priceLabel: "300K",
    transmission: "manual",
    image: "/images/fleet/avanza-facelift.jpg",
    catalogPage: 1,
    unitIndex: 9,
    plateNumber: "D 1738 YCB",
  },
  {
    id: "xenia-01",
    name: "Xenia",
    priceLabel: "300K",
    transmission: "manual",
    image: "/images/fleet/xenia-01.jpg",
    catalogPage: 1,
    unitIndex: 10,
    plateNumber: "D 1809 UL",
  },

  // Page 2 (6 listings)
  {
    id: "avanza-luxury",
    name: "Avanza Luxury",
    priceLabel: "300K",
    transmission: "manual",
    image: null,
    catalogPage: 2,
    unitIndex: 1,
  },
  {
    id: "veloz",
    name: "Veloz",
    priceLabel: "300K",
    transmission: "matic",
    image: null,
    catalogPage: 2,
    unitIndex: 2,
  },
  {
    id: "avanza-01",
    name: "Avanza",
    priceLabel: "300K",
    transmission: "matic",
    image: "/images/fleet/avanza-01.jpg",
    catalogPage: 2,
    unitIndex: 3,
    plateNumber: "D 1750 YVL",
  },
  {
    id: "xenia-02",
    name: "Xenia",
    priceLabel: "300K",
    transmission: "manual",
    image: "/images/fleet/xenia-02.jpg",
    catalogPage: 2,
    unitIndex: 4,
    plateNumber: "D 1380 XHB",
  },
  {
    id: "avanza-02",
    name: "Avanza",
    priceLabel: "300K",
    transmission: "matic",
    image: "/images/fleet/avanza-02.jpg",
    catalogPage: 2,
    unitIndex: 5,
    plateNumber: "D 1015 QE",
  },
  {
    id: "xenia-03",
    name: "Xenia",
    priceLabel: "300K",
    transmission: "manual",
    image: "/images/fleet/xenia-03.jpg",
    catalogPage: 2,
    unitIndex: 6,
    plateNumber: "D 1611 QC",
  },
];
