/* ==========================================================================
   Nelson Figueiredo — Scripts de Interatividade e Controlador DOM
   Consome os dados e traduções centralizados em content.js
   ========================================================================== */

let currentLang = 'pt';
let currentTestimonialIndex = 0;

/**
 * Obtém os dados e traduções do ficheiro de conteúdo com fallback seguro.
 */
function getSiteContent() {
  if (typeof window !== 'undefined' && window.siteContent) {
    return window.siteContent;
  }
  if (typeof siteContent !== 'undefined') {
    return siteContent;
  }
  return { testimonials: [], translations: {} };
}

/* ---------- Lógica de Alternância de Idioma (PT / EN) ---------- */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);

  const { translations } = getSiteContent();

  // 1. Actualiza elementos de texto simples
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.textContent = entry[lang];
    }
  });

  // 2. Actualiza elementos com HTML incorporado
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.innerHTML = entry[lang];
    }
  });

  // 3. Actualiza meta tags
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations['meta-desc'] && translations['meta-desc'][lang]) {
    metaDesc.setAttribute('content', translations['meta-desc'][lang]);
  }

  // 4. Actualiza o estado visual dos botões de idioma
  const btnPt = document.getElementById('btnLangPt');
  const btnEn = document.getElementById('btnLangEn');

  if (btnPt && btnEn) {
    if (lang === 'pt') {
      btnPt.className = 'px-2.5 py-1 rounded-full text-xs font-semibold transition-all bg-accent text-darkbg shadow-sm';
      btnEn.className = 'px-2.5 py-1 rounded-full text-xs font-semibold transition-all text-muted hover:text-textMain';
    } else {
      btnPt.className = 'px-2.5 py-1 rounded-full text-xs font-semibold transition-all text-muted hover:text-textMain';
      btnEn.className = 'px-2.5 py-1 rounded-full text-xs font-semibold transition-all bg-accent text-darkbg shadow-sm';
    }
  }

  // 5. Re-renderiza o testemunho actual no novo idioma
  renderTestimonial(currentTestimonialIndex);

  // 6. Grava a preferência no localStorage
  try {
    localStorage.setItem('nf-lang', lang);
  } catch (e) {
    /* ignora eventuais restrições de storage */
  }
}

/* ---------- Lógica de Testemunhos Dinâmicos ---------- */
function renderTestimonial(index) {
  currentTestimonialIndex = index;
  const { testimonials } = getSiteContent();
  const data = testimonials[index];
  if (!data) return;

  const quoteEl = document.getElementById('testimonialText');
  const authorEl = document.getElementById('testimonialAuthorName');
  const roleEl = document.getElementById('testimonialAuthorRole');
  const imgEl = document.getElementById('testimonialAuthorImg');

  if (quoteEl && data.quote) quoteEl.textContent = `"${data.quote[currentLang]}"`;
  if (authorEl) authorEl.textContent = data.author;
  if (roleEl && data.role) roleEl.textContent = data.role[currentLang];
  if (imgEl && data.img) imgEl.src = data.img;

  // Actualiza o estado dos botões da grelha de testemunhos
  for (let i = 0; i < testimonials.length; i++) {
    const btn = document.getElementById(`t-btn-${i}`);
    const shortTextEl = document.getElementById(`t-short-${i}`);
    const itemData = testimonials[i];

    if (shortTextEl && itemData && itemData.short) {
      shortTextEl.textContent = `"${itemData.short[currentLang]}"`;
    }

    if (btn) {
      if (i === index) {
        btn.classList.add('border-accent', 'opacity-100', 'bg-cardhover');
        btn.classList.remove('border-cardborder', 'opacity-60');
      } else {
        btn.classList.remove('border-accent', 'opacity-100', 'bg-cardhover');
        btn.classList.add('border-cardborder', 'opacity-60');
      }
    }
  }
}

function switchTestimonial(index) {
  renderTestimonial(index);
}
window.switchTestimonial = switchTestimonial;

/* ---------- Animação da Matriz de Fluxo de Dados ---------- */
function initDataGridPulse() {
  const container = document.getElementById('dataGridPulse');
  if (!container) return;

  container.innerHTML = '';
  const totalCells = 24;
  const cells = [];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('i');
    container.appendChild(cell);
    cells.push(cell);
  }

  let step = 0;
  setInterval(() => {
    cells.forEach((cell, idx) => {
      const active = (idx + step) % totalCells < 4;
      if (active) {
        cell.classList.add('is-active');
      } else {
        cell.classList.remove('is-active');
      }
    });
    step = (step + 1) % totalCells;
  }, 220);
}

/* ---------- Inicialização do Documento ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicialização do Idioma
  let savedLang = 'pt';
  try {
    savedLang = localStorage.getItem('nf-lang') || 'pt';
  } catch (e) {
    /* ignora */
  }
  applyLanguage(savedLang);

  const btnPt = document.getElementById('btnLangPt');
  const btnEn = document.getElementById('btnLangEn');
  if (btnPt) btnPt.addEventListener('click', () => applyLanguage('pt'));
  if (btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));

  // 2. Inicialização dos Testemunhos
  renderTestimonial(0);

  // 3. Inicialização da Grelha de Dados
  initDataGridPulse();

  // 4. Actualização do Ano de Copyright
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
