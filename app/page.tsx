import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-deep-green">
      <Header />

      <Hero />

      {/* Introduction */}
      <section
        id="historia"
        className="px-6 py-32 text-center md:py-44"
      >
        <div className="mx-auto max-w-3xl">
          <span className="mb-8 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
            Nuestra historia
          </span>

          <h2 className="font-serif text-5xl font-light leading-tight text-deep-green md:text-7xl">
            Dos lugares.
            <br />
            Una historia.
            <br />
            Un día juntos.
          </h2>

          <div className="mx-auto my-10 font-serif text-2xl text-terracotta">
            ❋
          </div>

          <p className="mx-auto max-w-xl font-sans text-base leading-8 text-deep-green/70">
            Hay historias que comienzan lejos de casa y terminan
            encontrando un lugar al que llamar hogar.
          </p>
        </div>
      </section>

      {/* Wedding */}
      <section
        id="boda"
        className="flex min-h-[50vh] items-center justify-center bg-deep-green px-6 text-center text-ivory"
      >
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-sand">
            El gran día
          </p>

          <h2 className="font-serif text-5xl font-light md:text-7xl">
            Nuestra boda
          </h2>
        </div>
      </section>

      {/* Jaén */}
      <section
        id="jaen"
        className="flex min-h-[50vh] items-center justify-center bg-sand px-6 text-center"
      >
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-olive">
            Andalucía
          </p>

          <h2 className="font-serif text-6xl font-light text-deep-green md:text-8xl">
            Jaén
          </h2>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="flex min-h-[60vh] items-center justify-center bg-ivory px-6 text-center"
      >
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-olive">
            Nos acompañas?
          </p>

          <h2 className="font-serif text-5xl font-light text-deep-green md:text-7xl">
            Confirma tu asistencia
          </h2>

          <button className="mt-10 bg-deep-green px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-olive">
            Confirmar
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-green px-6 py-16 text-center text-ivory">
        <p className="font-serif text-3xl">
          Darya & Ernesto
        </p>

        <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-sand">
          02 · 05 · 2027 · Jaén
        </p>

        <div className="mt-8 font-sans text-xs tracking-[0.2em] text-ivory/60">
          ES · EN · RU
        </div>
      </footer>
    </main>
  );
}
