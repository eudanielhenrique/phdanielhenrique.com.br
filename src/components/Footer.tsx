"use client";

import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 bg-[#070808]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo and copyright */}
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            className="w-5 h-5 text-[#00f576]"
          >
            <path
              d="M4 6V22M4 6L14 14M4 22L14 14M24 6V22M24 6L14 14M24 22L14 14"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-[#9E9E9E]">
            © 2026 {portfolioData.personal.name}. Todos os direitos reservados.
          </span>
        </div>

        {/* Social Icons right-aligned */}
        <div className="flex items-center gap-4 text-[#9E9E9E]">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
