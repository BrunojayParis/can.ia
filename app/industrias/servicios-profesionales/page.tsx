import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactStatsSection from "@/components/ImpactStatsSection";
import FinalCTA from "@/components/FinalCTA";

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
        <HeroSection
          badgeText="Servicios profesionales"
          title="Convertí más y entregá mejor, sin trabajar más horas."
          description="Nuestros agentes automatizan la calificación de leads, la coordinación y el reporting. Vos te enfocás en el trabajo de alto valor."
          primaryCta={{ href: "#contacto", label: "Solicitar demo" }}
          secondaryCta={{ href: "/", label: "Casos reales" }}
          className="pt-32 pb-16 px-6"
        />

        <FeaturesSection
          className="py-16 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]"
          title="Tu estudio, con piloto automático"
          subtitle="Más foco en estrategia, menos en coordinación."
          items={cards.map((c) => ({ ...c }))}
        />

        <ImpactStatsSection
          items={[
            { value: "+30%", label: "tasa de cierre" },
            { value: "-40%", label: "tiempo de coordinación" },
            { value: "24/7", label: "respuesta a leads" },
            { value: "100%", label: "reportes a tiempo" },
          ]}
        />

        <FinalCTA
          title="Hacé crecer tus horas facturables"
          description="Activamos tus agentes en días. Sin fricción, sin proyectos eternos."
          primaryCta={{ href: "#contacto", label: "Agenda una llamada" }}
          secondaryCta={{ href: "/", label: "Volver al inicio" }}
        />
      </main>
      <Footer />
    </div>
  );
}


