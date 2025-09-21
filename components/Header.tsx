"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 ${
        isScrolled ? "border-b border-border" : ""
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" aria-label="Inicio">
          <span
            aria-hidden
            className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            🤖
          </span>
          <span className="text-base font-semibold text-foreground">Can.IA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
          <Link
            href="#caracteristicas"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Características
          </Link>
          <Link
            href="#casos-uso"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Casos de uso
          </Link>
          <Link
            href="#planes"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Planes
          </Link>
          <Link
            href="#contacto"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm text-foreground hover:bg-accent transition-colors duration-200"
          >
            Iniciar sesión
          </Link>
          <Link
            href="#planes"
            className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200"
          >
            Probar Can.IA
          </Link>
        </div>
      </div>
    </header>
  );
}


