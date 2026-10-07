"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="sobre" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-indigo-600/25 top-10 -left-48" />
      <div className="ambient-glow w-[600px] h-[600px] bg-cyan-500/20 top-24 -right-48" />
      <div className="ambient-glow w-[400px] h-[400px] bg-emerald-500/10 bottom-0 left-1/3" />

      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md mb-8 animate-fade-in shadow-sm shadow-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-300">
            {personal.availability}
          </span>
        </div>

        {/* Main Title & Positioning */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Engenharia de Software &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
              Soluções Inteligentes com IA
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Olá, sou <span className="text-white font-medium">{personal.name}</span>.{" "}
            {personal.tagline} Da concepção arquitetural e automação multi-agente à entrega de software resiliente em produção.
          </p>
        </div>

        {/* Action Buttons & Links */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Explorar Projetos</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contato"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Iniciar uma Conversa</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="Enviar E-mail"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Highlighted Stats Cards */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300 font-mono">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-snug">
                {stat.label}
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full -mr-10 -mt-10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
