"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, MapPin, Building2, Code2 } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

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
              <span className="text-xs font-mono text-[#00f576] uppercase tracking-wider block mb-2">
                Trajetória & Filosofia
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engenharia de software voltada a resolver problemas reais
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9E9E9E] font-normal leading-relaxed">
              Atuo na interseção entre o desenvolvimento de aplicações completas e a automação de processos
              corporativos. Desenvolvo a ponte entre sistemas legados (ERPs, bancos relacionais, plataformas de vendas)
              e tecnologias de ponta como agentes de IA, n8n e arquiteturas de alta vazão no WhatsApp.
            </p>

            {/* Daniel's Real Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2 border-y border-white/[0.07] py-6">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#00f576]">
                  +8 Anos
                </div>
                <div className="text-xs text-[#9E9E9E] mt-1">Experiência com software</div>
              </div>

              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#00f576]">
                  +40 Projetos
                </div>
                <div className="text-xs text-[#9E9E9E] mt-1">Sistemas & ferramentas</div>
              </div>

              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#00f576]">
                  Zero
                </div>
                <div className="text-xs text-[#9E9E9E] mt-1">Retrabalho operacional</div>
              </div>
            </div>

            {/* Core Stack */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-mono text-white/50 block">
                Tecnologias centrais no dia a dia
              </span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-white/80 hover:border-[#00f576]/40 hover:text-[#00f576] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Original Developer Identity Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl p-6 bg-white/[0.02] border border-white/[0.09] backdrop-blur-xl relative group shadow-2xl">
              {/* Subtle green backlight */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00f576]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 pb-5 border-b border-white/[0.07]">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0">
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
                  <h3 className="font-display font-bold text-white text-base">
                    {personal.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#00f576] mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f576] animate-ping" />
                    <span>Disponível para projetos</span>
                  </div>
                </div>
              </div>

              <div className="py-5 space-y-3 text-xs text-[#9E9E9E] border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-white/60 shrink-0" />
                  <span>Fundador da <strong className="text-white">Figprod</strong> (figprod.com.br)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-white/60 shrink-0" />
                  <span>Full Stack Developer & AI Specialist</span>
                </div>
              </div>

              <div className="pt-5">
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#00f576] hover:text-black text-white text-xs font-semibold transition-all border border-white/10 hover:border-[#00f576]"
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
