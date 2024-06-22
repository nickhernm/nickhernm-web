// src/components/CV.js

import React, { useState, useEffect } from 'react';
import BasicInfo from './sections/BasicInfo';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Interests from './sections/Interests';
import Sidebar from './Sidebar';
import '../styles/CVStyles.css';

const sections = ['Basics', 'Work', 'Education', 'Projects', 'Skills', 'Interests'];

const CV = () => {
  const [activeSection, setActiveSection] = useState('Basics');

  const handleScroll = () => {
    const offsets = sections.map(section => ({
      section,
      offset: document.getElementById(section).offsetTop,
    }));
    const scrollPosition = window.scrollY + 200;
    const currentSection = offsets.reduce((prev, curr) =>
      scrollPosition >= curr.offset ? curr.section : prev, sections[0]);
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cv-container">
      <Sidebar sections={sections} activeSection={activeSection} />
      <div className="cv-content">
        <div id="Basics">
          <BasicInfo />
        </div>
        <div id="Work">
          <WorkExperience />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Interests">
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default CV;
