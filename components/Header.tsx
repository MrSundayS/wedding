"use client";

import { useState } from "react";

const navigation = [
  { label: "Nuestra historia", href: "#historia" },
  { label: "La boda", href: "#boda" },
  { label: "Jaén", href: "#jaen" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="relative z-50 font-serif text-xl tracking-[0.15em] text-white"
        >
          D & E
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 font-sans text-xs uppercase tracking-[0.2em] text-white md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language selector - desktop */}
        <div className="hidden items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-white md:flex">
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-px w-5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-4 h-px w-5 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-deep-green transition-all duration-500 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-7">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="font-serif text-4xl font-light text-ivory transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-14 flex items-center gap-4 font-sans text-xs uppercase tracking-[0.2em] text-ivory">
            <button className="font-semibold">ES</button>

            <span className="opacity-40">·</span>

            <button className="opacity-60">EN</button>

            <span className="opacity-40">·</span>

            <button className="opacity-60">RU</button>
          </div>
        </div>
      </div>
    </header>
  );
}
