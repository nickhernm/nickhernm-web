import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.headerBg};
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinkStyled = styled(NavLink)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.headerText};
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.headerText};
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.headerBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MobileNavLink = styled(NavLinkStyled)`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const AuthButton = styled(NavLink)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavWrapper>
      <DesktopNav>
        <NavLinkStyled to="/" exact>About</NavLinkStyled>
        <NavLinkStyled to="/blog">Blog</NavLinkStyled>
        <NavLinkStyled to="/publications">Publications</NavLinkStyled>
        <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        <NavLinkStyled to="/repositories">Repositories</NavLinkStyled>
        <NavLinkStyled to="/cv">CV</NavLinkStyled>
        <NavLinkStyled to="/contact">Contact</NavLinkStyled>
      </DesktopNav>
      <MobileNav>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        {isMenuOpen && (
          <MobileMenu>
            <CloseButton onClick={toggleMenu}>
              <FaTimes />
            </CloseButton>
            <MobileNavLink to="/" exact onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
            <MobileNavLink to="/publications" onClick={toggleMenu}>Publications</MobileNavLink>
            <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink to="/repositories" onClick={toggleMenu}>Repositories</MobileNavLink>
            <MobileNavLink to="/cv" onClick={toggleMenu}>CV</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </MobileMenu>
        )}
      </MobileNav>
    </NavWrapper>
  );
};

export default Navigation;