import React from 'react';
import styled from 'styled-components';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Languages from './Languages';
import Publications from './Publications';

const CVWrapper = styled.section`
  padding: 4rem 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.accentColor};
`;

const CV = () => {
  return (
    <CVWrapper id="cv">
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <About />
      </Section>
      <Section>
        <SectionTitle>Education</SectionTitle>
        <Education />
      </Section>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <Experience />
      </Section>
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Skills />
      </Section>
      <Section>
        <SectionTitle>Languages</SectionTitle>
        <Languages />
      </Section>
      <Section>
        <SectionTitle>Publications</SectionTitle>
        <Publications />
      </Section>
    </CVWrapper>
  );
};

export default CV;
