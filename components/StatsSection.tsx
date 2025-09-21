export default function StatsSection() {
  const benefits: Array<{ title: string; description: string; icon: string }> = [
    {
      title: "30% menos tiempo administrativo",
      description:
        "Automatización de tareas repetitivas para que te enfoques en lo importante.",
      icon: "🕒",
    },
    {
      title: "Mejor experiencia del cliente",
      description:
        "Atención inmediata y personalizada que mejora la satisfacción.",
      icon: "👤",
    },
    {
      title: "Implementación rápida",
      description:
        "Integración en días, no meses. Empiezas a ver resultados inmediatamente.",
      icon: "⚡",
    },
  ];

  const results: Array<{ value: string; label: string }> = [
    { value: "+20%", label: "Aumento en conversión" },
    { value: "30%", label: "Menos tiempo administrativo" },
    { value: "24/7", label: "Atención continua" },
    { value: "100+", label: "Empresas confiando en nosotros" },
  ];

  return (
    <section id="casos-uso" aria-labelledby="stats-title" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[12px] bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)] px-6 py-16">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-foreground">Beneficios medibles desde el día uno</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {benefits.map((b) => (
              <div key={b.title}>
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-[10px] bg-foreground/10 text-foreground text-2xl">
                  <span aria-hidden>{b.icon}</span>
                </div>
                <div className="text-base md:text-lg font-semibold text-foreground">{b.title}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-border" aria-hidden />

        <div className="text-center">
          <h2 id="stats-title" className="text-3xl md:text-4xl font-extrabold text-foreground">Resultados comprobados en diferentes industrias</h2>
          <p className="mt-4 text-muted-foreground font-medium">Médicos, inmobiliarias, corralones y estudios ya confían en Can.IA</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((s) => (
            <div key={s.label}>
              <div className="min-h-12 text-4xl md:text-5xl font-bold text-foreground">{s.value}</div>
              <div className="mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


