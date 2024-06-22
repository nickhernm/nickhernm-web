// src/components/Experience.js

import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  background: ${({ theme }) => theme.backgroundAlt};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ExperienceTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
`;

const ExperienceDate = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
`;

const ExperienceDescription = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

const Experience = () => (
  <ExperienceWrapper>
    <ExperienceItem>
      <ExperienceTitle>Software Engineer</ExperienceTitle>
      <ExperienceDate>June 2020 - Present</ExperienceDate>
      <ExperienceDescription>
        Developed and maintained web applications using JavaScript, React, and Node.js.
      </ExperienceDescription>
    </ExperienceItem>
    {/* Agrega más experiencias aquí */}
  </ExperienceWrapper>
);

export default Experience;
