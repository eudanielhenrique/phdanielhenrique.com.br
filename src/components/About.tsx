"use client";

import Image from "next/image";

export function About() {
  const technologies = [
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛" },
    { name: "Tailwind CSS", icon: "≈" },
    { name: "Node.js", icon: "JS" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Python", icon: "🐍" },
    { name: "n8n", icon: "⚡" },
    { name: "WhatsApp API", icon: "💬" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "✦" },
    { name: "IA & LLMs", icon: "AI" },
  ];

  return (
    <section id="sobre" className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Tech Pills */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Sobre
            </h2>

            <p className="text-sm sm:text-base text-[#9E9E9E] font-normal leading-relaxed max-w-xl">
              Eu sou o Daniel Henrique, desenvolvedor baseado em Barra de São Francisco - ES.
              Construo produtos digitais pra empresas e pessoas, do primeiro commit ao deploy em produção.
              Curto especialmente juntar código robusto com IA e automação de ERPs pra eliminar rotinas manuais
              e devolver tempo valioso pra operação.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-10 pt-1">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#00f576]">
                  Desde 2018
                </div>
                <div className="text-xs text-[#9E9E9E] mt-0.5">Programando & integrando</div>
              </div>

              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#00f576]">
                  +40 Projetos
                </div>
                <div className="text-xs text-[#9E9E9E] mt-0.5">Entregues em produção</div>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3.5 pt-3">
              <div className="text-xs font-mono text-[#00f576]">
                Tecnologias que uso
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-[#00f576]/40 text-xs text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-[10px] text-[#00f576] font-mono">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Photo with green halo (Mirroring Reference) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft green ambient halo */}
              <div className="absolute -inset-2 bg-[#00f576]/25 rounded-[32px] blur-2xl group-hover:bg-[#00f576]/35 transition-all duration-500 pointer-events-none" />

              <div className="relative w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0d0f0e] shadow-2xl">
                <Image
                  src="/daniel-avatar.jpg"
                  alt="Daniel Henrique"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
