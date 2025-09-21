import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="planes" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl p-12 text-center gradient-cta-bg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Tu tiempo vale más que tus tareas repetitivas.
          </h2>
          <p className="mt-3 text-muted-foreground font-medium">
            Probá Can.IA hoy mismo y empezá a recuperar horas todos los días.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#planes"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Empezar gratis
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors duration-200"
            >
              Hablar con un experto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


