"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { Mail, MessageSquare, Check, Copy } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Integração de ERP");

  const topics = [
    { id: "erp", label: "Integração de ERP", text: "Olá Daniel! Gostaria de conversar sobre integração de ERP e sincronização de dados." },
    { id: "n8n", label: "Workflows no n8n & IA", text: "Olá Daniel! Gostaria de falar sobre automação com n8n e agentes de IA." },
    { id: "wpp", label: "Ecossistema WhatsApp", text: "Olá Daniel! Tenho interesse em soluções e ferramentas no ecossistema de WhatsApp." },
    { id: "saas", label: "Desenvolvimento Web & SaaS", text: "Olá Daniel! Quero conversar sobre desenvolvimento de um software ou produto digital." },
  ];

  const currentTopicObj = topics.find((t) => t.label === selectedTopic) || topics[0];
  const dynamicWhatsappUrl = `https://wa.me/5527999999999?text=${encodeURIComponent(currentTopicObj.text)}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contato" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Terminal / Action Console Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#12151B] border border-[#22262F] shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0060F0]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Console Header Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-[#22262F]/70 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#0060F0]">
              <span className="w-2 h-2 rounded-full bg-[#0060F0] animate-pulse" />
              <span className="text-[#F5F5F7]">status: <span className="text-[#0060F0]">online</span></span>
              <span className="text-[#565B66]">·</span>
              <span className="text-[#8A8F99]">tempo de resposta &lt; 1h</span>
            </div>

            <div className="text-[#565B66] text-[11px]">
              BRT (GMT-3) · Barra de São Francisco - ES
            </div>
          </div>

          {/* Heading */}
          <div className="pt-8 pb-6 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7] mb-3">
              Qual processo da sua empresa você quer automatizar hoje?
            </h2>
            <p className="text-sm sm:text-base text-[#8A8F99] leading-relaxed max-w-xl">
              Conte qual é o gargalo manual que hoje consome tempo e gera erros na sua equipe.
              Vamos analisar a viabilidade técnica e desenhar a arquitetura exata para destravar a sua operação.
            </p>
          </div>

          {/* Interactive Topic Selector */}
          <div className="space-y-3 pt-2 pb-8 text-left">
            <span className="text-xs font-mono text-[#565B66] uppercase tracking-wider block">
              Selecione o assunto do seu projeto:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.label)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                    selectedTopic === t.label
                      ? "bg-[#0060F0] text-white border border-[#0060F0] shadow-md shadow-[#0060F0]/25 font-semibold"
                      : "bg-[#181C24] text-[#8A8F99] border border-[#22262F] hover:border-[#0060F0]/40 hover:text-[#F5F5F7]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={dynamicWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-white font-semibold text-sm transition-all hover:scale-[1.01] active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Chamar no WhatsApp ({selectedTopic})</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#181C24] hover:bg-[#22262F] border border-[#22262F] hover:border-[#0060F0]/40 text-[#F5F5F7] font-medium text-xs sm:text-sm transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#0060F0]" />
                  <span className="text-[#0060F0] font-mono">E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8A8F99]" />
                  <span>Copiar e-mail</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Footer */}
          <div className="mt-10 pt-6 border-t border-[#22262F]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8A8F99]">
            <span className="font-mono text-[#565B66]">Canais diretos:</span>
            <div className="flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0060F0] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0060F0] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0060F0] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
