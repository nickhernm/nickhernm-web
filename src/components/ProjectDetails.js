import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.li`
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const ProjectDetails = ({ project }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechList>
        {project.technologies.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </TechList>
      <GitHubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub /> Ver en GitHub
      </GitHubLink>
    </ProjectWrapper>
  );
};

export default ProjectDetails;