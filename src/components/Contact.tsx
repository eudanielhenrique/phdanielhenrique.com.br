"use client";

import { portfolioData } from "@/data/portfolioData";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-24 relative z-10 text-center border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-[#0060F0]/20"
          >
            Falar comigo →
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-[#F5F5F7] font-medium text-sm transition-all active:scale-95"
          >
            Ver redes sociais →
          </a>
        </div>
      </div>
    </section>
  );
}
