export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-green">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41, 54, 43, 0.35), rgba(41, 54, 43, 0.55)), url('/images/hero.jpg')",
        }}
      />

      {/* Subtle paper-like texture */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)] [background-size:14px_14px]" />

      {/* Main content */}
      <div className="relative z-10 px-6 text-center text-ivory">
        <p className="mb-8 font-sans text-xs uppercase tracking-[0.45em]">
          Jaén · España
        </p>

        <h1 className="font-serif text-7xl font-light tracking-tight sm:text-8xl md:text-9xl">
          Darya
        </h1>

        <div className="my-2 font-serif text-4xl font-light italic md:text-5xl">
          &
        </div>

        <h1 className="font-serif text-7xl font-light tracking-tight sm:text-8xl md:text-9xl">
          Ernesto
        </h1>

        <div className="mx-auto my-10 h-px w-16 bg-sand" />

        <p className="font-sans text-sm uppercase tracking-[0.35em]">
          02 · 05 · 2027
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory"
        aria-label="Descubrir la página"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
            Descubrir
          </span>

          <span className="h-10 w-px bg-sand" />
        </div>
      </a>
    </section>
  );
}
