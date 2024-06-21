import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

const SocialLinks = styled.div`
  margin-top: 1rem;
  
  a {
    color: ${({ theme }) => theme.headerText};
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Name>Jaime Hernández</Name>
      <Title>Computer Engineering Student</Title>
      <SocialLinks>
        <a href="https://github.com/nickhernm" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nickhernm" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </HeaderWrapper>
  );
}

export default Header;
