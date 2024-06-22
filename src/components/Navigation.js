import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.headerBg};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    li {
      margin: 0 1rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.headerText};
        font-weight: bold;
        transition: color 0.3s;

        &.active {
          color: ${({ theme }) => theme.accentColor};
        }

        &:hover {
          color: ${({ theme }) => theme.accentColor};
        }
      }
    }
  }
`;

const Navigation = () => (
  <NavWrapper>
    <ul>
      <li><NavLink exact to="/" activeClassName="active">About</NavLink></li>
      <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
      <li><NavLink to="/publications" activeClassName="active">Publications</NavLink></li>
      <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
      <li><NavLink to="/repositories" activeClassName="active">Repositories</NavLink></li>
      <li><NavLink to="/cv" activeClassName="active">CV</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
    </ul>
  </NavWrapper>
);

export default Navigation;
