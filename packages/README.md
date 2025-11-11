# 🎨 @desenvolveux/design-tokens

Tokens universais de design para o **Context Engineering Framework UX (CEF-UX)**.

## 📦 Conteúdo

- 🎨 **Cores** — Paletas primárias, secundárias e semânticas  
- 🧱 **Tipografia** — Fontes, tamanhos e pesos  
- 🔲 **Espaçamento e Raio** — Grid semântico e cantos arredondados  
- ☁️ **Sombras** — Profundidade e contraste perceptivo  

## 🚀 Uso

pnpm add @desenvolveux/design-tokens
Em TypeScript
---
(ts)
Copiar código
import { designTokens } from "@cef-ux/design-tokens"
---
* console.log(designTokens.color.primary[500]); // "#0284C7"
Em Tailwind
No tailwind.config.js:
---
(js)
Copiar código
import tokens from "@desenvolveux/design-tokens/tokens.json";
---
* 🧭 Filosofia
Cada token é uma unidade mínima de coerência visual e semântica.
Assim como na engenharia de contexto, a clareza nasce da densidade controlada.
---
Licença MIT © 2025 — CEF UX Team

yaml
Copiar código

---

✅ **Resumo técnico pronto para commit:**

| Arquivo | Função |
|----------|--------|
| `tokens.json` | Fonte principal dos tokens |
| `tokens.ts` | Tipagem + export |
| `tailwind.config.js` | Integração com Tailwind |
| `postcss.config.js` | Pipeline CSS |
| `package.json` | Metadata e comandos |
| `README.md` | Documentação do módulo |

---
# 📄  Desenvolvimento UX (React | Vue | TypeScript | Tailwind)

## 1. Objetivo do projeto

Kit/implementação de UX robusto e reutilizável 

- Aplicação em **React + TypeScript** (app principal / componentes)
    
- Paridade de referência em **Vue + TypeScript** (portabilidade)
    
- Estilização com **TailwindCSS** (design tokens compartilhados)
    
- Biblioteca de componentes documentada (Storybook), acessível e testável
    
- Fluxo de design → desenvolvimento → testes → deploy automatizado
    

## 2. Público-alvo

- Desenvolvedores frontend (React / Vue)
    
- Designers de produto / UX
    
- Engenheiros de ML que precisam de UI para dashboards, grafo micelial, e validação de contexto
    

## 3. Requisitos de alto nível

- **Reusabilidade**: componentes atômicos, configuráveis.
    
- **Paridade**: UX equivalente entre React e Vue (mesma aparência & comportamento).
    
- **Acessibilidade**: conformidade WCAG AA.
    
- **Responsividade**: mobile-first, breakpoints Tailwind.
    
- **Performance**: carregamento rápido, SSR possível.
    
- **Documentação**: Storybook + MDX + exemplos na pasta `examples/`.
    
- **Testabilidade**: testes unitários, de integração e E2E.
    
- **Observabilidade**: integração mínima de logs/telemetria (opcional).
    

## 4. Arquitetura proposta (monorepo)

Monorepo com Yarn / pnpm workspaces (recomendado pnpm) — estrutura:

```
cef-ux/
├── package.json
├── pnpm-workspace.yaml
├── packages/
│   ├── design-tokens/         # tokens (colors, spacing, typography) (JSON/TS)
│   ├── ui-react/              # componentes React + TS + Tailwind (Vite)
│   ├── ui-vue/                # componentes Vue 3 + TS + Tailwind (Vite)
│   ├── docs/                  # Storybook + Docs site (shared)
│   └── examples/              # demos: react-app, vue-app, dashboard
├── .github/
│   └── workflows/             # CI — tests, lint, build, publish
└── README.md
```

## 5. Stack técnico recomendado

- Monorepo: **pnpm** + workspaces
    
- Build & Dev: **Vite** (React + Vue)
    
- React: **React 18**, **TypeScript**, **Vite**, **React Router (optional)**
    
- Vue: **Vue 3**, **TypeScript**, **Vite**, **Vue Router (optional)**
    
