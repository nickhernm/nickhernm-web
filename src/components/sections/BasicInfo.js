import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.textColor};
`;

const BasicInfo = () => (
  <InfoWrapper>
    <Label>Name:</Label>
    <Value>Jaime Hernández</Value>
    <Label>Email:</Label>
    <Value>ramajahede@gmail.com</Value>
    <Label>Phone:</Label>
    <Value>+34 633 33 05 54</Value>
    <Label>GitHub:</Label>
    <Value>nickhernm</Value>
    <Label>LinkedIn:</Label>
    <Value>nickhernm</Value>
    <Label>Summary:</Label>
    <Value>Computer Engineering student with experience as an administrative assistant and sales associate, looking for a job opportunity. Eager to apply the knowledge acquired in my degree and work experience, and to continue learning in a dynamic work environment.</Value>
  </InfoWrapper>
);

export default BasicInfo;