import React from 'react';
import styled from 'styled-components';
import BasicInfo from './sections/BasicInfo';
import WorkExperience from './sections/WorkExperience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Interests from './sections/Interests';

const CVWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CV = () => (
  <CVWrapper>
    <Section>
      <SectionTitle>Basic Information</SectionTitle>
      <BasicInfo />
    </Section>
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <WorkExperience />
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Education />
    </Section>
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <Projects />
    </Section>
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <Skills />
    </Section>
    <Section>
      <SectionTitle>Interests</SectionTitle>
      <Interests />
    </Section>
  </CVWrapper>
);

export default CV;