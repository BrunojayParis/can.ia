import Link from "next/link";

type Cta = { href: string; label: string };

type HeroSectionProps = {
  id?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  className?: string;
};

export default function HeroSection({
  id,
  badgeText = "Inteligencia aplicada operativa",
  title = "No creamos agentes, creamos tiempo.",
  description =
    "Automatizamos tareas de bajo valor para que puedas enfocarte en lo que realmente importa: atender mejor a tus clientes y hacer crecer tu negocio.",
  primaryCta = { href: "#planes", label: "Comenzar gratis" },
  secondaryCta = { href: "#chat-demo", label: "Ver demo" },
  className,
}: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-title" id={id} className={className ?? "pt-32 pb-20 px-6"}>
      <div className="mx-auto max-w-4xl text-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 rounded-full h-8 px-3 bg-muted mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden />
            <span className="text-sm text-foreground">{badgeText}</span>
          </div>
        )}

        <h1 id="hero-title" className="font-extrabold leading-tight gradient-hero-text text-4xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl font-medium">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </section>
  );
}


