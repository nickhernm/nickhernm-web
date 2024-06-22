// src/components/sections/Languages.js

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

const Languages = () => (
  <Section>
    <Title>Languages</Title>
    <List>
      <ListItem><Highlight>Spanish</Highlight>: Native</ListItem>
      <ListItem><Highlight>English</Highlight>: Fluent</ListItem>
      <ListItem><Highlight>French</Highlight>: Intermediate</ListItem>
    </List>
  </Section>
);

export default Languages;
