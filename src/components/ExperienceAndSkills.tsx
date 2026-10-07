"use client";

import { portfolioData, ExperienceItem, SkillCategory } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle, Code, Cpu, Terminal } from "lucide-react";

export function ExperienceAndSkills() {
  const { experiences, skillCategories } = portfolioData;

  return (
    <section id="trajetoria" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Timeline / Trajetória */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
                Experiência & Histórico
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Trajetória Profissional
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Evolução contínua construindo desde automações e plataformas web até arquiteturas avançadas
                de inteligência artificial.
              </p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {experiences.map((exp: ExperienceItem, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                  <div className="glass-panel p-6 rounded-2xl transition-all duration-300 group-hover:border-indigo-500/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Stack */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
                Stack & Domínio Técnico
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Habilidades & Tecnologias
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Ferramentas e frameworks utilizados no dia a dia para desenhar e implementar soluções robustas.
              </p>
            </div>

            <div className="space-y-5">
              {skillCategories.map((category: SkillCategory, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-white/5 hover:border-cyan-500/40 hover:text-white transition-all shadow-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
