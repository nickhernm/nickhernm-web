// src/components/Sidebar.js

import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 120px; /* Ajusta esto según la altura de tu encabezado */
  left: 20px;
  width: 200px;
  background-color: ${({ theme }) => theme.body};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Sidebar = ({ sections, activeSection }) => (
  <SidebarWrapper>
    {sections.map((section) => (
      <SidebarItem key={section} active={activeSection === section}>
        {section}
      </SidebarItem>
    ))}
  </SidebarWrapper>
);

export default Sidebar;
