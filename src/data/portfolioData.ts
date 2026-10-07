export interface ProjectItem {
  id: string;
  title: string;
  category: "automation" | "fullstack" | "whatsapp" | "all";
  categoryLabel: string;
  description: string;
  impact: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  features: string[];
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface VentureItem {
  name: string;
  tag: string;
  url: string;
  role: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Daniel Henrique",
    brand: "phdanielhenrique",
    role: "Automação com n8n & IA | Full Stack Developer",
    tagline: "Integrando ERPs, orquestrando fluxos com IA e eliminando trabalho manual",
    company: "Figprod",
    companyUrl: "https://figprod.com.br",
    location: "Barra de São Francisco - ES, Brasil",
    availability: "Disponível para projetos de automação & consultoria",
    email: "ddanielhpf@gmail.com",
    whatsapp: "https://wa.me/5527999999999?text=Ol%C3%A1%20Daniel!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20automa%C3%A7%C3%A3o%20ou%20projeto.",
    whatsappRaw: "(27) 99999-9999",
    github: "https://github.com/eudanielhenrique",
    linkedin: "https://www.linkedin.com/in/phdanielhenrique/",
    instagram: "https://instagram.com/phdanielhenrique",
    twitter: "https://x.com/phdanielhenrque",
  },

  ventures: [
    {
      name: "Figprod",
      tag: "@fig.prod",
      url: "https://figprod.com.br",
      role: "Founder",
      description: "Consultoria e engenharia de software",
    },
    {
      name: "Bora Automatizar",
      tag: "@boraautomatizar.com.br",
      url: "https://boraautomatizar.com.br",
      role: "Founder",
      description: "Automação com n8n e esteiras de dados",
    },
    {
      name: "BuskaLeads",
      tag: "@buskaleads.com.br",
      url: "https://buskaleads.com.br",
      role: "Founder",
      description: "Prospecção inteligente de leads B2B",
    },
    {
      name: "LetsGoPedir",
      tag: "@letsgopedir",
      url: "https://letsgopedir.com.br",
      role: "Founder",
      description: "Cardápio digital e gestão de pedidos",
    },
  ] as VentureItem[],

  stats: [
    { value: "+40", label: "Projetos e repositórios desenvolvidos" },
    { value: "0", label: "Horas perdidas com tarefas manuais repetitivas" },
    { value: "n8n + IA", label: "Especialista em automação e agentes operacionais" },
    { value: "100%", label: "Foco em ROI, velocidade e estabilidade real" },
  ],

  services: [
    {
      id: "n8n-ai-automation",
      icon: "Cpu",
      title: "Automação de Processos com n8n & IA",
      badge: "Core Especialidade",
      shortDescription:
        "Construção de fluxos complexos no n8n potencializados por modelos de linguagem (Claude, OpenAI, Gemini). Automatização de triagem de dados, geração de documentos, relatórios e pipelines sem fricção.",
      features: [
        "Workflows robustos no n8n com tratamento de exceções e retries",
        "Extração inteligente de dados em documentos fiscais, PDFs e e-mails",
        "Agentes operacionais com IA para suporte, vendas e backoffice",
        "Packs modulares prontos para produção e esteiras de dados",
      ],
    },
    {
      id: "erp-integrations",
      icon: "Database",
      title: "Integração de ERPs & Eliminação de Trabalho Manual",
      badge: "Alto ROI",
      shortDescription:
        "Sincronização bidirecional entre sistemas legados, ERPs corporativos, plataformas de e-commerce e ferramentas em nuvem. Elimina redigitação de planilhas e erros humanos.",
      features: [
        "Conexão de ERPs via API, Webhooks ou banco de dados direto",
        "Sincronização de pedidos, notas fiscais, clientes e estoque",
        "Monitoramento de consistência e conciliação automática",
        "Redução de custos operacionais e gargalos de equipe",
      ],
    },
    {
      id: "whatsapp-ecosystem",
      icon: "MessageSquare",
      title: "Ecossistema WhatsApp & Atendimento Omnichannel",
      badge: "Engenharia Própria",
      shortDescription:
        "Experiência profunda no protocolo do WhatsApp (criador da lib Zapo, DeskcommCRM e soluções SaaS multiatendimento). Robôs inteligentes, disparos transacionais e canais de atendimento.",
      features: [
        "Integração com WAHA, Baileys e WhatsApp Cloud API oficial",
        "CRMs operacionais focados no mercado brasileiro com suporte a LGPD",
        "Chatbots com IA com compreensão contextual e memória",
        "Sistemas multiatendente com Kanban e distribuição de filas",
      ],
    },
    {
      id: "fullstack-platforms",
      icon: "Code2",
      title: "Desenvolvimento Full Stack (React · Next.js · Node.js)",
      badge: "Escala & UX",
      shortDescription:
        "Criação de produtos digitais completos, painéis operacionais, micro-SaaS e canvas interativos com arquitetura limpa, alta performance e design responsivo.",
      features: [
        "Aplicações web modernas com Next.js (App Router) e Tailwind CSS",
        "APIs performáticas em Node.js (TypeScript) e Python",
        "Bancos de dados relacionais e NoSQL (PostgreSQL, SQLite, Redis)",
        "Docker, deploy em VPS, Cloudflare e Vercel",
      ],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "deskcomm-crm",
      title: "DeskcommCRM",
      category: "whatsapp",
      categoryLabel: "CRM & WhatsApp com IA",
      badge: "Destaque Recente",
      description:
        "CRM operacional com IA feito sob medida para o e-commerce brasileiro. Integração nativa com WhatsApp (WAHA), sincronização com Nuvemshop e conformidade estrita com LGPD.",
      impact: "Centralização de vendas e atendimento automatizado com IA integrada ao catálogo da loja.",
      tags: ["TypeScript", "Next.js", "WAHA / WhatsApp", "Nuvemshop", "AI Agents", "LGPD"],
      githubUrl: "https://github.com/eudanielhenrique/DeskcommCRM",
      featured: true,
    },
    {
      id: "zapo",
      title: "Zapo — WhatsApp Web Library",
      category: "whatsapp",
      categoryLabel: "Open Source / Core Lib",
      badge: "Alta Performance",
      description:
        "Biblioteca TypeScript ultraleve e de alto desempenho para o protocolo WhatsApp Web. Construída para escala multi-sessão, baixo consumo de memória, hot paths zero-copy e controle total de transporte e Signal.",
      impact: "Zero dependências pesadas, projetada para servidores rodando dezenas de conexões concorrentes.",
      tags: ["TypeScript", "WhatsApp Protocol", "WebSockets", "Signal Protocol", "Zero-Copy"],
      githubUrl: "https://github.com/eudanielhenrique/zapo",
      featured: true,
    },
    {
      id: "funnely-open",
      title: "funnelyOpen",
      category: "fullstack",
      categoryLabel: "Canvas Visual & Marketing",
      badge: "Open Source",
      description:
        "Canvas visual interativo para planejar fluxos e mapas de funis de marketing diretamente com o cliente — a camada Map do Funnelytics em versão open source.",
      impact: "Facilita o alinhamento visual de estratégias de tráfego, automações e jornadas de conversão.",
      tags: ["TypeScript", "React", "Canvas Interativo", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/eudanielhenrique/funnelyOpen",
      featured: true,
    },
    {
      id: "n8n-workflows-pack",
      title: "Packs de Workflows n8n & Claude Code Skills",
      category: "automation",
      categoryLabel: "Automação Operacional",
      badge: "Produtividade Extrema",
      description:
        "Catálogo de automações e workflows avançados em n8n e skills operacionais para Claude Code (bora-automatizar-skills). Conecta rotinas de atendimento, ERPs e ferramentas operacionais.",
      impact: "Padronização e aceleração imediata de implantação de automações complexas.",
      tags: ["n8n", "Claude Code", "Python", "Workflows", "LLMs", "APIs"],
      githubUrl: "https://github.com/eudanielhenrique/bora-automatizar-skills",
      featured: true,
    },
    {
      id: "whazing-saas",
      title: "Whazing SaaS & Agendamentos",
      category: "whatsapp",
      categoryLabel: "SaaS Multiatendimento",
      badge: "Omnichannel",
      description:
        "Plataforma completa de multiatendimento baseada em WhatsApp Baileys, Instagram, Facebook, chat interno, pipeline Kanban e módulo de agendamento automatizado.",
      impact: "Gestão unificada de múltiplos operadores com filas inteligentes e robôs de triagem.",
      tags: ["Node.js", "React", "WhatsApp Baileys", "PostgreSQL", "Socket.io", "Python"],
      githubUrl: "https://github.com/eudanielhenrique/Whazing-SaaS",
      featured: false,
    },
    {
      id: "calculadora-next",
      title: "Calculadora de Emplacamento & Taxas",
      category: "fullstack",
      categoryLabel: "Web App & Cálculos",
      badge: "Regras de Negócio",
      description:
        "Aplicação desenvolvida para estimar custos de taxas, documentação e IPVA proporcional para despachantes e compradores de veículos, com histórico persistido.",
      impact: "Agilidade instantânea em orçamentos tributários e taxas veiculares.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cálculo Tributário"],
      githubUrl: "https://github.com/eudanielhenrique/calculadora-next",
      featured: false,
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "Automação & Orquestração de IA",
      skills: [
        { name: "n8n Workflows Avançados", highlight: true },
        { name: "Integração de LLMs (Claude, OpenAI, Gemini)", highlight: true },
        { name: "Skills para Claude Code & Agentes", highlight: true },
        { name: "Webhooks & Automação de Backoffice" },
        { name: "Extração de Dados & Document AI" },
      ],
    },
    {
      category: "WhatsApp & Comunicação Omnichannel",
      skills: [
        { name: "Protocolo WhatsApp Web (Zapo Lib)", highlight: true },
        { name: "WAHA (WhatsApp HTTP API)", highlight: true },
        { name: "Baileys & WhatsApp Cloud API" },
        { name: "Multi-atendimento & Kanban de Conversas" },
        { name: "Chatbots de IA com Memória Contextual" },
      ],
    },
    {
      category: "Frontend & Interfaces Web",
      skills: [
        { name: "Next.js (App Router)", highlight: true },
        { name: "React & TypeScript", highlight: true },
        { name: "Tailwind CSS & Design Systems", highlight: true },
        { name: "Canvas Interativos & Visual Builders" },
        { name: "UI/UX Focado em Conversão e Usabilidade" },
      ],
    },
    {
      category: "Backend, Integrações & Infra",
      skills: [
        { name: "Node.js & Express / NestJS", highlight: true },
        { name: "Python (Scripts & Automações)" },
        { name: "PostgreSQL, SQLite & Redis" },
        { name: "Integração de ERPs & APIs REST / GraphQL", highlight: true },
        { name: "Docker, VPS Linux, Cloudflare & Vercel" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Especialista em Automação, IA & Desenvolvimento Full Stack",
      company: "Figprod (@figprod) / Consultoria",
      period: "2021 - Presente",
      description:
        "Desenvolvimento de soluções sob medida em automação com n8n, engenharia de agentes com IA e integração direta com ERPs corporativos para eliminar trabalho manual.",
      highlights: [
        "Criação de esteiras no n8n reduzindo centenas de horas operacionais mensais em clientes.",
        "Desenvolvimento do DeskcommCRM e bibliotecas de alta performance para WhatsApp (Zapo).",
        "Projetos open source e ecossistema de skills para Claude Code e automações.",
      ],
    },
    {
      role: "Desenvolvedor Full Stack & Arquiteto de Aplicações",
      company: "Projetos Web & Soluções Digitais",
      period: "2018 - 2021",
      description:
        "Concepção e entrega de plataformas web, sistemas de atendimento omnichannel (Whazing-SaaS), painéis interativos e integrações de comércio eletrônico.",
      highlights: [
        "Implementação de soluções de chat multi-canal com suporte a milhares de conversas diárias.",
        "Arquitetura de sistemas resilientes com sincronização em tempo real via WebSockets.",
      ],
    },
  ] as ExperienceItem[],
};
