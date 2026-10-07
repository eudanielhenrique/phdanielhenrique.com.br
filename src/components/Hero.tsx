"use client";

import { portfolioData } from "@/data/portfolioData";
import { WireframeSphere } from "@/components/WireframeSphere";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[88vh] pt-36 pb-20 flex items-center overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 dots-grid pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Natural Human Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono text-[#0060F0] tracking-wide block">
              desenvolvedor full stack & founder
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#F5F5F7] leading-[1.1]">
              Eu construo sistemas e automatizo processos que geram resultado.
            </h1>

            <p className="text-sm sm:text-base text-[#8A8F99] leading-relaxed max-w-xl font-normal">
              Sou desenvolvedor há mais de 8 anos e founder na{" "}
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
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-[#0060F0]/20"
              >
                Conversar no WhatsApp
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-[#F5F5F7] font-medium text-sm transition-all active:scale-95"
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
