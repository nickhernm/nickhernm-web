import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarWrapper = styled.div`
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
  position: fixed;
  top: 100px; /* Ajusta este valor para que empiece desde donde desees */
  padding: 1rem;
  width: 200px;
  height: calc(100% - 100px); /* Ajusta la altura según sea necesario */
`;

const SidebarLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0;
  color: var(--header-text-color);
  text-decoration: none;

  &.active {
    color: var(--accent-color);
  }
`;

const Sidebar = () => (
  <SidebarWrapper>
    <SidebarLink to="/cv#basics">Basics</SidebarLink>
    <SidebarLink to="/cv#work">Work</SidebarLink>
    <SidebarLink to="/cv#education">Education</SidebarLink>
    <SidebarLink to="/cv#projects">Projects</SidebarLink>
    <SidebarLink to="/cv#skills">Skills</SidebarLink>
    <SidebarLink to="/cv#interests">Interests</SidebarLink>
  </SidebarWrapper>
);

export default Sidebar;
