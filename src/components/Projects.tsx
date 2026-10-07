"use client";

import { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "Todos os Projetos" },
    { key: "ai", label: "IA & Agentes" },
    { key: "web", label: "Sistemas Web" },
    { key: "automation", label: "Automação" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-24 relative z-10 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              Portfólio & Casos Reais
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projetos & Aplicações em Destaque
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed max-w-xl">
              Uma seleção de arquiteturas, sistemas e ferramentas construídos com foco em usabilidade,
              escalabilidade e valor prático de negócio.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-900/80 rounded-xl border border-white/5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat.key
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/30 group relative overflow-hidden"
            >
              {/* Subtle accent border at top of card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      <Sparkles className="w-3 h-3" />
                      Destaque
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact callout */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-emerald-300 font-medium flex items-start gap-2">
                  <span className="font-semibold text-white">Impacto:</span>
                  <span>{project.impact}</span>
                </div>
              </div>

              {/* Tags & Action links */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300 px-3.5 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all"
                    >
                      <span>Ver Projeto</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Código</span>
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
