export default function FeaturesSection() {
  const features: Array<{ title: string; description: string; icon: string }> = [
    {
      title: "Asistente",
      description:
        "Agenda turnos, responde dudas y mantiene tu CRM actualizado.",
      icon: "🤝",
    },
    {
      title: "Engagement",
      description: "Sigue a tus clientes, asesora y ayuda a vender más.",
      icon: "📈",
    },
    {
      title: "Administrador",
      description: "Genera reportes de ventas e impuestos sin esfuerzo.",
      icon: "🧾",
    },
  ];

  return (
    <section id="caracteristicas" aria-labelledby="features-title" className="py-20 px-6 bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="features-title" className="text-3xl md:text-4xl font-medium text-foreground">Características</h2>
          <p className="mt-4 text-muted-foreground">Tres formas de recuperar tu tiempo con Can.IA.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <article
              key={item.title}
              className="bg-card border border-border rounded-[10px] p-6 transition duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-primary/10 text-primary text-2xl">
                <span aria-hidden>{item.icon}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