- CSS: **TailwindCSS v3+**, PostCSS
    
- Design tokens: **JSON / TypeScript** with export para CSS variables
    
- Component docs: **Storybook** (supports React + Vue in one instance)
    
- Testing:
    
    - Unit: **Vitest** (works with Vite) + **Testing Library** (React / Vue)
        
    - E2E: **Playwright**
        
- Lint/Format: **ESLint**, **Prettier**, **Stylelint**
    
- CI/CD: **GitHub Actions**
    
- Optional: **Storybook + Chromatic** for visual tests
    
- Optional for SSR: **Next.js** (React) / **Nuxt** (Vue) if server rendering needed
    

## 6. Design system & tokens

- Tokens centralizados em `packages/design-tokens`:
    
    - colors, spacing, radii, typography, shadows, transitions, z-index
        
    - exportados como:
        
        - `tokens.json`
            
        - `tokens.css` (CSS custom properties)
            
        - `tokens.ts` (typesafe exports)
            
- Tailwind config uses tokens via `theme.extend` reading `tokens.ts` or CSS vars.
    
- Component design: **Atomic Design** (atoms → molecules → organisms → templates).
    

## 7. Componentes essenciais 

Cada componente terá:

- Props / API documentada
    
- Variants (size, tone, state)
    
- Accessibility notes (roles, aria-* attributes)
    
- Tests (unit + interaction)
    
- Storybook stories (docs & usage)
    

Lista inicial (prioridade alta → baixa):

1. Button (primary, secondary, icon, disabled)
    
2. Icon (SVG system)
    
3. Input / Textarea / Select (with labels, help text, validation)
    
4. Card / Panel (header, body, footer)
    
5. Modal / Dialog (focus trap, keyboard support)
    
6. Toast / Notifications
    
7. Sidebar / Topbar (responsive)
    
8. Data Table (sortable, accessible, pagination)
    
9. Context Graph Viewer (canvas / SVG / d3 or lightweight lib) — prototype
    
10. Metrics Panel (SD, PC gauges)
    
11. Form primitives + validation hooks
    
12. Breadcrumbs, Tabs, Accordions
    
13. Avatar, Badges, Tooltips
    

## 8. UX patterns & interactions

- Mobile-first responsive breakpoints
    
- Keyboard navigation & focus management
    
- Visible focus rings, high-contrast mode
    
- Reduced-motion preference support
    
- Clear error states & inline validation
    
- Progressive disclosure for complex controls (advanced options hidden by default)
    

## 9. Accessibility (A11y)

- Baseline WCAG AA compliance
    
- Use `aria-*` correctly for dialogs, lists, tables
    
- Color contrast min 4.5:1 for body text
    
- Screen-reader friendly labels & live regions for notifications
    
- Keyboard operability for all interactive components
    
- Run automated axe/Playwright checks in CI
    

## 10. Theming & customization

- Provide CSS variables and Tailwind theme keys.
    
- Theme toggles: light/dark mode + token overrides.
    
- Allow component-level overrides via props + className.
    

## 11. Docs & examples

- **Storybook**: component docs, interactive playgrounds, accessibility addon, controls.
    
- **Examples**:
    
    - `examples/react-app`: small app demonstrating Athena/Orion/Nemea UI & usage_demo flows
        
    - `examples/vue-app`: parity example
        
    - `examples/dashboard`: graph viewer + metrics panel
        
- `docs/` host theory.md and architecture docs (already present).
    

## 12. Test strategy

- Unit tests (Vitest + Testing Library)
    
- Integration tests for components (e.g., Modal + focus trap)
    
- Visual regression: Chromatic (optional) or Playwright screenshot tests
    
- E2E: Playwright flows (login/mocks, create context, run agent, view metrics)
    
- Accessibility checks: axe-core in CI
    

## 13. CI / CD (GitHub Actions)

Pipelines:

