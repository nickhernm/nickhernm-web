import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  text-align: center;
  transition: all 0.3s ease;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.headerText};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialIcons>
      <SocialLink href="https://github.com/nickhernm" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/nickhernm" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://twitter.com/nickhernm" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialLink>
    </SocialIcons>
    <ContactInfo>
      <ContactItem>
        <FaEnvelope />
        ramajahde@gmail.com
      </ContactItem>
      <ContactItem>
        <FaPhone />
        +34 633 33 05 54
      </ContactItem>
    </ContactInfo>
    <Copyright>&copy; {new Date().getFullYear()} Jaime Hernández. All rights reserved.</Copyright>
  </FooterWrapper>
);

export default Footer;