export default function Footer() {
  return (
    <footer className="bg-deep-green text-ivory">
      {/* Main footer */}
      <div className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24">
            {/* Names */}
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.35em] text-sand">
                Nos vemos en Jaén
              </p>

              <h2 className="mt-6 font-serif text-6xl font-light leading-none md:text-8xl">
                Darya
                <span className="mx-3 text-terracotta">&</span>
                Ernesto
              </h2>

              <p className="mt-8 max-w-md font-serif text-xl font-light leading-relaxed text-ivory/70">
                Gracias por acompañarnos en uno de los días más importantes
                de nuestras vidas.
              </p>
            </div>

            {/* Navigation */}
            <nav className="md:pt-2">
              <p className="mb-7 font-sans text-xs uppercase tracking-[0.3em] text-sand">
                La boda
              </p>

              <div className="flex flex-col items-start gap-4">
                <FooterLink href="#inicio">
                  Inicio
                </FooterLink>

                <FooterLink href="#historia">
                  Nuestra historia
                </FooterLink>

                <FooterLink href="#boda">
                  El gran día
                </FooterLink>

                <FooterLink href="#jaen">
                  Jaén
                </FooterLink>

                <FooterLink href="#rsvp">
                  Confirmar asistencia
                </FooterLink>
              </div>
            </nav>
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-ivory/15 md:my-20" />

          {/* Bottom */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-ivory/50">
                02 · Mayo · 2027
              </p>

              <p className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-ivory/50">
                Parador de Jaén · Andalucía
              </p>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-5 font-sans text-[10px] uppercase tracking-[0.25em]">
              <button className="text-sand">
                ES
              </button>

              <span className="text-ivory/20">/</span>

              <button className="text-ivory/50 transition-colors hover:text-sand">
                EN
              </button>

              <span className="text-ivory/20">/</span>

              <button className="text-ivory/50 transition-colors hover:text-sand">
                RU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final line */}
      <div className="border-t border-ivory/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-ivory/30">
            Con todo nuestro cariño
          </p>

          <p className="font-serif text-sm text-ivory/30">
            ❋
          </p>

          <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-ivory/30">
            Jaén · 2027
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-serif text-2xl font-light text-ivory/70 transition-colors hover:text-sand"
    >
      {children}
    </a>
  );
}
