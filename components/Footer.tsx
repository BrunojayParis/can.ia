import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="mt-20 border-t border-border bg-[color-mix(in_oklab,theme(colors.muted)_50%,transparent)]">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary">🤖</span>
            <span className="text-base font-semibold">Can.IA</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Automatizamos tus tareas repetitivas para que uses tu tiempo en lo que importa.
          </p>
          <div className="mt-4 flex items-center gap-4 text-muted-foreground">
            <Link href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">X</Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">in</Link>
            <Link href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">GH</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-3">Producto</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#caracteristicas" className="hover:text-foreground transition-colors">Características</Link></li>
            <li><Link href="#casos-uso" className="hover:text-foreground transition-colors">Casos de uso</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Empresa</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#contacto" className="hover:text-foreground transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/legal/privacidad" className="hover:text-foreground transition-colors">Privacidad</Link></li>
            <li><Link href="/legal/terminos" className="hover:text-foreground transition-colors">Términos</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© {year} Can.IA. Todos los derechos reservados.</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#contacto" className="hover:text-foreground transition-colors">Contacto</Link>
            <Link href="/legal/terminos" className="hover:text-foreground transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


