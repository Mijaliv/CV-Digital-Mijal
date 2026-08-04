import React from 'react';
import {
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs,
  FaGitAlt, FaDocker, FaDatabase, FaCode, FaCheckCircle, FaClipboardCheck, FaBug, FaGithub,
} from 'react-icons/fa';
import {
  SiDotnet, SiSqlite, SiMysql, SiPostgresql, SiExpress, SiSelenium, SiSwagger, SiOdoo,
  SiJira, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGooglecolab, SiGooglegemini,
  SiFigma, SiSketch, SiMiro, SiAdobephotoshop, SiAdobeillustrator, SiPostman, SiTrello,
} from 'react-icons/si';

// category keys match the filter labels defined in src/i18n/es.js and en.js (skills.categories)
const skillsData = [
  // Fullstack
  { name: 'Python', icon: <FaPython />, category: 'fullstack' },
  { name: 'JavaScript', icon: <FaJs />, category: 'fullstack' },
  { name: 'C#', icon: <FaCode />, category: 'fullstack' },
  { name: '.NET', icon: <SiDotnet />, category: 'fullstack' },
  { name: 'React.js', icon: <FaReact />, category: 'fullstack' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'fullstack' },
  { name: 'Express.js', icon: <SiExpress />, category: 'fullstack' },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'fullstack' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'fullstack' },
  { name: 'Bootstrap', icon: <FaBootstrap />, category: 'fullstack' },
  { name: 'SQL Server', icon: <FaDatabase />, category: 'fullstack' },
  { name: 'MySQL', icon: <SiMysql />, category: 'fullstack' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'fullstack' },
  { name: 'SQLite', icon: <SiSqlite />, category: 'fullstack' },

  // QA & Testing
  { name: 'Selenium', icon: <SiSelenium />, category: 'qa' },
  { name: 'Testing Manual', icon: <FaCheckCircle />, category: 'qa' },
  { name: 'Casos de Prueba', icon: <FaClipboardCheck />, category: 'qa' },
  { name: 'Bug Reporting', icon: <FaBug />, category: 'qa' },
  { name: 'Jira', icon: <SiJira />, category: 'qa' },
  { name: 'Swagger', icon: <SiSwagger />, category: 'qa' },

  // Data & IA
  { name: 'Pandas', icon: <SiPandas />, category: 'data' },
  { name: 'NumPy', icon: <SiNumpy />, category: 'data' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, category: 'data' },
  { name: 'Jupyter', icon: <SiJupyter />, category: 'data' },
  { name: 'Google Colab', icon: <SiGooglecolab />, category: 'data' },
  { name: 'Web Scraping', icon: <FaCode />, category: 'data' },
  { name: 'IA Generativa (LLMs)', icon: <SiGooglegemini />, category: 'data' },

  // UX/UI
  { name: 'Figma', icon: <SiFigma />, category: 'uxui' },
  { name: 'Sketch', icon: <SiSketch />, category: 'uxui' },
  { name: 'Miro', icon: <SiMiro />, category: 'uxui' },
  { name: 'Photoshop', icon: <SiAdobephotoshop />, category: 'uxui' },
  { name: 'Illustrator', icon: <SiAdobeillustrator />, category: 'uxui' },

  // Soporte & Herramientas
  { name: 'Git', icon: <FaGitAlt />, category: 'support' },
  { name: 'GitHub', icon: <FaGithub />, category: 'support' },
  { name: 'Docker', icon: <FaDocker />, category: 'support' },
  { name: 'Postman', icon: <SiPostman />, category: 'support' },
  { name: 'Trello', icon: <SiTrello />, category: 'support' },
  { name: 'Visual Studio', icon: <FaCode />, category: 'support' },
  { name: 'Odoo', icon: <SiOdoo />, category: 'support' },
];

export default skillsData;
