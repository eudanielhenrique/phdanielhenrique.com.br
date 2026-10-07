"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-12 bg-[#06070a] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px]">
            <div className="w-full h-full bg-[#0b0d14] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                DH
              </span>
            </div>
          </div>
          <span className="text-sm font-semibold text-slate-300">
            {portfolioData.personal.name}
          </span>
        </div>

        <p className="text-xs text-slate-500 text-center">
          © 2026 {portfolioData.personal.name}. Todos os direitos reservados.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          title="Voltar ao início"
        >
          <span>Topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
