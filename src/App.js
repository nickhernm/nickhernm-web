import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles/GlobalStyles';
import './styles/CVStyles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Projects from './components/sections/Projects';
import Repositories from './components/Repositories';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DifferentialEquations from './blog/DifferentialEquations';
import TypesOfDataStructuresTrees from './blog/TypesOfDataStructuresTrees';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Navigation />
        <ThemeToggle toggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/DifferentialEquations" element={<DifferentialEquations />} />
          <Route path="/blog/TypesOfDataStructuresTrees" element={<TypesOfDataStructuresTrees />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
