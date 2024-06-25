import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.25rem;
`;

const Skills = () => (
  <SkillsWrapper>
    <SkillCategory>
      <CategoryTitle>Programming Languages</CategoryTitle>
      <SkillList>
        <SkillItem>Java</SkillItem>
        <SkillItem>Python</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>C++</SkillItem>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <CategoryTitle>Web Development</CategoryTitle>
      <SkillList>
        <SkillItem>HTML</SkillItem>
        <SkillItem>CSS</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Node.js</SkillItem>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <CategoryTitle>Database Management</CategoryTitle>
      <SkillList>
        <SkillItem>SQL</SkillItem>
        <SkillItem>MongoDB</SkillItem>
      </SkillList>
    </SkillCategory>
    <SkillCategory>
      <CategoryTitle>Tools</CategoryTitle>
      <SkillList>
        <SkillItem>Git</SkillItem>
        <SkillItem>Docker</SkillItem>
        <SkillItem>Jenkins</SkillItem>
      </SkillList>
    </SkillCategory>
  </SkillsWrapper>
);

export default Skills;