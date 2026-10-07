"use client";

import { portfolioData } from "@/data/portfolioData";
import { FlowMesh } from "@/components/FlowMesh";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 flex items-center overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 dots-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authorial positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#22262F] text-xs font-mono text-[#0060F0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-pulse" />
              <span>Automação com n8n · ERPs · WhatsApp & IA</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.1rem] font-bold tracking-[-0.035em] text-[#F5F5F7] leading-[1.08]">
              Conectando sistemas. Automatizando com IA.{" "}
              <span className="text-[#0060F0]">Eliminando processos manuais.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8A8F99] font-normal leading-relaxed max-w-xl">
              Sou <span className="text-[#F5F5F7] font-medium">{personal.name}</span>, desenvolvedor Full Stack e fundador da{" "}
              <a
                href={personal.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0060F0] underline underline-offset-4 decoration-[#0060F0]/30 hover:decoration-[#0060F0]"
              >
                Figprod
              </a>
              . Desenvolvo esteiras de dados, integro ERPs corporativos e crio ferramentas
              no ecossistema de WhatsApp para empresas que buscam eficiência operacional sem complexidade.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#0060F0]/25"
              >
                <span>Conhecer mais</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#12151B] hover:bg-[#181C24] border border-[#22262F] hover:border-[#0060F0]/40 text-[#F5F5F7] font-medium text-xs sm:text-sm transition-all active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#0060F0]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Original Interactive Flow Mesh */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <FlowMesh />
          </div>
        </div>
      </div>
    </section>
  );
}
