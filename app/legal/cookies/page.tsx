import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Can.IA",
  description: "Uso de cookies y tecnologías similares en Can.IA.",
};

export default function CookiesPage() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Política de Cookies</h1>
        <p className="mt-4 text-muted-foreground">
          Explicamos qué cookies usamos, con qué finalidad y cómo podés
          gestionarlas.
        </p>

        <div className="mt-8 space-y-8 text-sm text-foreground">
          <section>
            <h2 className="text-lg font-semibold">1. ¿Qué son las cookies?</h2>
            <p className="mt-2 text-muted-foreground">
              Son pequeños archivos que se almacenan en tu dispositivo para
              recordar tus preferencias y mejorar tu experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Tipos de cookies que usamos</h2>
            <p className="mt-2 text-muted-foreground">
              Utilizamos cookies esenciales, de analítica y de funcionalidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Cómo gestionar cookies</h2>
            <p className="mt-2 text-muted-foreground">
              Podés configurar tu navegador para aceptar, rechazar o eliminar
              cookies. Consultá la ayuda de tu navegador para instrucciones.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}


