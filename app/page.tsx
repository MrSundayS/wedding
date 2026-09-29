export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#29362b]">
      {/* Navigation */}
      <header className="absolute left-0 top-0 z-20 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a
            href="#"
            className="font-serif text-xl tracking-[0.15em] text-white"
          >
            D & E
          </a>

          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white md:flex">
            <a href="#historia" className="transition-opacity hover:opacity-60">
              Nuestra historia
            </a>

            <a href="#boda" className="transition-opacity hover:opacity-60">
              La boda
            </a>

            <a href="#jaen" className="transition-opacity hover:opacity-60">
              Jaén
            </a>

            <a href="#rsvp" className="transition-opacity hover:opacity-60">
              RSVP
            </a>
          </div>

          <div className="flex gap-2 text-xs uppercase tracking-[0.15em] text-white">
            <button className="font-semibold">ES</button>
            <span className="opacity-50">·</span>
            <button className="opacity-60 transition-opacity hover:opacity-100">
              EN
            </button>
            <span className="opacity-50">·</span>
            <button className="opacity-60 transition-opacity hover:opacity-100">
              RU
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#29362b]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(41, 54, 43, 0.35), rgba(41, 54, 43, 0.55)), url('/mar-de-olivos-jaen.jpg')",
          }}
        />

        {/* Decorative texture */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)] [background-size:14px_14px]" />

        {/* Hero content */}
        <div className="relative z-10 px-6 text-center text-[#f7f3ea]">
          <p className="mb-8 text-xs uppercase tracking-[0.45em]">
            Jaén · España
          </p>

          <h1 className="font-serif text-7xl font-light tracking-tight sm:text-8xl md:text-9xl">
            Darya
          </h1>

          <div className="my-2 font-serif text-4xl italic font-light md:text-5xl">
            &
          </div>

          <h1 className="font-serif text-7xl font-light tracking-tight sm:text-8xl md:text-9xl">
            Ernesto
          </h1>

          <div className="mx-auto my-10 h-px w-16 bg-[#d9c8a8]" />

          <p className="text-sm uppercase tracking-[0.35em]">
            02 · 05 · 2027
          </p>
        </div>

        {/* Scroll indicator */}
        <a
          href="#historia"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#f7f3ea]"
          aria-label="Descubrir la página"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Descubrir
            </span>

            <span className="h-10 w-px bg-[#d9c8a8]" />
          </div>
        </a>
      </section>

      {/* Introduction */}
      <section
        id="historia"
        className="px-6 py-32 text-center md:py-44"
      >
        <div className="mx-auto max-w-3xl">
          <span className="mb-8 block text-xs uppercase tracking-[0.35em] text-[#667052]">
            Nuestra historia
          </span>

          <h2 className="font-serif text-5xl font-light leading-tight text-[#29362b] md:text-7xl">
            Dos lugares.
            <br />
            Una historia.
            <br />
            Un día juntos.
          </h2>

          <div className="mx-auto my-10 text-2xl text-[#a96148]">
            ❋
          </div>

          <p className="mx-auto max-w-xl text-base leading-8 text-[#29362b]/70">
            Hay historias que comienzan lejos de casa y terminan
            encontrando un lugar entre olivos.
          </p>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section
        id="boda"
        className="flex min-h-[50vh] items-center justify-center bg-[#29362b] px-6 text-center text-[#f7f3ea]"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d9c8a8]">
            Próximamente
          </p>

          <h2 className="font-serif text-5xl font-light md:text-7xl">
            El gran día
          </h2>
        </div>
      </section>

      <section
        id="jaen"
        className="flex min-h-[50vh] items-center justify-center bg-[#d9c8a8] px-6 text-center"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#667052]">
            Andalucía
          </p>

          <h2 className="font-serif text-5xl font-light text-[#29362b] md:text-7xl">
            Jaén
          </h2>
        </div>
      </section>

      <section
        id="rsvp"
        className="flex min-h-[60vh] items-center justify-center bg-[#f7f3ea] px-6 text-center"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#667052]">
            Nos acompañas?
          </p>

          <h2 className="font-serif text-5xl font-light text-[#29362b] md:text-7xl">
            Confirma tu asistencia
          </h2>

          <button className="mt-10 bg-[#29362b] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#f7f3ea] transition-colors hover:bg-[#667052]">
            Confirmar
          </button>
        </div>
      </section>
    </main>
  );
}
