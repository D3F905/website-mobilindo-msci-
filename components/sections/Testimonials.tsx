import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;
  const hasDemoContent = testimonials.some((testimonial) => testimonial.isDemo);
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-ink-950 py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold text-accent-400/60" aria-hidden="true">
              N.05
            </span>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">
              Kata Pelanggan
            </p>
            <h2 className="mt-4 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
              Dipercaya Pelanggan Kami
            </h2>
            {hasDemoContent && (
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                Contoh tampilan — testimoni asli menyusul
              </p>
            )}
          </div>
        </Reveal>

        {hasTestimonials ? (
          <>
            <Reveal className="mt-14 sm:mt-16">
              <div className="mx-auto max-w-3xl text-center">
                <QuoteMark className="mx-auto text-accent-400" />
                <blockquote className="mt-6 font-heading text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {featured.name}
                  {featured.role ? ` · ${featured.role}` : ""}
                </p>
              </div>
            </Reveal>

            {rest.length > 0 && (
              <Reveal className="mt-16">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((testimonial) => (
                    <figure key={testimonial.id} className="flex flex-col">
                      <QuoteMark className="text-accent-400" />
                      <blockquote className="mt-4 flex-1 text-lg font-medium leading-relaxed text-white/90">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-6">
                        <p className="font-heading text-sm font-bold uppercase tracking-tight">
                          {testimonial.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                          {testimonial.role ?? "Customer MSCI Mobilindo"}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Reveal>
            )}
          </>
        ) : (
          <Reveal className="mt-14 sm:mt-20">
            <div className="mx-auto max-w-xl rounded-lg border border-dashed border-white/20 px-8 py-16 text-center">
              <QuoteMark className="mx-auto text-white/20" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Testimoni pelanggan akan segera hadir di sini
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

function QuoteMark({ className = "" }: { className?: string }) {
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
        d="M7 8c-1.7 0-3 1.5-3 3.5S5.3 15 7 15c.3 0 .6 0 .8-.1-.3 1.6-1.4 2.9-2.8 3.6l.7 1.5c2.7-1 4.6-3.5 4.6-6.6V11c0-1.7-1.5-3-3.3-3Zm10 0c-1.7 0-3 1.5-3 3.5s1.3 3.5 3 3.5c.3 0 .6 0 .8-.1-.3 1.6-1.4 2.9-2.8 3.6l.7 1.5c2.7-1 4.6-3.5 4.6-6.6V11c0-1.7-1.5-3-3.3-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
