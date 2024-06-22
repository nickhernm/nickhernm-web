import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactItem = styled.div`
  margin-bottom: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.accentColor};
`;

const ContactDetails = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Contact = () => (
  <ContactWrapper id="contact">
    <ContactTitle>Contact Me</ContactTitle>
    <ContactItem>
      <ContactDetails>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></ContactDetails>
    </ContactItem>
    <ContactItem>
      <ContactDetails>Phone: <a href="tel:+1234567890">+1234567890</a></ContactDetails>
    </ContactItem>
  </ContactWrapper>
);

export default Contact;
