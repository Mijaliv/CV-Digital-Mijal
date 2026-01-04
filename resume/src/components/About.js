
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.section`
  padding: 4rem 1.5rem; // Adjusted padding for mobile
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column; // Mobile-first: column layout
  align-items: center;
  justify-content: center;
  max-width: 950px;
  margin: 0 auto;
  text-align: center; // Center text for mobile
  opacity: 0;

  &.visible {
    animation: ${fadeIn} 1s forwards;
  }

  @media (min-width: 768px) {
    flex-direction: row; // Row layout for desktop
    text-align: left;
    padding: 8rem 3rem;
  }
`;

const ProfileImage = styled.img`
  width: 180px; // Slightly smaller for mobile
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: 2rem; // Space between image and text on mobile
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-right: 4rem; // Restore margin for desktop
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2.2rem; // Adjusted for mobile
  font-weight: 800;
  color: ${props => props.theme.titleColor};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.8rem; // Restore for desktop
  }
`;

const Summary = styled.p`
  font-size: 1rem; // Adjusted for mobile
  color: ${props => props.theme.fontColor};
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <AboutContainer id="about" ref={ref} className={inView ? 'visible' : ''}>
      <ProfileImage src={process.env.PUBLIC_URL + "/profile.png"} alt="Profile Picture" />
      <TextContainer>
        <Title>Resumen Profesional</Title>
        <Summary>
          Soy recientemente egresada en desarrollo de software con titulo y analitico en mano. Tengo experiencia en la creación de aplicaciones web,
          arquitecturas backend siguiendo MVC y APIs RESTful.
          Programe en lenguajes como Python, C#, SQL y JavaScript
          como también use frameworks .Net, node.js, React.
          He trabajado con metodologías ágiles, participando en
          proyectos de Scraping y capacitaciones en Machine
          Learning. Busco aportar mis habilidades al sector IT.
        </Summary>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
