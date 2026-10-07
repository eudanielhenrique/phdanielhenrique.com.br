import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
    <html
      lang="pt-BR"
      className={`${sora.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] antialiased selection:bg-[#0060F0]/25 selection:text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
