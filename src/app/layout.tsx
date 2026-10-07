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
  metadataBase: new URL("https://phdanielhenrique.com.br"),
  title: {
    default: "Daniel Henrique | Automação com n8n & IA | Full Stack Developer",
    template: "%s | Daniel Henrique",
  },
  description:
    "Desenvolvedor Full Stack há mais de 8 anos e founder (Figprod, Bora Automatizar, BuskaLeads, LetsGoPedir). Especialista em esteiras no n8n, agentes de IA, integração de ERPs e ecossistema WhatsApp em Barra de São Francisco - ES.",
  keywords: [
    "Daniel Henrique",
    "phdanielhenrique",
    "eudanielhenrique",
    "Automação n8n",
    "Inteligência Artificial",
    "Agentes de IA",
    "Integração ERP",
    "WhatsApp API",
    "Zapo",
    "DeskcommCRM",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Figprod",
    "Bora Automatizar",
    "BuskaLeads",
    "LetsGoPedir",
  ],
  authors: [{ name: "Daniel Henrique", url: "https://phdanielhenrique.com.br" }],
  creator: "Daniel Henrique",
  publisher: "Daniel Henrique",
  alternates: {
    canonical: "https://phdanielhenrique.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://phdanielhenrique.com.br",
    title: "Daniel Henrique | Automação com n8n & IA | Full Stack Developer",
    description:
      "Eu construo sistemas e automatizo processos que geram resultado. Desenvolvedor há mais de 8 anos e fundador de 4 startups.",
    siteName: "Daniel Henrique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Henrique | Automação com n8n & IA",
    description:
      "Eu construo sistemas e automatizo processos que geram resultado. Fundador de 4 startups.",
    creator: "@phdanielhenrque",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://phdanielhenrique.com.br/#person",
      name: "Daniel Henrique",
      alternateName: ["phdanielhenrique", "eudanielhenrique"],
      url: "https://phdanielhenrique.com.br",
      image: "https://phdanielhenrique.com.br/daniel-avatar.jpg",
      jobTitle: "Desenvolvedor Full Stack & Fundador",
      worksFor: [
        {
          "@type": "Organization",
          name: "Figprod",
          url: "https://figprod.com.br",
        },
        {
          "@type": "Organization",
          name: "Bora Automatizar",
          url: "https://boraautomatizar.com.br",
        },
        {
          "@type": "Organization",
          name: "BuskaLeads",
          url: "https://buskaleads.com.br",
        },
        {
          "@type": "Organization",
          name: "LetsGoPedir",
          url: "https://letsgopedir.com.br",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barra de São Francisco",
        addressRegion: "ES",
        addressCountry: "BR",
      },
      sameAs: [
        "https://github.com/eudanielhenrique",
        "https://www.linkedin.com/in/eudanielhenrique/",
        "https://instagram.com/phdanielhenrque",
        "https://figprod.com.br",
        "https://boraautomatizar.com.br",
        "https://buskaleads.com.br",
        "https://letsgopedir.com.br",
      ],
      knowsAbout: [
        "Automação com n8n",
        "Inteligência Artificial e Agentes de IA",
        "Integração de ERPs",
        "Ecossistema WhatsApp",
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Desenvolvimento Full Stack",
      ],
      description:
        "Desenvolvedor há mais de 8 anos e founder na Figprod, Bora Automatizar, BuskaLeads e LetsGoPedir. Desenvolvo esteiras de dados no n8n, integro ERPs corporativos e crio ferramentas no ecossistema do WhatsApp.",
    },
    {
      "@type": "WebSite",
      "@id": "https://phdanielhenrique.com.br/#website",
      url: "https://phdanielhenrique.com.br",
      name: "Daniel Henrique",
      description: "Portfólio oficial de Daniel Henrique - Desenvolvedor Full Stack & Fundador",
      publisher: {
        "@id": "https://phdanielhenrique.com.br/#person",
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://phdanielhenrique.com.br/#profilepage",
      url: "https://phdanielhenrique.com.br",
      name: "Daniel Henrique | Automação com n8n & IA | Full Stack Developer",
      isPartOf: {
        "@id": "https://phdanielhenrique.com.br/#website",
      },
      mainEntity: {
        "@id": "https://phdanielhenrique.com.br/#person",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] antialiased selection:bg-[#0060F0]/25 selection:text-[#F5F5F7]">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
