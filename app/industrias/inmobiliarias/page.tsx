import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can.IA para Inmobiliarias — Leads calientes y agenda siempre llena",
  description:
    "Agentes que responden consultas, califican interesados y coordinan visitas 24/7 para tu inmobiliaria.",
};

const highlights: Array<{ icon: string; title: string; description: string }> = [
  { icon: "🏷️", title: "Captación y seguimiento", description: "Contestamos avisos al instante, nutrimos y priorizamos leads por intención." },
  { icon: "📅", title: "Coordinación de visitas", description: "Agenda automática con confirmaciones y recordatorios por WhatsApp." },
  { icon: "🧭", title: "Calificación de compradores", description: "Presupuesto, ubicación, tipo y etapa para no perder tiempo en frío." },
  { icon: "📈", title: "Reporte de unidades", description: "Panel con actividad, consultas y conversiones por propiedad y canal." },
];

export default function InmobiliariasPage() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full h-8 px-3 bg-muted mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden />
              <span className="text-sm text-foreground">Soluciones para inmobiliarias</span>
            </div>
            <h1 className="font-extrabold leading-tight gradient-hero-text text-4xl md:text-6xl">
              Más visitas calificadas, menos seguimiento manual.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground mx-auto max-w-2xl font-medium">
              Can.IA responde al instante, califica interesados y coordina visitas sin fricción. Tu equipo cierra operaciones; nosotros mantenemos el canal caliente.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contacto" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity">Quiero más visitas</Link>
              <Link href="/" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors">Ver producto</Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-extrabold text-foreground">Automatizaciones clave para tu funnel inmobiliario</h2>
              <p className="mt-3 text-muted-foreground font-medium">Tomamos cada consulta y la convertimos en una visita calificada.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h) => (
                <article key={h.title} className="bg-card border border-border rounded-[10px] p-6 hover:shadow-lg transition">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-foreground/10 text-foreground text-2xl"><span aria-hidden>{h.icon}</span></div>
                  <h3 className="text-lg font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[12px] p-8 border border-border">
              <h3 className="text-2xl font-extrabold text-foreground text-center">Impacto esperado</h3>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[{v:"+35%", l:"visitas coordinadas"}, {v:"-50%", l:"no‑shows"}, {v:"24/7", l:"respuesta instantánea"}, {v:"x2", l:"conversion de lead a visita"}].map((s) => (
                  <div key={s.l}>
                    <div className="text-4xl font-bold text-foreground">{s.v}</div>
                    <div className="mt-1 text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl p-12 text-center gradient-cta-bg">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Nunca más dejes un lead sin respuesta</h2>
              <p className="mt-3 text-muted-foreground font-medium">Integración en días con portales y WhatsApp Business.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link href="#contacto" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity">Agendar demo</Link>
                <Link href="/" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors">Volver al inicio</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


