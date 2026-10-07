"use client";

import { portfolioData, ExperienceItem, SkillCategory } from "@/data/portfolioData";
import { Calendar, CheckCircle, Terminal } from "lucide-react";
import { SparkIcon } from "@/components/Icons";

export function ExperienceAndSkills() {
  const { experiences, skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-28 relative z-10 border-t border-white/5 bg-[#010903]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="igreen-badge mb-4">
                <SparkIcon className="w-3.5 h-3.5" />
                <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
                  Histórico Profissional
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F9F0]">
                Trajetória & Vivência Real
              </h2>
              <p className="mt-2.5 text-[#F5F9F0]/60 text-sm leading-relaxed">
                Anos de experiência construindo soluções que resolvem problemas reais de operação,
                automação de ponta a ponta e engenharia de software confiável.
              </p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {experiences.map((exp: ExperienceItem, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#010702] border-2 border-[#A8FF35] group-hover:scale-125 transition-transform" />

                  <div className="igreen-card p-6 rounded-2xl group-hover:border-[#A8FF35]/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#A8FF35] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-[#F5F9F0]/70">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#F5F9F0]">
                      {exp.role}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#F5F9F0]/70 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F5F9F0]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[#A8FF35] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="igreen-badge mb-4">
                <SparkIcon className="w-3.5 h-3.5" />
                <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
                  Stack Tecnológica
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F9F0]">
                Domínio Técnico & Ferramentas
              </h2>
              <p className="mt-2.5 text-[#F5F9F0]/60 text-sm leading-relaxed">
                As principais tecnologias que utilizo para desenhar arquiteturas e entregar valor para clientes.
              </p>
            </div>

            <div className="space-y-4">
              {skillCategories.map((category: SkillCategory, idx) => (
                <div key={idx} className="igreen-card p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-[#A8FF35]" />
                    <h3 className="text-sm font-bold text-[#F5F9F0] tracking-wide">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-3 py-1.5 rounded-full font-mono transition-all ${
                          skill.highlight
                            ? "bg-[#A8FF35]/15 text-[#A8FF35] border border-[#A8FF35]/30 font-semibold"
                            : "bg-white/[0.03] text-white/70 border border-white/5"
                        }`}
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
