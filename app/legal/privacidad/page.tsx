import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad — Can.IA",
  description: "Política de privacidad de Can.IA.",
};

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Política de Privacidad</h1>
        <p className="mt-4 text-muted-foreground">
          En Can.IA, valoramos tu privacidad. Esta política explica qué datos
          recopilamos, cómo los usamos y cuáles son tus derechos.
        </p>

        <div className="mt-8 space-y-8 text-sm text-foreground">
          <section>
            <h2 className="text-lg font-semibold">1. Datos que recopilamos</h2>
            <p className="mt-2 text-muted-foreground">
              Podemos recopilar información de contacto, datos de uso del sitio y
              contenido que compartas voluntariamente. No vendemos tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Cómo usamos tus datos</h2>
            <p className="mt-2 text-muted-foreground">
              Usamos tus datos para prestar y mejorar nuestros servicios, dar
              soporte y comunicarnos contigo sobre actualizaciones relevantes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Tus derechos</h2>
            <p className="mt-2 text-muted-foreground">
              Podés solicitar acceso, rectificación o eliminación de tus datos.
              Escribinos para ejercer estos derechos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Contacto</h2>
            <p className="mt-2 text-muted-foreground">
              Si tenés dudas sobre esta política, contactanos a través de los
              medios publicados en este sitio.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}


