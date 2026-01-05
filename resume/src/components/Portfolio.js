
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const PortfolioContainer = styled.section`
  padding: 4rem 1.5rem; // Mobile padding
  background-color: ${props => props.theme.body};
  @media (min-width: 768px) {
    padding: 8rem 3rem; // Desktop padding
  }
`;

const Title = styled.h2`
  font-size: 2.2rem; // Mobile font size
  font-weight: 800;
  color: ${props => props.theme.titleColor};
  text-align: center;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 5rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); // Adjusted min size
  gap: 2rem; // Mobile gap
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 2.5rem; // Desktop gap
  }
`;

const PortfolioCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${popIn} 0.6s forwards;
  animation-delay: ${props => props.delay};
  border-top: 4px solid transparent;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    border-top-color: ${props => props.theme.interactive};
  }
`;

const PortfolioImageContainer = styled.div`
  position: relative;
  height: 220px; // Mobile height
  overflow: hidden;
  @media (min-width: 768px) {
    height: 250px; // Desktop height
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${PortfolioCard}:hover & {
    transform: scale(1.1);
  }
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding-bottom: 1rem;

  ${PortfolioCard}:hover & {
    opacity: 1;
  }
`;

const PortfolioLinks = styled.div`
  display: flex;
  gap: 1rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;

  ${PortfolioCard}:hover & {
    transform: translateY(0);
  }
`;

const PortfolioLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.8rem;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${props => props.theme.interactive};
    color: #fff;
  }
`;

const PortfolioInfo = styled.div`
  padding: 1.2rem 1.5rem; // Mobile padding
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
      padding: 1.5rem;
  }
`;

const PortfolioTitle = styled.h3`
  font-size: 1.4rem; // Mobile font size
  font-weight: 700;
  color: ${props => props.theme.titleColor};
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
      font-size: 1.6rem;
  }
`;

const ProjectDate = styled.p`
  font-size: 0.85rem;
  font-style: italic;
  color: ${props => props.theme.fontColor}99; // Lighter font color
  margin-bottom: 1rem;
`;

const PortfolioDescription = styled.p`
  font-size: 0.95rem; // Mobile font size
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
      font-size: 1rem;
  }
`;

const TechTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto; // Pushes tags to the bottom
`;

const Tag = styled.span`
    background-color: ${props => props.theme.interactive}20; // Interactive color with alpha
    color: ${props => props.theme.interactive};
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
`;

const portfolioData = [
  {
    title: 'RootNetwork: Blog para Aficionados a las Plantas',
    description: 'Proyecto final de carrera (6 meses, 2024). Un blog completo para entusiastas de la flora, con interfaces para usuarios y gestión de publicaciones. Desarrollado con una arquitectura full-stack moderna utilizando .NET y Entity Framework para el backend, y React para un front-end dinámico y reactivo, todo sobre una base de datos MySQL.',
    image: process.env.PUBLIC_URL + '/rootnetwork.png',
    liveLink: 'https://mijaliv.github.io/Blog-RootNetwork/',
    codeLink: 'https://github.com/Mijaliv/Blog-RootNetwork.git',
    tags: ['.NET', 'Entity Framework', 'React', 'MySQL'],
    date: 'Mayo - Diciembre, 2024'
  },
  {
    title: 'Análisis de Mercado Laboral con Python',
    description: 'Herramienta de web scraping desarrollada en Python con BeautifulSoup para extraer y analizar datos de ofertas laborales del portal CompuTrabajo. El script recopila información clave como roles, salarios, y tecnologías requeridas, permitiendo un análisis detallado de las tendencias del mercado TI.',
    image: process.env.PUBLIC_URL + '/scraping.png',
    liveLink: 'https://mijaliv.github.io/Scrap/',
    codeLink: 'https://github.com/Mijaliv/Scrap.git',
    tags: ['Python', 'BeautifulSoup', 'Web Scraping'],
    date: 'Septiembre - Noviembre, 2024'
  },
  {
    title: 'Sistema de Gestión de Personal y Oficinas',
    description: 'Aplicación full-stack para la administración de empleados y oficinas, construida con Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) completas para ambas entidades. El front-end utiliza EJS para la renderización dinámica de vistas, demostrando una arquitectura web robusta y escalable.',
    image: process.env.PUBLIC_URL + '/management.png',
    liveLink: 'https://mijaliv.github.io/tpfpractica/',
    codeLink: 'https://github.com/Mijaliv/tpfpractica.git',
    tags: ['JavaScript', 'Node.js', 'Express', 'EJS'],
    date: 'Septiembre - Diciembre, 2023'
  },
  {
    title: 'Buscador de Gifs',
    description: 'Una aplicación web para buscar gifs, construida para la materia de Práctica Profesionalizante I.',
    image: process.env.PUBLIC_URL + '/gif-search.png',
    liveLink: 'https://mijaliv.github.io/BuscadordeGifsMijal/',
    codeLink: 'https://github.com/Mijaliv/BuscadordeGifsMijal',
    tags: ['HTML', 'CSS', 'JavaScript'],
    date: 'Mayo, 2023 (2 semanas)'
  },
  {
    title: 'Calculadora',
    description: 'Creación de una calculadora funcional con un diseño limpio y moderno utilizando tecnologías web estándar.',
    image: process.env.PUBLIC_URL + '/calculator.png',
    liveLink: 'https://mijaliv.github.io/calculadora/',
    codeLink: 'https://github.com/Mijaliv/calculadora',
    tags: ['HTML', 'CSS', 'JavaScript'],
    date: 'Abril, 2023 (1 mes)'
  }
];

const PortfolioProject = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div ref={ref}>
      {inView && (
        <PortfolioCard delay={`${index * 0.1}s`}> 
          <PortfolioImageContainer>
            <PortfolioImage src={project.image} alt={project.title} />
            <PortfolioOverlay>
              <PortfolioLinks>
                {project.liveLink && <PortfolioLink href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></PortfolioLink>}
                {project.codeLink && <PortfolioLink href={project.codeLink} target="_blank" rel="noopener noreferrer" aria-label="View Code"><FaGithub /></PortfolioLink>}
              </PortfolioLinks>
            </PortfolioOverlay>
          </PortfolioImageContainer>
          <PortfolioInfo>
            <PortfolioTitle>{project.title}</PortfolioTitle>
            <ProjectDate>{project.date}</ProjectDate>
            <PortfolioDescription>{project.description}</PortfolioDescription>
            <TechTags>
              {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TechTags>
          </PortfolioInfo>
        </PortfolioCard>
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Title>Portfolio</Title>
      <PortfolioGrid>
        {portfolioData.map((project, index) => (
          <PortfolioProject project={project} index={index} key={index} />
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
