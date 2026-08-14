import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { customerPhotos } from "@/lib/data/customer-photos";

export default function CustomerGallery() {
  const hasPhotos = customerPhotos.length > 0;

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-accent-600/60" aria-hidden="true">
                N.04
              </span>
              <span className="h-px w-8 bg-ink-950/15" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-600">
                Customer Stories
              </p>
            </div>
            <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-ink-950 sm:text-5xl">
              Momen Bersama MSCI
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          {hasPhotos ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {customerPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`group relative overflow-hidden rounded-lg bg-neutral-200 ${
                    index % 5 === 0
                      ? "col-span-2 aspect-[4/3] sm:col-span-2 sm:aspect-[16/10]"
                      : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  {photo.caption && (
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-xs font-medium text-white">{photo.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-neutral-300 px-8 py-20 text-center">
              <CameraIcon className="mx-auto text-neutral-300" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Galeri foto pelanggan akan segera hadir di sini
              </p>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

function CameraIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 8a2 2 0 0 1 2-2h1.5l1-1.5h7l1 1.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
