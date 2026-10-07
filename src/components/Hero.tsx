"use client";

import { portfolioData } from "@/data/portfolioData";
import { FlowMesh } from "@/components/FlowMesh";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  const { personal, ventures } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 flex items-center overflow-hidden">
      {/* Atmospheric Top Light Beam */}
      <div className="atmospheric-beam" />

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
                href="https://figprod.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] font-medium underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                Figprod
              </a>
              ,{" "}
              <a
                href="https://boraautomatizar.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] font-medium underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                Bora Automatizar
              </a>
              ,{" "}
              <a
                href="https://buskaleads.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] font-medium underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                BuskaLeads
              </a>{" "}
              e{" "}
              <a
                href="https://letsgopedir.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] font-medium underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                LetsGoPedir
              </a>
              . Desenvolvo esteiras de dados, integro ERPs corporativos e crio ferramentas
              no ecossistema de WhatsApp para empresas que buscam eficiência operacional sem complexidade.
            </p>

            {/* Founder quick chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-[#565B66] font-mono text-xs">Founder:</span>
              {ventures.map((v) => (
                <a
                  key={v.name}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#12151B] border border-[#22262F] hover:border-[#0060F0]/50 text-[#8A8F99] hover:text-[#0060F0] font-mono text-[11px] transition-all"
                >
                  <span>{v.tag}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#ecossistema"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12151B] hover:bg-[#181C24] border border-[#22262F] hover:border-[#0060F0]/40 text-[#8A8F99] hover:text-[#F5F5F7] font-medium text-xs sm:text-sm transition-all active:scale-95"
              >
                <span>Explorar ecossistema</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0060F0]" />
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
