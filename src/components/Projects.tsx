"use client";

import { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ArrowTopRightIcon, GithubIcon, SparkIcon } from "@/components/Icons";

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

  return (
    <section id="projetos" className="py-28 relative z-10 border-t border-white/[0.08] bg-[#010702]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-4">
              <SparkIcon className="w-3.5 h-3.5" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
                GitHub & Projetos Reais
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.035em] text-[#F5F9F0]">
              O que eu realmente construo
            </h2>
            <p className="mt-4 text-[#F5F9F0]/60 text-base max-w-xl">
              Projetos reais do meu dia a dia, ferramentas open-source e softwares operacionais criados para
              resolver dores reais de empresas e desenvolvedores.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] rounded-full border border-white/10 self-start md:self-auto backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === cat.key
                    ? "bg-[#A8FF35] text-[#0A0F0A] font-bold shadow-lg shadow-[#A8FF35]/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] hover:border-[#A8FF35]/40 hover:shadow-[0_12px_36px_-12px_rgba(168,255,53,0.15)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5F9F0]/80">
                    {project.categoryLabel}
                  </span>

                  {project.badge && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#A8FF35] bg-[#A8FF35]/10 px-3 py-0.5 rounded-full border border-[#A8FF35]/25">
                      <SparkIcon className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F5F9F0] tracking-tight group-hover:text-[#A8FF35] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3.5 text-sm text-[#F5F9F0]/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact callout */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#061809] border border-[#A8FF35]/25 text-xs text-[#A8FF35] font-medium flex items-start gap-2">
                  <span className="font-bold text-[#F5F9F0]">Impacto:</span>
                  <span>{project.impact}</span>
                </div>
              </div>

              {/* Tags & Action links */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/60 border border-white/5"
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
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white border border-white/10 hover:border-[#A8FF35] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Ver no GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-[#A8FF35] px-3 py-2 transition-colors"
                    >
                      <span>Acessar Demo</span>
                      <ArrowTopRightIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