- `pull_request`:
    
    - Install deps (pnpm)
        
    - Lint (ESLint + Stylelint)
        
    - Run unit tests
        
    - Run accessibility checks (axe)
        
    - Build Storybook static (optional)
        
- `push` to `main`:
    
    - Build packages
        
    - Publish (optional) to npm or GitHub Packages (on tag)
        
    - Deploy docs (Storybook static) to GitHub Pages or Netlify
        
- `release`:
    
    - Changelog generation (Conventional Commits)
        
    - Tag & release
        

## 14. Security & dependencies

- Dependabot / Renovate for deps updates
    
- Pin versions in package.json
    
- Use audited packages only (no risky runtime eval)
    

## 15. Developer workflow & scripts

Example root `package.json` scripts (pnpm):

```json
{
  "scripts": {
    "dev:react": "pnpm --filter ui-react dev",
    "dev:vue": "pnpm --filter ui-vue dev",
    "dev:storybook": "pnpm --filter docs dev",
    "build": "pnpm -w build",
    "test": "pnpm -w test",
    "lint": "pnpm -w lint",
    "format": "pnpm -w format",
    "ci": "pnpm -w -r test && pnpm -w lint"
  }
}
```

Each package should expose similar scripts (`dev`, `build`, `test`, `lint`).

## 16. Folder layouts 

### `packages/ui-react`

```
ui-react/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── styles.css
│   ├── hooks/
│   ├── utils/
│   └── index.ts
├── public/
├── vite.config.ts
├── package.json
└── tsconfig.json
```

### `packages/ui-vue` (paridade)

```
ui-vue/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.vue
│   │   │   ├── Button.spec.ts
│   │   │   └── Button.stories.ts
│   ├── composables/
│   └── index.ts
```

### `packages/design-tokens`

```
design-tokens/
├── tokens.json
├── tokens.ts
├── README.md
```

## 17. Component spec template (to use in PRs / stories)

Each new component PR should include:

- Purpose & acceptance criteria
    
- Props / API table
    
- Visual variants (sketch or Figma link)
    
- Accessibility checklist
    
- Unit test cases
    
- Storybook stories (Default, Variants, Accessibility)
    

## 18. Milestones & timeline (suggestion, adjust to team)

- **Sprint 0 (1 week)**: repo skeleton, pnpm workspaces, Tailwind base, tokens package, CI skeleton
    
- **Sprint 1 (2 weeks)**: Button, Input, Card (React) + Storybook setup
    
- **Sprint 2 (2 weeks)**: Modal, Toast, Table (React) + unit tests
    
- **Sprint 3 (2 weeks)**: Port core components to Vue + parity tests
    
- **Sprint 4 (2 weeks)**: Dashboard example (graph viewer + metrics) + E2E tests
    
- **Sprint 5 (1–2 weeks)**: Accessibility audit, docs polishing, release v0.1.0
    

## 19. Definition of Done (DoD)

For each component / feature:

- Code compiled and linted
    
- Unit tests passing (≥90% coverage for component)
    
- Accessibility checks passing
    
- Storybook story present + docs
    
- README / usage snippet included
    
- Peer-reviewed PR merged
    

## 20. Deliverables (initial)

- Monorepo skeleton (pnpm)
    
- `packages/design-tokens` + Tailwind integration
    
- `packages/ui-react` with Button & Input & Storybook
    
- `packages/ui-vue` basic parity for Button
    
- `packages/docs` Storybook instance
    
- CI workflows
    

---

## 21. Backlog inicial (issues/tasks — ready-to-commit)

1. Setup monorepo (pnpm, workspaces) — commit
    
2. Create `design-tokens` with base palette & typography — commit
    
3. Configure Tailwind + PostCSS + tokens import — commit
    
4. Create `ui-react` Vite app + Button component + story + tests — commit
    
5. Create `docs` (Storybook) configured for React & Vue — commit
    
6. Create GitHub Actions CI for lint + test — commit
    
7. Create `ui-vue` Button skeleton — commit
    
8. Add Prettier + ESLint configs — commit
    
9. Add README & contributing guidelines — commit
    
