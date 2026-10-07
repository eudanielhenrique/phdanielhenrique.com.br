"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowTopRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, SparkIcon } from "@/components/Icons";
import { ArrowDown, CheckCircle2, Terminal } from "lucide-react";

export function Hero() {
  const { personal, stats } = portfolioData;

  const stackPills = [
    "n8n Workflows",
    "IA & LLMs (Claude / GPT)",
    "Integração de ERPs",
    "WhatsApp Protocol (Zapo)",
    "React & Next.js",
    "Node.js & TypeScript",
  ];

  return (
    <section className="relative min-h-[95vh] pt-36 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Aurora Glows & Atmosphere */}
      <div className="aurora-glow w-[650px] h-[650px] bg-[#A8FF35]/12 top-0 left-1/2 -translate-x-1/2" />
      <div className="aurora-glow w-[500px] h-[500px] bg-[#14532d]/30 top-32 -left-48" />
      <div className="aurora-glow w-[550px] h-[550px] bg-[#052e16]/40 -bottom-20 -right-40" />

      {/* Dot matrix background overlay */}
      <div className="absolute inset-0 dots-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Decorative vertical light beam line */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1px] h-72 bg-gradient-to-b from-transparent via-[#A8FF35]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        {/* Signature Badge with 4-point Spark */}
        <div className="igreen-badge mb-8 group cursor-default">
          <SparkIcon className="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" />
          <span className="font-medium text-xs sm:text-sm text-[#F5F9F0]">
            {personal.role} · {personal.location}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#F5F9F0] leading-[1.08] max-w-4xl">
          Automação com n8n & IA.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8FFA6] via-[#A8FF35] to-[#7be312]">
            Eliminando o trabalho manual.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#F5F9F0]/65 font-normal leading-relaxed max-w-3xl tracking-tight">
          Sou <span className="text-[#F5F9F0] font-semibold">{personal.name}</span> (fundador da{" "}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8FF35] underline decoration-[#A8FF35]/40 underline-offset-4 hover:decoration-[#A8FF35]"
          >
            {personal.company}
          </a>
          ). Conecto ERPs legados, orquestro pipelines com modelos de inteligência artificial e
          desenvolvo sistemas Full Stack de alta performance para empresas que buscam eficiência real.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contato" className="btn-primary-igreen">
            <span>Iniciar um Projeto</span>
            <span className="chip-circle">
              <ArrowTopRightIcon className="w-4 h-4" />
            </span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-igreen"
          >
            <GithubIcon className="w-4 h-4 text-[#A8FF35]" />
            <span>Ver GitHub (@eudanielhenrique)</span>
          </a>
        </div>

        {/* Tech Stack Floating Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {stackPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/[0.03] text-white/70 border border-white/10 hover:border-[#A8FF35]/40 hover:text-[#A8FF35] transition-all"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="igreen-card p-5 sm:p-6 rounded-2xl text-left relative overflow-hidden group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F9F0] font-mono tracking-tight group-hover:text-[#A8FF35] transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-white/50 leading-snug">
                {stat.label}
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#A8FF35]/10 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
