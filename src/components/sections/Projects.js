import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const Project = styled.div`
  margin: 1rem 0;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.accentColor};
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

const Technologies = styled.p`
  font-style: italic;
`;

const Projects = () => (
  <Section>
    <Title>Projects</Title>
    <Project>
      <ProjectTitle>Financial Reports Automation</ProjectTitle>
      <Description>
        Auge Asesores S.L.
        <br />
        - Development of an automated system for the generation of monthly financial reports.
        <br />
        - Implementation of Python scripts to extract data from various sources and consolidate them into detailed reports.
        <br />
        - Improved reporting process efficiency, reducing report generation time by 50%.
      </Description>
      <Technologies>
        Technologies: Python · SQL · Excel
      </Technologies>
    </Project>
    <Project>
      <ProjectTitle>Document Management System</ProjectTitle>
      <Description>
        Auge Asesores S.L.
        <br />
        - Design and implementation of a database for the management and storage of legal and financial documents.
        <br />
        - Creation of a web interface for document access and administration, using PHP and JavaScript.
        <br />
        - Ensured document confidentiality and security by implementing access controls and encryption.
      </Description>
      <Technologies>
        Technologies: PHP · JavaScript · MySQL
      </Technologies>
    </Project>
  </Section>
);

export default Projects;
