"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";
import { ArrowTopRightIcon, GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Especialidades", href: "#servicos" },
    { label: "Projetos Reais", href: "#projetos" },
    { label: "Skills & Trajetória", href: "#skills" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#010702]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D8FFA6] to-[#A8FF35] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-[#A8FF35]/15">
            <div className="w-full h-full bg-[#051208] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-sm">
                DH
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-[#F5F9F0] tracking-tight text-base group-hover:text-[#A8FF35] transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#A8FF35]/10 text-[#A8FF35] border border-[#A8FF35]/20 hidden sm:inline-flex">
                @figprod
              </span>
            </div>
            <span className="text-xs text-white/45 font-mono hidden sm:inline-block">
              Automação n8n & IA · Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-[#F5F9F0]/80 hover:text-[#A8FF35] hover:bg-white/[0.05] rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/70 hover:text-[#A8FF35] hover:bg-white/[0.05] border border-white/10 transition-colors"
            title="GitHub de Daniel Henrique"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/70 hover:text-[#A8FF35] hover:bg-white/[0.05] border border-white/10 transition-colors"
            title="LinkedIn de Daniel Henrique"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Styled Pill CTA */}
          <a
            href="#contato"
            className="group inline-flex items-center gap-2.5 h-10 pl-4 pr-1.5 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-xs shadow-[inset_0_-2px_2px_rgba(255,255,255,0.6),0_10px_20px_-5px_rgba(168,255,53,0.3)] hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Falar Comigo</span>
            <span className="w-7 h-7 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowTopRightIcon className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white/80 hover:text-white rounded-lg md:hidden border border-white/10 bg-white/5"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#020b04]/98 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-[#A8FF35] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-sm shadow-lg w-full"
            >
              <span>Falar Comigo</span>
              <span className="w-7 h-7 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowTopRightIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
