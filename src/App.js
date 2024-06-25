import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Projects from './components/sections/Projects';
import Repositories from './components/Repositories';
import CV from './components/CV';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <Header />
          <Navigation />
          <ThemeToggle toggle={toggleTheme} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;