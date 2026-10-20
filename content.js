/* ==========================================================================
   Nelson Figueiredo — Dados e Conteúdo do Portfólio
   Centraliza todas as traduções bilíngues (PT / EN) e dados de testemunhos.
   ========================================================================== */

const siteContent = {
  /* ---------- Testemunhos com suporte multilíngue ---------- */
  testimonials: [
    {
      author: "Adilson Jacinto",
      role: {
        pt: "Colega de Software na 42 Luanda",
        en: "Software Peer at 42 Luanda"
      },
      quote: {
        pt: "O Nelson demonstrou competência no desenvolvimento do 42Prediction, destacando-se pela capacidade de resolver problemas técnicos e pela atenção à qualidade e organização do código.",
        en: "Nelson demonstrated competence in developing 42Prediction, standing out for his ability to solve technical problems and his attention to code quality and organization."
      },
      img: "/assets/img/adilson.jpg",
      linkedin: "https://www.linkedin.com/in/adilson-jacinto-94a194184/"
    },
    {
      author: "Guilherme dos Santos",
      role: {
        pt: "Colega de Software na 42 Luanda",
        en: "Software Peer at 42 Luanda"
      },
      quote: {
        pt: "O Nelson revelou profissionalismo, sentido de responsabilidade e capacidade de colaboração. A sua abordagem analítica contribuiu para a resolução de desafios durante o desenvolvimento do 42Prediction.",
        en: "Nelson demonstrated professionalism, responsibility, and collaborative skills. His analytical approach contributed to overcoming challenges during the development of 42Prediction."
      },
      img: "/assets/img/guilherme.jpg",
      linkedin: "https://www.linkedin.com/in/gudos-sa/"
    },
    {
      author: "Marcos Carvalho",
      role: {
        pt: "Colega de Software na 42 Luanda",
        en: "Software Peer at 42 Luanda"
      },
      quote: {
        pt: "O Nelson demonstrou uma boa compreensão da arquitectura de software e das necessidades do produto, evidenciando capacidade de aprendizagem e foco na construção de soluções escaláveis e sustentáveis.",
        en: "Nelson demonstrated a good understanding of software architecture and product needs, showing a capacity for learning and a focus on building scalable and sustainable solutions."
      },
      img: "/assets/img/marcos.jpg",
      linkedin: "#"
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
