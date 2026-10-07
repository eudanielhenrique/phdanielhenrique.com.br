"use client";

import { portfolioData, ServiceItem } from "@/data/portfolioData";
import { CheckCircle2, Cpu, Database, MessageSquare, Code2 } from "lucide-react";
import { ArrowTopRightIcon, SparkIcon } from "@/components/Icons";

export function Services() {
  const { services } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#A8FF35]" />;
      case "Database":
        return <Database className="w-6 h-6 text-[#A8FF35]" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#A8FF35]" />;
      case "Code2":
      default:
        return <Code2 className="w-6 h-6 text-[#A8FF35]" />;
    }
  };

  return (
    <section id="servicos" className="py-28 relative z-10 border-t border-white/[0.08] bg-[#010702]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-4">
            <SparkIcon className="w-3.5 h-3.5" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
              Especialidades & Atuação Real
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.035em] text-[#F5F9F0]">
            Como eu ajudo a sua empresa a escalar
          </h2>

          <p className="mt-4 text-[#F5F9F0]/60 text-base sm:text-lg leading-relaxed">
            Elimino tarefas manuais repetitivas, integro sistemas isolados e crio ferramentas
            inteligentes de alta conversão e estabilidade operacional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-8 sm:p-9 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] hover:border-[#A8FF35]/40 hover:shadow-[0_12px_36px_-12px_rgba(168,255,53,0.15)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#061809] border border-[#A8FF35]/30 flex items-center justify-center group-hover:scale-105 group-hover:border-[#A8FF35]/60 transition-all shadow-md shadow-[#A8FF35]/5">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#A8FF35]/10 text-[#A8FF35] border border-[#A8FF35]/25">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F9F0] tracking-tight group-hover:text-[#A8FF35] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[#F5F9F0]/70 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features checklist */}
                <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F9F0]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#A8FF35] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A8FF35] hover:underline underline-offset-4"
                >
                  <span>Conversar sobre esta demanda</span>
                  <ArrowTopRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
