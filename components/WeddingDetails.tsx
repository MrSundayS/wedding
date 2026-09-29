"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-05-02T12:30:00+02:00");

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const emptyTime: TimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getTimeRemaining(): TimeRemaining {
  const difference = weddingDate.getTime() - Date.now();

  if (difference <= 0) {
    return emptyTime;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex min-w-[70px] flex-col items-center">
      <span className="font-serif text-5xl font-light tabular-nums md:text-6xl">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.25em] text-sand/70">
        {label}
      </span>
    </div>
  );
}

function Event({
  time,
  title,
  description,
}: {
  time: string;
  title: string;
  description: string;
}) {
  return (
    <article className="text-center">
      <span className="font-serif text-5xl font-light text-terracotta md:text-6xl">
        {time}
      </span>

      <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-olive">
        {title}
      </p>

      <p className="mx-auto mt-5 max-w-sm font-sans text-sm leading-7 text-deep-green/60">
        {description}
      </p>
    </article>
  );
}

export default function WeddingDetails() {
  const [time, setTime] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    setTime(getTimeRemaining());

    const interval = window.setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="boda" className="bg-ivory">
      {/* Main information */}
      <div className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-7 block font-sans text-xs uppercase tracking-[0.35em] text-olive">
              El gran día
            </span>

            <h2 className="font-serif text-6xl font-light leading-none text-deep-green md:text-8xl">
              Nuestra boda
            </h2>

            <p className="mt-8 font-sans text-sm uppercase tracking-[0.3em] text-deep-green/60">
              02 · Mayo · 2027
            </p>

            <div className="mx-auto my-10 font-serif text-2xl text-terracotta">
              ❋
            </div>
          </div>

          {/* Location */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-olive">
              Ceremonia y celebración
            </p>

            <h3 className="mt-4 font-serif text-4xl font-light text-deep-green md:text-5xl">
              Parador de Jaén
            </h3>

            <p className="mt-4 font-sans text-sm leading-7 text-deep-green/60">
              Jaén · Andalucía
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Parador+de+Ja%C3%A9n"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block border border-deep-green/30 px-6 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-deep-green transition-colors hover:border-deep-green hover:bg-deep-green hover:text-ivory"
            >
              Cómo llegar
            </a>
          </div>

          {/* Timeline */}
          <div className="relative mt-24 grid gap-20 md:grid-cols-2 md:gap-24">
            <Event
              time="12:30"
              title="Ceremonia"
              description="El momento en el que comenzaremos juntos este nuevo capítulo."
            />

            <Event
              time="13:15"
              title="Celebración"
              description="Después de la ceremonia, nos quedaremos en el mismo lugar para celebrar, comer y disfrutar juntos."
            />

            <div className="absolute left-1/2 top-4 hidden h-px w-24 -translate-x-1/2 bg-sand md:block" />
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="bg-deep-green px-6 py-24 text-center text-ivory md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-sand">
            Cuenta atrás
          </p>

          <h3 className="mt-5 font-serif text-4xl font-light md:text-5xl">
            Hasta que llegue el gran día
          </h3>

          <div className="mx-auto my-10 h-px w-12 bg-terracotta" />

          <div className="flex justify-center gap-3 sm:gap-5 md:gap-12">
            {time ? (
              <>
                <TimeUnit value={time.days} label="Días" />
                <TimeUnit value={time.hours} label="Horas" />
                <TimeUnit value={time.minutes} label="Minutos" />
                <TimeUnit value={time.seconds} label="Segundos" />
              </>
            ) : (
              <>
                <TimeUnit value={0} label="Días" />
                <TimeUnit value={0} label="Horas" />
                <TimeUnit value={0} label="Minutos" />
                <TimeUnit value={0} label="Segundos" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
