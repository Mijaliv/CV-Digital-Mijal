
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

// --- Keyframes ---
const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// --- Styled Components ---
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeInDown} 0.8s ease-out;
  background: ${props => props.theme.headerBg}E6; // Apply 90% opacity for blur effect
  backdrop-filter: blur(10px);
  transition: box-shadow 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 1px solid transparent;

  &.scrolled {
    box-shadow: ${props => props.theme.shadow};
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  @media (min-width: 768px) {
      padding: 1rem 3rem;
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.titleColor};
  margin: 0;
  font-weight: 800;
  z-index: 1100; // Keep name and controls above mobile menu
`;

const Nav = styled.nav`
  // --- Desktop Nav Styles (default) ---
  display: flex;
  align-items: center;
  gap: 1.5rem;

  // --- Mobile Menu Overlay Styles ---
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; // Use viewport height for full coverage
    
    // Modern blurred background overlay
    background: ${props => props.theme.headerBg}E6; // 90% opacity
    backdrop-filter: blur(10px);
    
    // Flexbox for perfect centering
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    z-index: 1050; // Below header controls but above page content

    // Animate with a clean fade-in/out
    transition: opacity 0.3s ease, visibility 0.3s;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    transform: none; // Remove transform to ensure proper centering
  }

  // --- Desktop Nav Styles (override for larger screens) ---
  @media (min-width: 768px) {
    // Reset mobile styles to default for desktop
    position: static;
    width: auto;
    height: auto;
    background: none;
    backdrop-filter: none;
    flex-direction: row;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    gap: 2.5rem;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.fontColor};
  text-decoration: none;
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${props => props.theme.interactive};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.interactive};
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    font-size: 2.2rem; // Increased size for readability
    // Adding a subtle dark shadow to make the text pop against the blurred background
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1100; // Keep controls on top
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.fontColor};
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${props => props.theme.interactive};
    transform: scale(1.2);
  }
  
  &.rotating {
      animation: ${rotate} 0.5s ease-in-out;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.theme.fontColor};
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = ({ toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleThemeToggle = () => {
      setIsRotating(true);
      toggleTheme();
      setTimeout(() => setIsRotating(false), 500);
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <Name>Mijal Nuñez</Name>
      
      <Nav isOpen={isMenuOpen}>
        <NavLink href="#about" onClick={handleLinkClick}>Resumen</NavLink>
        <NavLink href="#experience" onClick={handleLinkClick}>Experiencia</NavLink>
        <NavLink href="#skills" onClick={handleLinkClick}>Habilidades</NavLink>
        <NavLink href="#portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
        <NavLink href="#contact" onClick={handleLinkClick}>Contacto</NavLink>
      </Nav>

      <ControlsContainer>
        <ThemeToggle onClick={handleThemeToggle} className={isRotating ? 'rotating' : ''} aria-label="Toggle theme">
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
        <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes/> : <FaBars />}
        </Hamburger>
      </ControlsContainer>

    </HeaderContainer>
  );
};

export default Header;
