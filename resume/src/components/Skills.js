
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';
import skillsData from '../data/skills';

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const SkillsContainer = styled.section`
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
  margin-bottom: 2.5rem;
  @media (min-width: 768px) {
    font-size: 2.8rem;
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

const CategoryContainer = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.6rem; // Mobile font size
  font-weight: 700;
  color: ${props => props.theme.subtitleColor};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: ${props => props.theme.interactive};
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem; // Adjusted gap for mobile
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 15px;
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${popIn} 0.5s forwards;
  animation-delay: ${props => props.delay};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.15);
  }

  svg {
    font-size: 2.5rem; // Adjusted icon size
    color: ${props => props.theme.interactive};
    margin-bottom: 1rem;
    transition: filter 0.3s ease;
  }

  &:hover svg {
    filter: drop-shadow(0 0 8px ${props => props.theme.interactive});
  }
`;

const SkillName = styled.p`
  font-size: 0.85rem; // Adjusted font size
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.fontColor};
  text-align: center;
`;

const SkillCategory = ({ title, skills }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <CategoryContainer ref={ref}>
      <CategoryTitle>{title}</CategoryTitle>
      {inView && (
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} delay={`${index * 0.05}s`}>
              {skill.icon}
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      )}
    </CategoryContainer>
  );
};

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const categoryKeys = Object.keys(t.skills.categories);

  return (
    <SkillsContainer id="skills">
      <Title>{t.skills.title}</Title>
      <FilterRow>
        <FilterPill $active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
          {t.skills.filterAll}
        </FilterPill>
        {categoryKeys.map((key) => (
          <FilterPill key={key} $active={activeCategory === key} onClick={() => setActiveCategory(key)}>
            {t.skills.categories[key]}
          </FilterPill>
        ))}
      </FilterRow>

      {categoryKeys
        .filter((key) => activeCategory === 'all' || activeCategory === key)
        .map((key) => (
          <SkillCategory
            key={key}
            title={t.skills.categories[key]}
            skills={skillsData.filter((skill) => skill.category === key)}
          />
        ))}
    </SkillsContainer>
  );
};

export default Skills;
