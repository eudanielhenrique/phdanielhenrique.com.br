"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowTopRightIcon } from "@/components/Icons";

const ventureMeta = [
  {
    name: "Figprod",
    tag: "@fig.prod",
    category: "01 // SOFTWARE & CONSULTORIA",
    url: "https://figprod.com.br",
    domain: "figprod.com.br",
    description:
      "Consultoria de engenharia de software sob medida, arquitetura de sistemas escaláveis e resolução de gargalos operacionais.",
    status: "Ativo",
  },
  {
    name: "Bora Automatizar",
    tag: "@boraautomatizar.com.br",
    category: "02 // AUTOMATION & AI PIPELINES",
    url: "https://boraautomatizar.com.br",
    domain: "boraautomatizar.com.br",
    description:
      "Ecossistema de esteiras no n8n, agentes de inteligência artificial aplicados e eliminação radical de trabalho manual.",
    status: "Ativo",
  },
  {
    name: "BuskaLeads",
    tag: "@buskaleads.com.br",
    category: "03 // B2B DATA & PROSPECTION",
    url: "https://buskaleads.com.br",
    domain: "buskaleads.com.br",
    description:
      "Motor de inteligência e enriquecimento de dados corporativos para prospecção outbound de alta conversão.",
    status: "Ativo",
  },
  {
    name: "LetsGoPedir",
    tag: "@letsgopedir",
    category: "04 // FOOD TECH & AUTOMAÇÃO",
    url: "https://letsgopedir.com.br",
    domain: "letsgopedir.com.br",
    description:
      "Plataforma ágil de cardápio digital, autoatendimento e automação de pedidos integrada ao ecossistema de delivery.",
    status: "Ativo",
  },
];

export function Ventures() {
  return (
    <section id="ecossistema" className="py-24 relative z-10 border-t border-[#22262F]/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-[#22262F] text-[11px] font-mono text-[#0060F0] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-pulse" />
              <span>ECOSSISTEMA & TRACK RECORD</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
              Soluções proprietárias & operações em produção
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#8A8F99] max-w-md leading-relaxed">
            Além de consultoria técnica, desenvolvo e opero produtos de software que resolvem dores reais
            de mercado — conectando engenharia de dados, esteiras no n8n e arquiteturas de alta vazão.
          </p>
        </div>

        {/* 4 Cards Grid - Linear / Vercel style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ventureMeta.map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-[#12151B] border border-[#22262F] hover:border-[#0060F0]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0060F0]/10"
            >
              <div>
                {/* Micro category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono tracking-wider text-[#565B66] group-hover:text-[#8A8F99] transition-colors">
                    {v.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#0060F0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] group-hover:animate-ping" />
                    <span>{v.status}</span>
                  </div>
                </div>

                {/* Venture Title */}
                <h3 className="font-display text-xl font-bold text-[#F5F5F7] group-hover:text-[#0060F0] transition-colors flex items-center justify-between mb-2">
                  <span>{v.name}</span>
                  <ArrowTopRightIcon className="w-4 h-4 text-[#565B66] group-hover:text-[#0060F0] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                {/* Description */}
                <p className="text-xs text-[#8A8F99] leading-relaxed line-clamp-3">
                  {v.description}
                </p>
              </div>

              {/* Bottom domain tag */}
              <div className="pt-6 mt-4 border-t border-[#22262F]/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#565B66] group-hover:text-[#F5F5F7] transition-colors">
                  {v.domain}
                </span>
                <span className="text-[10px] font-mono text-[#0060F0]/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  Acessar →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
