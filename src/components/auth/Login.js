import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accentColor};
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.secondaryColor};
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => props.error ? 'red' : 'green'};
`;

const RegisterLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);
    try {
      const success = await login(email, password);
      if (success) {
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(true);
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError(true);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
      <InputWrapper>
        <InputIcon><FaEnvelope /></InputIcon>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <InputIcon><FaLock /></InputIcon>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PasswordToggle type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordToggle>
      </InputWrapper>
      <Button type="submit">Login</Button>
      {message && <Message error={error}>{message}</Message>}
      <RegisterLink to="/register">Don't have an account? Register here</RegisterLink>
    </Form>
  );
};

export default Login;