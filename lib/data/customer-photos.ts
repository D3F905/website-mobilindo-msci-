export interface CustomerPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * No real customer photos have been provided yet. Do not add
 * placeholder/fabricated entries here — CustomerGallery.tsx renders an
 * honest empty state while this stays empty, and switches to the real
 * editorial grid automatically once entries are added.
 */
export const customerPhotos: CustomerPhoto[] = [];
