"use client";

import { WireframeSphere } from "@/components/WireframeSphere";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex items-center overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dots-grid pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs sm:text-sm font-mono text-[#00f576] tracking-tight">
              desenvolvedor & especialista em automação
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-[-0.04em] text-white leading-[1.08]">
              Eu construo soluções com IA, conecto sistemas e elimino trabalho manual.
            </h1>

            <p className="text-sm sm:text-base text-[#9E9E9E] font-normal leading-relaxed max-w-xl">
              Sou desenvolvedor Full Stack e fundador da Figprod. Conecto ERPs legados,
              orquestro fluxos no n8n e crio agentes de inteligência artificial aplicados à
              operação de empresas reais, sem enrolação.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00f576] hover:bg-[#00df6c] text-black font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-[#00f576]/15"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/20 hover:border-white/40 text-white font-medium text-xs sm:text-sm transition-all active:scale-95"
              >
                Falar comigo
              </a>
            </div>
          </div>

          {/* Right Column: Wireframe Sphere (Matching Reference Image) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <WireframeSphere />
          </div>
        </div>
      </div>
    </section>
  );
}
