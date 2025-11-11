## 🧭 **1. README.md**


# 🧬 CEF-UX — Context Engineering Framework UX Layer

**Framework de Interface e Experiência (UX) para o Context Engineering Framework (CEF)**  
Integra design tokens, componentes React e Vue, e uma biblioteca unificada de UI com TailwindCSS.

---

## 🚀 Objetivo

Desenvolver uma camada de UX consistente, performática e acessível, oferecendo componentes reutilizáveis
para aplicações baseadas no CEF — como visualizadores de contexto, dashboards heurísticos e painéis semânticos.

---

## 🏗️ Estrutura Monorepo

```

cef-ux/
├── package.json
├── pnpm-workspace.yaml
├── packages/
│   ├── design-tokens/     # Tokens de design (cores, tipografia, espaçamento)
│   ├── ui-react/          # Componentes React + TypeScript + Tailwind
│   ├── ui-vue/            # Componentes Vue 3 + TypeScript + Tailwind
│   ├── docs/              # Storybook + documentação de componentes
│   └── examples/          # Demos e protótipos interativos
└── README.md

````

---

## 🧩 Stack

| Categoria | Ferramenta |
|------------|-------------|
| Build & Dev | [Vite](https://vitejs.dev/) |
| Linguagem | TypeScript |
| Frameworks | React 18, Vue 3 |
| Estilos | TailwindCSS v3 |
| Documentação | Storybook + MDX |
| Testes | Vitest + Testing Library |
| Empacotamento | pnpm Workspaces |
| CI/CD | GitHub Actions |

---

## 🧱 Filosofia de Design

- **Atomic Design** — Átomos → Moléculas → Organismos → Templates  
- **Tokens Universais** — Cores, tipografia, espaçamento e sombras compartilhados entre React e Vue  
- **Acessibilidade (WCAG AA)** — Todo componente testado com axe-core e interações de teclado  
- **Paridade Visual** — Mesma experiência entre as versões React e Vue  

---

## 🔧 Scripts Principais

| Comando | Descrição |
|----------|------------|
| `pnpm dev:react` | Inicia o ambiente React (Vite) |
| `pnpm dev:vue` | Inicia o ambiente Vue (Vite) |
| `pnpm dev:storybook` | Roda o Storybook localmente |
| `pnpm test` | Executa todos os testes (unitários e integração) |
| `pnpm build` | Gera os builds das libs |
| `pnpm lint` | Roda ESLint e Stylelint |
| `pnpm format` | Formata código com Prettier |

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cef-ux.git
cd cef-ux

# Instale dependências
pnpm install
````

---

## 🧪 Desenvolvimento local

```bash
# React
pnpm dev:react

# Vue
pnpm dev:vue

# Documentação
pnpm dev:storybook
```

Acesse o Storybook em: [http://localhost:6006](http://localhost:6006)

---

## 📚 Estrutura de Componentes

Cada pacote segue o mesmo padrão:

```
ComponentName/
├── ComponentName.tsx (ou .vue)
├── ComponentName.test.ts
├── ComponentName.stories.tsx
├── styles.css
```

---

## 🧠 Filosofia UX

O CEF-UX segue três princípios orientadores:

1. **Clareza Semântica** — Cada componente deve refletir claramente sua intenção.
2. **Consistência Visual** — Coerência entre frameworks, plataformas e contextos.
3. **Elegância Funcional** — Simplicidade + Poder heurístico.

---

## 📈 Roadmap

| Etapa    | Entrega                                 | Status |
| -------- | --------------------------------------- | ------ |
| Sprint 0 | Setup monorepo + tokens                 | 🟢     |
| Sprint 1 | Button, Input, Card (React) + Storybook | 🔵     |
| Sprint 2 | Modal, Toast, Table + Tests             | 🔵     |
| Sprint 3 | Port Vue + Paridade                     | ⚪      |
| Sprint 4 | Dashboard + E2E + Docs                  | ⚪      |

---

## 🧩 Licença

Licença MIT © 2025 — Desenvolvido no contexto do **Context Engineering Framework**.

````

---

## ⚙️ **2. pnpm-workspace.yaml**

```yaml
packages:
  - "packages/*"
  - "examples/*"
````

Esse arquivo permite que `pnpm` reconheça e gerencie as dependências entre os pacotes (React, Vue, tokens, etc).

---

## 📦 **3. package.json (raiz)**

```json
{
  "name": "cef-ux",
  "private": true,
  "version": "0.1.0",
  "description": "UX Framework for the Context Engineering Framework (React + Vue + Tailwind + TypeScript).",
  "author": "Context Engineering Framework Team",
  "license": "MIT",
  "scripts": {
    "dev:react": "pnpm --filter ui-react dev",
    "dev:vue": "pnpm --filter ui-vue dev",
    "dev:storybook": "pnpm --filter docs dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "lint": "pnpm -r lint",
    "format": "pnpm -r format",
    "ci": "pnpm -r test && pnpm -r lint"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "eslint": "^9.8.0",
    "prettier": "^3.3.3",
    "stylelint": "^16.2.0",
    "vitest": "^1.3.1",
    "@testing-library/react": "^14.2.2",
    "@testing-library/vue": "^8.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```
