import React from 'react';
import styled from 'styled-components';

const PublicationsWrapper = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PublicationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PublicationItem = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PublicationTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 0.5rem;
`;

const PublicationDetails = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 0.5rem;
`;

const PublicationLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Publications = () => {
  const publicationsList = [
    {
      title: "Machine Learning Approaches for Predicting Protein-Protein Interactions",
      details: "Published in Journal of Computational Biology, 2023",
      link: "https://example.com/publication1"
    },
    {
      title: "Optimizing Neural Networks with Differential Evolution",
      details: "Presented at International Conference on Artificial Intelligence, 2022",
      link: "https://example.com/publication2"
    },
    {
      title: "A Novel Approach to Quantum Computing Algorithms",
      details: "Published in Quantum Information Processing, 2024",
      link: "https://example.com/publication3"
    },
    // Add more publications as needed
  ];

  return (
    <PublicationsWrapper>
      <h1>Publications</h1>
      <PublicationGrid>
        {publicationsList.map((publication, index) => (
          <PublicationItem key={index}>
            <PublicationTitle>{publication.title}</PublicationTitle>
            <PublicationDetails>{publication.details}</PublicationDetails>
            <PublicationLink href={publication.link} target="_blank" rel="noopener noreferrer">
              Read More
            </PublicationLink>
          </PublicationItem>
        ))}
      </PublicationGrid>
    </PublicationsWrapper>
  );
};

export default Publications;