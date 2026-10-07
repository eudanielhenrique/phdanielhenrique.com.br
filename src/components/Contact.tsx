"use client";

import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowTopRightIcon } from "@/components/Icons";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-28 relative z-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-xs font-mono text-[#00f576] uppercase tracking-wider block mb-3">
          Próximo Passo
        </span>

        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Tem um processo manual que você quer automatizar?
        </h2>

        <p className="text-sm sm:text-base text-[#9E9E9E] max-w-lg mx-auto mb-10 leading-relaxed">
          Seja para integrar seu ERP, estruturar fluxos no n8n ou construir uma solução web moderna,
          estou disponível para novos projetos e consultoria técnica.
        </p>

        {/* Action Buttons */}
        <div id="redes" className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00f576] hover:bg-[#00df6c] text-black font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-[#00f576]/15"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 text-white font-medium text-xs sm:text-sm transition-all"
          >
            <GithubIcon className="w-4 h-4 text-[#00f576]" />
            <span>GitHub (@eudanielhenrique)</span>
          </a>
        </div>

        {/* Quick direct communication icons */}
        <div className="mt-10 flex items-center justify-center gap-3 text-[#9E9E9E]">
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors border border-white/5"
            title="E-mail direto"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors border border-white/5"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors border border-white/5"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors border border-white/5"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
