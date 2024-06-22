import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const Degree = styled.div`
  margin: 1rem 0;
`;

const DegreeTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.accentColor};
`;

const Institution = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Dates = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

const Education = () => (
  <Section>
    <Title>Education</Title>
    <Degree>
      <DegreeTitle>Degree in Computer Engineering</DegreeTitle>
      <Institution>University of Alicante, Alicante, Spain</Institution>
    </Degree>
    <Degree>
      <DegreeTitle>Degree in Mathematics</DegreeTitle>
      <Institution>UNED, Spain</Institution>
    </Degree>
    <Degree>
      <DegreeTitle>Scientific Baccalaureate</DegreeTitle>
      <Institution>Inmaculada Jesuitas Alicante Concerted School, Alicante, Spain</Institution>
    </Degree>
  </Section>
);

export default Education;
