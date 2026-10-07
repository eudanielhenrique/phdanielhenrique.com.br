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
  title: "Daniel Henrique | Engenheiro de Software & Especialista em IA",
  description:
    "Engenheiro de Software especializado no desenvolvimento de agentes autônomos inteligentes, soluções de inteligência artificial aplicada e arquiteturas web escaláveis.",
  keywords: [
    "Daniel Henrique",
    "Engenheiro de Software",
    "Especialista em IA",
    "Agentes Autônomos",
    "Inteligência Artificial",
    "Full Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "LangChain",
    "Automação",
  ],
  authors: [{ name: "Daniel Henrique", url: "https://phdanielhenrique.com.br" }],
  creator: "Daniel Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://phdanielhenrique.com.br",
    title: "Daniel Henrique | Engenheiro de Software & Especialista em IA",
    description:
      "Sistemas de alto desempenho, agentes autônomos inteligentes e arquiteturas web modernas.",
    siteName: "Daniel Henrique Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Henrique | Engenheiro de Software & Especialista em IA",
    description:
      "Sistemas de alto desempenho, agentes autônomos inteligentes e arquiteturas web modernas.",
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
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
