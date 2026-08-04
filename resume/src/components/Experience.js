
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../i18n/LanguageContext';

// --- Keyframes for Animations ---
const slideIn = keyframes` // Simplified for mobile-first
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
`;
const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(100px); }
  to { opacity: 1; transform: translateX(0); }
`;

// --- Styled Components ---
const ExperienceContainer = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  // The timeline axis
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${props => props.theme.borderColor};
    top: 0;
    bottom: 0;
    left: 20px; // Positioned to the left on mobile
    margin-left: -2px;

    @media (min-width: 768px) {
      left: 50%; // Centered on desktop
    }
  }
`;

const TimelineItemWrapper = styled.div`
  padding: 1rem 0 1rem 40px; // Adjusted padding for left axis
  position: relative;
  width: 100%; // Full width on mobile
  opacity: 0;

  // All items animate from the left on mobile
  &.visible { animation: ${slideIn} 0.8s forwards; }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 10px; // Positioned on the left axis
    background-color: ${props => props.theme.interactive};
    border: 4px solid ${props => props.theme.body};
    top: 22px;
    border-radius: 50%;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover::after {
      transform: scale(1.2);
  }
  
  // --- Desktop Overrides ---
  @media (min-width: 768px) {
    padding: 1rem 40px;
    width: 50%;

    &.left { left: 0; padding-left: 0; padding-right: 40px; } // Reset padding for desktop
    &.right { left: 50%; }

    &.visible.left { animation: ${slideInLeft} 0.8s forwards; }
    &.visible.right { animation: ${slideInRight} 0.8s forwards; }
    
    &.right::after { left: -10px; } // Position dot for right items
    &.left::after { right: -10px; left: auto; } // Position dot for left items
  }
`;

const TimelineContent = styled.div`
  padding: 1.2rem 1.5rem; // Mobile padding
  background-color: ${props => props.theme.cardBg};
  position: relative;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid ${props => props.theme.interactive};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
  
  @media (min-width: 768px) {
      padding: 1.5rem 2rem; // Desktop padding
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem; // Mobile font size
  font-weight: 700;
  color: ${props => props.theme.titleColor};
  margin: 0 0 0.5rem 0;
  @media (min-width: 768px) {
      font-size: 1.5rem;
  }
`;

const Company = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 1rem;
  @media (min-width: 768px) {
      font-size: 1rem;
  }
`;

const Description = styled.ul`
  font-size: 0.9rem;
  line-height: 1.6;
  list-style-position: inside;
  padding-left: 0;
  li { margin-bottom: 0.5rem; }
  @media (min-width: 768px) {
      font-size: 0.95rem;
  }
`;

const TimelineItem = ({ item }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    // For desktop, `align` is used. Mobile items don't need a specific alignment class.
    return (
        <TimelineItemWrapper ref={ref} className={`${item.align} ${inView ? 'visible' : ''}`}>
            <TimelineContent>
                <JobTitle>{item.title}</JobTitle>
                <Company>{item.company}</Company>
                <Description>
                    {item.bullets.map((point, i) => <li key={i}>{point}</li>)}
                </Description>
            </TimelineContent>
        </TimelineItemWrapper>
    );
}

const Experience = () => {
  const { t } = useLanguage();

  return (
    <ExperienceContainer id="experience">
      <Title>{t.experience.title}</Title>
      <Timeline>
        {t.experience.items.map((item, index) => <TimelineItem item={item} key={index} />)}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
