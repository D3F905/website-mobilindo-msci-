interface VehicleImagePlaceholderProps {
  label?: string;
  className?: string;
}

/**
 * Stands in for a real vehicle photo everywhere one is missing (Hero,
 * fleet cards). Deliberately not a dashed "empty state" box — a dark
 * gradient + soft accent glow composition that reads as an intentional
 * design choice and drops in cleanly behind an <Image> once a real photo
 * exists, without changing any surrounding layout.
 */
export default function VehicleImagePlaceholder({
  label = "Foto belum tersedia",
  className = "",
}: VehicleImagePlaceholderProps) {
  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 ${className}`}
    >
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-accent-600/10 blur-3xl"
        aria-hidden="true"
      />
      <span className="relative z-10 px-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
        {label}
      </span>
    </div>
  );
}
