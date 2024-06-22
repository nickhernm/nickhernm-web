import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.headerBg};
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.headerText};
  font-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ThemeToggle = ({ toggle }) => {
  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggle}>Toggle Theme</ToggleButton>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
