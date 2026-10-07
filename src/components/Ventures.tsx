"use client";

import { ArrowTopRightIcon } from "@/components/Icons";

const ventures = [
  {
    name: "Figprod",
    tag: "@fig.prod",
    role: "Software & Consultoria",
    url: "https://figprod.com.br",
    domain: "figprod.com.br",
    description: "Desenvolvimento de software sob medida, arquitetura de sistemas e soluções técnicas.",
  },
  {
    name: "Bora Automatizar",
    tag: "@boraautomatizar.com.br",
    role: "Automação & IA",
    url: "https://boraautomatizar.com.br",
    domain: "boraautomatizar.com.br",
    description: "Esteiras de automação no n8n, fluxos com IA e eliminação de processos manuais.",
  },
  {
    name: "BuskaLeads",
    tag: "@buskaleads.com.br",
    role: "Inteligência de Dados B2B",
    url: "https://buskaleads.com.br",
    domain: "buskaleads.com.br",
    description: "Motor de inteligência de dados corporativos para prospecção outbound em escala.",
  },
  {
    name: "LetsGoPedir",
    tag: "@letsgopedir",
    role: "Food Tech & Delivery",
    url: "https://letsgopedir.com.br",
    domain: "letsgopedir.com.br",
    description: "Cardápio digital, gestão de pedidos e automação no atendimento do WhatsApp.",
  },
];

export function Ventures() {
  return (
    <section id="empresas" className="py-24 sm:py-28 relative z-10 border-t border-white/[0.05]">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#22262F] text-xs font-mono text-[#0060F0] mb-3">
            portfólio de empresas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
            Empresas fundadas
          </h2>
          <p className="text-sm text-[#8A8F99] mt-2 max-w-xl">
            Operações e produtos que construo e escalo no mercado real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ventures.map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
              className="card-hairline card-hover spotlight-card group p-6 rounded-2xl bg-[#12151B] border border-[#22262F] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#0060F0] px-2 py-0.5 rounded-full bg-[#0060F0]/10 border border-[#0060F0]/20">
                    {v.role}
                  </span>
                  <ArrowTopRightIcon className="w-3.5 h-3.5 text-[#565B66] group-hover:text-[#0060F0] transition-colors" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#F5F5F7] group-hover:text-[#0060F0] transition-colors mb-2.5 tracking-tight">
                  {v.name}
                </h3>

                <p className="text-xs text-[#8A8F99] leading-relaxed">
                  {v.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#22262F]/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#565B66] group-hover:text-[#F5F5F7] transition-colors">
                  {v.domain}
                </span>
                <span className="text-[10px] text-[#565B66] group-hover:text-[#0060F0] font-mono transition-colors">
                  visitar ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
