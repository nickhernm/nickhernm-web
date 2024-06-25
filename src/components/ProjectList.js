import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const ProjectList = ({ projects }) => {
  return (
    <ProjectGrid>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </Link>
        </ProjectCard>
      ))}
    </ProjectGrid>
  );
};

export default ProjectList;