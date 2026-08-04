
import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../i18n/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <EducationContainer id="education">
      <Title>{t.education.title}</Title>
      {t.education.items.map((item) => (
        <EducationItem key={item.degree}>
          <Degree>{item.degree}</Degree>
          <Institution>{item.institution}</Institution>
          {item.bullets.length > 0 && (
            <Description>
              {item.bullets.map((point, i) => <li key={i}>{point}</li>)}
            </Description>
          )}
        </EducationItem>
      ))}
    </EducationContainer>
  );
};

export default Education;
