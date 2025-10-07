type ImpactItem = { value: string; label: string };

type ImpactStatsSectionProps = {
  id?: string;
  title?: string;
  items: ImpactItem[];
  className?: string;
  withCard?: boolean;
};

export default function ImpactStatsSection({
  id,
  title = "Impacto esperado",
  items,
  className,
  withCard = true,
}: ImpactStatsSectionProps) {
  return (
    <section id={id} className={className ?? "py-16 px-6"}>
      <div className="mx-auto max-w-5xl">
        <div className={withCard ? "rounded-[12px] p-8 border border-border" : "p-0"}>
          {title && (
            <h3 className="text-2xl font-extrabold text-foreground text-center">{title}</h3>
          )}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {items.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-foreground">{s.value}</div>
                <div className="mt-1 text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


