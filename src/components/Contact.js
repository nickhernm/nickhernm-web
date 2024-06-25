import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Contact = () => (
  <ContactWrapper id="contact">
    <ContactTitle>Contact Me</ContactTitle>
    <ContactGrid>
      <ContactItem>
        <ContactIcon>
          <FaEnvelope />
        </ContactIcon>
        <ContactText>
          <ContactLink href="mailto:ramajahde@gmail.com">ramajahde@gmail.com</ContactLink>
        </ContactText>
      </ContactItem>
      <ContactItem>
        <ContactIcon>
          <FaPhone />
        </ContactIcon>
        <ContactText>
          <ContactLink href="tel:+34633330554">+34 633 33 05 54</ContactLink>
        </ContactText>
      </ContactItem>
      <ContactItem>
        <ContactIcon>
          <FaTwitter />
        </ContactIcon>
        <ContactText>
          <ContactLink href="https://twitter.com/nickhernm" target="_blank" rel="noopener noreferrer">@nickhernm</ContactLink>
        </ContactText>
      </ContactItem>
      <ContactItem>
        <ContactIcon>
          <FaInstagram />
        </ContactIcon>
        <ContactText>
          <ContactLink href="https://instagram.com/nickhernm" target="_blank" rel="noopener noreferrer">@nickhernm</ContactLink>
        </ContactText>
      </ContactItem>
      <ContactItem>
        <ContactIcon>
          <FaGithub />
        </ContactIcon>
        <ContactText>
          <ContactLink href="https://github.com/nickhernm" target="_blank" rel="noopener noreferrer">nickhernm</ContactLink>
        </ContactText>
      </ContactItem>
      <ContactItem>
        <ContactIcon>
          <FaLinkedin />
        </ContactIcon>
        <ContactText>
          <ContactLink href="https://www.linkedin.com/in/nickhernm" target="_blank" rel="noopener noreferrer">nickhernm</ContactLink>
        </ContactText>
      </ContactItem>
    </ContactGrid>
  </ContactWrapper>
);

export default Contact;