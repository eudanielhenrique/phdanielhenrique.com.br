export interface ProjectItem {
  id: string;
  title: string;
  category: "ai" | "web" | "automation" | "all";
  categoryLabel: string;
  description: string;
  impact: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
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
  skills: { name: string; level?: string; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Daniel Henrique",
    role: "Engenheiro de Software & Especialista em IA",
    tagline: "Construindo sistemas de alto desempenho, agentes autônomos inteligentes e arquiteturas web escaláveis.",
    bio: "Sou engenheiro de software focado no desenvolvimento de aplicações modernas de ponta a ponta e na implementação prática de Inteligência Artificial aplicada aos negócios. Crio soluções que combinam engenharia de software sólida, orquestração de agentes autônomos, integrações de APIs e interfaces elegantes de alta conversão.",
    location: "Brasil",
    availability: "Disponível para novos projetos e consultoria",
    email: "ddanielhpf@gmail.com",
    whatsapp: "https://wa.me/5500000000000?text=Ol%C3%A1%20Daniel,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar!", // Substituir pelo seu número
    whatsappRaw: "+55 (XX) XXXXX-XXXX",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },

  stats: [
    { value: "+8", label: "Anos de experiência em tecnologia" },
    { value: "+40", label: "Projetos e automações entregues" },
    { value: "99.9%", label: "Foco em confiabilidade e código limpo" },
    { value: "100%", label: "Orientado a impacto real de negócio" },
  ],

  services: [
    {
      id: "ai-agents",
      icon: "Bot",
      title: "Agentes Autônomos & Workflows de IA",
      badge: "Destaque",
      shortDescription:
        "Criação de agentes inteligentes com LLMs capazes de executar tarefas complexas, raciocinar, consultar bases de conhecimento (RAG) e orquestrar múltiplos passos automaticamente.",
      features: [
        "Arquitetura multi-agente e orquestração de fluxos",
        "RAG (Retrieval-Augmented Generation) com embeddings e busca semântica",
        "Integração com Claude, OpenAI GPT-4, Google Gemini e modelos locais",
        "Automações operacionais que poupam centenas de horas humanas",
      ],
    },
    {
      id: "fullstack-apps",
      icon: "Code2",
      title: "Desenvolvimento Full Stack & Plataformas Web",
      shortDescription:
        "Construção de aplicações web modernas, rápidas e seguras utilizando Next.js, React, Node.js e TypeScript, desde o MVP até soluções corporativas robustas.",
      features: [
        "Aplicações escaláveis com Next.js (App Router) e Tailwind CSS",
        "Design responsivo, acessível e otimizado para SEO técnico",
        "APIs RESTful e GraphQL estruturadas e documentadas",
        "Autenticação, pagamentos e controle de permissões seguro",
      ],
    },
    {
      id: "automations",
      icon: "Cpu",
      title: "Automação de Processos & Integrações",
      shortDescription:
        "Conexão de ecossistemas corporativos, CRMs, bancos de dados e ferramentas de terceiros para eliminar gargalos manuais e acelerar a operação.",
      features: [
        "Pipelines de dados e sincronização em tempo real",
        "Integrações de ERPs, gateways de pagamento e mensageria",
        "Webhooks, filas assíncronas e microsserviços",
        "Monitoramento e resiliência contra falhas",
      ],
    },
    {
      id: "consulting",
      icon: "Sparkles",
      title: "Consultoria Técnica & Arquitetura de Software",
      shortDescription:
        "Diagnóstico técnico, modernização de sistemas legados e consultoria estratégica para incorporar inteligência artificial de forma viável e rentável na sua empresa.",
      features: [
        "Revisão de arquitetura de software e boas práticas",
        "Planejamento de roadmap de adoção de IA generativa",
        "Refatoração focada em performance e manutenibilidade",
        "Orientação técnica para times de produto e engenharia",
      ],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "ai-agent-ecosystem",
      title: "Plataforma de Agentes de IA Autônomos",
      category: "ai",
      categoryLabel: "Inteligência Artificial",
      description:
        "Sistema de orquestração de múltiplos agentes para execução de tarefas de pesquisa, análise de documentos e geração de relatórios estratégicos com validação contínua.",
      impact: "Redução de 80% no tempo de elaboração de análises técnicas complexas.",
      tags: ["Python", "LangChain", "OpenAI / Claude", "FastAPI", "Vector DB"],
      demoUrl: "https://phdanielhenrique.com.br",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "business-operations-suite",
      title: "Sistema de Controle Operacional & Métricas",
      category: "web",
      categoryLabel: "Sistemas Web",
      description:
        "Painel administrativo em tempo real para monitoramento de rotinas corporativas, controle de equipe e auditoria de processos com alta taxa de atualização.",
      impact: "Visibilidade ponta a ponta dos KPIs operacionais com zero latência perceptível.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
      demoUrl: "https://phdanielhenrique.com.br",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "fiscal-doc-auditor",
      title: "Auditor Automatizado de Documentos Fiscais",
      category: "automation",
      categoryLabel: "Automação",
      description:
        "Mecanismo de processamento em lote para extração, validação de regras tributárias e conformidade automática em documentos fiscais (XML/PDF) com IA.",
      impact: "Mais de 50.000 documentos validados com índice de precisão de 99.8%.",
      tags: ["Node.js", "TypeScript", "Document AI", "Cloud Functions", "Redis"],
      demoUrl: "https://phdanielhenrique.com.br",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "modern-saas-template",
      title: "Design System & Plataforma Multi-Tenant",
      category: "web",
      categoryLabel: "Frontend & UI",
      description:
        "Biblioteca de componentes modulares, acessíveis e reutilizáveis criada com Tailwind CSS para aceleração de entrega de novos produtos digitais.",
      impact: "Redução de 60% no tempo de scaffold de novos módulos para clientes.",
      tags: ["React", "Tailwind CSS", "Storybook", "TypeScript"],
      demoUrl: "https://phdanielhenrique.com.br",
      githubUrl: "https://github.com",
      featured: false,
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "Inteligência Artificial & Dados",
      skills: [
        { name: "Agentes Autônomos (CrewAI / LangGraph)" },
        { name: "RAG & Vetores (Chroma / Pinecone / pgvector)" },
        { name: "LLM Fine-tuning & Prompt Engineering" },
        { name: "Claude API, OpenAI API & Gemini API" },
        { name: "Modelos Locais (Ollama / HuggingFace)" },
      ],
    },
    {
      category: "Desenvolvimento Frontend",
      skills: [
        { name: "Next.js (App Router)" },
        { name: "React 19 & TypeScript" },
        { name: "Tailwind CSS & Design Systems" },
        { name: "State Management & React Query" },
        { name: "SEO Técnico & Core Web Vitals" },
      ],
    },
    {
      category: "Backend & Arquitetura",
      skills: [
        { name: "Node.js & Express / NestJS" },
        { name: "Python (FastAPI / Celery)" },
        { name: "PostgreSQL, MySQL & MongoDB" },
        { name: "Arquitetura Hexagonal & Microsserviços" },
        { name: "RESTful APIs & GraphQL" },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker & Conteinerização" },
        { name: "Git, GitHub Actions & CI/CD" },
        { name: "Vercel, Cloudflare & AWS" },
        { name: "Linux Server Management" },
        { name: "Monitoramento e Logs" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Especialista em Soluções de IA & Arquiteto de Software",
      company: "Projetos Corporativos & Consultoria",
      period: "2023 - Presente",
      description:
        "Liderança na concepção e implementação de soluções alimentadas por Inteligência Artificial generativa, fluxos de agentes inteligentes e modernização de arquitetura de software para empresas.",
      highlights: [
        "Desenvolvimento de pipelines autônomos para automação de tarefas intelectuais complexas.",
        "Integração de modelos de linguagem de ponta em ecossistemas de produção com alta confiabilidade.",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack Sênior",
      company: "Desenvolvimento de Produtos & Plataformas",
      period: "2020 - 2023",
      description:
        "Engenharia e entrega de produtos SaaS, sistemas de controle operacional, integrações de APIs e painéis analíticos com foco em performance e estabilidade.",
      highlights: [
        "Arquitetura de sistemas resilientes consumindo dezenas de milhões de requisições mensais.",
        "Padronização de código, testes automatizados e implantação contínua (CI/CD).",
      ],
    },
    {
      role: "Desenvolvedor de Software",
      company: "Projetos de Tecnologia & Automação",
      period: "2017 - 2020",
      description:
        "Construção de aplicações web, automações de processos de negócios e integração de bases de dados heterogêneas.",
      highlights: [
        "Automatização de processos manuais com ganho direto de produtividade para clientes.",
      ],
    },
  ] as ExperienceItem[],
};
