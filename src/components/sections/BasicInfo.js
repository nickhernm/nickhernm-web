import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
`;

const Info = styled.div`
  margin: 1rem 0;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const BasicInfo = () => (
  <Section>
    <Title>Basics</Title>
    <Info>
      <Label>Name:</Label> Jaime Hernández
    </Info>
    <Info>
      <Label>Email:</Label> <Highlight>ramajahede@gmail.com</Highlight>
    </Info>
    <Info>
      <Label>Phone:</Label> <Highlight>+34 633 33 05 54</Highlight>
    </Info>
    <Info>
      <Label>GitHub:</Label> <Highlight>nickhernm</Highlight>
    </Info>
    <Info>
      <Label>LinkedIn:</Label> <Highlight>nickhernm</Highlight>
    </Info>
    <Info>
      <Label>Summary:</Label> Computer Engineering student with experience as an administrative assistant and sales associate, looking for a job opportunity. Eager to apply the knowledge acquired in my degree and work experience, and to continue learning in a dynamic work environment.
    </Info>
  </Section>
);

export default BasicInfo;
