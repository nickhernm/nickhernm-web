import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ExperienceItem = styled.div`
  border-left: 2px solid ${({ theme }) => theme.accentColor};
  padding-left: 1rem;
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const DateRange = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Description = styled.ul`
  padding-left: 1.5rem;
`;

const WorkExperience = () => (
  <ExperienceWrapper>
    <ExperienceItem>
      <JobTitle>Administrative Assistant</JobTitle>
      <Company>Auge Asesores S.L., Alicante, Spain</Company>
      <DateRange>September 2021 - October 2023</DateRange>
      <Description>
        <li>Telephone and customer service.</li>
        <li>Financial administration.</li>
        <li>Verification of financial analysis and results.</li>
        <li>Documentation management.</li>
      </Description>
    </ExperienceItem>
    <ExperienceItem>
      <JobTitle>Sales Associate</JobTitle>
      <Company>Zara, Inditex, Alicante, Spain</Company>
      <DateRange>November 2022 - September 2023</DateRange>
      <Description>
        <li>Product replenishment in the store.</li>
        <li>Cash register tasks and customer service.</li>
        <li>Organization, storage, and management of supplier orders.</li>
        <li>Window display preparation.</li>
      </Description>
    </ExperienceItem>
  </ExperienceWrapper>
);

export default WorkExperience;