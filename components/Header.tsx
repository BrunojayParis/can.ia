"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const industriesMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const industries = [
    { href: "/industrias/salud", label: "Salud", icon: "❤️" },
    {
      href: "/industrias/servicios-profesionales",
      label: "Servicios profesionales",
      icon: "📋",
    },
    { href: "/industrias/inmobiliarias", label: "Inmobiliarias", icon: "🏢" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!industriesMenuRef.current) return;
      if (!industriesMenuRef.current.contains(target)) {
        setIsIndustriesOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsIndustriesOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
          <div className="relative" ref={industriesMenuRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-haspopup="menu"
              aria-expanded={isIndustriesOpen}
              onClick={() => setIsIndustriesOpen((v) => !v)}
            >
              Industrias
              <span aria-hidden className="text-xs">▾</span>
            </button>
            {isIndustriesOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-64 rounded-[12px] border border-border bg-card shadow-xl p-2"
              >
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsIndustriesOpen(false)}
                    role="menuitem"
                  >
                    <span aria-hidden className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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

        <div className="md:hidden">
          <button
            type="button"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-accent transition-colors duration-200"
          >
            <span aria-hidden>{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-16 z-50 border-t border-border bg-card p-4"
        >
          <nav aria-label="Navegación móvil" className="space-y-6">
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2">Industrias</div>
              <div className="grid gap-2">
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span aria-hidden className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-px bg-border" aria-hidden />

            <div className="grid gap-2">
              <Link
                href="#caracteristicas"
                className="rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                href="#casos-uso"
                className="rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Casos de uso
              </Link>
              <Link
                href="#planes"
                className="rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planes
              </Link>
              <Link
                href="#contacto"
                className="rounded-[10px] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>

            <div className="h-px bg-border" aria-hidden />

            <div className="grid gap-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 rounded-md text-sm text-foreground hover:bg-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="#planes"
                className="inline-flex items-center justify-center h-10 rounded-md text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Probar Can.IA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


