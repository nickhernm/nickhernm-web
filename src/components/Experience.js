// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  text-align: center;
  transition: all 0.3s ease;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .experience-item {
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceWrapper id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Administrative Assistant</h3>
        <p>Auge Asesores S.L., Alicante, Spain, September 2021 - October 2023</p>
        <p>
          - Telephone and customer service.<br />
          - Financial administration.<br />
          - Verification of financial analysis and results.<br />
          - Documentation management.
        </p>
      </div>
      <div className="experience-item">
        <h3>Sales Associate</h3>
        <p>Zara, Inditex, Alicante, Spain, November 2022 - September 2023</p>
        <p>
          - Product replenishment in the store.<br />
          - Cash register tasks and customer service.<br />
          - Organization, storage, and management of supplier orders.<br />
          - Window display preparation.
        </p>
      </div>
    </ExperienceWrapper>
  );
};

export default Experience;
