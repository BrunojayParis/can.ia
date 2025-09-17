# Can.IA Landing — Next.js 14 + TypeScript + Tailwind

Este proyecto implementa la landing de Can.IA siguiendo los tokens y lineamientos definidos en `design.md`, emulando la estética “Solo Blend” (layout limpio, cards con padding generoso, tipografía grande, alto contraste, secciones separadas) conforme a la referencia.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v4 (tokens mapeados en `app/globals.css`)

## Scripts
```bash
npm run dev    # Iniciar entorno local (http://localhost:3000)
npm run build  # Build de producción
npm start      # Iniciar servidor de producción
npm run lint   # Lint
```

## Diseño y tokens
- Colores, tipografías, radios, sombras y espaciados definidos en `design.md` y mapeados a CSS variables en `app/globals.css`.
- Container máximo: 1152px (`max-w-6xl`) con padding horizontal 24px.
- Radius: `lg=10px`, `xl=14px`. Transiciones 200ms y hover scale 1.02 para cards.
- Tipografía base 16px; escalas de headings y hero según `design.md`.

## Accesibilidad y SEO
- Contraste AA, `:focus-visible` visible.
- SEO básico en `app/layout.tsx` vía `export const metadata` (OpenGraph incluido).

## Estructura
```
/app
  favicon.svg
  globals.css
  layout.tsx
  page.tsx
/components
  Header.tsx
  HeroSection.tsx
  FeaturesSection.tsx
  StatsSection.tsx
  FinalCTA.tsx
  Footer.tsx
```

## Contenido
- Headline: “No creamos agentes de IA, creamos tiempo.”
- Subheadline: “Can.IA automatiza tus tareas repetitivas...”
- Features: Asistente, Engagement, Administrador.
- CTA final: “Tu tiempo vale más que tus tareas repetitivas. Probá Can.IA hoy mismo.”

## Ejecutar
```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

## Notas
- Tailwind v4 usa `@import "tailwindcss"` y `@theme inline` en `globals.css` para mapear variables.
- Anclas internas en el header: `#caracteristicas`, `#casos-uso`, `#planes`, `#contacto` (este último apunta al footer por ahora).
