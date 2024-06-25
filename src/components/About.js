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
  text-align: left;
`;

const About = () => (
  <AboutWrapper>
    <ProfileImage src="https://avatars.githubusercontent.com/u/116463106?s=400&u=06556e7acc48d3ad3ef1d60eb1174a259afd1dc5&v=4" alt="Jaime Hernández" />
    <h1>Jaime Hernández</h1>
    <Paragraph>
      I am a passionate <Highlight>Computer Engineering Student</Highlight> with a strong foundation in <Highlight>mathematics</Highlight> and a keen interest in <Highlight>cutting-edge technologies</Highlight>. My academic journey has equipped me with a robust understanding of <Highlight>software development</Highlight>, <Highlight>algorithms</Highlight>, and <Highlight>data structures</Highlight>. I am constantly seeking to expand my knowledge and skills in areas such as <Highlight>artificial intelligence</Highlight>, <Highlight>machine learning</Highlight>, and <Highlight>blockchain technology</Highlight>.
    </Paragraph>
    <Paragraph>
      My experience as an <Highlight>administrative assistant</Highlight> has honed my organizational and analytical skills, while my role as a <Highlight>sales associate</Highlight> has enhanced my ability to communicate effectively and work in fast-paced environments. These experiences, combined with my technical expertise, have prepared me to tackle complex challenges in the tech industry.
    </Paragraph>
    <Paragraph>
      I am deeply committed to <Highlight>continuous learning</Highlight> and staying abreast of the latest developments in the field of computer science. My goal is to leverage my skills and knowledge to contribute to <Highlight>innovative projects</Highlight> that push the boundaries of technology and make a positive impact on society.
    </Paragraph>
    <Paragraph>
      Outside of my professional pursuits, I am an avid reader and enjoy exploring diverse topics ranging from <Highlight>scientific research</Highlight> to <Highlight>philosophy</Highlight>. I also maintain an active lifestyle through sports and believe in the importance of a <Highlight>healthy work-life balance</Highlight>. My passion for travel has broadened my perspective and enhanced my ability to adapt to diverse environments and collaborate with people from various cultural backgrounds.
    </Paragraph>
  </AboutWrapper>
);

export default About;