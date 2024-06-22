import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const Job = styled.div`
  margin: 1rem 0;
`;

const JobTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.accentColor};
`;

const Dates = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 0.9rem;
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

const Technologies = styled.p`
  font-style: italic;
`;

const WorkExperience = () => (
  <Section>
    <Title>Work Experience</Title>
    <Job>
      <JobTitle>Administrative Assistant</JobTitle>
      <Dates>September 2021 - October 2023</Dates>
      <Description>
        Auge Asesores S.L., Alicante, Spain
        <br />
        - Telephone and customer service.
        <br />
        - Financial administration.
        <br />
        - Verification of financial analysis and results.
        <br />
        - Documentation management.
      </Description>
      <Technologies>
        Technologies: Excel · Word · CRM · Systems
      </Technologies>
    </Job>
    <Job>
      <JobTitle>Sales Associate</JobTitle>
      <Dates>November 2022 - September 2023</Dates>
      <Description>
        Zara, Inditex, Alicante, Spain
        <br />
        - Product replenishment in the store.
        <br />
        - Cash register tasks and customer service.
        <br />
        - Organization, storage, and management of supplier orders.
        <br />
        - Window display preparation.
      </Description>
      <Technologies>
        Technologies: Excel · Point of Sale Systems
      </Technologies>
    </Job>
  </Section>
);

export default WorkExperience;
