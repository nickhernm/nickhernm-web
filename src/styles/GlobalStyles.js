import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.backgroundColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 1200px) {
      max-width: 100%;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .hide-mobile {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .hide-desktop {
      display: none;
    }
  }
`;

export default GlobalStyles;