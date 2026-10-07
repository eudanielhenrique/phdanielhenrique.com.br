"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, MapPin, Building2, Code2 } from "lucide-react";

export function About() {
  const { personal, ventures } = portfolioData;

  const coreSkills = [
    "n8n Workflows",
    "WhatsApp Protocol (Zapo)",
    "Integração de ERPs",
    "TypeScript & Node.js",
    "Next.js & React",
    "PostgreSQL & Redis",
    "Agentes de IA (Claude / GPT)",
    "Docker & Cloud VPS",
  ];

  return (
    <section id="sobre" className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Real Metrics */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div>
              <span className="text-xs font-mono text-[#0060F0] uppercase tracking-wider block mb-2">
                Engenharia & Filosofia
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
                Software construído para resolver o mundo real, não para acumular complexidade
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8A8F99] font-normal leading-relaxed">
              Minha atuação combina o rigor da engenharia de software tradicional com a agilidade das esteiras modernas de automação.
              Desenvolvo a ponte entre sistemas corporativos legados (ERPs, bancos relacionais) e arquiteturas de ponta com agentes de IA,
              n8n e protocolos de alta vazão no WhatsApp — sempre com foco estrito em estabilidade, retorno sobre o investimento e zero retrabalho humano.
            </p>

            {/* Daniel's Real Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 py-6">
              <div className="p-4 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="text-[10px] font-mono text-[#565B66] uppercase tracking-wider mb-1.5">
                  01 // EXPERIÊNCIA
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                  +8 <span className="text-[#0060F0] text-lg font-normal">Anos</span>
                </div>
                <div className="text-xs text-[#8A8F99] mt-0.5">Engenharia de software</div>
              </div>

              <div className="p-4 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="text-[10px] font-mono text-[#565B66] uppercase tracking-wider mb-1.5">
                  02 // PROJETOS
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                  +40 <span className="text-[#0060F0] text-lg font-normal">Sistemas</span>
                </div>
                <div className="text-xs text-[#8A8F99] mt-0.5">Ferramentas & automações</div>
              </div>

              <div className="p-4 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="text-[10px] font-mono text-[#565B66] uppercase tracking-wider mb-1.5">
                  03 // EFICIÊNCIA
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0060F0] tracking-tight">
                  Zero
                </div>
                <div className="text-xs text-[#8A8F99] mt-0.5">Retrabalho operacional</div>
              </div>
            </div>

            {/* Core Stack */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono text-[#565B66] block">
                Tecnologias centrais no dia a dia
              </span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#12151B] border border-[#22262F] text-[#F5F5F7]/80 hover:border-[#0060F0]/50 hover:text-[#0060F0] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Original Developer Identity Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl p-6 bg-[#12151B] border border-[#22262F] relative group shadow-2xl">
              {/* Subtle blue backlight */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0060F0]/12 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 pb-5 border-b border-[#22262F]">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#22262F] shrink-0">
                  <Image
                    src="/daniel-avatar.jpg"
                    alt={personal.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#F5F5F7] text-base">
                    {personal.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#0060F0] mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-ping" />
                    <span>Disponível para projetos</span>
                  </div>
                </div>
              </div>

              <div className="py-5 space-y-4 text-xs text-[#8A8F99] border-b border-[#22262F]">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#565B66] mb-2 uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5 text-[#0060F0]" />
                    <span>Founder</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {ventures.map((v) => (
                      <a
                        key={v.name}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#181C24] border border-[#22262F] hover:border-[#0060F0]/50 transition-all group"
                      >
                        <div className="font-semibold text-[#F5F5F7] group-hover:text-[#0060F0] text-xs transition-colors">
                          {v.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#565B66] truncate mt-0.5">
                          {v.tag}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#22262F]/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#565B66] shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#565B66] shrink-0" />
                    <span>Full Stack & AI Specialist</span>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#181C24] hover:bg-[#0060F0] text-[#F5F5F7] text-xs font-semibold transition-all border border-[#22262F] hover:border-[#0060F0] shadow-sm hover:shadow-md hover:shadow-[#0060F0]/20"
                >
                  <span>Iniciar conversa direta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
