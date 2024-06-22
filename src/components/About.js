import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
  max-width: 600px;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-weight: bold;
`;

function About() {
  return (
    <AboutWrapper id="about">
      <ProfileImage src="https://avatars.githubusercontent.com/u/116463106?s=400&u=06556e7acc48d3ad3ef1d60eb1174a259afd1dc5&v=4" alt="Profile" />
      <Description>
        Hello, I'm <Highlight>Jaime Hernández</Highlight>, a passionate <Highlight>Computer Engineering Student</Highlight>.
        I love working on <Highlight>innovative projects</Highlight> and learning new technologies. In my free time, 
        I enjoy <Highlight>coding</Highlight>, <Highlight>reading</Highlight>, and exploring the world of <Highlight>software development</Highlight>.
      </Description>
    </AboutWrapper>
  );
}

export default About;
