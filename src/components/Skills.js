import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
  padding: 2rem;
`;

const SkillBar = styled.div`
  background-color: ${({ theme }) => theme.skillBarBg};
  border-radius: 10px;
  height: 20px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  background-color: ${({ theme }) => theme.accentColor};
  height: 100%;
  width: ${props => props.progress}%;
  transition: width 1s ease-in-out;
`;

const SkillName = styled.span`
  display: inline-block;
  width: 120px;
  font-weight: bold;
`;

const skills = [
  { name: "C++", level: 90 },
  { name: "Java", level: 90 },
  { name: "Python", level: 90 },
  { name: "PHP", level: 70 },
  { name: "JavaScript", level: 70 },
];

function Skills() {
  return (
    <SkillsWrapper>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <SkillName>{skill.name}</SkillName>
          <SkillBar>
            <SkillProgress progress={skill.level} />
          </SkillBar>
        </div>
      ))}
    </SkillsWrapper>
  );
}

export default Skills;