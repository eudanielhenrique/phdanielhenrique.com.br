# phdanielhenrique.com.br

Website profissional e portfólio de **Daniel Henrique** — Engenheiro de Software & Especialista em Soluções com Inteligência Artificial e Agentes Autônomos.

Desenvolvido com:
- **Next.js 16 (App Router)**
- **React 19 & TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons & Design Dark Minimalista**

---

## 🚀 Como Executar Localmente

1. Instale as dependências (caso ainda não tenha feito):
```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

3. Acesse no navegador:
[http://localhost:3000](http://localhost:3000)

---

## ⚙️ Como Personalizar os Dados e Conteúdos

Todo o conteúdo do site está centralizado em um único arquivo de configuração tipado:

📁 **`src/data/portfolioData.ts`**

Nele você pode alterar diretamente:
- **Dados Pessoais & Contato**: Nome, bio, cargo, e-mail, telefone do WhatsApp, link do GitHub e LinkedIn.
- **Estatísticas / Métricas de Destaque**: Anos de experiência, projetos entregues, diferenciais.
- **Serviços & Especialidades**: Pilares de atuação, descrições e itens de checklist.
- **Projetos no Portfólio**: Título, categoria (`ai`, `web`, `automation`), descrição, métrica de impacto, tags e links (demo e GitHub).
- **Trajetória & Experiências**: Cargos, empresas, períodos e conquistas.
- **Stack Tecnológica**: Ferramentas e tecnologias divididas por categoria.

---

## 📦 Build para Produção

Para testar a compilação de produção e garantir que tudo está 100%:
```bash
pnpm build
```

E para rodar a versão compilada:
```bash
pnpm start
```

---

## 🌐 Deploy (Vercel ou Cloudflare)

O projeto está 100% pronto para deploy contínuo via Vercel ou Cloudflare Pages:
1. Suba o repositório para o seu GitHub:
```bash
git add .
git commit -m "feat: portfolio Daniel Henrique inicializado"
git push origin main
```
2. Conecte o repositório na [Vercel](https://vercel.com) e aponte o domínio `phdanielhenrique.com.br`.
