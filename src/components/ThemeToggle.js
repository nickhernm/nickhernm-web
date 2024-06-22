import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accentColor};
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:focus {
    outline: none;
  }
`;

const ThemeToggle = ({ toggle, theme }) => (
  <ToggleWrapper onClick={toggle}>
    {theme === 'light' ? <FaMoon /> : <FaSun />}
  </ToggleWrapper>
);

export default ThemeToggle;
