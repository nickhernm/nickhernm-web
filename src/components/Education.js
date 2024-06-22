import React from 'react';
import styled from 'styled-components';

const EducationWrapper = styled.section`
  padding: 4rem 2rem;
`;

const EducationItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const EducationTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const EducationDetails = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Education = () => {
  const educationList = [
    {
      title: "Bachelor's in Computer Engineering",
      details: "University of Alicante, 2020 - 2024"
    },
    {
      title: "High School Diploma",
      details: "IES Jaime II, 2016 - 2020"
    }
  ];

  return (
    <EducationWrapper id="education">
      {educationList.map((education, index) => (
        <EducationItem key={index}>
          <EducationTitle>{education.title}</EducationTitle>
          <EducationDetails>{education.details}</EducationDetails>
        </EducationItem>
      ))}
    </EducationWrapper>
  );
};

export default Education;
