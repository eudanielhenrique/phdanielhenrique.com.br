"use client";

import { portfolioData, ServiceItem } from "@/data/portfolioData";
import { Bot, Code2, Cpu, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function Services() {
  const { services } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="servicos" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            Especialidades & Atuação
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Soluções de Engenharia e IA sob Medida
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Como posso ajudar sua empresa ou produto a subir de nível combinando automações inteligentes,
            inteligência artificial aplicada e desenvolvimento web moderno de alta confiabilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Checklist features */}
                <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Solicitar proposta ou consultoria</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
