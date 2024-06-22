import React from 'react';
import styled from 'styled-components';

const PublicationsWrapper = styled.section`
  padding: 4rem 2rem;
`;

const PublicationItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const PublicationTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const PublicationDetails = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Publications = () => {
  const publicationsList = [
    {
      title: "Publication 1",
      details: "Details about the first publication."
    },
    {
      title: "Publication 2",
      details: "Details about the second publication."
    }
  ];

  return (
    <PublicationsWrapper id="publications">
      {publicationsList.map((publication, index) => (
        <PublicationItem key={index}>
          <PublicationTitle>{publication.title}</PublicationTitle>
          <PublicationDetails>{publication.details}</PublicationDetails>
        </PublicationItem>
      ))}
    </PublicationsWrapper>
  );
};

export default Publications;
