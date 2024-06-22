import React from 'react';
import styled from 'styled-components';
import BasicInfo from './sections/BasicInfo';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Interests from './sections/Interests';

const CVWrapper = styled.div`
  margin-left: 220px; /* Deja espacio para la barra lateral */
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const CV = () => (
  <CVWrapper>
    <Section id="basics">
      <BasicInfo />
    </Section>
    <Section id="work">
      <WorkExperience />
    </Section>
    <Section id="education">
      <Education />
    </Section>
    <Section id="projects">
      <Projects />
    </Section>
    <Section id="skills">
      <Skills />
    </Section>
    <Section id="interests">
      <Interests />
    </Section>
  </CVWrapper>
);

export default CV;
