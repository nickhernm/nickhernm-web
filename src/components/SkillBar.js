import React from 'react';
import styled from 'styled-components';

const SkillBarWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SkillName = styled.p`
  margin-bottom: 0.5rem;
`;

const ProgressBarOuter = styled.div`
  background-color: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  height: 10px;
`;

const ProgressBarInner = styled.div`
  background: linear-gradient(to right, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.secondaryColor});
  border-radius: 10px;
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.5s ease-in-out;
`;

const SkillBar = ({ name, level }) => {
  return (
    <SkillBarWrapper>
      <SkillName>{name}</SkillName>
      <ProgressBarOuter>
        <ProgressBarInner progress={level} />
      </ProgressBarOuter>
    </SkillBarWrapper>
  );
};

export default SkillBar;