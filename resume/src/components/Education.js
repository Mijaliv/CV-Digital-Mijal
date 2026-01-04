
import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 6rem 3rem;
  background-color: ${props => props.theme.body};
  border-bottom: 2px solid ${props => props.theme.borderColor};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.titleColor};
  text-align: center;
  margin-bottom: 4rem;
`;

const EducationItem = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const Degree = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.titleColor};
  margin: 0;
`;

const Institution = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.subtitleColor};
  margin-top: 0.5rem;
`;

const Description = styled.ul`
  font-size: 1rem;
  line-height: 1.6;
  list-style-type: circle;
  padding-left: 1.5rem;
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <Title>Formación Académica</Title>
      <EducationItem>
        <Degree>DESARROLLO DE SOFTWARE</Degree>
        <Institution>Instituto Técnico Superior Córdoba (ITSC), Córdoba, Argentina | 03/2022 – 07/2024</Institution>
        <Description>
          <li>Proyectos Destacados: Desarrollé automatizaciones web con Selenium y Python. Creé APIs web en Node.js con Express.js y Docker. Implementé APIs web con .NET y C#.</li>
          <li>Conocimientos: Adquirí conocimientos en análisis, modelado y diseño de sistemas, incluyendo arquitecturas y patrones de diseño.</li>
          <li>Lenguajes y Tecnologías: Trabajé con Python, C#, React, .NET, SQL, JavaScript, HTML y CSS, entre otros.</li>
        </Description>
      </EducationItem>
      <EducationItem>
        <Degree>ECONOMÍA Y ADMINISTRACIÓN</Degree>
        <Institution>I.P.E.T.Y.M 246 Dr. Amadeo Sabattini | 2011 – 2017</Institution>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;
