export type Transmission = "matic" | "manual";

/**
 * A single rentable unit, not a model. Several units can share the same
 * `name` (e.g. three separate Xenia units) — they still get distinct `id`s
 * and must never be merged/deduplicated by name alone.
 *
 * `catalogPage` + `unitIndex` record where the listing sits in the source
 * catalog (page 1 has 10 listings, page 2 has 6) so it can be cross-checked
 * against the original material later, e.g. when cropping real photos.
 */
export interface Vehicle {
  id: string;
  name: string;
  priceLabel: string;
  transmission: Transmission;
  /** Path under /public once a real photo exists; null while unavailable. */
  image: string | null;
  catalogPage: 1 | 2;
  unitIndex: number;
  /** Only ever set once a plate number is legible in the source photo. */
  plateNumber?: string;
  /**
   * Set when `image` is a same-model stand-in rather than a photo of this
   * exact unit (e.g. reusing the Veloz Matic photo for a Veloz listing with
   * no verified photo of its own). Drives a small "Foto representatif"
   * disclosure in FleetCard — never used to imply a different vehicle
   * model than the one actually shown.
   */
  imageType?: "representative";
}
