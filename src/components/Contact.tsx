"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MessageSquare, Check, Copy, Zap, ArrowRight } from "lucide-react";
import { ArrowTopRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, SparkIcon } from "@/components/Icons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState<string>(
    "Tenho gargalos e tarefas manuais no meu ERP / operação"
  );
  const [companyContext, setCompanyContext] = useState("");

  const objectives = [
    {
      id: "erp-friction",
      label: "Gargalos manuais no ERP / Backoffice",
      prompt: "Olá Daniel! Temos tarefas manuais e lentidão operacional entre nosso ERP e outros sistemas. Gostaria de entender como o n8n e automações podem resolver isso.",
    },
    {
      id: "ai-n8n",
      label: "Workflows com n8n & Agentes de IA",
      prompt: "Olá Daniel! Queremos implementar automações inteligentes com n8n integradas a LLMs (Claude/GPT) para triagem, documentos e processos da nossa empresa.",
    },
    {
      id: "whatsapp-crm",
      label: "WhatsApp API / CRM Operacional",
      prompt: "Olá Daniel! Preciso de uma solução de WhatsApp integrada ao nosso CRM / e-commerce para atendimento e vendas sem falhas de conexão.",
    },
    {
      id: "fullstack-app",
      label: "Desenvolvimento de Plataforma / SaaS",
      prompt: "Olá Daniel! Temos um projeto para desenvolvimento de software web (Next.js / Node.js) e gostaríamos de uma consultoria e orçamento técnico.",
    },
  ];

  const currentObjective = objectives.find((o) => o.label === selectedObjective) || objectives[0];

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchWhatsApp = () => {
    const contextAdd = companyContext ? `\nContexto da empresa: ${companyContext}` : "";
    const fullText = encodeURIComponent(`${currentObjective.prompt}${contextAdd}`);
    window.open(`https://wa.me/5527999999999?text=${fullText}`, "_blank");
  };

  const handleLaunchEmail = () => {
    const subject = encodeURIComponent(`Oportunidade: ${selectedObjective}`);
    const contextAdd = companyContext ? `\nContexto da empresa: ${companyContext}` : "";
    const body = encodeURIComponent(`${currentObjective.prompt}${contextAdd}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-32 relative z-10 bg-[#010702]">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,255,53,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-4">
            <SparkIcon className="w-3.5 h-3.5" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
              Canal Direto · Sem Burocracia
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#F5F9F0]">
            Vamos construir eficiência real juntos?
          </h2>

          <p className="mt-4 text-[#F5F9F0]/65 text-base sm:text-lg leading-relaxed">
            Seja para integrar seu ERP, colocar agentes com IA para trabalhar no seu backoffice ou
            desenvolver uma aplicação de alto desempenho, fale diretamente comigo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct WhatsApp Callout */}
            <div className="p-7 rounded-3xl bg-[#030d05]/90 border border-white/[0.1] relative">
              <div className="w-12 h-12 rounded-2xl bg-[#061809] border border-[#A8FF35]/35 flex items-center justify-center text-[#A8FF35] mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A8FF35]">
                Atendimento Imediato
              </span>
              <div className="font-display text-xl font-bold text-white mt-1">
                WhatsApp com Daniel Henrique
              </div>
              <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
                Envie sua demanda para receber uma avaliação de viabilidade técnica e arquitetura recomendada.
              </p>

              <button
                onClick={handleLaunchWhatsApp}
                className="group inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-xs sm:text-sm shadow-[inset_0_-2px_2px_rgba(255,255,255,0.6),0_10px_20px_-5px_rgba(168,255,53,0.35)] hover:brightness-110 active:scale-95 transition-all mt-6 w-full justify-between"
              >
                <span>Chamar no WhatsApp Agora</span>
                <span className="w-8 h-8 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowTopRightIcon className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#061809] border border-[#A8FF35]/30 flex items-center justify-center text-[#A8FF35]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#A8FF35]" />
                      <span className="text-[#A8FF35] font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar e-mail</span>
                    </>
                  )}
                </button>
              </div>
              <span className="text-xs text-white/50 font-mono">E-mail Profissional</span>
              <a
                href={`mailto:${personal.email}`}
                className="text-base font-semibold text-[#F5F9F0] hover:text-[#A8FF35] transition-colors block mt-1 break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Social Presence Card */}
            <div className="p-6 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-xs text-white/50 font-mono">Presença Ativa</span>
                <div className="font-display text-sm font-bold text-[#F5F9F0] mt-0.5">
                  GitHub · LinkedIn · Instagram
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white/80 transition-all border border-white/10"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white/80 transition-all border border-white/10"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-[#A8FF35] hover:text-[#0A0F0A] text-white/80 transition-all border border-white/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Conversational 1-Click Diagnostic (Agent-First approach) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#030d05]/90 border border-white/[0.1] relative">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A8FF35] mb-2">
              <Zap className="w-4 h-4" />
              <span>DIAGNÓSTICO RÁPIDO & BRIEFING INTELIGENTE</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Qual é a principal prioridade da sua empresa hoje?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mb-6">
              Selecione o seu cenário. O sistema já formata a mensagem com o escopo exato para você não perder tempo digitando.
            </p>

            {/* Scenario buttons */}
            <div className="space-y-2.5 mb-6">
              {objectives.map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => setSelectedObjective(obj.label)}
                  className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                    selectedObjective === obj.label
                      ? "bg-[#A8FF35]/15 border-[#A8FF35] text-white shadow-md shadow-[#A8FF35]/10"
                      : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{obj.label}</span>
                  {selectedObjective === obj.label ? (
                    <span className="w-2 h-2 rounded-full bg-[#A8FF35]" />
                  ) : null}
                </button>
              ))}
            </div>

            {/* Optional context field */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase text-white/50 mb-1.5">
                Nome da sua empresa ou ERP atual (opcional):
              </label>
              <input
                type="text"
                value={companyContext}
                onChange={(e) => setCompanyContext(e.target.value)}
                placeholder="Ex: Empresa X · Usamos Protheus / Bling / Tiny / Nuvemshop..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#A8FF35] transition-colors"
              />
            </div>

            {/* Generated Briefing Preview */}
            <div className="p-4 rounded-xl bg-[#061809] border border-[#A8FF35]/25 text-xs font-mono text-white/80 mb-6 space-y-1">
              <span className="text-[#A8FF35] text-[10px] uppercase block mb-1 font-bold">
                ● Mensagem de briefing pré-formatada:
              </span>
              <p className="italic text-white/70">
                &ldquo;{currentObjective.prompt}
                {companyContext ? ` Contexto: ${companyContext}` : ""}&rdquo;
              </p>
            </div>

            {/* Dispatch buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="group flex-1 inline-flex items-center justify-center gap-3 h-13 px-6 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-xs sm:text-sm shadow-[inset_0_-2px_2px_rgba(255,255,255,0.6),0_10px_20px_-5px_rgba(168,255,53,0.35)] hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Enviar pelo WhatsApp</span>
                <span className="w-7 h-7 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowTopRightIcon className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                type="button"
                onClick={handleLaunchEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 h-13 px-6 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-[#F5F9F0] text-xs sm:text-sm font-medium hover:bg-white/[0.08] hover:border-[#A8FF35]/40 transition-all"
              >
                <Mail className="w-4 h-4 text-[#A8FF35]" />
                <span>Enviar por E-mail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
