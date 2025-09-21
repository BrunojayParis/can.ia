export default function FeaturesSection() {
  const features: Array<{
    title: string;
    description: string;
    icon: string;
    pill: string;
  }> = [
    {
      title: "Agente Asistente",
      description:
        "Responde dudas, agenda turnos y asesora sobre precios las 24/7. Tu primera línea de atención al cliente.",
      icon: "💬",
      pill: "Reduce tiempo de respuesta a segundos",
    },
    {
      title: "Agente Engagement",
      description:
        "Convierte más clientes y aumenta la tasa de respuesta. Optimiza cada interacción para maximizar conversiones.",
      icon: "📈",
      pill: "+20% en conversión de clientes",
    },
    {
      title: "Agente Administrador",
      description:
        "Genera reportes claros de ventas e inventario para que tengas control total de tu negocio en tiempo real.",
      icon: "📊",
      pill: "Reportes automáticos y precisos",
    },
  ];

  return (
    <section id="caracteristicas" aria-labelledby="features-title" className="py-20 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="features-title" className="text-3xl md:text-4xl font-extrabold text-foreground">Tres agentes especializados, resultados tangibles</h2>
          <p className="mt-4 text-muted-foreground font-medium">Cada agente está diseñado para resolver problemas específicos de tu negocio, liberando tu tiempo para lo que realmente importa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <article
              key={item.title}
              className="bg-card border border-border rounded-[10px] p-6 transition duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-foreground/10 text-foreground text-2xl">
                <span aria-hidden>{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-6 rounded-[10px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
                {item.pill}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


