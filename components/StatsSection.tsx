export default function StatsSection() {
  const stats: Array<{ value: string; label: string }> = [
    { value: "92%", label: "Satisfacción de clientes" },
    { value: "3×", label: "Productividad de equipos" },
    { value: "1h", label: "Promedio ahorro diario" },
    { value: "Día 1", label: "Valor desde el primer día" },
  ];

  const industries = [
    "Salud",
    "Estudios contables",
    "E-commerce",
    "Agencias",
  ];

  return (
    <section id="casos-uso" aria-labelledby="stats-title" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="min-h-12 text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((name) => (
            <div
              key={name}
              className="h-10 rounded-[10px] bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)] flex items-center justify-center px-3 text-sm text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


