import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  color: ${({ theme }) => theme.textColor};
`;

const ThemeToggle = ({ toggle, theme }) => {
  return (
    <ToggleWrapper onClick={toggle}>
      {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
    </ToggleWrapper>
  );
};

export default ThemeToggle;
