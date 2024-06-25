import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-right: 2.5rem;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${props => props.error ? 'red' : 'green'};
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
      <h2>Login</h2>
      <InputWrapper>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
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
    </Form>
  );
};

export default Login;