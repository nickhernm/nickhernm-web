import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;