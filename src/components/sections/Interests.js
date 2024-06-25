import React from 'react';
import styled from 'styled-components';

const InterestsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InterestCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const InterestList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const InterestItem = styled.li`
  margin-bottom: 0.25rem;
`;

const Interests = () => (
  <InterestsWrapper>
    <InterestCategory>
      <CategoryTitle>Technology</CategoryTitle>
      <InterestList>
        <InterestItem>Artificial Intelligence</InterestItem>
        <InterestItem>Machine Learning</InterestItem>
        <InterestItem>Blockchain</InterestItem>
      </InterestList>
    </InterestCategory>
    <InterestCategory>
      <CategoryTitle>Hobbies</CategoryTitle>
      <InterestList>
        <InterestItem>Reading</InterestItem>
        <InterestItem>Traveling</InterestItem>
        <InterestItem>Sports</InterestItem>
      </InterestList>
    </InterestCategory>
    <InterestCategory>
      <CategoryTitle>Learning</CategoryTitle>
      <InterestList>
        <InterestItem>Languages</InterestItem>
        <InterestItem>Cultural Studies</InterestItem>
        <InterestItem>Personal Development</InterestItem>
      </InterestList>
    </InterestCategory>
  </InterestsWrapper>
);

export default Interests;