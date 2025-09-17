import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="pt-32 pb-20 px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full h-8 px-3 bg-muted mb-8">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden />
          <span className="text-sm text-foreground">Disponible en beta</span>
        </div>

        <h1 id="hero-title" className="font-semibold leading-tight gradient-hero-text text-4xl md:text-6xl lg:text-7xl">
          No creamos agentes de IA, creamos tiempo.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl">
          Can.IA automatiza tus tareas repetitivas para que te enfoques en escalar tu negocio, disfrutar de tu hobbie o tomar decisiones estratégicas.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#planes"
            className="h-11 px-5 rounded-md bg-primary text-primary-foreground text-base font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Probar Can.IA
          </Link>
          <Link
            href="#caracteristicas"
            className="h-11 px-5 rounded-md border border-border text-base font-medium text-foreground hover:bg-muted transition-colors duration-200"
          >
            Ver cómo funciona
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-16">
        <div className="relative bg-card border border-border rounded-[10px] p-8 shadow-card">
          <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-b from-background via-transparent to-transparent" aria-hidden />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center">
            <div className="hidden sm:block">
              <Image
                src="/window.svg"
                alt="Demo de Can.IA"
                width={480}
                height={320}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <ul className="space-y-3">
                <li>• Agenda turnos y responde dudas automáticamente</li>
                <li>• Mantiene tu CRM siempre actualizado</li>
                <li>• Sigue a tus clientes y ayuda a vender más</li>
                <li>• Genera reportes de ventas e impuestos sin esfuerzo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


