import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Can.IA — No creamos agentes de IA, creamos tiempo.",
  description:
    "Can.IA automatiza tareas repetitivas para que te enfoques en escalar tu negocio, disfrutar de tu hobbie o tomar decisiones estratégicas.",
  openGraph: {
    title: "Can.IA — No creamos agentes de IA, creamos tiempo.",
    description:
      "Can.IA automatiza tareas repetitivas para que te enfoques en escalar tu negocio, disfrutar de tu hobbie o tomar decisiones estratégicas.",
    type: "website",
    locale: "es_AR",
    siteName: "Can.IA",
    url: "https://can.ia.local/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://can.ia.local/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
