import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  padding: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectTechnologies = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.8rem;
  font-style: italic;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textAlt};
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const Projects = () => {
  const projectsList = [
    {
      title: "Financial Reports Automation",
      description: "Developed an automated system for generating monthly financial reports, improving efficiency by 50%.",
      technologies: "Python, SQL, Excel",
      link: "https://github.com/yourusername/financial-reports-automation"
    },
    {
      title: "Document Management System",
      description: "Created a web-based document management system with secure access controls and encryption.",
      technologies: "PHP, JavaScript, MySQL",
      link: "https://github.com/yourusername/document-management-system"
    },
    {
      title: "Machine Learning Stock Predictor",
      description: "Implemented a machine learning model to predict stock prices based on historical data and news sentiment analysis.",
      technologies: "Python, TensorFlow, Natural Language Processing",
      link: "https://github.com/yourusername/ml-stock-predictor"
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsWrapper>
      <h1>Projects</h1>
      <ProjectGrid>
        {projectsList.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
};

export default Projects;