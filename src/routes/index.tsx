import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Lock, Sparkles, ArrowDown, Flame, Eye, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import avatar from "@/assets/profile-avatar.jpg";
import f1 from "@/assets/feature-1.jpg";
import f2 from "@/assets/feature-2.jpg";
import f3 from "@/assets/feature-3.jpg";
import f4 from "@/assets/feature-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { src: f1, alt: "Exclusive editorial portrait" },
  { src: f2, alt: "Soft natural portrait" },
  { src: f3, alt: "Luxury evening portrait" },
  { src: f4, alt: "Modern studio portrait" },
];

// Single source of truth — change this URL once and it updates the CTA button + every gallery card.
const UNLOCK_URL = "https://example.com";

function Index() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "var(--gradient-bg)" }}
    >
      <ThemeToggle />
      {/* Ambient grain / glow overlays */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay [background:repeating-linear-gradient(0deg,transparent_0,transparent_2px,oklch(1_0_0)_2px,oklch(1_0_0)_3px)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-6 py-16 sm:py-20 md:py-24">
        {/* HERO */}
        <section className="flex w-full flex-col items-center text-center">
          {/* Avatar */}
          <div className="group relative">
            <div
              className="absolute -inset-6 rounded-full blur-2xl animate-glow-pulse"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.72 0.24 0 / 0.55), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative animate-float">
              <div
                className="rounded-full p-[2px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{
                  background:
                    "conic-gradient(from 140deg, oklch(0.88 0.13 85), oklch(0.72 0.24 0), oklch(0.55 0.2 290), oklch(0.88 0.13 85))",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <img
                  src={avatar}
                  alt="Lina profile portrait"
                  width={224}
                  height={224}
                  className="h-44 w-44 rounded-full object-cover ring-4 ring-background/40 sm:h-52 sm:w-52 md:h-60 md:w-60"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1
            className="mt-10 text-5xl leading-[1.0] tracking-[-0.04em] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="font-light text-foreground">Lina</span>{" "}
            <span
              className="italic font-medium bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-name)" }}
            >
              Fight Girl
            </span>
          </h1>

          {/* Sub copy */}
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Not everything is meant for everyone…
          </p>
          <p className="mt-2 max-w-xl text-sm font-semibold text-foreground sm:text-base">
            but if you’re here, you might be exactly who this is for{" "}
            <span aria-hidden>🐠</span>
          </p>

          {/* Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              Private content <Lock className="h-3.5 w-3.5 text-accent" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              Real vibes <Sparkles className="h-3.5 w-3.5 text-accent" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              No filters <ArrowDown className="h-3.5 w-3.5 text-accent" />
            </span>
          </div>

          {/* CTA */}
          <a
            href={UNLOCK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta relative mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundImage: "var(--gradient-cta)",
              boxShadow: "var(--shadow-cta)",
            }}
          >
            <span
              className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover/cta:opacity-80"
              style={{ backgroundImage: "var(--gradient-cta)" }}
              aria-hidden
            />
            Unlock Her World
            <Lock className="h-4 w-4" />
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>

          {/* Footer pills under CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              Exclusive access <Flame className="h-3.5 w-3.5 text-primary" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              Limited viewers <Eye className="h-3.5 w-3.5 text-accent" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              Updated daily <Zap className="h-3.5 w-3.5 text-accent" />
            </span>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section
          id="gallery"
          className="mt-24 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
        >
          {features.map((f, i) => (
            <a
              key={i}
              href={UNLOCK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unlock Her World"
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={f.src}
                  alt={f.alt}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/15 transition-all duration-300 group-hover:bg-black/60">
                  <Lock className="h-4 w-4 text-white/90" />
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
          © 2028 — Crafted with intention by Scoopz
        </footer>
      </div>
    </main>
  );
}
