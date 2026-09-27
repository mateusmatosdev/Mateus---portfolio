# Portfólio DevOps — Mateus Matos (React + Vite + Tailwind)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

## Como gerar a versão de produção

```bash
npm run build
```

Isso cria a pasta `dist/` pronta para publicar em qualquer host estático
(Vercel, Netlify, GitHub Pages, Cloudflare Pages etc.).

## Estrutura

```
src/
  components/
    Navbar.jsx        menu de navegação (com versão mobile)
    Hero.jsx           seção "Início"
    About.jsx          seção "Sobre mim"
    Skills.jsx          seção "Habilidades"
    Experience.jsx      seção "Experiência" (timeline)
    Education.jsx       seção "Formação & Certificações"
    Contact.jsx          seção "Contato" + rodapé
    illustrations/       ilustrações SVG (Hero e Sobre)
  App.jsx               junta todas as seções
  index.css              estilos base + Tailwind
```

## Editar conteúdo

Cada seção tem seus dados no topo do próprio arquivo (arrays como `STACK`,
`SKILLS`, `JOBS`, `EDU`, `CONTACTS`) — dá pra atualizar cargos, habilidades
ou contato sem mexer no layout.

## Cores e fontes

Definidas em `tailwind.config.js` (paleta `bg`, `ink`, `brand`, `brandSoft`
etc.) e nas fontes Space Grotesk (títulos) e Inter (texto), carregadas via
Google Fonts no `index.html`.
