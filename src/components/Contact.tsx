"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MessageSquare, Send, Check, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

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
      `Olá Daniel! Meu nome é ${name || "um visitante"}.\nAssunto: ${subject || "Novo Projeto / Oportunidade"}\n\nMensagem: ${message || "Gostaria de trocar uma ideia sobre um projeto."}`
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Contato de ${name || "Visitante"}`);
    const mailtoBody = encodeURIComponent(
      `Olá Daniel,\n\nMeu nome: ${name}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contato" className="py-24 relative z-10 border-t border-white/5 bg-slate-950/60">
      {/* Background Glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-indigo-600/15 bottom-10 right-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Canais de Contato
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Vamos Construir Algo Excepcional Juntos?
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Seja para criar um novo sistema do zero, implementar automações inteligentes com IA ou
            consultoria técnica especializada, entre em contato direto comigo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email card */}
            <div className="glass-panel p-6 rounded-2xl relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copiar endereço de e-mail"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs text-slate-400 font-medium">E-mail Direto</div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base font-semibold text-white hover:text-cyan-300 transition-colors block mt-1 break-all"
              >
                {personal.email}
              </a>
            </div>

            {/* WhatsApp direct card */}
            <div className="glass-panel p-6 rounded-2xl relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-medium">Conversa Instantânea</div>
              <div className="text-base font-semibold text-white mt-1">WhatsApp</div>
              <p className="text-xs text-slate-400 mt-1">
                Resposta rápida para novos projetos, demandas urgentes e propostas.
              </p>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social links */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Perfis Profissionais</div>
                <div className="text-sm font-semibold text-white mt-0.5">GitHub & LinkedIn</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive message form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-2">
              Envie uma mensagem rápida
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Preencha os dados e escolha se prefere enviar por WhatsApp ou pelo seu leitor de E-mail.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Seu Nome ou Empresa
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva / Empresa X"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Assunto do Projeto
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex: Desenvolvimento de Agente de IA / Sistema Web"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Detalhes ou Mensagem
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva brevemente o que precisa, prazo ou objetivos esperados..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enviar por E-mail</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
