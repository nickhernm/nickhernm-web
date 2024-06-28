import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.accentColor};
    margin: 0.5rem auto 0;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accentColor};
  min-width: 40px;
  display: flex;
  justify-content: center;
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

const ContactDescription = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.secondaryColor};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }
    emailjs.sendForm('service_5ll30wr', 'template_l8loxhv', e.target)
      .then((result) => {
        console.log(result.text);
        setSuccess('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <ContactWrapper id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactDescription>
        Feel free to reach out to me through any of the following channels or use the form below. I'm always open to new opportunities and collaborations!
      </ContactDescription>
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
            <ContactLink href="https://twitter.com/nickhernmd" target="_blank" rel="noopener noreferrer">@nickhernm</ContactLink>
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
      <ContactForm onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          name="from_name"
        />
        <FormInput 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          name="from_email"
        />
        <FormInput 
          type="text" 
          placeholder="Subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          name="subject"
        />
        <FormTextarea 
          placeholder="Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          name="message"
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;