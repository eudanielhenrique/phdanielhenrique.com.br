"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Empresas", href: "#empresas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="card-hairline fixed top-0 left-0 right-0 z-50 bg-[#0B0D12]/85 backdrop-blur-md py-4 sm:py-5 border-b border-[#22262F]/80 transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Custom Daniel Henrique 'DH' Monogram */}
        <a href="#" aria-label="Daniel Henrique - Início" className="tactile-btn flex items-center gap-3">
          <Logo />
          <span className="hidden sm:inline-block font-display text-xs font-semibold tracking-wider text-[#F5F5F7]/80 uppercase">
            Daniel Henrique
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-[#8A8F99] hover:text-[#F5F5F7] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#0060F0] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/5527999088661?text=Ol%C3%A1%20Daniel,%20vim%20pelo%20seu%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn px-4 py-1.5 rounded-full text-xs font-medium bg-[#0060F0] hover:bg-[#0050D0] text-white shadow-md shadow-[#0060F0]/20"
          >
            WhatsApp ↗
          </a>
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
