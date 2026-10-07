/* ==========================================================================
   Nelson Figueiredo — Dados e Conteúdo do Portfólio
   Centraliza todas as traduções bilíngues (PT / EN) e dados de testemunhos.
   ========================================================================== */

const siteContent = {
  /* ---------- Testemunhos com suporte multilíngue ---------- */
  testimonials: [
    {
      author: "Manuel Silva",
      role: {
        pt: "Colega de Software na 42 Luanda",
        en: "Software Peer at 42 Luanda"
      },
      short: {
        pt: "Rigor na arquitetura e na escrita de código...",
        en: "Rigour in architecture and code quality..."
      },
      quote: {
        pt: "O Nelson destaca-se pelo rigor na arquitetura e na escrita de código. No desenvolvimento do servidor IRC e projectos de sistemas na 42, a sua atenção aos detalhes e persistência resolveram os problemas mais complexos de concorrência e memória.",
        en: "Nelson stands out for his rigour in architecture and code quality. During the IRC server development and systems projects at 42, his attention to detail and tenacity solved complex concurrency and memory challenges."
      },
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    },
    {
      author: "Ana Paula Costa",
      role: {
        pt: "Encarregada de Educação · Ensino de Programação",
        en: "Student Parent · Coding Education"
      },
      short: {
        pt: "Didática e paciência extraordinárias...",
        en: "Extraordinary patience and pedagogy..."
      },
      quote: {
        pt: "Como instrutor de programação, o Nelson demonstrou uma didática e paciência extraordinárias. Consegue simplificar a lógica e algoritmos para crianças com um método estruturado que transmite confiança desde a primeira aula.",
        en: "As a coding instructor, Nelson has demonstrated extraordinary patience and pedagogical skill. He breaks down logic and algorithms for children using a structured method that inspires confidence from day one."
      },
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
    },
    {
      author: "Carlos Mendes",
      role: {
        pt: "Engenheiro de Dados & Backend",
        en: "Data & Backend Engineer"
      },
      short: {
        pt: "Compromisso com precisão e modelagem sólida...",
        en: "Commitment to precision and solid modelling..."
      },
      quote: {
        pt: "Trabalhar com o Nelson em pipelines de dados é ter a certeza de que nada fica ao acaso. O seu compromisso com testes, limpeza e modelagem sólida reflecte a precisão que sectores como banca e seguros exigem.",
        en: "Collaborating with Nelson on data pipelines means knowing nothing is left to chance. His commitment to testing, clean schemas, and solid modelling reflects the precision demanded by banking and insurance."
      },
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
    }
  ],

  /* ---------- Dicionário de Traduções (PT / EN) ---------- */
  translations: {
    'meta-title': {
      pt: 'Nelson Figueiredo — Engenheiro de Software & Dados',
      en: 'Nelson Figueiredo — Software & Data Engineer'
    },
    'meta-desc': {
      pt: 'Nelson Ernesto Figueiredo — Engenheiro de Software e Dados. Backend com Python, NestJS, pipelines de dados para banca e seguros.',
      en: 'Nelson Ernesto Figueiredo — Software & Data Engineer. Backend with Python, NestJS, data pipelines for banking and insurance.'
    },
    'header-role': {
      pt: 'Software & Data Engineer',
      en: 'Software & Data Engineer'
    },
    'header-bio': {
      pt: 'Desenvolvo aplicações Web e soluções de Data Warehouse. O meu foco é criar software funcional, testado e escalável , com especial interesse em ecossistemas analíticos e de dados.',
      en: 'I develop Web applications and Data Warehouse solutions. My focus is on building functional, tested, and scalable software, with a particular interest in analytics and data ecosystems.'
    },
    'now-heading': { pt: 'AGORA', en: 'NOW' },
    'now-lead': {
      pt: 'A consolidar conhecimentos em aplicações Web, SQL avançado, pipelines e cloud services.',
      en: 'Consolidating knowledge in Web applications, advanced SQL, pipelines, and cloud services.'
    },
    'now-badge-1': { pt: '42 Advanced', en: '42 Advanced' },
    'now-badge-2': { pt: 'Instrutor de Programação', en: 'Coding Instructor' },
    'now-badge-3': { pt: 'DataCamp', en: 'DataCamp' },
    'now-subtext': {
      pt: 'Formado pelo método prático e orientado a projetos da 42 Luanda, com foco em arquitetura de sistemas. Simultaneamente, compartilho conhecimento como tutor privado de programação para crianças e exploro o desenvolvimento de soluções e pipelines de dados.',
      en: 'Graduated from the practical, project-oriented method of 42 Luanda, focusing on system architecture. Simultaneously, I share knowledge as a private coding tutor for children and explore the development of solutions and data pipelines.'
    },
    'prev-exp': {
      pt: 'Antes disso, frequentei o 5º ano de Engenharia Civil no ISPTEC, onde construi toda minha fundação.',
      en: 'Before that, I attended the 5th year of Civil Engineering at ISPTEC, where I built my entire foundation.'
    },

    /* Projectos em Destaque */
    'recent-projects-heading': { pt: 'PROJECTOS RECENTES', en: 'RECENT PROJECTS' },
    'proj-1-tag': { pt: 'CONCLUÍDO', en: 'ACTIVE' },
    'proj-1-desc': {
      pt: 'Mercado de predição, de eventos dos alunos da 42.',
      en: 'Prediction market for student events at 42.'
    },
    'proj-1-m1': { pt: 'Modelagem SQL', en: 'SQL Modeling' },
    'proj-1-m2': { pt: 'APIs REST', en: 'REST APIs' },
    'proj-1-m3': { pt: 'TypeScript / Node', en: 'TypeScript / Node' },

    'proj-2-tag': { pt: '42 CURRÍCULO', en: '42 CURRICULUM' },
    'proj-2-title': { pt: 'Servidor IRC', en: 'IRC Server' },
    'proj-2-desc': {
      pt: 'Implementação de servidor de chat conforme as especificações RFC 1459.',
      en: 'Implementation of a chat server according to RFC 1459 specifications.'
    },
    'proj-2-m1': { pt: 'C++98', en: 'C++98' },
    'proj-2-m2': { pt: 'Sockets TCP/IP', en: 'TCP/IP Sockets' },
    'proj-2-m3': { pt: 'Debugging de Memória', en: 'Memory Debugging' },

    

    /* Projectos Secundários / Roteiro */
    'sec-1-title': { pt: 'minishell', en: 'minishell' },
    'sec-1-desc': { pt: 'Implementação de um shell simples em C', en: 'Implementation of a simple shell in C' },

    'sec-2-title': { pt: 'cub3d', en: 'cub3d' },
    'sec-2-desc': { pt: 'Implementação de um jogo 3D em C usando raycasting.a', en: 'Implementation of a 3D game in C using raycasting.' },

    'more-github': { pt: 'Mais projectos no GitHub', en: 'More on GitHub' },

    /* Stack & Competências */
    'skills-heading': { pt: 'STACK & COMPETÊNCIAS', en: 'SKILLS & TECH STACK' },
    'skills-lead': {
      pt: 'Ferramentas e tecnologias que utilizo diariamente para construir sistemas fiáveis:',
      en: 'Tools and technologies I use daily to build reliable, scalable systems:'
    },
    'skills-cat-languages': { pt: 'Linguagens', en: 'Languages' },
    'skills-cat-data': { pt: 'Engenharia de Dados', en: 'Data Engineering' },
    'skills-cat-backend': { pt: 'Backend & DevOps', en: 'Backend & DevOps' },
    'skills-cat-databases': { pt: 'Bases de Dados & Cloud', en: 'Databases & Cloud' },

    /* Experiências & Lab */
    'experiments-heading': { pt: 'EXPERIÊNCIAS & LAB', en: 'EXPERIMENTS & LAB' },
    'exp-1-title': { pt: 'Matriz de Fluxo de Dados em Tempo Real', en: 'Real-time Data Flow Matrix' },
    'exp-1-desc': { pt: 'Simulador visual de transmissão de pacotes e pulsos de dados', en: 'Visual simulator of packet transmissions and continuous data pulses' },
    'exp-2-title': { pt: 'Laboratório de Didática de Programação', en: 'Coding Pedagogy Lab' },
    'exp-2-desc': { pt: 'Módulos interativos para ensinar abstração e algoritmos a crianças', en: 'Interactive modules for teaching abstraction and algorithms to young minds' },
    'exp-3-title': { pt: 'Protocol Inspector para IRC & Sockets', en: 'IRC & Sockets Protocol Inspector' },
    'exp-3-desc': { pt: 'Validador de handshake e transmissão síncrona/assíncrona', en: 'Handshake and synchronous/asynchronous message transmission validator' },
    'exp-more': { pt: 'Explorar repositório de experiências', en: 'Explore experiments repository' },

    /* Artigos & Escrita */
    'writing-heading': { pt: 'ARTIGOS', en: 'WRITING' },
    'write-1-title': {
      pt: 'Do Betão aos Bytes: Como a Engenharia Civil Moldou a Minha Abordagem ao Software',
      en: 'From Concrete to Code: How Civil Engineering Shaped My Approach to Software'
    },
    'write-2-title': {
      pt: 'Concorrência, Multiplexagem e Gestão de Memória em C++ na 42 Luanda',
      en: 'Concurrency, Multiplexing and Memory Management in C++ at 42 Luanda'
    },
    'write-3-title': {
      pt: 'Arquitectura de Pipelines de Dados Confiáveis para o Sector Financeiro',
      en: 'Architecting Reliable Data Pipelines for the Financial Sector'
    },
    'write-all': { pt: 'Ver todas as publicações', en: 'All technical writing' },

    /* Testemunhos */
    'testimonials-heading': { pt: 'TESTEMUNHOS', en: 'TESTIMONIALS' },

    /* Rodapé */
    'footer-location': {
      pt: 'Made in Angola 🇦🇴 • Aberto a desafios e boas conversas.',
      en: 'Made in Angola 🇦🇴 • Open for new challenges and conversations.'
    },
    'footer-contact': { pt: 'Entrar em contacto', en: 'Say hello' },

  }
};

// Exporta globalmente para compatibilidade de módulos e browsers
if (typeof window !== 'undefined') {
  window.siteContent = siteContent;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteContent;
}
