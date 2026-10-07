"use client";

import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowTopRightIcon } from "@/components/Icons";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-28 relative z-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-xs font-mono text-[#0060F0] uppercase tracking-wider block mb-3">
          Próximo Passo
        </span>

        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-4">
          Tem um processo manual que você quer automatizar?
        </h2>

        <p className="text-sm sm:text-base text-[#8A8F99] max-w-lg mx-auto mb-10 leading-relaxed">
          Seja para integrar seu ERP, estruturar fluxos no n8n ou construir uma solução web moderna,
          estou disponível para novos projetos e consultoria técnica.
        </p>

        {/* Action Buttons */}
        <div id="redes" className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0060F0] hover:bg-[#0050D0] text-white font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#0060F0]/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#12151B] hover:bg-[#181C24] border border-[#22262F] hover:border-[#0060F0]/40 text-[#F5F5F7] font-medium text-xs sm:text-sm transition-all"
          >
            <GithubIcon className="w-4 h-4 text-[#0060F0]" />
            <span>GitHub (@eudanielhenrique)</span>
          </a>
        </div>

        {/* Quick direct communication icons */}
        <div className="mt-10 flex items-center justify-center gap-3 text-[#8A8F99]">
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-full hover:text-[#0060F0] hover:bg-[#12151B] transition-colors border border-[#22262F]"
            title="E-mail direto"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#0060F0] hover:bg-[#12151B] transition-colors border border-[#22262F]"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#0060F0] hover:bg-[#12151B] transition-colors border border-[#22262F]"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#0060F0] hover:bg-[#12151B] transition-colors border border-[#22262F]"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
