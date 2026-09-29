export default function Story() {
  return (
    <section
      id="historia"
      className="overflow-hidden bg-ivory px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-8 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
            Nuestra historia
          </span>

          <h2 className="font-serif text-5xl font-light leading-[1.05] text-deep-green md:text-7xl">
            Dos lugares.
            <br />
            Una historia.
          </h2>

          <div className="mx-auto my-10 font-serif text-2xl text-terracotta">
            ❋
          </div>

          <p className="font-sans text-base leading-8 text-deep-green/70 md:text-lg">
            Hay historias que comienzan lejos de casa y terminan
            encontrando un lugar entre olivos.
          </p>
        </div>

        {/* First chapter */}
        <div className="mt-24 grid items-center gap-12 md:grid-cols-2 md:gap-20 lg:mt-36">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/story-01.jpg')",
              }}
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="font-serif text-5xl font-light text-terracotta">
              01
            </span>

            <p className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-olive">
              Donde todo comenzó
            </p>

            <h3 className="mt-4 font-serif text-4xl font-light text-deep-green md:text-5xl">
              Dos caminos que se encontraron.
            </h3>

            <p className="mt-8 font-sans text-base leading-8 text-deep-green/70">
              Aquí va la historia. Podemos contar pues eso como os conocisteis y como fue todo oka mate?
            </p>
          </div>
        </div>

        {/* Second chapter */}
        <div className="mt-24 grid items-center gap-12 md:mt-36 md:grid-cols-2 md:gap-20">
          {/* Text */}
          <div className="order-2 max-w-lg md:order-1 md:ml-auto">
            <span className="font-serif text-5xl font-light text-terracotta">
              02
            </span>

            <p className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-olive">
              Dos lugares
            </p>

            <h3 className="mt-4 font-serif text-4xl font-light text-deep-green md:text-5xl">
              De Lituania a Andalucía.
            </h3>

            <p className="mt-8 font-sans text-base leading-8 text-deep-green/70">
              Aqui pues como llegasteis a españa y todo eso como casan los dos lugares y demás
            </p>
          </div>

          {/* Image */}
          <div className="order-1 relative aspect-[4/5] overflow-hidden bg-sand md:order-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/story-02.jpg')",
              }}
            />
          </div>
        </div>

        {/* Final statement */}
        <div className="mx-auto mt-32 max-w-2xl text-center md:mt-48">
          <div className="font-serif text-3xl text-terracotta">❋</div>

          <p className="mt-8 font-serif text-3xl font-light leading-relaxed text-deep-green md:text-4xl">
            Y ahora queremos celebrar el siguiente capítulo con las
            personas que queremos.
          </p>
        </div>
      </div>
    </section>
  );
}
