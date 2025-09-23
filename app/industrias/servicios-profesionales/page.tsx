import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can.IA para Servicios Profesionales — Más horas facturables, menos tareas",
  description:
    "Consultorías, estudios y agencias: automatizamos intake de clientes, seguimiento y reporting para liberar horas facturables.",
};

type Card = { icon: string; title: string; description: string };

const cards: Card[] = [
  {
    icon: "🧭",
    title: "Calificación de leads",
    description:
      "Clasificamos consultas, pedimos la info clave y agendamos reuniones automáticamente.",
  },
  {
    icon: "📨",
    title: "Onboarding y seguimiento",
    description:
      "Entregables, recordatorios y next‑steps sin perseguir correos ni chats.",
  },
  {
    icon: "📊",
    title: "Reportes automáticos",
    description:
      "Estado de proyectos y KPIs en tu bandeja cada mañana, listos para compartir.",
  },
  {
    icon: "💬",
    title: "Asistente de cuenta",
    description:
      "Responde dudas frecuentes de clientes y deriva sólo lo importante a tu equipo.",
  },
];

export default function ProfesionalesPage() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full h-8 px-3 bg-muted mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden />
              <span className="text-sm text-foreground">Servicios profesionales</span>
            </div>
            <h1 className="font-extrabold leading-tight gradient-hero-text text-4xl md:text-6xl">
              Convertí más y entregá mejor, sin trabajar más horas.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground mx-auto max-w-2xl font-medium">
              Nuestros agentes automatizan la calificación de leads, la coordinación y el reporting. Vos te enfocás en el trabajo de alto valor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contacto" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity">Solicitar demo</Link>
              <Link href="/" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors">Casos reales</Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-extrabold text-foreground">Tu estudio, con piloto automático</h2>
              <p className="mt-3 text-muted-foreground font-medium">Más foco en estrategia, menos en coordinación.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((c) => (
                <article key={c.title} className="bg-card border border-border rounded-[10px] p-6 hover:shadow-lg transition">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-foreground/10 text-foreground text-2xl"><span aria-hidden>{c.icon}</span></div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
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
                {[{v:"+30%", l:"tasa de cierre"}, {v:"-40%", l:"tiempo de coordinación"}, {v:"24/7", l:"respuesta a leads"}, {v:"100%", l:"reportes a tiempo"}].map((s) => (
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Hacé crecer tus horas facturables</h2>
              <p className="mt-3 text-muted-foreground font-medium">Activamos tus agentes en días. Sin fricción, sin proyectos eternos.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link href="#contacto" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity">Agenda una llamada</Link>
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


