"use client";

import Image from "next/image";

export function About() {
  const coreSkills = [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "n8n Workflows",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "WhatsApp API",
    "Agentes de IA",
  ];

  return (
    <section id="sobre" className="py-24 sm:py-28 relative z-10 border-t border-white/[0.05]">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Human Story, Stats & Stack */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#22262F] text-xs font-mono text-[#0060F0] mb-3">
                trajetória & foco
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
                Sobre
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#8A8F99] leading-relaxed">
              <p>
                Eu sou o Daniel Henrique, desenvolvedor Full Stack e fundador baseado em Barra de São Francisco - ES.
                Minha história com código começou em 2013, editando temas no Blogspot com HTML, CSS e JavaScript na raça.
                De lá pra cá, transformei essa curiosidade em mais de uma década construindo sistemas reais e negócios digitais.
              </p>
              <p>
                Atuo resolvendo problemas reais de operação: integro sistemas corporativos e ERPs legados,
                estruturo fluxos robustos no n8n e crio soluções proprietárias no protocolo do WhatsApp
                (como o DeskcommCRM e a lib Zapo). Foco em código limpo, estabilidade e zero retrabalho manual.
              </p>
            </div>

            {/* Metrics with VibeCurb architectural stats */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-4">
              <div className="card-hairline card-hover p-4 sm:p-5 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0060F0] tracking-tight">
                  Desde 2013
                </div>
                <div className="text-xs text-[#8A8F99] mt-1">No código</div>
              </div>

              <div className="card-hairline card-hover p-4 sm:p-5 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0060F0] tracking-tight">
                  +40 Projetos
                </div>
                <div className="text-xs text-[#8A8F99] mt-1">Sistemas entregues</div>
              </div>

              <div className="card-hairline card-hover p-4 sm:p-5 rounded-xl bg-[#12151B] border border-[#22262F]">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0060F0] tracking-tight">
                  4 Startups
                </div>
                <div className="text-xs text-[#8A8F99] mt-1">Fundadas</div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#0060F0] block">
                Tecnologias que uso
              </span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#12151B] border border-[#22262F] text-[#F5F5F7] hover:border-[#0060F0]/50 hover:bg-[#181C25] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Developer Photo with subtle ambient glow */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="card-hairline relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-[#22262F] group shadow-2xl">
              {/* Subtle blue glow behind avatar */}
              <div className="absolute -inset-4 bg-[#0060F0]/15 rounded-3xl blur-2xl pointer-events-none -z-10" />

              <Image
                src="/daniel-avatar.jpg"
                alt="Daniel Henrique"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
