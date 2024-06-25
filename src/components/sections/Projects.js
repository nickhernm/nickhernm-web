import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectItem = styled.div`
  border-left: 2px solid ${({ theme }) => theme.accentColor};
  padding-left: 1rem;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const Technologies = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Projects = () => (
  <ProjectsWrapper>
    <ProjectItem>
      <ProjectTitle>Financial Reports Automation</ProjectTitle>
      <ProjectDescription>
        Development of an automated system for the generation of monthly financial reports.
        Improved reporting process efficiency, reducing report generation time by 50%.
      </ProjectDescription>
      <Technologies>Technologies: Python · SQL · Excel</Technologies>
    </ProjectItem>
    <ProjectItem>
      <ProjectTitle>Document Management System</ProjectTitle>
      <ProjectDescription>
        Design and implementation of a database for the management and storage of legal and financial documents.
        Creation of a web interface for document access and administration.
      </ProjectDescription>
      <Technologies>Technologies: PHP · JavaScript · MySQL</Technologies>
    </ProjectItem>
  </ProjectsWrapper>
);

export default Projects;