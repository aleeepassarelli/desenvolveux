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
* (ts)
Copiar código
import { designTokens } from "@cef-ux/design-tokens"
---
console.log(designTokens.color.primary[500]); // "#0284C7"
Em Tailwind
No tailwind.config.js:
---
* (js)
Copiar código
import tokens from "@desenvolveux/design-tokens/tokens.json";
---
🧭 Filosofia
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
