
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import portfolioMeta from '../data/portfolioMeta';

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

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const FilterPill = styled.button`
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => (props.$active ? props.theme.interactive : 'transparent')};
  color: ${props => (props.$active ? '#fff' : props.theme.fontColor)};
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
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

const CategoryBadge = styled.span`
  display: inline-block;
  align-self: flex-start;
  padding: 0.25rem 0.7rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.interactive};
  margin-bottom: 0.8rem;
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
            <CategoryBadge>{project.categoryLabel}</CategoryBadge>
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
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const categoryKeys = Object.keys(t.skills.categories);

  const projects = portfolioMeta.map((meta) => {
    const text = t.portfolio.items.find((item) => item.id === meta.id);
    return { ...meta, ...text, categoryLabel: t.skills.categories[meta.category] };
  });

  const visibleProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <PortfolioContainer id="portfolio">
      <Title>{t.portfolio.title}</Title>
      <FilterRow>
        <FilterPill $active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
          {t.portfolio.filterAll}
        </FilterPill>
        {categoryKeys.map((key) => (
          <FilterPill key={key} $active={activeCategory === key} onClick={() => setActiveCategory(key)}>
            {t.skills.categories[key]}
          </FilterPill>
        ))}
      </FilterRow>
      <PortfolioGrid>
        {visibleProjects.map((project, index) => (
          <PortfolioProject project={project} index={index} key={project.id} />
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
