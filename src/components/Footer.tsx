"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 bg-[#010502] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#D8FFA6] to-[#A8FF35] p-[1px]">
            <div className="w-full h-full bg-[#051208] rounded-[7px] flex items-center justify-center">
              <span className="font-display font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35]">
                DH
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold text-[#F5F9F0]">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-[#A8FF35]/70 font-mono">
              Automação com n8n & IA · Full Stack
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#A8FF35] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#A8FF35] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#A8FF35] transition-colors"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs text-white/40 font-mono">
            © 2026 {portfolioData.personal.name} · Barra de São Francisco - ES
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-[#A8FF35] px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            title="Voltar ao início"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
