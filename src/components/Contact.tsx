"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MessageSquare, Check, Copy } from "lucide-react";
import { ArrowTopRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, SparkIcon } from "@/components/Icons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Daniel! Meu nome é ${name || "um visitante"}.\nAssunto: ${subject || "Automação / Projeto com IA"}\n\nMensagem: ${message || "Gostaria de falar sobre uma oportunidade de automação/desenvolvimento."}`
    );
    window.open(`https://wa.me/5527999999999?text=${text}`, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Contato de ${name || "Visitante do Site"}`);
    const mailtoBody = encodeURIComponent(
      `Olá Daniel,\n\nMeu nome: ${name}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contato" className="py-28 relative z-10 border-t border-white/[0.08] bg-[#010702]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-xs sm:text-sm text-[#F5F9F0] shadow-sm mb-4">
            <SparkIcon className="w-3.5 h-3.5" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#A8FF35]">
              Contato & Novos Projetos
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.035em] text-[#F5F9F0]">
            Vamos conversar sobre o seu próximo projeto?
          </h2>

          <p className="mt-4 text-[#F5F9F0]/65 text-base leading-relaxed">
            Se você precisa automatizar processos no n8n, integrar ERPs, implementar IA na sua operação
            ou construir uma aplicação moderna, me chame nos canais abaixo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Action cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] relative">
              <div className="w-11 h-11 rounded-xl bg-[#061809] border border-[#A8FF35]/30 flex items-center justify-center text-[#A8FF35] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A8FF35]">
                Canal Mais Rápido
              </div>
              <div className="font-display text-lg font-bold text-[#F5F9F0] mt-1">WhatsApp Direto</div>
              <p className="text-xs text-[#F5F9F0]/60 mt-1 leading-relaxed">
                Ideal para alinhamento rápido de escopo, dúvidas técnicas e propostas comerciais.
              </p>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 h-11 pl-5 pr-1.5 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-xs shadow-[inset_0_-2px_2px_rgba(255,255,255,0.6),0_10px_20px_-5px_rgba(168,255,53,0.3)] hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all mt-5"
              >
                <span>Chamar no WhatsApp</span>
                <span className="w-8 h-8 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowTopRightIcon className="w-3.5 h-3.5" />
                </span>
              </a>
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
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs text-white/50 font-mono">E-mail Profissional</div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base font-semibold text-[#F5F9F0] hover:text-[#A8FF35] transition-colors block mt-1 break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* Social links row */}
            <div className="p-6 rounded-2xl bg-[#030d05]/80 border border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="text-xs text-white/50 font-mono">Presença Online</div>
                <div className="font-display text-sm font-bold text-[#F5F9F0] mt-0.5">GitHub · LinkedIn · Instagram</div>
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

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-9 rounded-2xl bg-[#030d05]/80 border border-white/[0.08]">
            <h3 className="font-display text-xl font-bold text-[#F5F9F0] mb-2">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs text-[#F5F9F0]/60 mb-6">
              Preencha os campos abaixo para abrir a conversa já formatada no seu WhatsApp ou leitor de e-mail.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#F5F9F0]/70 mb-1.5 uppercase">
                  Seu Nome ou Empresa
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos / Empresa XYZ"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F5F9F0] placeholder-white/30 focus:outline-none focus:border-[#A8FF35] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#F5F9F0]/70 mb-1.5 uppercase">
                  O que você precisa automatizar ou construir?
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex: Integração de ERP com n8n / Chatbot WhatsApp / Novo SaaS"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F5F9F0] placeholder-white/30 focus:outline-none focus:border-[#A8FF35] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#F5F9F0]/70 mb-1.5 uppercase">
                  Mensagem / Detalhes
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva seu cenário atual, sistemas que utiliza e principais objetivos..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F5F9F0] placeholder-white/30 focus:outline-none focus:border-[#A8FF35] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="group flex-1 inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-gradient-to-r from-[#D8FFA6] to-[#A8FF35] text-[#0A0F0A] font-semibold text-xs sm:text-sm shadow-[inset_0_-2px_2px_rgba(255,255,255,0.6),0_10px_20px_-5px_rgba(168,255,53,0.3)] hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>Chamar no WhatsApp</span>
                  <span className="w-7 h-7 rounded-full bg-[#0A0F0A] text-[#A8FF35] flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowTopRightIcon className="w-3.5 h-3.5" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-[#F5F9F0] text-xs sm:text-sm font-medium hover:bg-white/[0.08] hover:border-[#A8FF35]/40 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#A8FF35]" />
                  <span>Enviar por E-mail</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
