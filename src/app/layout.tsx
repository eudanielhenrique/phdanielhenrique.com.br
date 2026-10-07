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
  title: "Daniel Henrique | Automação com n8n & IA | Full Stack Developer",
  description:
    "Automação com n8n & IA, integração de ERPs, ecossistema WhatsApp (Zapo, WAHA) e desenvolvimento Full Stack moderno (React, Next.js, Node.js). Barra de São Francisco - ES.",
  keywords: [
    "Daniel Henrique",
    "phdanielhenrique",
    "eudanielhenrique",
    "Automação n8n",
    "Inteligência Artificial",
    "Integração ERP",
    "WhatsApp API",
    "Zapo",
    "DeskcommCRM",
    "Full Stack Developer",
    "Next.js",
    "Node.js",
    "Figprod",
  ],
  authors: [{ name: "Daniel Henrique", url: "https://phdanielhenrique.com.br" }],
  creator: "Daniel Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://phdanielhenrique.com.br",
    title: "Daniel Henrique | Automação com n8n & IA | Full Stack Developer",
    description:
      "Integrando ERPs, orquestrando fluxos com IA e eliminando trabalho manual.",
    siteName: "Daniel Henrique - phdanielhenrique.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Henrique | Automação com n8n & IA",
    description:
      "Integrando ERPs, orquestrando fluxos com IA e eliminando trabalho manual.",
    creator: "@phdanielhenrque",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#010702] text-[#F5F9F0] antialiased selection:bg-[#A8FF35]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
