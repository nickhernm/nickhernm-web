import React from 'react';
import styled from 'styled-components';

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EducationItem = styled.div`
  border-left: 2px solid ${({ theme }) => theme.accentColor};
  padding-left: 1rem;
`;

const Degree = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const Institution = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const DateRange = styled.p`
  font-style: italic;
`;

const Education = () => (
  <EducationWrapper>
    <EducationItem>
      <Degree>Degree in Computer Engineering</Degree>
      <Institution>University of Alicante, Alicante, Spain</Institution>
      <DateRange>2020 - Present</DateRange>
    </EducationItem>
    <EducationItem>
      <Degree>Degree in Mathematics</Degree>
      <Institution>UNED, Spain</Institution>
      <DateRange>2021 - Present</DateRange>
    </EducationItem>
    <EducationItem>
      <Degree>Scientific Baccalaureate</Degree>
      <Institution>Inmaculada Jesuitas Alicante Concerted School, Alicante, Spain</Institution>
      <DateRange>2018 - 2020</DateRange>
    </EducationItem>
  </EducationWrapper>
);

export default Education;