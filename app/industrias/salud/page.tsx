import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactStatsSection from "@/components/ImpactStatsSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Can.IA para Salud — Agenda, triaje y recordatorios automatizados",
  description:
    "Automatizamos la atención de salud: agenda turnos, recordatorios, pretriaje y seguimiento de pacientes con IA operativa.",
};

type Feature = { icon: string; title: string; description: string };

const features: Feature[] = [
  {
    icon: "📅",
    title: "Agenda inteligente",
    description:
      "Reserva, confirma y reprograma turnos por WhatsApp o web de forma automática.",
  },
  {
    icon: "🔔",
    title: "Recordatorios y ausentismo",
    description:
      "Reduce ausencias con recordatorios automáticos y confirmación 1‑clic.",
  },
  {
    icon: "🩺",
    title: "Pre‑triaje y derivación",
    description:
      "Recopila síntomas, clasifica urgencia y deriva al profesional correcto.",
  },
  {
    icon: "🧾",
    title: "Gestión administrativa",
    description:
      "Envío de indicaciones, presupuestos y comprobantes sin tocar una planilla.",
  },
];

export default function SaludPage() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection
          badgeText="Soluciones para Salud"
          title="Más tiempo con pacientes, menos en la agenda."
          description="Can.IA automatiza la recepción, el triaje y la coordinación de turnos. Tu equipo se enfoca en la atención, mientras nuestros agentes hacen el resto 24/7."
          primaryCta={{ href: "#contacto", label: "Hablar con un especialista" }}
          secondaryCta={{ href: "/", label: "Ver cómo funciona" }}
          className="pt-32 pb-16 px-6"
        />

        <FeaturesSection
          className="py-16 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]"
          title="Automatizaciones que cuidan a tus pacientes"
          subtitle="Resultados medibles desde la primera semana."
          items={features.map((f) => ({ ...f }))}
        />

        <ImpactStatsSection
          items={[
            { value: "-35%", label: "ausentismo" },
            { value: "+24/7", label: "respuesta" },
            { value: "-30%", label: "tiempo administrativo" },
            { value: "+20%", label: "ocupación de agenda" },
          ]}
        />

        <FinalCTA
          title="Empezá a atender mejor sin agregar más personal"
          description="Instalamos, integramos y entrenamos a tus agentes en días, no meses."
          primaryCta={{ href: "#contacto", label: "Agendar una demo" }}
          secondaryCta={{ href: "/", label: "Volver al inicio" }}
        />
      </main>
      <Footer />
    </div>
  );
}


