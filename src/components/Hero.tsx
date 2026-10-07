"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowTopRightIcon, GithubIcon, SparkIcon } from "@/components/Icons";
import { Bot, Cpu, Database, MessageSquare, Terminal, Layers, Zap, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { personal, stats } = portfolioData;
  const [activeTab, setActiveTab] = useState<"n8n" | "zapo" | "crm">("n8n");

  const stackPills = [
    "n8n Workflows",
    "IA & LLMs (Claude / GPT)",
    "Integração de ERPs",
    "WhatsApp Protocol (Zapo)",
    "React & Next.js",
    "Node.js & TypeScript",
  ];

  return (
    <section className="relative min-h-[100vh] pt-32 pb-24 flex flex-col justify-center overflow-hidden">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,255,53,0.14)_0%,rgba(2,20,7,0.45)_35%,#010702_75%)] pointer-events-none" />
      <div className="absolute inset-0 dots-overlay pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_35%,#000_50%,transparent_100%)]" />

      {/* Vertical light beam sweep */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[1px] h-80 bg-gradient-to-b from-transparent via-[#A8FF35]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Pill Badge with 4-point Spark */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-8 hover:border-[#A8FF35]/40 transition-colors">
          <SparkIcon className="w-4 h-4" />
          <span className="font-medium tracking-tight">
            {personal.role} · {personal.location}
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] text-[#F5F9F0] leading-[1.02] max-w-5xl">
          Automação com n8n & IA.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8FFA6] via-[#A8FF35] to-[#7be312]">
            Eliminando o trabalho manual.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#F5F9F0]/65 font-normal leading-relaxed max-w-3xl tracking-tight">
          Sou <span className="text-[#F5F9F0] font-semibold">{personal.name}</span> (fundador da{" "}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8FF35] underline decoration-[#A8FF35]/40 underline-offset-4 hover:decoration-[#A8FF35]"
          >
            {personal.company}
          </a>
          ). Conecto ERPs legados, orquestro fluxos com modelos de inteligência artificial e
          desenvolvo sistemas Full Stack de alta performance para empresas que buscam eficiência real.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 h-12 sm:h-14 px-8 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-sm sm:text-base shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6),0_12px_28px_-6px_rgba(168,255,53,0.35)] hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Iniciar um Projeto</span>
            <span className="w-8 h-8 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowTopRightIcon className="w-4 h-4" />
            </span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 sm:h-14 px-8 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-[#F5F9F0] text-sm sm:text-base font-medium hover:bg-white/[0.08] hover:border-[#A8FF35]/40 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-[#A8FF35]" />
            <span>Ver GitHub (@eudanielhenrique)</span>
          </a>
        </div>

        {/* Tech Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {stackPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/[0.03] text-white/70 border border-white/10 hover:border-[#A8FF35]/40 hover:text-[#A8FF35] transition-all"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* =========================================================================
            3D PERSPECTIVE SHOWCASE STAGE (O Palco Arquitetural de Engenharia Real)
           ========================================================================= */}
        <div className="mt-16 w-full max-w-5xl [perspective:1200px]">
          <div className="relative rounded-3xl bg-[#030d05]/90 border border-white/[0.1] backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(168,255,53,0.15)] overflow-hidden text-left transition-transform duration-500 hover:rotate-x-1">
            {/* Window Topbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/[0.08]">
              {/* Terminal Dots & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs font-mono text-white/40 border-l border-white/10 pl-3 hidden sm:inline">
                  figprod-core-engine v2.6.4
                </span>
              </div>

              {/* Showcase Mode Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
                <button
                  onClick={() => setActiveTab("n8n")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "n8n"
                      ? "bg-[#A8FF35] text-[#0A0F0A] font-bold shadow-md shadow-[#A8FF35]/20"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  ⚡ n8n + AI Workflow
                </button>
                <button
                  onClick={() => setActiveTab("zapo")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "zapo"
                      ? "bg-[#A8FF35] text-[#0A0F0A] font-bold shadow-md shadow-[#A8FF35]/20"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  🧩 Zapo (WhatsApp Core)
                </button>
                <button
                  onClick={() => setActiveTab("crm")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "crm"
                      ? "bg-[#A8FF35] text-[#0A0F0A] font-bold shadow-md shadow-[#A8FF35]/20"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  📦 DeskcommCRM
                </button>
              </div>
            </div>

            {/* Tab 1: n8n Workflow Visualization */}
            {activeTab === "n8n" && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#A8FF35]" />
                      Pipeline Automatizado de ERP & Atendimento Cognitivo
                    </h3>
                    <p className="text-xs text-white/50 mt-1">
                      Eventos em tempo real processados via Webhook com zero intervenção manual.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#A8FF35]/15 text-[#A8FF35] border border-[#A8FF35]/30">
                    ● Latência: 48ms · 99.98% Uptime
                  </span>
                </div>

                {/* Workflow nodes diagram */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#A8FF35]/40 transition-colors">
                    <div className="text-[11px] font-mono text-[#A8FF35] mb-1 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      <span>TRIGGER</span>
                    </div>
                    <div className="text-sm font-bold text-white">ERP / Pedido Criado</div>
                    <p className="text-[11px] text-white/50 mt-1">Webhook de faturamento ou alteração de status</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#A8FF35]/40 transition-colors">
                    <div className="text-[11px] font-mono text-[#A8FF35] mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>n8n ENGINE</span>
                    </div>
                    <div className="text-sm font-bold text-white">Normalização & Regras</div>
                    <p className="text-[11px] text-white/50 mt-1">Validação tributária, split de dados e retries</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#A8FF35]/40 transition-colors">
                    <div className="text-[11px] font-mono text-[#A8FF35] mb-1 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" />
                      <span>IA COGNITIVA</span>
                    </div>
                    <div className="text-sm font-bold text-white">Raciocínio com LLM</div>
                    <p className="text-[11px] text-white/50 mt-1">Claude / GPT sintetiza histórico e decide ação</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#A8FF35]/40 transition-colors">
                    <div className="text-[11px] font-mono text-[#A8FF35] mb-1 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>DISPARO</span>
                    </div>
                    <div className="text-sm font-bold text-white">WhatsApp & Nuvemshop</div>
                    <p className="text-[11px] text-white/50 mt-1">Notificação instantânea para o cliente e operador</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Zapo WhatsApp Protocol Code */}
            {activeTab === "zapo" && (
              <div className="p-6 sm:p-8 font-mono text-xs text-white/80 overflow-x-auto space-y-2">
                <div className="text-white/40 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>// packages/zapo/src/client.ts — Zero-Copy WebSocket Engine</span>
                  <span className="text-[#A8FF35]">Open Source</span>
                </div>
                <p className="text-emerald-400">
                  <span className="text-indigo-300">import</span> &#123; createZapoSession, NoiseTransport &#125; <span className="text-indigo-300">from</span> <span className="text-amber-200">&quot;@zapo/core&quot;</span>;
                </p>
                <p>
                  <span className="text-indigo-300">const</span> session = <span className="text-indigo-300">await</span> createZapoSession(&#123;
                </p>
                <p className="pl-4 text-white/70">
                  sessionId: <span className="text-amber-200">&quot;deskcomm-tenant-01&quot;</span>,
                </p>
                <p className="pl-4 text-white/70">
                  transport: <span className="text-[#A8FF35]">new</span> NoiseTransport(&#123; zeroCopy: <span className="text-[#A8FF35]">true</span>, maxMemoryMb: 32 &#125;),
                </p>
                <p className="pl-4 text-white/70">
                  onMessage: <span className="text-indigo-300">async</span> (msg) =&gt; &#123;
                </p>
                <p className="pl-8 text-white/60">
                  <span className="text-indigo-300">await</span> n8nWebhook.dispatch(&#123; event: <span className="text-amber-200">&quot;whatsapp.inbound&quot;</span>, payload: msg &#125;);
                </p>
                <p className="pl-4">&#125;</p>
                <p>&#125;);</p>
                <div className="pt-2 text-[11px] text-[#A8FF35] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sessões concorrentes de alto volume sem travamentos de memória.</span>
                </div>
              </div>
            )}

            {/* Tab 3: DeskcommCRM Live Snapshot */}
            {activeTab === "crm" && (
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-white text-base">
                    DeskcommCRM · Operação Ativa
                  </h4>
                  <span className="text-xs font-mono text-[#A8FF35]">Nuvemshop + WAHA Integrados</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-[11px] font-mono text-white/40">PEDIDOS PROCESSADOS</span>
                    <div className="font-display text-2xl font-bold text-white mt-1">+14.280</div>
                    <span className="text-xs text-[#A8FF35] mt-1 inline-block">Sincronizados em tempo real</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-[11px] font-mono text-white/40">CONVERSÃO DE CARRINHOS</span>
                    <div className="font-display text-2xl font-bold text-white mt-1">42.8%</div>
                    <span className="text-xs text-[#A8FF35] mt-1 inline-block">Via agentes de IA no WhatsApp</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-[11px] font-mono text-white/40">CONFORMIDADE LGPD</span>
                    <div className="font-display text-2xl font-bold text-white mt-1">100% Nativo</div>
                    <span className="text-xs text-[#A8FF35] mt-1 inline-block">Opt-in e auditoria de mensagens</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Real Stats Strip */}
        <div className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] hover:border-[#A8FF35]/40 transition-all text-left relative overflow-hidden group shadow-lg"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F5F9F0] tracking-tight group-hover:text-[#A8FF35] transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-white/50 leading-snug">
                {stat.label}
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#A8FF35]/10 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
