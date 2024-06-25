import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.li`
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Project = ({ title, description, technologies }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechList>
        {technologies.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </TechList>
    </ProjectWrapper>
  );
};

export default Project;