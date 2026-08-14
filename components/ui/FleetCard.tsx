import Image from "next/image";
import VehicleImagePlaceholder from "@/components/ui/VehicleImagePlaceholder";
import { getVehicleInquiryLink } from "@/lib/whatsapp";
import type { Vehicle } from "@/types/vehicle";

interface FleetCardProps {
  vehicle: Vehicle;
  featured?: boolean;
}

export default function FleetCard({ vehicle, featured = false }: FleetCardProps) {
  const href = getVehicleInquiryLink(vehicle.name);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Booking via WhatsApp untuk ${vehicle.name}`}
      className={`group relative block overflow-hidden rounded-lg bg-ink-900 ring-1 ring-transparent transition-[box-shadow,ring-color] duration-300 hover:shadow-xl hover:shadow-ink-950/30 hover:ring-accent-500/50 ${
        featured
          ? "col-span-2 aspect-[4/3] sm:col-span-3 sm:aspect-[16/9] lg:col-span-4 lg:aspect-[21/9]"
          : "aspect-[3/4]"
      }`}
    >
      <div className="absolute inset-0">
        {vehicle.image ? (
          <Image
            src={vehicle.image}
            alt={`MSCI Mobilindo - ${vehicle.name}`}
            fill
            sizes={
              featured ? "100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            }
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <VehicleImagePlaceholder className="h-full w-full" />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
        <div>
          <p
            className={`font-heading font-extrabold uppercase leading-tight tracking-tight text-white ${
              featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-lg sm:text-xl"
            }`}
          >
            {vehicle.name}
          </p>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
            {vehicle.transmission}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <span
            className={`font-heading font-extrabold ${
              featured ? "text-3xl text-white sm:text-4xl" : "text-xl text-accent-400 sm:text-2xl"
            }`}
          >
            {vehicle.priceLabel}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent-400 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
            Book
            <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
