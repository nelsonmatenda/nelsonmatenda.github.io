# Portfolio — Nelson Figueiredo

Site estático (HTML/CSS/JS puro, sem build) pronto para o **GitHub Pages** (plano gratuito).

## Estrutura

```
index.html
assets/
  css/style.css
  js/main.js
  img/favicon.svg
```

## Como publicar no GitHub Pages

1. Cria um repositório novo no GitHub, por exemplo `nelsonmatenda.github.io`
   (se usares exactamente este nome — `teu-utilizador.github.io` — o site fica em
   `https://nelsonmatenda.github.io/` sem precisar de configurar mais nada).
   Se preferires outro nome de repositório, ex. `portfolio`, o site fica em
   `https://nelsonmatenda.github.io/portfolio/`.

2. Envia estes ficheiros para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfolio"
   git branch -M main
   git remote add origin https://github.com/nelsonmatenda/NOME-DO-REPO.git
   git push -u origin main
   ```

3. No GitHub, vai a **Settings → Pages**.

4. Em "Build and deployment", escolhe:
   - Source: **Deploy from a branch**
   - Branch: **main** e pasta **/(root)**

5. Guarda. Ao fim de 1-2 minutos o site fica disponível no URL indicado no topo dessa página.

## Actualizar o site

Basta editar os ficheiros e fazer `git add . && git commit -m "..." && git push`.
O GitHub Pages actualiza automaticamente em cada push.

## Personalizar

- **Texto e projectos**: editar directamente em `index.html` (secções `#sobre`,
  `#projectos`, `#roteiro`, etc).
- **Cores**: alterar as variáveis no topo de `assets/css/style.css` (bloco `:root`).
- **Roteiro de projectos (banca & seguros)**: cada ideia está num `<article class="roadmap-card">`
  em `index.html` — à medida que fores construindo cada projecto, troca a descrição por um
  link real para o repositório/demo.
