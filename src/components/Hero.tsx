"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowTopRightIcon, GithubIcon, SparkIcon } from "@/components/Icons";
import { Bot, Cpu, Database, MessageSquare, Terminal } from "lucide-react";

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
    <section className="relative min-h-[96vh] pt-36 pb-20 flex flex-col justify-center overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,255,53,0.15),transparent_70%),radial-gradient(ellipse_60%_40%_at_20%_40%,rgba(20,83,45,0.2),transparent_60%),radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(5,46,22,0.2),transparent_60%),#010702]">
      {/* Subtle Dot matrix overlay */}
      <div className="absolute inset-0 dots-overlay pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_50%,transparent_100%)]" />

      {/* Decorative vertical light sweep line */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-[#A8FF35]/35 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        {/* Signature Badge with 4-point Spark */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-8 hover:border-[#A8FF35]/40 transition-colors">
          <SparkIcon className="w-4 h-4" />
          <span className="font-medium">
            {personal.role} · {personal.location}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-[#F5F9F0] leading-[1.04] max-w-4xl">
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
          ). Conecto ERPs legados, orquestro fluxos com modelos de inteligência artificial e
          desenvolvo sistemas Full Stack de alta performance para empresas que buscam eficiência real.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 h-12 sm:h-13 px-7 sm:px-8 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-sm sm:text-base shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6),0_12px_28px_-6px_rgba(168,255,53,0.35)] hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Iniciar um Projeto</span>
            <span className="w-8 h-8 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowTopRightIcon className="w-4 h-4" />
            </span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 sm:h-13 px-7 sm:px-8 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-[#F5F9F0] text-sm sm:text-base font-medium hover:bg-white/[0.08] hover:border-[#A8FF35]/40 transition-all"
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

        {/* Interactive Architecture Flow Preview */}
        <div className="mt-16 w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-[#030d05]/80 border border-white/[0.09] backdrop-blur-xl shadow-2xl shadow-black/80 text-left relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-white/50">
                pipeline-operacional.n8n · live
              </span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#A8FF35]/15 text-[#A8FF35] border border-[#A8FF35]/30">
              ● Fluxo 100% Automatizado
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#A8FF35]/30 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A8FF35] mb-1.5">
                <Database className="w-3.5 h-3.5" />
                <span>1. ERP / Banco</span>
              </div>
              <div className="text-sm font-semibold text-white">Sincronização de Dados</div>
              <p className="text-[11px] text-white/50 mt-1">Pedidos, clientes & notas fiscais</p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#A8FF35]/30 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A8FF35] mb-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>2. n8n Engine</span>
              </div>
              <div className="text-sm font-semibold text-white">Tratamento & Regras</div>
              <p className="text-[11px] text-white/50 mt-1">Triagem sem intervenção humana</p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#A8FF35]/30 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A8FF35] mb-1.5">
                <Bot className="w-3.5 h-3.5" />
                <span>3. Agente com IA</span>
              </div>
              <div className="text-sm font-semibold text-white">Decisão & Raciocínio</div>
              <p className="text-[11px] text-white/50 mt-1">LLMs (Claude / GPT) no contexto</p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#A8FF35]/30 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A8FF35] mb-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>4. WhatsApp / Ação</span>
              </div>
              <div className="text-sm font-semibold text-white">Disparo & Atualização</div>
              <p className="text-[11px] text-white/50 mt-1">Zapo lib / Nuvemshop / CRM</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] hover:border-[#A8FF35]/35 transition-all text-left relative overflow-hidden group shadow-lg"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5F9F0] tracking-tight group-hover:text-[#A8FF35] transition-colors">
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
