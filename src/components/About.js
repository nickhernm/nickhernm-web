import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 2rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const About = () => (
  <AboutWrapper>
    <ProfileImage src="https://avatars.githubusercontent.com/u/116463106?s=400&u=06556e7acc48d3ad3ef1d60eb1174a259afd1dc5&v=4" alt="Jaime Hernández" />
    <h1>Jaime Hernández</h1>
    <p>
      Hello! I am a <Highlight>Computer Engineering Student</Highlight> passionate about
      <Highlight> technology</Highlight> and <Highlight>innovation</Highlight>.
    </p>
    <p>
      I enjoy working on <Highlight>software development</Highlight> projects and learning new
      <Highlight>programming languages</Highlight>.
    </p>
    <p>
      In my free time, I like to <Highlight>contribute to open-source projects</Highlight> and explore
      <Highlight>artificial intelligence</Highlight>.
    </p>
    <p>
      My goal is to make a positive impact in the field of <Highlight>technology</Highlight> through
      <Highlight>innovative solutions</Highlight>.
    </p>
    <p>
      Apart from technology, I am deeply interested in <Highlight>research</Highlight> and
      <Highlight>investigation</Highlight> across various domains. I have a passion for reading, whether for
      <Highlight>entertainment</Highlight> or to acquire new knowledge.
    </p>
    <p>
      I also prioritize staying healthy by engaging in various <Highlight>sports</Highlight> and maintaining a
      <Highlight>balanced lifestyle</Highlight>. Additionally, I love to <Highlight>travel</Highlight> and immerse myself in
      different <Highlight>cultures</Highlight>.
    </p>
  </AboutWrapper>
);

export default About;
