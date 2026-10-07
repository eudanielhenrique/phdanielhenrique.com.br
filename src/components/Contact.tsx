"use client";

import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowTopRightIcon } from "@/components/Icons";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contato" className="py-24 relative z-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Vamos construir algo juntos?
        </h2>
        <p className="text-sm sm:text-base text-[#9E9E9E] max-w-lg mx-auto mb-10 leading-relaxed">
          Seja para automatizar rotinas operacionais no n8n, integrar ERPs ou desenvolver um software moderno,
          fale direto comigo.
        </p>

        {/* The two iconic centered pill buttons from the reference image */}
        <div id="redes" className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 text-white font-medium text-xs sm:text-sm transition-all"
          >
            <span>Ver redes sociais</span>
            <span className="text-[#00f576]">→</span>
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-[#00f576]/50 text-white font-medium text-xs sm:text-sm transition-all"
          >
            <span>Falar comigo</span>
            <span className="text-[#00f576]">→</span>
          </a>
        </div>

        {/* Quick direct communication icons */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[#9E9E9E]">
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors"
            title="E-mail direto"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#00f576] hover:bg-white/5 transition-colors"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
