import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Can.IA",
  description: "Términos y condiciones de uso de Can.IA.",
};

export default function TerminosPage() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Términos y Condiciones</h1>
        <p className="mt-4 text-muted-foreground">
          Al utilizar Can.IA, aceptás estos términos. Leélos atentamente.
        </p>

        <div className="mt-8 space-y-8 text-sm text-foreground">
          <section>
            <h2 className="text-lg font-semibold">1. Uso aceptable</h2>
            <p className="mt-2 text-muted-foreground">
              No uses el servicio para actividades ilegales o que infrinjan
              derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Cuenta y seguridad</h2>
            <p className="mt-2 text-muted-foreground">
              Sos responsable de mantener la confidencialidad de tus credenciales
              y de las actividades realizadas con tu cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Limitación de responsabilidad</h2>
            <p className="mt-2 text-muted-foreground">
              Prestamos el servicio &quot;tal cual&quot; y dentro de lo permitido por la
              ley aplicable, limitamos nuestra responsabilidad por daños
              indirectos o consecuentes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Cambios</h2>
            <p className="mt-2 text-muted-foreground">
              Podemos actualizar estos términos y publicaremos la fecha de la
              última modificación.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}


