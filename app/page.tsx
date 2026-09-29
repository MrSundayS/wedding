import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import WeddingDetails from "@/components/WeddingDetails";
import Jaen from "@/components/Jaen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-deep-green">
      <Header />

      <Hero />

      <Story />

      <WeddingDetails />

      <Jaen />

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

      <Footer/>
    </main>
  );
}
