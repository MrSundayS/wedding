export default function Jaen() {
  return (
    <section id="jaen" className="overflow-hidden bg-sand">
      {/* Introduction */}
      <div className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <span className="mb-7 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
                Andalucía
              </span>

              <h2 className="font-serif text-7xl font-light leading-none text-deep-green md:text-9xl">
                Jaén
              </h2>
            </div>

            <div className="max-w-xl md:pb-2">
              <p className="font-serif text-3xl font-light leading-relaxed text-deep-green md:text-4xl">
                Tierra de olivares, piedra, luz y largas sobremesas.
              </p>

              <p className="mt-8 font-sans text-base leading-8 text-deep-green/70">
                Hemos elegido Jaén para celebrar este día y nos hace especial
                ilusión compartir con vosotros un pequeño rincón de Andalucía
                que forma parte de nuestra historia.
              </p>

              <p className="mt-5 font-sans text-base leading-8 text-deep-green/70">
                Si tenéis algo de tiempo antes o después de la boda, aquí van
                algunas de nuestras recomendaciones para descubrir la ciudad
                y sus alrededores.
              </p>
            </div>
          </div>

          {/* Main image */}
          <div className="relative mt-20 aspect-[16/9] overflow-hidden md:mt-28">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/jaen.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-deep-green/10" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white">
                Jaén · Andalucía
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-ivory px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-7 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
              Para descubrir la ciudad
            </span>

            <h3 className="font-serif text-5xl font-light leading-tight text-deep-green md:text-7xl">
              Si tenéis unas horas...
            </h3>

            <p className="mt-7 font-sans text-base leading-8 text-deep-green/65">
              Jaén tiene un casco histórico perfecto para recorrerlo sin
              demasiadas prisas. Estas son algunas de las paradas que más
              merece la pena tener en cuenta.
            </p>
          </div>

          <div className="mt-20 grid gap-px bg-sand md:grid-cols-2">
            <Recommendation
              number="01"
              title="Catedral de Jaén"
              description="Una de las grandes obras del Renacimiento español y una de las visitas imprescindibles del centro histórico. Fue proyectada en buena parte por Andrés de Vandelvira."
              image="/catedral-de-jaen.jpg"
            />

            <Recommendation
              number="02"
              title="Baños Árabes"
              description="Situados bajo el Palacio de Villardompardo, son uno de los grandes vestigios del pasado andalusí de la ciudad y una de las visitas más singulares del casco histórico."
              image="/images/banos-arabes.jpg"
            />

            <Recommendation
              number="03"
              title="Castillo de Santa Catalina"
              description="En lo alto del cerro, junto al Parador, ofrece unas vistas extraordinarias sobre Jaén, el valle del Guadalquivir y el paisaje de olivares."
              image="/images/castillo-jaen.jpg"
            />

            <Recommendation
              number="04"
              title="Museo Íbero"
              description="Una buena opción para quienes quieran conocer la historia y el patrimonio de la cultura íbera en Andalucía."
              image="/images/museo-ibero.jpg"
            />
          </div>
        </div>
      </div>

      {/* Food */}
      <div className="bg-terracotta px-6 py-28 text-ivory md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.35em] text-sand">
                Para comer
              </span>

              <h3 className="mt-6 font-serif text-5xl font-light md:text-7xl">
                El sabor de Jaén
              </h3>
            </div>

            <div>
              <p className="font-serif text-2xl font-light leading-relaxed md:text-3xl">
                Si hay algo que define esta tierra, es el aceite de oliva
                virgen extra.
              </p>

              <p className="mt-7 font-sans text-base leading-8 text-ivory/75">
                En Jaén encontraréis desde bares tradicionales donde tomar
                unas tapas hasta restaurantes que reinterpretan la cocina
                jiennense. Merece la pena probar el aceite local, la pipirrana,
                las tapas y algunos de los platos tradicionales de la zona.
              </p>
            </div>
          </div>

          {/* Restaurant recommendations */}
          {/* Restaurants */}
<div className="mt-20">
  <div className="mb-10">
    <p className="font-sans text-xs uppercase tracking-[0.3em] text-sand">
      Algunos sitios que nos gustan
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FoodCard
        category="Tascas & tapeo"
        title="Tasca del Gorrión"
        description="Un sitio para disfrutar del ambiente más informal de Jaén, compartir unas tapas y dejarse llevar por la vida de las calles del centro."
        href="https://www.google.com/maps/search/?api=1&query=Tasca+del+Gorrion+Jaen"
        />

        <FoodCard
        category="Cocina de autor"
        title="Támesis"
        description="Cocina tradicional con un toque creativo, producto local y una carta pensada para compartir. Una opción algo más especial para una comida o cena."
        href="https://restaurantetamesis.es/"
        />

        <FoodCard
        category="Alta cocina"
        title="Bagá"
        description="Una experiencia gastronómica muy especial alrededor del producto de Jaén y del aceite de oliva. Tiene un único menú degustación y conviene reservar con bastante antelación."
        href="https://www.google.com/maps/search/?api=1&query=Bag%C3%A1+Ja%C3%A9n"
        />

        <FoodCard
        category="Producto local"
        title="Aceite de oliva virgen extra"
        description="Más que un ingrediente, el AOVE es parte de la identidad de Jaén. Si tenéis ocasión, probad diferentes variedades y descubrid el picual de la provincia."
        />

        <FoodCard
        category="Tapeo"
        title="Bares del casco histórico"
        description="Para una experiencia más espontánea, merece la pena perderse por el centro, pedir una bebida y descubrir las tapas y pequeñas tabernas de la ciudad."
        />

        <FoodCard
        category="Sobremesa"
        title="Sin prisa"
        description="En Jaén comer también consiste en sentarse, compartir, conversar y alargar la sobremesa. Esa parte también queremos que la disfrutéis."
        />
    </div>
</div>

        </div>
      </div>

      {/* Day trips */}
      <div className="bg-ivory px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
            <div>
              <span className="mb-7 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
                Si os quedáis más tiempo
              </span>

              <h3 className="font-serif text-5xl font-light leading-tight text-deep-green md:text-7xl">
                Un poco más de Andalucía
              </h3>

              <p className="mt-8 font-sans text-base leading-8 text-deep-green/65">
                Si vuestra visita a España dura varios días, la provincia de
                Jaén también permite hacer pequeñas escapadas.
              </p>
            </div>

            <div className="grid gap-px bg-sand md:grid-cols-2">
              <RecommendationSmall
                title="Úbeda"
                description="Una de las grandes ciudades renacentistas de la provincia y Patrimonio Mundial de la UNESCO."
              />

              <RecommendationSmall
                title="Baeza"
                description="Otra joya del Renacimiento andaluz, muy cerca de Úbeda y perfecta para visitar en el mismo día."
              />

              <RecommendationSmall
                title="Olivares"
                description="El paisaje de olivos es parte esencial de la identidad de Jaén y se extiende por buena parte de la provincia."
              />

              <RecommendationSmall
                title="Sierra de Cazorla"
                description="Para quienes prefieran naturaleza, la provincia ofrece también grandes espacios naturales y rutas."
              />
            </div>
          </div>
        </div>
      </div>

      {/* International guests */}
      <div className="bg-deep-green px-6 py-28 text-ivory md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <div>
              <span className="mb-7 block font-sans text-xs uppercase tracking-[0.35em] text-sand">
                Información práctica
              </span>

              <h3 className="font-serif text-5xl font-light leading-tight md:text-6xl">
                Para nuestros
                <br />
                invitados
                <br />
                que vienen de
                <br />
                fuera de España
              </h3>

              <div className="mt-10 font-serif text-2xl text-terracotta">
                ❋
              </div>
            </div>

            <div className="grid gap-px bg-ivory/10">
              <InfoItem
                number="01"
                title="Cómo llegar"
                description="Más adelante añadiremos una pequeña guía con las opciones más cómodas para llegar a Jaén desde Madrid, Málaga, Sevilla y otros puntos de España."
              />

              <InfoItem
                number="02"
                title="Dónde alojarse"
                description="Prepararemos algunas opciones de alojamiento en Jaén y alrededores para que podáis elegir según vuestro presupuesto y el tipo de viaje."
              />

              <InfoItem
                number="03"
                title="Transporte"
                description="También incluiremos información sobre cómo desplazarse entre el alojamiento, el Parador y otros puntos de interés."
              />

              <InfoItem
                number="04"
                title="Unos días más"
                description="Si vais a aprovechar el viaje para conocer Andalucía, os dejaremos algunas ideas para combinar Jaén con otros destinos."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Parador */}
      <div className="bg-deep-green px-6 pb-28 text-ivory md:pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/parador.jpg')",
                }}
              />
            </div>

            <div className="max-w-xl">
              <span className="font-sans text-xs uppercase tracking-[0.35em] text-sand">
                Nuestro lugar
              </span>

              <h3 className="mt-6 font-serif text-5xl font-light md:text-7xl">
                Parador
                <br />
                de Jaén
              </h3>

              <p className="mt-8 font-sans text-base leading-8 text-ivory/70">
                En lo alto de la ciudad, junto al Castillo de Santa Catalina,
                será el escenario de nuestra ceremonia y celebración.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Parador+de+Ja%C3%A9n"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-sand/50 px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-sand hover:text-deep-green"
              >
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Recommendation({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="bg-ivory">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      </div>

      <div className="p-8 md:p-10">
        <div className="flex gap-5">
          <span className="font-serif text-xl font-light text-terracotta">
            {number}
          </span>

          <div>
            <h4 className="font-serif text-3xl font-light text-deep-green">
              {title}
            </h4>

            <p className="mt-4 font-sans text-sm leading-7 text-deep-green/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function RecommendationSmall({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="bg-ivory p-8 md:p-10">
      <h4 className="font-serif text-3xl font-light text-deep-green">
        {title}
      </h4>

      <p className="mt-4 font-sans text-sm leading-7 text-deep-green/60">
        {description}
      </p>
    </article>
  );
}

function FoodCard({
  category,
  title,
  description,
  href,
}: {
  category: string;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-sand/70">
        {category}
      </span>

      <h4 className="mt-4 font-serif text-3xl font-light">
        {title}
      </h4>

      <p className="mt-4 font-sans text-sm leading-7 text-ivory/70">
        {description}
      </p>

      {href && (
        <span className="mt-6 inline-block border-b border-sand/40 pb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-sand">
          Ver sitio
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-ivory/20 p-8 transition-colors hover:border-sand/60 hover:bg-ivory/5 md:p-10"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="border border-ivory/20 p-8 md:p-10">
      {content}
    </article>
  );
}



function InfoItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="bg-deep-green p-8 md:p-10">
      <div className="flex gap-6">
        <span className="font-serif text-xl font-light text-terracotta">
          {number}
        </span>

        <div>
          <h4 className="font-serif text-3xl font-light text-ivory">
            {title}
          </h4>

          <p className="mt-4 font-sans text-sm leading-7 text-ivory/60">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
