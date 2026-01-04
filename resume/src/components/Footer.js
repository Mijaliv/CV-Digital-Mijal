
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.headerBg};
  color: ${props => props.theme.fontColor};
  padding: 2.5rem 1.5rem; // Mobile padding
  border-top: 1px solid ${props => props.theme.borderColor};
  margin-top: 2rem; // Mobile margin
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
      opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem; // Desktop padding
    margin-top: 4rem; // Desktop margin
  }
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const SocialLinks = styled.div`
  order: 1; // Appears first on mobile
  @media (min-width: 768px) {
      order: 2; // Moves to the right on desktop
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.subtitleColor};
  font-size: 1.6rem; // Mobile icon size
  margin: 0 0.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${props => props.theme.interactive};
    transform: translateY(-5px);
    filter: drop-shadow(0 0 5px ${props => props.theme.interactive});
  }

  @media (min-width: 768px) {
      font-size: 1.8rem;
      margin: 0 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem; // Mobile font size
  color: ${props => props.theme.subtitleColor};
  order: 2; // Appears second on mobile
  text-align: center;

  @media (min-width: 768px) {
      order: 1; // Moves to the left on desktop
      font-size: 0.9rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <FooterContainer ref={ref} className={inView ? 'visible' : ''}>
        <FooterContent>
            <FooterText>&copy; {currentYear} Mijal Nuñez. Todos los derechos reservados.</FooterText>
            <SocialLinks>
                <SocialLink href="https://github.com/Mijaliv" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></SocialLink>
                <SocialLink href="https://linkedin.com/in/mijalnunez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialLink>
            </SocialLinks>
        </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
