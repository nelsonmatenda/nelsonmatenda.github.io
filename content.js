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
      pt: 'Software & Data Engineer · Luanda, Angola',
      en: 'Software & Data Engineer · Luanda, Angola'
    },
    'header-bio': {
      pt: 'Construo serviços de backend e pipelines de dados com o mesmo rigor com que se lê um esquema: peça a peça, sem deixar nada ao acaso. Foco em soluções estruturadas para banca, seguros e infraestruturas analíticas.',
      en: 'I build backend services and data pipelines with the same rigour you would read a blueprint: piece by piece, nothing left to chance. Focused on structured solutions for banking, insurance, and analytical infrastructure.'
    },
    'now-heading': { pt: 'AGORA', en: 'NOW' },
    'now-lead': {
      pt: 'Actualmente a aprofundar sistemas de dados e engenharia de software distribuída:',
      en: 'Currently deepening knowledge in data systems and distributed software engineering:'
    },
    'now-badge-1': { pt: '42 Luanda', en: '42 Luanda' },
    'now-badge-2': { pt: 'Instrutor de Programação (7 alunos)', en: 'Coding Instructor (7 students)' },
    'now-badge-3': { pt: 'Roteiro Banca & Seguros', en: 'Banking & Insurance Roadmap' },
    'now-subtext': {
      pt: 'Estudante na 42 Luanda focado em sistemas, concorrência e backend. Simultaneamente a ensinar lógica de programação a crianças e a desenhar pipelines analíticos.',
      en: 'Student at 42 Luanda focused on systems, concurrency and backend. Simultaneously teaching programming logic to children and architecting analytical pipelines.'
    },
    'prev-exp': {
      pt: 'Antes disso, frequentei Engenharia Civil no ISPTEC — onde treinei a mente para pensar com rigor e lógica matemática, transformando problemas complexos em soluções estruturadas aplicadas a sistemas de dados.',
      en: 'Before that, I studied Civil Engineering at ISPTEC — where I trained my mind to think with mathematical rigour and logic, turning complex problems into structured solutions now applied to data systems.'
    },

    /* Projectos em Destaque */
    'recent-projects-heading': { pt: 'PROJECTOS RECENTES', en: 'RECENT PROJECTS' },
    'proj-1-tag': { pt: 'CONCLUÍDO', en: 'ACTIVE' },
    'proj-1-desc': {
      pt: 'Plataforma para análise e gestão de métricas de estudantes da 42, gerando previsões de desempenho e acompanhamento de resultados.',
      en: 'Platform for analyzing and managing 42 student performance metrics, generating predictions and tracking progress.'
    },
    'proj-1-m1': { pt: 'Modelagem SQL', en: 'SQL Modeling' },
    'proj-1-m2': { pt: 'APIs REST', en: 'REST APIs' },
    'proj-1-m3': { pt: 'TypeScript / Node', en: 'TypeScript / Node' },

    'proj-2-tag': { pt: '42 CURRÍCULO', en: '42 CURRICULUM' },
    'proj-2-title': { pt: 'Servidor IRC', en: 'IRC Server' },
    'proj-2-desc': {
      pt: 'Implementação de servidor de chat conforme as especificações RFC 1459, multiplexagem I/O não bloqueante e múltiplos clientes simultâneos.',
      en: 'Implementation of an RFC 1459 compliant chat server with non-blocking I/O multiplexing and multiple simultaneous clients.'
    },
    'proj-2-m1': { pt: 'C++98', en: 'C++98' },
    'proj-2-m2': { pt: 'Sockets TCP/IP', en: 'TCP/IP Sockets' },
    'proj-2-m3': { pt: 'Debugging de Memória', en: 'Memory Debugging' },

    'proj-3-tag': { pt: 'BANCA & RISCO', en: 'BANKING & RISK' },
    'proj-3-title': { pt: 'Pipeline de Detecção de Fraude', en: 'Fraud Detection Pipeline' },
    'proj-3-desc': {
      pt: 'Pipeline de dados que ingere fluxos de transacções simuladas, calcula anomalias estatísticas e emite alertas num dashboard operacional.',
      en: 'Data pipeline ingesting simulated financial transactions, computing statistical anomalies and raising alerts in an operational dashboard.'
    },
    'proj-3-m1': { pt: 'Apache Airflow', en: 'Apache Airflow' },
    'proj-3-m2': { pt: 'Python / Pandas', en: 'Python / Pandas' },
    'proj-3-m3': { pt: 'Grafana & PostgreSQL', en: 'Grafana & PostgreSQL' },

    'proj-4-tag': { pt: 'FINTECH', en: 'FINTECH' },
    'proj-4-title': { pt: 'Motor de Score de Risco de Crédito', en: 'Credit Risk Scoring Engine' },
    'proj-4-desc': {
      pt: 'ETL que transforma dados cadastrais e financeiros em variáveis de risco, calcula a probabilidade de crédito e expõe resultados via API.',
      en: 'ETL pipeline transforming customer and financial data into risk features, calculating credit scores and exposing lookups via real-time API.'
    },
    'proj-4-m1': { pt: 'NestJS Backend', en: 'NestJS Backend' },
    'proj-4-m2': { pt: 'Modelagem de Risco', en: 'Risk Modeling' },
    'proj-4-m3': { pt: 'Docker Container', en: 'Docker Container' },

    /* Projectos Secundários / Roteiro */
    'sec-1-title': { pt: 'Dashboard de Sinistros de Seguros', en: 'Insurance Claims Dashboard' },
    'sec-1-desc': { pt: 'Modelação dimensional em estrela (Databricks, Power BI e SQL)', en: 'Dimensional star schema modeling (Databricks, Power BI and SQL)' },

    'sec-2-title': { pt: 'API de Open Banking (Simulada)', en: 'Open Banking API (Simulated)' },
    'sec-2-desc': { pt: 'Padrões de segurança, contas, transferências e auditoria bancária', en: 'Security standards, accounts, transfers and financial audit trails' },

    'sec-3-title': { pt: 'Automação de Relatórios Regulatórios', en: 'Regulatory Reporting Automation' },
    'sec-3-desc': { pt: 'Pipeline agendado para agregação financeira e conformidade com alertas', en: 'Scheduled aggregation pipeline with compliance checks and alerting' },

    'sec-4-title': { pt: 'Data Warehouse de Apólices', en: 'Policy Data Warehouse' },
    'sec-4-desc': { pt: 'Consultas analíticas rápidas sobre exposição ao risco e carteira', en: 'Fast analytical queries on risk exposure and portfolio performance' },

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
