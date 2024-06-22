import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  text-align: center;
  transition: all 0.3s ease;

  a {
    color: ${({ theme }) => theme.headerText};
    margin: 0 1rem;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>Connect with me on:</p>
    <a href="https://github.com/nickhernm" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/nickhernm" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <p>&copy; {new Date().getFullYear()} Jaime Hernández. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
