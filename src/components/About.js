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

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const About = () => (
  <AboutWrapper>
    <ProfileImage src="https://avatars.githubusercontent.com/u/116463106?s=400&u=06556e7acc48d3ad3ef1d60eb1174a259afd1dc5&v=4" alt="Jaime Hernández" />
    <h1>Jaime Hernández</h1>
    <Paragraph>
      Hello! I am a <Highlight>Computer Engineering Student</Highlight> passionate about
      <Highlight> technology</Highlight> and <Highlight>innovation</Highlight>. I enjoy working on
      <Highlight>software development</Highlight> projects and learning new
      <Highlight>programming languages</Highlight>. I am always eager to expand my knowledge and explore the latest advancements in the tech world.
    </Paragraph>
    <Paragraph>
      My goal is to make a positive impact in the field of <Highlight>technology</Highlight> through
      <Highlight>innovative solutions</Highlight>. I believe in leveraging technology to solve real-world problems and improve people's lives.
    </Paragraph>
    <Paragraph>
      Apart from technology, I am deeply interested in <Highlight>research</Highlight> and <Highlight>investigation</Highlight> across various domains. I have a passion for reading, whether for
      <Highlight>entertainment</Highlight> or to acquire new knowledge.
    </Paragraph>
    <Paragraph>
      I also prioritize staying healthy by engaging in various <Highlight>sports</Highlight> and maintaining a
      <Highlight>balanced lifestyle</Highlight>. Additionally, I love to travel and immerse myself in different
      <Highlight>cultures</Highlight>, which helps me gain new perspectives and ideas.
    </Paragraph>
    <Paragraph>
      I am enthusiastic about contributing to <Highlight>open-source projects</Highlight> and exploring
      <Highlight>artificial intelligence</Highlight>. These areas offer exciting opportunities to collaborate with other developers and make meaningful contributions to the tech community.
    </Paragraph>
    <Paragraph>
      In my free time, I enjoy experimenting with new technologies, building personal projects, and participating in hackathons. These activities not only enhance my skills but also allow me to connect with like-minded individuals.
    </Paragraph>
  </AboutWrapper>
);

export default About;
