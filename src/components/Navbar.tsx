"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Empresas", href: "#empresas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D12]/80 backdrop-blur-md py-6 border-b border-[#22262F]/60 transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Monogram Logo (Clean Geometric BA Blue 'DH' signature) */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Início">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            className="w-7 h-7 text-[#0060F0] transition-transform duration-300 group-hover:scale-105"
          >
            <path
              d="M4 6V22M4 6L14 14M4 22L14 14M24 6V22M24 6L14 14M24 22L14 14"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-[#8A8F99] hover:text-[#0060F0] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-[#8A8F99] hover:text-[#F5F5F7] md:hidden"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#22262F] bg-[#0B0D12]/95 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#8A8F99] hover:text-[#F5F5F7] py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
