import React from 'react';
import styled from 'styled-components';

const LanguagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LanguageItem = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Language = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const Proficiency = styled.p`
  color: ${({ theme }) => theme.secondaryColor};
`;

const Languages = () => (
  <LanguagesWrapper>
    <LanguageItem>
      <Language>Spanish</Language>
      <Proficiency>Native</Proficiency>
    </LanguageItem>
    <LanguageItem>
      <Language>English</Language>
      <Proficiency>Fluent</Proficiency>
    </LanguageItem>
    <LanguageItem>
      <Language>Catalan</Language>
      <Proficiency>Intermediate</Proficiency>
    </LanguageItem>
    <LanguageItem>
      <Language>German</Language>
      <Proficiency>Intermediate</Proficiency>
    </LanguageItem>
  </LanguagesWrapper>
);

export default Languages;