import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${props => props.error ? 'red' : 'green'};
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          navigate('/');  // Redirect to home page after successful login
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
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
      {message && <Message error={error}>{message}</Message>}
    </Form>
  );
};

export default Login;