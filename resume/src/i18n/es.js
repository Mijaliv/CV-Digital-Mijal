const es = {
  nav: {
    about: 'Resumen',
    experience: 'Experiencia',
    skills: 'Habilidades',
    portfolio: 'Portfolio',
    contact: 'Contacto',
  },
  about: {
    title: 'Resumen Profesional',
    roles: ['Fullstack', 'QA & Testing', 'Soporte IT', 'UX/UI'],
    summary:
      "Técnica en Desarrollo de Software (ITSC, Córdoba) con un perfil versátil que combina desarrollo Fullstack (Node.js, .NET, React), testing de calidad manual y automatizado, soporte técnico y análisis de sistemas, además de un fuerte interés por el diseño UX/UI. Programo en Python, C#, SQL y JavaScript, con experiencia práctica en metodologías ágiles, automatización de procesos y proyectos de Machine Learning. Busco aportar esta mirada integral — de código a usuario — a un equipo de tecnología.",
  },
  contact: {
    title: 'Información de Contacto',
    location: 'Córdoba, Argentina',
  },
  experience: {
    title: 'Experiencia Laboral',
    items: [
      {
        align: 'left',
        title: 'Voluntaria Educativa & Mentora de Tecnología',
        company: 'CoderDojo, Córdoba, Argentina | 06/2024 – Presente',
        bullets: [
          'Diseño y liderazgo de talleres de programación y hardware (Scratch, MicroBIT, desarrollo Web y Móvil) para niños y adolescentes.',
          'Integración de herramientas de IA generativa (Claude, Gemini) como apoyo pedagógico y para acelerar el diagnóstico de errores en los proyectos de los estudiantes.',
          'Diseño de un pipeline de datos para el control de asistencia (Google Suite → Power BI) y documentación de manuales y guías internas.',
          'Creación de contenido gráfico y campañas institucionales (Figma, Canva) para la difusión de eventos.',
        ],
      },
      {
        align: 'right',
        title: 'Desarrolladora Full-Stack, QA & Analista Funcional (Práctica Profesional)',
        company: 'Fabricarg, Córdoba, Argentina | 09/2024 – 11/2024',
        bullets: [
          'Desarrollo backend con C# .NET y SQL Server bajo una arquitectura de microservicios y en capas, consumiendo y documentando APIs RESTful con Swagger.',
          'Ejecución de testing funcional manual y auditoría de consistencia lógica, reportando bugs y dando seguimiento a incidencias en Jira.',
          'Relevamiento de requerimientos y redacción de especificaciones funcionales (SRS) y casos de uso, actuando de nexo entre negocio y desarrollo.',
          'Auditoría de usabilidad de flujos existentes y propuesta de rediseños mediante wireframes en Figma (developer handoff).',
          'Trabajo en entornos remotos seguros (VPN) bajo metodologías ágiles, con control de versiones en Git/GitHub.',
        ],
      },
      {
        align: 'left',
        title: 'Prácticas Independientes & Proyecto Integrador',
        company: 'Autodidacta | 2022 – 2024',
        bullets: [
          'Capacitación en Machine Learning con desarrollo de pipelines (Kedro/Jupyter) en KeyLab.',
          'Formación en metodologías Design Sprint (Google) y Design Thinking (Futura Camp).',
          'Automatización de procesos con Selenium, BeautifulSoup y Swagger; manejo de bases de datos SQL Server, MySQL y SQLite.',
          "Proyecto final de carrera (6 meses, 2024): blog 'RootNetwork' full-stack con .NET, Entity Framework, React y MySQL.",
        ],
      },
      {
        align: 'right',
        title: 'Secretaria Administrativa & Cajera Principal',
        company: 'Local Kleu (Comercio Minorista), Córdoba, Argentina | 01/2019 – 03/2022',
        bullets: [
          'Gestión y auditoría de caja diaria, conciliaciones y cobros por Posnet, transferencias y QR.',
          'Operación de un sistema ERP comercial para facturación, notas de crédito/débito y cuentas corrientes.',
          'Atención presencial y telefónica a clientes y proveedores, coordinando pedidos y logística.',
        ],
      },
    ],
  },
  education: {
    title: 'Formación Académica',
    items: [
      {
        degree: 'Técnica Superior en Desarrollo de Software',
        institution: 'Instituto Técnico Superior Córdoba (ITSC), Córdoba, Argentina | 03/2022 – 07/2025',
        bullets: [
          'Proyectos destacados: automatizaciones web con Selenium y Python, APIs en Node.js/Express y .NET/C#.',
          'Análisis, modelado y diseño de sistemas, arquitecturas y patrones de diseño de software.',
          'Lenguajes y tecnologías: Python, C#, React, .NET, SQL, JavaScript, HTML y CSS.',
        ],
      },
      {
        degree: 'Economía y Administración',
        institution: 'I.P.E.T.Y.M 246 Dr. Amadeo Sabattini | 2011 – 2017',
        bullets: [],
      },
    ],
  },
  skills: {
    title: 'Habilidades Técnicas',
    filterAll: 'Todas',
    categories: {
      fullstack: 'Fullstack',
      qa: 'QA & Testing',
      data: 'Data & IA',
      uxui: 'UX/UI',
      support: 'Soporte & Herramientas',
    },
  },
  portfolio: {
    title: 'Portfolio',
    filterAll: 'Todos',
    items: [
      {
        id: 'chopchop-huellitas',
        title: 'ChopChop Huellitas | Portafolio de QA & Test Automation',
        description:
          'Proyecto de portafolio de QA: documentación completa bajo estándar Agile/IEEE 829 (Test Plan, matriz de 16 casos de prueba con Partición de Equivalencia y BVA, reportes de bugs y organización en Jira) más un framework de automatización E2E real con Playwright, TypeScript y Page Object Model. Incluye una mini aplicación de referencia para que los 28 tests (14 casos × 2 navegadores) corran de verdad en cada push, con CI en GitHub Actions.',
        date: 'Agosto, 2026',
      },
      {
        id: 'catalogo-empresas',
        title: 'Catálogo de Empresas | Provincia de Córdoba',
        description:
          'Herramienta web independiente que centraliza la búsqueda de empleo en Córdoba, Argentina. Cataloga cerca de 18.000 empresas registradas en los programas provinciales de empleo (Empleo +26, PPP, PIL Turismo), con filtros por rubro, puesto y localidad, y copiado masivo de emails para postulaciones. Los datos se extraen y procesan con Python (Playwright y Pandas) y se integran en una interfaz HTML/JavaScript.',
        date: 'Agosto, 2026',
      },
      {
        id: 'rootnetwork',
        title: 'RootNetwork: Blog para Aficionados a las Plantas',
        description:
          'Proyecto final de carrera (6 meses, 2024). Blog completo para entusiastas de la flora, con interfaces para usuarios y gestión de publicaciones. Arquitectura full-stack con .NET y Entity Framework en el backend, React en el frontend y MySQL como base de datos.',
        date: 'Mayo - Diciembre, 2024',
      },
      {
        id: 'scraping',
        title: 'Análisis de Mercado Laboral con Python',
        description:
          'Herramienta de web scraping en Python con BeautifulSoup para extraer y analizar ofertas laborales de CompuTrabajo: roles, salarios y tecnologías requeridas, para detectar tendencias del mercado TI.',
        date: 'Septiembre - Noviembre, 2024',
      },
      {
        id: 'management',
        title: 'Sistema de Gestión de Personal y Oficinas',
        description:
          'Aplicación full-stack para administrar empleados y oficinas, con Node.js y Express. CRUD completo para ambas entidades y renderizado dinámico de vistas con EJS.',
        date: 'Septiembre - Diciembre, 2023',
      },
      {
        id: 'gifsearch',
        title: 'Buscador de Gifs',
        description: 'Aplicación web para buscar gifs, construida para la materia de Práctica Profesionalizante I.',
        date: 'Mayo, 2023 (2 semanas)',
      },
      {
        id: 'calculator',
        title: 'Calculadora',
        description: 'Calculadora funcional con un diseño limpio y moderno, hecha con tecnologías web estándar.',
        date: 'Abril, 2023 (1 mes)',
      },
    ],
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
