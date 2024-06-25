import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Card = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.accentColor};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => (
  <Card to={`/projects/${project.slug}`}>
    <Image src={project.image} alt={project.title} />
    <Content>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Tags>
        {project.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <GithubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub /> View on GitHub
      </GithubLink>
    </Content>
  </Card>
);

export default ProjectCard;