"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import FleetCard from "@/components/ui/FleetCard";
import Reveal from "@/components/ui/Reveal";
import { fleet } from "@/lib/data/fleet";
import type { Transmission } from "@/types/vehicle";

type FilterValue = "all" | Transmission;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "matic", label: "Matic" },
  { value: "manual", label: "Manual" },
];

export default function FleetSection() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredFleet = useMemo(() => {
    if (filter === "all") return fleet;
    return fleet.filter((vehicle) => vehicle.transmission === filter);
  }, [filter]);

  return (
    <section id="armada" className="bg-ink-800 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
                N.01
              </span>
              <span className="h-px w-8 bg-white/20" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
                Armada MSCI Mobilindo
              </p>
            </div>
            <h2 className="mt-5 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Pilih Mobil yang Sesuai Kebutuhan Anda
            </h2>
            <p className="mt-4 max-w-md text-base text-white/60">
              Beragam pilihan kendaraan Matic dan Manual untuk perjalanan Anda.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter transmisi"
            className="mt-10 flex items-center gap-8 border-b border-white/10"
          >
            {FILTERS.map((item) => {
              const isActive = filter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(item.value)}
                  className={`relative pb-4 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent-500 transition-transform duration-200 motion-reduce:transition-none ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-white/50" aria-live="polite">
            Menampilkan {filteredFleet.length} dari {fleet.length} kendaraan
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {filteredFleet.map((vehicle, index) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} featured={index === 0} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
