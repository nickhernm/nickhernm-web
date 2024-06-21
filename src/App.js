import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <ThemeToggle toggle={toggleTheme} />
        <Header />
        <Navigation />
        <main>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Languages />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
