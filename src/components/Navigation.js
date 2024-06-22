import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
  background: ${({ theme }) => theme.headerBg};
  padding: 1rem;
  text-align: center;
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

const Navigation = () => (
  <NavWrapper>
    <NavLinkStyled to="/" exact>About</NavLinkStyled>
    <NavLinkStyled to="/blog">Blog</NavLinkStyled>
    <NavLinkStyled to="/publications">Publications</NavLinkStyled>
    <NavLinkStyled to="/projects">Projects</NavLinkStyled>
    <NavLinkStyled to="/repositories">Repositories</NavLinkStyled>
    <NavLinkStyled to="/cv">CV</NavLinkStyled>
    <NavLinkStyled to="/contact">Contact</NavLinkStyled>
  </NavWrapper>
);

export default Navigation;
