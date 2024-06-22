import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.primaryColor};
    --secondary-color: ${({ theme }) => theme.secondaryColor};
    --accent-color: ${({ theme }) => theme.accentColor};
    --background-color: ${({ theme }) => theme.backgroundColor};
    --text-color: ${({ theme }) => theme.textColor};
    --header-bg-color: ${({ theme }) => theme.headerBgColor};
    --header-text-color: ${({ theme }) => theme.headerTextColor};
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    font-family: 'Arial', sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }

  header {
    background-color: var(--header-bg-color);
    color: var(--header-text-color);
    padding: 1rem;
    transition: background-color 0.3s, color 0.3s;
  }

  .sidebar {
    background-color: var(--header-bg-color);
    color: var(--header-text-color);
    transition: background-color 0.3s, color 0.3s;
  }

  .sidebar a {
    color: var(--header-text-color);
    transition: color 0.3s;
  }

  .sidebar a.active {
    color: var(--accent-color);
  }

  .cv-content {
    transition: margin-left 0.3s;
  }

  .cv-content section {
    background-color: var(--header-bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyles;
