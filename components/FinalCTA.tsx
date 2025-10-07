import Link from "next/link";

type Cta = { href: string; label: string };

type FinalCTAProps = {
  id?: string;
  title?: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  className?: string;
};

export default function FinalCTA({
  id = "planes",
  title = "Tu tiempo vale más que tus tareas repetitivas.",
  description = "Probá Can.IA hoy mismo y empezá a recuperar horas todos los días.",
  primaryCta = { href: "#planes", label: "Empezar gratis" },
  secondaryCta = { href: "#contacto", label: "Hablar con un experto" },
  className,
}: FinalCTAProps) {
  return (
    <section id={id} className={className ?? "px-6 py-20"}>
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl p-12 text-center gradient-cta-bg">
          {title && (
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-muted-foreground font-medium">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


