"use client";

import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { GithubIcon, ArrowTopRightIcon } from "@/components/Icons";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projetos" className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-xl mb-12 text-left">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projetos
          </h2>
          <p className="text-sm sm:text-base text-[#9E9E9E] mt-2">
            Soluções reais em produção, ecossistema WhatsApp e ferramentas de código aberto.
          </p>
        </div>

        {/* Clean Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00f576]/40 hover:bg-white/[0.03] transition-all flex flex-col justify-between group text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono text-[#00f576] tracking-tight">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/60 border border-white/5">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f576] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-white/50 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 group-hover:text-[#00f576] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver código</span>
                    <ArrowTopRightIcon className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
