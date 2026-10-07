"use client";

import { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ArrowTopRightIcon, GithubIcon, SparkIcon } from "@/components/Icons";
import { Cpu, Database, MessageSquare, Terminal, Zap, ExternalLink } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "Todos os Projetos" },
    { key: "whatsapp", label: "WhatsApp & CRMs" },
    { key: "automation", label: "Automações & n8n" },
    { key: "fullstack", label: "Full Stack & Web" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p: ProjectItem) => p.category === filter);

  // Destacamos os 2 principais projetos como Master Cards se o filtro for "all"
  const masterProjects = projects.filter((p) => p.id === "deskcomm-crm" || p.id === "zapo");
  const secondaryProjects = projects.filter((p) => p.id !== "deskcomm-crm" && p.id !== "zapo");

  return (
    <section id="projetos" className="py-32 relative z-10 bg-[#010702]">
      {/* Soft Ambient Transition Glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#010702] via-[#020b04]/40 to-[#010702] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-4">
              <SparkIcon className="w-3.5 h-3.5" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
                Engenharia Real & Código Aberto
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#F5F9F0]">
              O que eu realmente construo
            </h2>
            <p className="mt-4 text-[#F5F9F0]/60 text-base sm:text-lg max-w-2xl leading-relaxed">
              De bibliotecas de protocolo em baixo nível a CRMs e fluxos no n8n.
              Software com propósito, métricas comprovadas e arquitetura limpa.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] rounded-full border border-white/10 self-start md:self-auto backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  filter === cat.key
                    ? "bg-[#A8FF35] text-[#0A0F0A] font-bold shadow-lg shadow-[#A8FF35]/25"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BENTO GRID ASSIMÉTRICO (Linear & Stripe Inspired)
           ========================================================================= */}
        {filter === "all" ? (
          <div className="space-y-6">
            {/* MASTER CARDS ROW: Os dois principais projetos em grande formato */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {masterProjects.map((project: ProjectItem) => (
                <div
                  key={project.id}
                  className="p-8 sm:p-10 rounded-3xl bg-[#030d05]/90 border border-white/[0.1] hover:border-[#A8FF35]/40 hover:shadow-[0_20px_50px_-15px_rgba(168,255,53,0.18)] transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#A8FF35]/10 via-transparent to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#F5F9F0]/80">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-[#A8FF35] bg-[#A8FF35]/15 px-3 py-1 rounded-full border border-[#A8FF35]/30">
                          <SparkIcon className="w-3.5 h-3.5" />
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F9F0] tracking-tight group-hover:text-[#A8FF35] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-[#F5F9F0]/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlighted Impact Metric Banner */}
                    <div className="mt-6 p-4 rounded-2xl bg-[#061809] border border-[#A8FF35]/25 flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#A8FF35] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white uppercase font-mono block">
                          Impacto Prático:
                        </span>
                        <span className="text-xs sm:text-sm text-[#A8FF35] font-medium">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-white/60 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white border border-white/10 hover:border-[#A8FF35] transition-all"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Repositório no GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECONDARY ROW: 4 projetos em grid equilibrado */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryProjects.map((project: ProjectItem) => (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] hover:border-[#A8FF35]/40 hover:shadow-[0_12px_36px_-12px_rgba(168,255,53,0.12)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="text-[11px] font-mono text-[#A8FF35]">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-white group-hover:text-[#A8FF35] transition-colors">
                      {project.title}
                    </h4>

                    <p className="mt-2.5 text-xs text-white/60 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-[#A8FF35] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Ver código</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Filtered projects view */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="p-8 rounded-3xl bg-[#030d05]/90 border border-white/[0.08] hover:border-[#A8FF35]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-white/70">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="text-xs font-mono text-[#A8FF35]">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#A8FF35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 p-3.5 rounded-xl bg-[#061809] border border-[#A8FF35]/20 text-xs text-[#A8FF35]">
                    <b>Impacto:</b> {project.impact}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.03] text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
