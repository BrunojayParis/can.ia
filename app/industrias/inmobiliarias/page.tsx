import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactStatsSection from "@/components/ImpactStatsSection";
import FinalCTA from "@/components/FinalCTA";

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
        <HeroSection
          badgeText="Soluciones para inmobiliarias"
          title="Más visitas calificadas, menos seguimiento manual."
          description="Can.IA responde al instante, califica interesados y coordina visitas sin fricción. Tu equipo cierra operaciones; nosotros mantenemos el canal caliente."
          primaryCta={{ href: "#contacto", label: "Quiero más visitas" }}
          secondaryCta={{ href: "/", label: "Ver producto" }}
          className="pt-32 pb-16 px-6"
        />

        <FeaturesSection
          className="py-16 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]"
          title="Automatizaciones clave para tu funnel inmobiliario"
          subtitle="Tomamos cada consulta y la convertimos en una visita calificada."
          items={highlights.map((h) => ({ ...h }))}
        />

        <ImpactStatsSection
          items={[
            { value: "+35%", label: "visitas coordinadas" },
            { value: "-50%", label: "no‑shows" },
            { value: "24/7", label: "respuesta instantánea" },
            { value: "x2", label: "conversion de lead a visita" },
          ]}
        />

        <FinalCTA
          title="Nunca más dejes un lead sin respuesta"
          description="Integración en días con portales y WhatsApp Business."
          primaryCta={{ href: "#contacto", label: "Agendar demo" }}
          secondaryCta={{ href: "/", label: "Volver al inicio" }}
        />
      </main>
      <Footer />
    </div>
  );
}


