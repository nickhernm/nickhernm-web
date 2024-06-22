// src/components/sections/Interests.js

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

const Interests = () => (
  <Section>
    <Title>Interests</Title>
    <List>
      <ListItem><Highlight>Technology</Highlight>: AI, Machine Learning, Blockchain</ListItem>
      <ListItem><Highlight>Hobbies</Highlight>: Reading, Traveling, Sports</ListItem>
      <ListItem><Highlight>Culture</Highlight>: Learning about different cultures and languages</ListItem>
    </List>
  </Section>
);

export default Interests;
