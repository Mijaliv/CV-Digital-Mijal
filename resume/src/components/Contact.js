
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled.section`
  padding: 3rem 1.5rem; // Mobile padding
  margin: 2rem auto;
  width: 95%; // Mobile width
  max-width: 1000px;
  background-color: ${props => props.theme.cardBg};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 15px;
  border-left: 7px solid ${props => props.theme.interactive};
  opacity: 0;

  &.visible {
    animation: ${fadeIn} 1s forwards;
  }

  @media (min-width: 768px) {
    padding: 4rem 3rem; // Desktop padding
    margin: 4rem auto;
    width: 90%; // Desktop width
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.titleColor};
  font-size: 2rem; // Mobile font size
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.body};
  padding: 1.2rem;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  svg {
    font-size: 1.6rem; // Mobile icon size
    margin-right: 1rem;
    color: ${props => props.theme.interactive};
    transition: filter 0.3s ease;
    flex-shrink: 0; // Prevent icon from shrinking
  }

  &:hover svg {
    filter: drop-shadow(0 0 5px ${props => props.theme.interactive});
  }

  span {
    font-size: 0.9rem; // Mobile font size
    font-weight: 500;
    word-break: break-word; // Break long text like emails
  }

  @media (min-width: 768px) {
    svg { font-size: 1.8rem; }
    span { font-size: 1rem; }
  }
`;

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <ContactContainer id="contact" ref={ref} className={inView ? 'visible' : ''}>
      <Title>Información de Contacto</Title>
      <ContactGrid>
        <ContactItem href="#" onClick={(e) => e.preventDefault()}> {/* Make non-link item not jump */}
          <FaMapMarkerAlt />
          <span>Córdoba, Argentina</span>
        </ContactItem>
        <ContactItem href="tel:+5493517478608">
          <FaPhone />
          <span>+54 9 351 747 8608</span>
        </ContactItem>
        <ContactItem href="mailto:mijalivananunez@hotmail.com">
          <FaEnvelope />
          <span>mijalivananunez@hotmail.com</span>
        </ContactItem>
        <ContactItem href="https://linkedin.com/in/mijalnunez" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>linkedin.com/in/mijalnunez</span>
        </ContactItem>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
