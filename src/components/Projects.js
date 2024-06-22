import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  padding: 4rem 2rem;
`;

const Project = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const ProjectSummary = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      summary: "This is a summary of the first project. It showcases the basic functionalities and features."
    },
    {
      title: "Project 2",
      summary: "This is a summary of the second project. It dives into more advanced techniques and implementations."
    }
  ];

  return (
    <ProjectsWrapper id="projects">
      {projects.map((project, index) => (
        <Project key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSummary>{project.summary}</ProjectSummary>
        </Project>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
