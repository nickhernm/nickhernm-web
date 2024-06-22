// src/components/sections/Skills.js

import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const List = styled.ul`
  line-height: 1.6;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.textColor};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const Skills = () => (
  <Section>
    <Title>Skills</Title>
    <List>
      <ListItem><Highlight>Programming Languages</Highlight>: Java, Python, JavaScript, C++</ListItem>
      <ListItem><Highlight>Web Development</Highlight>: HTML, CSS, React, Node.js</ListItem>
      <ListItem><Highlight>Database Management</Highlight>: SQL, MongoDB</ListItem>
      <ListItem><Highlight>Tools</Highlight>: Git, Docker, Jenkins</ListItem>
    </List>
  </Section>
);

export default Skills;
