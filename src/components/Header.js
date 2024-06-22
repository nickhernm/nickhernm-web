import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Name>Jaime Hernández</Name>
    <Title>Computer Engineering Student</Title>
  </HeaderWrapper>
);

export default Header;
