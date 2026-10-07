"use client";

import { portfolioData } from "@/data/portfolioData";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-28 relative z-10 text-center border-t border-white/[0.05] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0060F0]/[0.08] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#0060F0]">
            vamos conversar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
            Tem um projeto ou quer integrar sua operação?
          </h2>
          <p className="text-sm text-[#8A8F99] max-w-lg mx-auto">
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
        </div>
      </div>
    </section>
  );
}
