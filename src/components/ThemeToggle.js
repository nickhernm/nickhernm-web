// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
