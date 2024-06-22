import React from 'react';
import styled from 'styled-components';

const LanguagesWrapper = styled.section`
  padding: 4rem 2rem;
`;

const LanguageItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1rem 0;
`;

const LanguageTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const LanguageDetails = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Languages = () => {
  const languagesList = [
    {
      language: "Spanish",
      proficiency: "Native"
    },
    {
      language: "English",
      proficiency: "Fluent"
    },
    {
      language: "French",
      proficiency: "Intermediate"
    }
  ];

  return (
    <LanguagesWrapper id="languages">
      {languagesList.map((language, index) => (
        <LanguageItem key={index}>
          <LanguageTitle>{language.language}</LanguageTitle>
          <LanguageDetails>{language.proficiency}</LanguageDetails>
        </LanguageItem>
      ))}
    </LanguagesWrapper>
  );
};

export default Languages;
