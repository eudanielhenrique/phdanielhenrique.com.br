"use client";

import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#22262F] py-10 bg-[#0B0D12]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo and copyright */}
        <div className="flex items-center gap-3">
          <Logo className="w-5 h-5" />
          <span className="text-xs text-[#8A8F99]">
            © 2026 {portfolioData.personal.name}. Todos os direitos reservados.
          </span>
        </div>

        {/* Social Icons right-aligned */}
        <div className="flex items-center gap-4 text-[#8A8F99]">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0060F0] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0060F0] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0060F0] transition-colors"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
