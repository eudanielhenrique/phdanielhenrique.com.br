"use client";

import { portfolioData } from "@/data/portfolioData";
import { WireframeSphere } from "@/components/WireframeSphere";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex items-center overflow-hidden">
      {/* Background Dot Pattern & Atmospheric Scrim */}
      <div className="absolute inset-0 dots-grid pointer-events-none opacity-25" />
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-[#0060F0]/[0.07] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Natural Human Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#22262F] text-xs font-mono text-[#0060F0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-pulse" />
              desenvolvedor full stack & founder
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-[-0.035em] text-[#F5F5F7] leading-[1.06]">
              Eu construo sistemas e automatizo processos que geram resultado.
            </h1>

            <p className="text-sm sm:text-base text-[#8A8F99] leading-relaxed max-w-xl font-normal">
              Desenvolvo pra web desde 2013 e sou founder na{" "}
              <a
                href="https://figprod.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                Figprod
              </a>
              ,{" "}
              <a
                href="https://boraautomatizar.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                Bora Automatizar
              </a>
              ,{" "}
              <a
                href="https://buskaleads.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                BuskaLeads
              </a>{" "}
              e{" "}
              <a
                href="https://letsgopedir.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F7] hover:text-[#0060F0] underline underline-offset-4 decoration-[#0060F0]/40 transition-colors"
              >
                LetsGoPedir
              </a>
              . Desenvolvo esteiras de dados no n8n, integro ERPs corporativos e crio ferramentas
              no ecossistema do WhatsApp sem enrolação.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-medium text-sm shadow-lg shadow-[#0060F0]/25 border border-[#0060F0]/50"
              >
                Conversar no WhatsApp
              </a>

              <a
                href="#sobre"
                className="tactile-btn inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#12151B] hover:bg-[#181C25] border border-[#22262F] hover:border-white/20 text-[#F5F5F7] font-medium text-sm"
              >
                Conhecer mais
              </a>
            </div>
          </div>

          {/* Right Column: Clean Geometric Wireframe Canvas */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <WireframeSphere />
          </div>
        </div>
      </div>
    </section>
  );
}
