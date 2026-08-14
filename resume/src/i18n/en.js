const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  about: {
    title: 'Professional Summary',
    roles: ['Fullstack', 'QA & Testing', 'IT Support', 'UX/UI'],
    summary:
      'Software Development Technician (ITSC, Córdoba) with a versatile profile spanning Fullstack development (Node.js, .NET, React), manual and automated QA testing, technical support and systems analysis, plus a strong interest in UX/UI design. I code in Python, C#, SQL and JavaScript, with hands-on experience in agile methodologies, process automation and Machine Learning projects. I want to bring this end-to-end view — from code to user — to a technology team.',
  },
  contact: {
    title: 'Contact Information',
    location: 'Córdoba, Argentina',
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        align: 'left',
        title: 'Educational Volunteer & Technology Mentor',
        company: 'CoderDojo, Córdoba, Argentina | 06/2024 – Present',
        bullets: [
          'Designed and led programming and hardware workshops (Scratch, MicroBIT, Web and Mobile development) for children and teenagers.',
          "Integrated generative AI tools (Claude, Gemini) as teaching support and to speed up debugging in students' projects.",
          'Built a data pipeline for attendance tracking (Google Suite → Power BI) and documented internal manuals and guides.',
          'Created graphic content and institutional campaigns (Figma, Canva) to promote events.',
        ],
      },
      {
        align: 'right',
        title: 'Full-Stack Developer, QA & Functional Analyst (Professional Internship)',
        company: 'Fabricarg, Córdoba, Argentina | 09/2024 – 11/2024',
        bullets: [
          'Backend development with C# .NET and SQL Server under a layered microservices architecture, consuming and documenting RESTful APIs with Swagger.',
          'Ran manual functional testing and logical consistency audits, reporting bugs and tracking issues in Jira.',
          'Gathered requirements and wrote functional specifications (SRS) and use cases, acting as the bridge between business and development.',
          'Audited the usability of existing flows and proposed redesigns through Figma wireframes (developer handoff).',
          'Worked in secure remote environments (VPN) under agile methodologies, with version control in Git/GitHub.',
        ],
      },
      {
        align: 'left',
        title: 'Independent Practice & Capstone Project',
        company: 'Self-taught | 2022 – 2024',
        bullets: [
          'Machine Learning training building data pipelines (Kedro/Jupyter) at KeyLab.',
          'Trained in Design Sprint (Google) and Design Thinking (Futura Camp) methodologies.',
          'Process automation with Selenium, BeautifulSoup and Swagger; worked with SQL Server, MySQL and SQLite databases.',
          "6-month capstone project (2024): full-stack 'RootNetwork' blog built with .NET, Entity Framework, React and MySQL.",
        ],
      },
      {
        align: 'right',
        title: 'Administrative Secretary & Head Cashier',
        company: 'Local Kleu (Retail), Córdoba, Argentina | 01/2019 – 03/2022',
        bullets: [
          'Daily cash management and auditing, reconciliations and payments via card terminal, transfers and QR.',
          'Operated a commercial ERP system for invoicing, credit/debit notes and accounts receivable.',
          'In-person and phone customer/supplier service, coordinating orders and logistics.',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        degree: 'Software Development Technician Degree',
        institution: 'Instituto Técnico Superior Córdoba (ITSC), Córdoba, Argentina | 03/2022 – 07/2025',
        bullets: [
          'Key projects: web automations with Selenium and Python, APIs in Node.js/Express and .NET/C#.',
          'Systems analysis, modeling and design, software architectures and design patterns.',
          'Languages and technologies: Python, C#, React, .NET, SQL, JavaScript, HTML and CSS.',
        ],
      },
      {
        degree: 'Economics & Administration',
        institution: 'I.P.E.T.Y.M 246 Dr. Amadeo Sabattini | 2011 – 2017',
        bullets: [],
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    filterAll: 'All',
    categories: {
      fullstack: 'Fullstack',
      qa: 'QA & Testing',
      data: 'Data & AI',
      uxui: 'UX/UI',
      support: 'Support & Tools',
    },
  },
  portfolio: {
    title: 'Portfolio',
    filterAll: 'All',
    items: [
      {
        id: 'catalogo-empresas',
        title: 'Company Catalog | Córdoba Province',
        description:
          'An independent web tool that centralizes the job search in Córdoba, Argentina. It catalogs nearly 18,000 companies registered in the province\'s employment programs (Empleo +26, PPP, PIL Turismo), with filters by industry, position and location, plus bulk email copying for job applications. Data is extracted and processed with Python (Playwright and Pandas) and embedded into an HTML/JavaScript interface.',
        date: 'August, 2026',
      },
      {
        id: 'rootnetwork',
        title: 'RootNetwork: Blog for Plant Enthusiasts',
        description:
          '6-month capstone project (2024). A complete blog for plant enthusiasts, with user-facing interfaces and publication management. Full-stack architecture with .NET and Entity Framework on the backend, React on the frontend and MySQL as the database.',
        date: 'May - December, 2024',
      },
      {
        id: 'scraping',
        title: 'Job Market Analysis with Python',
        description:
          'Python web scraping tool built with BeautifulSoup to extract and analyze job postings from CompuTrabajo: roles, salaries and required technologies, to surface IT market trends.',
        date: 'September - November, 2024',
      },
      {
        id: 'management',
        title: 'Staff & Office Management System',
        description:
          'Full-stack application to manage employees and offices, built with Node.js and Express. Full CRUD for both entities and dynamic view rendering with EJS.',
        date: 'September - December, 2023',
      },
      {
        id: 'gifsearch',
        title: 'Gif Search App',
        description: 'A web app to search gifs, built for the Professional Practice I course.',
        date: 'May, 2023 (2 weeks)',
      },
      {
        id: 'calculator',
        title: 'Calculator',
        description: 'A functional calculator with a clean, modern design, built with standard web technologies.',
        date: 'April, 2023 (1 month)',
      },
    ],
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export default en;
