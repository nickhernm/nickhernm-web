// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFFFFF',
  text: '#363537',
  headerBg: '#f8f9fa',
  headerText: '#212529',
  accentColor: '#007bff',
  secondaryColor: '#6c757d',
};

export const darkTheme = {
  body: '#181818',
  text: '#FAFAFA',
  headerBg: '#202020',
  headerText: '#FAFAFA',
  accentColor: '#1DB954',
  secondaryColor: '#AAAAAA',
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
  }

  header {
    background: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.headerText};
  }

  a {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
  }

  .cv-container {
    display: flex;
  }

  .cv-content {
    margin-left: 220px;
    padding: 20px;
    flex-grow: 1;
  }

  .sidebar {
    top: 120px; /* Ajuste según sea necesario */
    position: fixed;
    left: 20px;
    width: 200px;
    background-color: ${({ theme }) => theme.body};
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar-item {
    margin: 10px 0;
  }

  .sidebar-item.active {
    color: ${({ theme }) => theme.accentColor};
    font-weight: bold;
  }

  .post-box {
    background: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    border-radius: 10px;
    margin: 20px 0;
    padding: 20px;
    transition: background 0.3s ease, border 0.3s ease;
  }

  .post-title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accentColor};
  }

  .post-summary {
    color: ${({ theme }) => theme.text};
  }

  .footer {
    background: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.headerText};
    text-align: center;
    padding: 20px 0;
  }
`;

export default GlobalStyles;
