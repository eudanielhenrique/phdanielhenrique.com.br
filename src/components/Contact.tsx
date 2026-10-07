"use client";

import { portfolioData } from "@/data/portfolioData";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-28 sm:py-32 relative z-10 text-center border-t border-white/[0.05] overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#0060F0]/[0.08] rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#22262F] text-xs font-mono text-[#0060F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-pulse" />
            vamos conversar
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] [text-wrap:balance]">
            Tem um projeto ou quer integrar sua operação?
          </h2>
          <p className="text-sm sm:text-base text-[#8A8F99] max-w-lg mx-auto">
            Vamos entender o que precisa ser construído ou automatizado no seu negócio.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-medium text-sm shadow-xl shadow-[#0060F0]/25 border border-[#0060F0]/50"
          >
            Falar comigo no WhatsApp →
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#12151B] hover:bg-[#181C25] border border-[#22262F] hover:border-white/20 text-[#F5F5F7] font-medium text-sm"
          >
            Ver LinkedIn →
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="tactile-btn inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#12151B] hover:bg-[#181C25] border border-[#22262F] hover:border-white/20 text-[#8A8F99] hover:text-[#F5F5F7] font-mono text-xs"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}
